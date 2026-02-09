import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Check, Camera, Shield, Lock, PhoneCall, Wifi, Wrench, HelpCircle, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabaseClient } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

// Types
type ServiceType = 'camera' | 'alarm' | 'access' | 'intercom' | 'network' | 'maintenance' | 'other';
type RequestType = 'quote' | 'intervention';

// Configuration des couleurs par service
const serviceColors: Record<ServiceType | string, { bg: string; text: string; border: string }> = {
  camera: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200 hover:border-blue-400" },
  alarm: { bg: "bg-red-500", text: "text-red-600", border: "border-red-200 hover:border-red-400" },
  access: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-200 hover:border-emerald-400" },
  intercom: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200 hover:border-purple-400" },
  network: { bg: "bg-cyan-500", text: "text-cyan-600", border: "border-cyan-200 hover:border-cyan-400" },
  maintenance: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200 hover:border-orange-400" },
  other: { bg: "bg-gray-500", text: "text-gray-600", border: "border-gray-200 hover:border-gray-400" },
  camera_fail: { bg: "bg-blue-500", text: "text-blue-600", border: "border-blue-200 hover:border-blue-400" },
  alarm_fail: { bg: "bg-red-500", text: "text-red-600", border: "border-red-200 hover:border-red-400" },
  intercom_fail: { bg: "bg-purple-500", text: "text-purple-600", border: "border-purple-200 hover:border-purple-400" },
  access_fail: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-200 hover:border-emerald-400" },
  network_fail: { bg: "bg-cyan-500", text: "text-cyan-600", border: "border-cyan-200 hover:border-cyan-400" },
  material_replace: { bg: "bg-orange-500", text: "text-orange-600", border: "border-orange-200 hover:border-orange-400" },
  other_fail: { bg: "bg-gray-500", text: "text-gray-600", border: "border-gray-200 hover:border-gray-400" },
};

const serviceOptions: { id: ServiceType; label: string; icon: typeof Camera }[] = [
  { id: 'camera', label: 'Installation de caméras', icon: Camera },
  { id: 'alarm', label: "Installation d'alarme", icon: Shield },
  { id: 'access', label: "Contrôle d'accès", icon: Lock },
  { id: 'intercom', label: 'Interphone / Visiophone', icon: PhoneCall },
  { id: 'network', label: 'Installation réseau & Wi-Fi', icon: Wifi },
  { id: 'maintenance', label: 'Maintenance / Dépannage', icon: Wrench },
  { id: 'other', label: 'Autre demande', icon: HelpCircle },
];

const interventionOptions: { id: string; label: string; icon: typeof Camera }[] = [
  { id: 'camera_fail', label: 'Caméra en panne', icon: Camera },
  { id: 'alarm_fail', label: 'Alarme qui bip / défaut', icon: Shield },
  { id: 'intercom_fail', label: 'Interphone ne fonctionne plus', icon: PhoneCall },
  { id: 'access_fail', label: "Problème contrôle d'accès", icon: Lock },
  { id: 'network_fail', label: 'Panne réseau / Wi-Fi', icon: Wifi },
  { id: 'material_replace', label: 'Remplacement matériel', icon: Wrench },
  { id: 'other_fail', label: 'Autre problème', icon: HelpCircle },
];

// Composant de bouton d'option avec icônes colorées style moderne
interface OptionButtonProps {
  id: string;
  icon: typeof Camera;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionButton = ({ id, icon: Icon, label, isSelected, onClick }: OptionButtonProps) => {
  const colors = serviceColors[id] || serviceColors.other;
  
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex flex-col items-center justify-center p-4 text-center border-2 rounded-2xl transition-all duration-300 bg-card shadow-sm w-full h-full min-h-[140px]",
        isSelected 
          ? `${colors.border.split(' ')[0]} ring-2 ring-offset-2 shadow-lg` 
          : `border-border/50 hover:shadow-md ${colors.border}`
      )}
    >
      <motion.div
        animate={isSelected ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 0.3 }}
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all flex-shrink-0",
          colors.bg
        )}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </motion.div>
      <span className={cn(
        "font-semibold text-xs leading-tight tracking-tight text-center",
        isSelected ? colors.text : "text-foreground"
      )}>
        {label}
      </span>
    </motion.button>
  );
};

const QuoteFunnelSimple = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType>('quote');
  const [selectedService, setSelectedService] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [switchHighlight, setSwitchHighlight] = useState(false);
  const quoteButtonRef = useRef<HTMLButtonElement>(null);
  const interventionButtonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    timeline: '',
    budget: '',
    description: '',
    urgency: '',
    message: '',
  });

  // Écoute les clics sur data-quote-btn et data-intervention-btn depuis useSmoothScroll
  useEffect(() => {
    const handleQuoteClick = () => {
      setRequestType('quote');
      setStep(1);
      setSwitchHighlight(true);
      setTimeout(() => setSwitchHighlight(false), 1500);
    };
    
    const handleInterventionClick = () => {
      setRequestType('intervention');
      setStep(1);
      setSwitchHighlight(true);
      setTimeout(() => setSwitchHighlight(false), 1500);
    };

    const quoteBtn = document.querySelector('[data-quote-btn]');
    const interventionBtn = document.querySelector('[data-intervention-btn]');

    quoteBtn?.addEventListener('external-click', handleQuoteClick);
    interventionBtn?.addEventListener('external-click', handleInterventionClick);

    return () => {
      quoteBtn?.removeEventListener('external-click', handleQuoteClick);
      interventionBtn?.removeEventListener('external-click', handleInterventionClick);
    };
  }, []);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Validation simple
      if (!formData.name || !formData.phone || !formData.email || !formData.address) {
        toast({
          title: "Erreur",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Préparer le message détaillé
      let detailedMessage = `Type de demande: ${requestType === 'quote' ? 'Devis' : 'Intervention'}\n\n`;
      
      if (requestType === 'quote') {
        detailedMessage += `Service demandé: ${serviceOptions.find(s => s.id === selectedService)?.label || selectedService}\n`;
        detailedMessage += `Période souhaitée: ${formData.timeline}\n`;
        if (formData.budget) detailedMessage += `Budget estimé: ${formData.budget}\n`;
        if (formData.description) detailedMessage += `\nDescription du projet:\n${formData.description}\n`;
      } else {
        detailedMessage += `Type de problème: ${interventionOptions.find(o => o.id === selectedProblem)?.label || selectedProblem}\n`;
        detailedMessage += `Urgence: ${formData.urgency}\n`;
        detailedMessage += `\nDescription du problème:\n${formData.description}\n`;
      }
      
      detailedMessage += `\nAdresse: ${formData.address}`;
      if (formData.message) detailedMessage += `\n\nMessage supplémentaire:\n${formData.message}`;

      // Envoi vers Formspree
      const response = await fetch('https://formspree.io/f/mwpzrqyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: detailedMessage,
          request_type: requestType === 'quote' ? 'Devis' : 'Intervention',
          _subject: `Nouvelle demande ${requestType === 'quote' ? 'Devis' : 'Intervention'} - HDConnect`,
        }),
      });

      // 2. Stockage dans Supabase (Panel Admin)
      const { error: supabaseError } = await supabaseClient
        .from('customer_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
           request_type: requestType === 'intervention' ? 'emergency' : 'quote',
          message: detailedMessage,
          status: 'new'
        }]);

      if (supabaseError) {
        console.error("Erreur stockage Supabase:", supabaseError);
      }

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire.');
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous recontacterons rapidement. Votre demande a été enregistrée.",
      });

      // Réinitialiser
      setTimeout(() => {
        setStep(1);
        setSelectedService('');
        setSelectedProblem('');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          timeline: '',
          budget: '',
          description: '',
          urgency: '',
          message: '',
        });
      }, 1000);

    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur s'est produite lors de l'envoi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants pour les transitions fluides
  const stepVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 60 : -60,
      scale: 0.95,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -60 : 60,
      scale: 0.95,
      transition: {
        duration: 0.25,
      },
    }),
  };

  const [direction, setDirection] = useState(1);

  const handleNextStep = () => {
    setDirection(1);
    nextStep();
  };

  const handlePrevStep = () => {
    setDirection(-1);
    prevStep();
  };

  const renderStep = () => {
    // Étape 1 - Sélection du service (Devis) ou Type de problème (Intervention)
    if (step === 1) {
      if (requestType === 'quote') {
        return (
          <motion.div 
            key="step1-quote"
            custom={direction}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {serviceOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.06, type: "spring", stiffness: 400, damping: 25 }}
              >
                <OptionButton
                  id={option.id}
                  icon={option.icon}
                  label={option.label}
                  isSelected={selectedService === option.id}
                  onClick={() => {
                    setSelectedService(option.id);
                    setDirection(1);
                    nextStep();
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        );
      } else {
        return (
          <motion.div 
            key="step1-intervention"
            custom={direction}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {interventionOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.06, type: "spring", stiffness: 400, damping: 25 }}
              >
                <OptionButton
                  id={option.id}
                  icon={option.icon}
                  label={option.label}
                  isSelected={selectedProblem === option.id}
                  onClick={() => {
                    setSelectedProblem(option.id);
                    setDirection(1);
                    nextStep();
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        );
      }
    }

    // Étape 2 - Détails du projet (Devis) ou Détails du problème (Intervention)
    if (step === 2) {
      if (requestType === 'quote') {
        return (
          <motion.div 
            key="step2-quote"
            custom={direction}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-center md:text-left">Détails de votre projet</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium">Période souhaitée *</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                >
                  <option value="">Sélectionner...</option>
                  <option value="urgent">Urgent (Moins de 1 mois)</option>
                  <option value="court">Court terme (1 à 3 mois)</option>
                  <option value="moyen">Moyen terme (3 à 6 mois)</option>
                  <option value="long">Long terme (Plus de 6 mois)</option>
                </select>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium">Budget estimé (Optionnel)</label>
                <Input
                  type="text"
                  placeholder="Ex: 5000€ - 10000€"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="transition-all focus:ring-2 focus:ring-primary/50"
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium">Description de votre besoin</label>
              <Textarea
                placeholder="Décrivez brièvement votre projet..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex justify-between pt-4"
            >
              <Button type="button" variant="outline" onClick={handlePrevStep} className="btn-micro-interaction">
                <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
              </Button>
              <Button 
                type="button" 
                onClick={() => formData.timeline ? handleNextStep() : toast({ title: "Veuillez sélectionner une période", variant: "destructive" })}
                className="btn-micro-interaction"
              >
                Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        );
      } else {
        return (
          <motion.div 
            key="step2-intervention"
            custom={direction}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-center md:text-left">Détails du problème</h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium">Description détaillée du problème *</label>
              <Textarea
                placeholder="Ex: La caméra n°3 ne s'allume plus depuis hier..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium">Urgence de l'intervention *</label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary"
                value={formData.urgency}
                onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
              >
                <option value="">Sélectionner...</option>
                <option value="critique">Critique (Intervention immédiate)</option>
                <option value="haute">Haute (Sous 48h)</option>
                <option value="normale">Normale (Sous 1 semaine)</option>
              </select>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between pt-4"
            >
              <Button type="button" variant="outline" onClick={handlePrevStep} className="btn-micro-interaction">
                <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
              </Button>
              <Button 
                type="button" 
                onClick={() => (formData.description && formData.urgency) ? handleNextStep() : toast({ title: "Veuillez remplir tous les champs requis", variant: "destructive" })}
                className="btn-micro-interaction"
              >
                Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        );
      }
    }

    // Étape 3 - Informations Client
    if (step === 3) {
      return (
        <motion.div 
          key="step3"
          custom={direction}
          variants={stepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-center md:text-left">Vos coordonnées</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium">Nom complet *</label>
              <Input
                placeholder="Votre nom et prénom"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium">Téléphone *</label>
              <Input
                placeholder="Ex: 06 12 34 56 78"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="transition-all focus:ring-2 focus:ring-primary/50"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <label className="text-sm font-medium">Email *</label>
            <Input
              type="email"
              placeholder="votre.email@exemple.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="transition-all focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="space-y-2"
          >
            <label className="text-sm font-medium">Adresse (Ville/CP) *</label>
            <Input
              placeholder="Ex: Paris, 75001"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              className="transition-all focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <label className="text-sm font-medium">Message (Optionnel)</label>
            <Textarea
              placeholder="Des informations supplémentaires ?"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="transition-all focus:ring-2 focus:ring-primary/50"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex justify-between pt-4"
          >
            <Button type="button" variant="outline" onClick={handlePrevStep} className="btn-micro-interaction">
              <ChevronLeft className="w-4 h-4 mr-2" /> Précédent
            </Button>
            <Button 
              type="button" 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="btn-micro-interaction bg-gradient-to-r from-primary to-accent hover:shadow-lg"
            >
              <Check className="w-4 h-4 mr-2" /> 
              {isSubmitting ? "Envoi..." : "Valider ma demande"}
            </Button>
          </motion.div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <section id="quote" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Devis Gratuit en 2 minutes</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Obtenez votre <span className="text-primary">devis personnalisé</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Répondez à quelques questions pour recevoir une estimation adaptée à vos besoins.
          </motion.p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
          {/* Gradient top bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          <CardHeader className="pb-6 pt-8">
            {/* Request Type Selector with enhanced animations */}
            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-2 rounded-xl transition-all duration-500",
              switchHighlight && "ring-4 ring-primary/50 bg-primary/5"
            )}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  ref={quoteButtonRef}
                  data-quote-btn
                  size="lg"
                  variant={requestType === 'quote' ? 'default' : 'outline'}
                  onClick={() => { setRequestType('quote'); setStep(1); }}
                  className={cn(
                    "w-full sm:w-auto text-sm sm:text-base px-6 h-12 transition-all duration-300 btn-micro-interaction",
                    requestType === 'quote' 
                      ? 'bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl scale-105' 
                      : 'hover:border-primary/50'
                  )}
                >
                  📋 Demande de Devis
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  ref={interventionButtonRef}
                  data-intervention-btn
                  size="lg"
                  variant={requestType === 'intervention' ? 'default' : 'outline'}
                  onClick={() => { setRequestType('intervention'); setStep(1); }}
                  className={cn(
                    "w-full sm:w-auto text-sm sm:text-base px-6 h-12 transition-all duration-300 btn-micro-interaction",
                    requestType === 'intervention' 
                      ? 'bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-xl scale-105' 
                      : 'hover:border-primary/50'
                  )}
                >
                  🔧 Demande d'Intervention
                </Button>
              </motion.div>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <motion.div 
                    animate={{
                      scale: step === s ? 1.1 : 1,
                      backgroundColor: step >= s ? 'hsl(var(--primary))' : 'hsl(var(--muted))'
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                      step >= s ? "text-primary-foreground shadow-lg" : "text-muted-foreground"
                    )}
                  >
                    {step > s ? <Check className="w-5 h-5" /> : s}
                  </motion.div>
                  {s < 3 && (
                    <motion.div 
                      animate={{ backgroundColor: step > s ? 'hsl(var(--primary))' : 'hsl(var(--muted))' }}
                      className="w-12 h-1 mx-1 rounded-full transition-colors duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </CardHeader>

          <CardContent className="pt-2 pb-8 px-6 md:px-10">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteFunnelSimple;
