import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ChevronLeft, ChevronRight, Check, Camera, Shield, Lock, PhoneCall, Wifi, Wrench, HelpCircle, AlertTriangle } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabaseClient } from "@/lib/supabase";

import { z } from "zod";
import { cn } from "@/lib/utils";

// --- 1. Définition des types et schémas ---

type ServiceType = 'camera' | 'alarm' | 'access' | 'intercom' | 'network' | 'maintenance' | 'other';
type RequestType = 'quote' | 'intervention';

const serviceOptions: { id: ServiceType; label: string; icon: React.ElementType }[] = [
  { id: 'camera', label: 'Installation de caméras', icon: Camera },
  { id: 'alarm', label: 'Installation d’alarme', icon: Shield },
  { id: 'access', label: 'Contrôle d’accès', icon: Lock },
  { id: 'intercom', label: 'Interphone / Visiophone', icon: PhoneCall },
  { id: 'network', label: 'Installation réseau & Wi-Fi', icon: Wifi },
  { id: 'maintenance', label: 'Maintenance / Dépannage', icon: Wrench },
  { id: 'other', label: 'Autre demande', icon: HelpCircle },
];

const interventionOptions: { id: string; label: string; icon: React.ElementType }[] = [
  { id: 'camera_fail', label: 'Caméra en panne', icon: Camera },
  { id: 'alarm_fail', label: 'Alarme qui bip / défaut', icon: Shield },
  { id: 'intercom_fail', label: 'Interphone ne fonctionne plus', icon: PhoneCall },
  { id: 'access_fail', label: 'Problème contrôle d’accès', icon: Lock },
  { id: 'network_fail', label: 'Panne réseau / Wi-Fi', icon: Wifi },
  { id: 'material_replace', label: 'Remplacement matériel', icon: Wrench },
  { id: 'other_fail', label: 'Autre problème', icon: HelpCircle },
];

const clientInfoSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne doit pas dépasser 100 caractères"),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20, "Le téléphone ne doit pas dépasser 20 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email ne doit pas dépasser 255 caractères"),
  address: z.string().trim().min(1, "L'adresse est requise").max(255, "L'adresse ne doit pas dépasser 255 caractères"),
  timeline: z.string().min(1, "La période souhaitée est requise"),
  budget: z.string().optional(),
  message: z.string().optional(),
});

// Schéma pour les données spécifiques au devis
const quoteDataSchema = z.object({
  service: z.string().min(1, "Veuillez sélectionner un service"),
  // Champs conditionnels (simplifiés pour l'exemple, à étendre si nécessaire)
  details: z.record(z.string(), z.string()).optional(),
});

// Schéma pour les données spécifiques à l'intervention
const interventionDataSchema = z.object({
  problemType: z.string().min(1, "Veuillez sélectionner un type de problème"),
  description: z.string().min(10, "Veuillez décrire le problème (min 10 caractères)"),
  workedBefore: z.string().min(1, "Veuillez répondre"),
  locationType: z.string().min(1, "Veuillez spécifier le lieu"),
  urgency: z.string().min(1, "Veuillez spécifier l'urgence"),
});

// Schéma global
const funnelSchema = z.object({
  requestType: z.literal('quote').or(z.literal('intervention')),
  clientInfo: clientInfoSchema.partial(), // Partial pour l'étape 3
  quoteData: quoteDataSchema.partial(),
  interventionData: interventionDataSchema.partial(),
});

type FunnelData = z.infer<typeof funnelSchema>;

// --- 2. Composant de sélection d'option (bouton) ---

interface OptionButtonProps {
  icon: React.ElementType;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ icon: Icon, label, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center p-4 text-center border-2 rounded-lg transition-all duration-200",
      "hover:border-primary hover:shadow-md",
      isSelected ? "border-primary bg-primary/10 shadow-lg" : "border-border bg-card"
    )}
  >
    <Icon className="w-8 h-8 mb-2 text-primary" />
    <span className="font-medium text-sm">{label}</span>
  </button>
);

// --- 3. Composant principal du Funnel ---

const QuoteFunnel = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<RequestType>('quote');
  const [formData, setFormData] = useState<FunnelData>({
    requestType: 'quote',
    clientInfo: {},
    quoteData: {},
    interventionData: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (path: keyof FunnelData, data: any) => {
    setFormData(prev => {
      const previousValue = prev[path];
      return {
        ...prev,
        [path]: typeof previousValue === 'object' && previousValue !== null
          ? { ...previousValue, ...data }
          : data
      };
    });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Définition des étapes conditionnelles
  const steps = useMemo(() => {
    if (requestType === 'quote') {
      return [
        { id: 1, title: "Service souhaité", component: Step1_QuoteService },
        { id: 2, title: "Détails du projet", component: Step2_QuoteDetails },
        { id: 3, title: "Vos coordonnées", component: Step3_ClientInfo },
        { id: 4, title: "Résumé & Validation", component: Step4_Summary },
      ];
    } else { // intervention
      return [
        { id: 1, title: "Type de problème", component: Step1_InterventionType },
        { id: 2, title: "Détails du problème", component: Step2_InterventionDetails },
        { id: 3, title: "Vos coordonnées", component: Step3_ClientInfo },
        { id: 4, title: "Résumé & Validation", component: Step4_Summary },
      ];
    }
  }, [requestType]);

  const currentStep = steps[step - 1];
  const StepComponent = currentStep?.component;

  // --- Logique de soumission (Formspree + Stockage Supabase) ---
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const finalData = funnelSchema.parse(formData);
      
      // 1. Envoi via Formspree (Notification Email)
      const response = await fetch('https://formspree.io/f/mwpzrqyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      // 2. Stockage dans Supabase (Panel Admin)
      const { error: supabaseError } = await supabaseClient
        .from('customer_requests')
        .insert([{
          name: finalData.clientInfo.name,
          email: finalData.clientInfo.email,
          phone: finalData.clientInfo.phone,
           request_type: finalData.requestType === 'intervention' ? 'emergency' : 'quote',
          message: JSON.stringify({
            address: finalData.clientInfo.address,
            timeline: finalData.clientInfo.timeline,
            budget: finalData.clientInfo.budget,
            quoteData: finalData.quoteData,
            interventionData: finalData.interventionData,
            message: finalData.clientInfo.message
          }),
          status: 'new'
        }]);

      if (supabaseError) {
        console.error("Erreur stockage Supabase:", supabaseError);
      }

      if (!response.ok) {
        throw new Error("L'envoi de l'e-mail a échoué.");
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous avons bien reçu votre demande. Elle a été enregistrée et nous vous répondrons rapidement.",
      });
      
      // Réinitialiser le formulaire
      setTimeout(() => {
        setStep(1);
        setFormData({
          requestType: 'quote',
          clientInfo: {},
          quoteData: {},
          interventionData: {},
        });
      }, 1000);

    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast({
        title: "Erreur de soumission",
        description: error instanceof Error ? error.message : "Une erreur s'est produite lors de l'envoi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Composants d'étapes (simplifiés pour l'implémentation initiale) ---

  // Étape 1 - Sélection du type de demande (Devis ou Intervention)
  const Step1_RequestType = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <OptionButton
        icon={Wrench}
        label="Demande d'Intervention"
        isSelected={requestType === 'intervention'}
        onClick={() => {
          setRequestType('intervention');
          updateFormData('requestType', 'intervention');
          nextStep();
        }}
      />
      <OptionButton
        icon={Camera}
        label="Demande de Devis"
        isSelected={requestType === 'quote'}
        onClick={() => {
          setRequestType('quote');
          updateFormData('requestType', 'quote');
          nextStep();
        }}
      />
    </div>
  );

  // Étape 1 - Sélection du service (Devis)
  const Step1_QuoteService = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {serviceOptions.map(option => (
        <OptionButton
          key={option.id}
          icon={option.icon}
          label={option.label}
          isSelected={formData.quoteData.service === option.id}
          onClick={() => {
            updateFormData('quoteData', { service: option.id });
            nextStep();
          }}
        />
      ))}
    </div>
  );

  // Étape 2 - Détails du projet (Devis)
  const Step2_QuoteDetails = () => {
    const [details, setDetails] = useState(formData.quoteData.details || {});
    const [timeline, setTimeline] = useState(formData.clientInfo.timeline || '');
    const [budget, setBudget] = useState(formData.clientInfo.budget || '');

    const handleNext = () => {
      // Validation simple pour l'exemple
      if (!timeline) {
        toast({ title: "Erreur", description: "Veuillez sélectionner une période souhaitée.", variant: "destructive" });
        return;
      }
      updateFormData('quoteData', { details });
      updateFormData('clientInfo', { timeline, budget });
      nextStep();
    };

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Quel est le périmètre de votre projet ?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Type de lieu</label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={details.locationType || ''}
              onChange={(e) => setDetails(prev => ({ ...prev, locationType: e.target.value }))}
            >
              <option value="">Sélectionner...</option>
              <option value="residentiel">Résidentiel (Maison/Appartement)</option>
              <option value="commercial">Commercial (Boutique/Bureau)</option>
              <option value="industriel">Industriel (Entrepôt/Usine)</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre de caméras/points d'accès (estimation)</label>
            <Input
              type="number"
              placeholder="Ex: 4 caméras"
              value={details.count || ''}
              onChange={(e) => setDetails(prev => ({ ...prev, count: e.target.value }))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Description de votre besoin</label>
          <Textarea
            placeholder="Décrivez brièvement votre projet (neuf, rénovation, objectifs de sécurité...)"
            value={details.description || ''}
            onChange={(e) => setDetails(prev => ({ ...prev, description: e.target.value }))}
          />
        </div>

        <h3 className="text-lg font-semibold pt-4">Quand souhaitez-vous réaliser ce projet ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Période souhaitée *</label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="urgent">Urgent (Moins de 1 mois)</option>
              <option value="court">Court terme (1 à 3 mois)</option>
              <option value="moyen">Moyen terme (3 à 6 mois)</option>
              <option value="long">Long terme (Plus de 6 mois)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Budget estimé (Optionnel)</label>
            <Input
              type="text"
              placeholder="Ex: 5000€ - 10000€"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="button" onClick={handleNext}>
            Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  };

  // Étape 1 - Type de problème (Intervention)
  const Step1_InterventionType = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {interventionOptions.map(option => (
        <OptionButton
          key={option.id}
          icon={option.icon}
          label={option.label}
          isSelected={formData.interventionData.problemType === option.id}
          onClick={() => {
            updateFormData('interventionData', { problemType: option.id });
            nextStep();
          }}
        />
      ))}
    </div>
  );

  // Étape 2 - Détails du problème (Intervention)
  const Step2_InterventionDetails = () => {
    const [description, setDescription] = useState(formData.interventionData.description || '');
    const [workedBefore, setWorkedBefore] = useState(formData.interventionData.workedBefore || '');
    const [locationType, setLocationType] = useState(formData.interventionData.locationType || '');
    const [urgency, setUrgency] = useState(formData.interventionData.urgency || '');

    const handleNext = () => {
      if (!description || !workedBefore || !locationType || !urgency) {
        toast({ title: "Erreur", description: "Veuillez remplir tous les champs requis.", variant: "destructive" });
        return;
      }
      updateFormData('interventionData', { description, workedBefore, locationType, urgency });
      nextStep();
    };

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Description détaillée du problème *</label>
          <Textarea
            placeholder="Ex: La caméra n°3 ne s'allume plus depuis la mise à jour du 15/11. Elle est connectée en PoE."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Le matériel fonctionnait-il avant ? *</label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={workedBefore}
              onChange={(e) => setWorkedBefore(e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="oui">Oui, il fonctionnait</option>
              <option value="non">Non, jamais fonctionné</option>
              <option value="neuf">Matériel neuf</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Lieu de l'intervention *</label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="residentiel">Résidentiel</option>
              <option value="commercial">Commercial</option>
              <option value="industriel">Industriel</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Urgence de l'intervention *</label>
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option value="">Sélectionner...</option>
            <option value="critique">Critique (Intervention immédiate)</option>
            <option value="haute">Haute (Sous 48h)</option>
            <option value="normale">Normale (Sous 1 semaine)</option>
          </select>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="button" onClick={handleNext}>
            Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  };

  // Étape 3 - Informations Client (Commun)
  const Step3_ClientInfo = () => {
    const [name, setName] = useState(formData.clientInfo.name || '');
    const [phone, setPhone] = useState(formData.clientInfo.phone || '');
    const [email, setEmail] = useState(formData.clientInfo.email || '');
    const [address, setAddress] = useState(formData.clientInfo.address || '');
    const [message, setMessage] = useState(formData.clientInfo.message || '');

    const handleNext = () => {
      try {
        clientInfoSchema.pick({ name: true, phone: true, email: true, address: true }).parse({ name, phone, email, address });
        updateFormData('clientInfo', { name, phone, email, address, message });
        nextStep();
      } catch (error) {
        if (error instanceof z.ZodError) {
          toast({
            title: "Erreur de validation",
            description: "Veuillez remplir correctement tous les champs obligatoires (Nom, Téléphone, Email, Adresse).",
            variant: "destructive",
          });
        }
      }
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              placeholder="Votre nom et prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              placeholder="Ex: 06 12 34 56 78"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              placeholder="contact@votreentreprise.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresse (Ville et Code Postal) *</Label>
            <Input
              id="address"
              placeholder="Ex: Paris 75008"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message complémentaire (Optionnel)</Label>
          <Textarea
            id="message"
            placeholder="Toute information supplémentaire utile pour votre demande..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-end pt-4">
          <Button type="button" onClick={handleNext}>
            Étape suivante <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  };

  // Étape 4 - Résumé et Validation (Commun)
  const Step4_Summary = () => {
    const data = formData;
    const isQuote = data.requestType === 'quote';

    const serviceLabel = isQuote 
      ? serviceOptions.find(s => s.id === data.quoteData.service)?.label || 'Non spécifié'
      : interventionOptions.find(i => i.id === data.interventionData.problemType)?.label || 'Non spécifié';

    return (
      <div className="space-y-6">
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <h3 className="text-xl font-bold text-primary flex items-center">
            <Check className="w-6 h-6 mr-2" /> Récapitulatif de votre demande
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Type de demande</p>
            <p className="font-semibold">{isQuote ? 'Devis' : 'Intervention'}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{isQuote ? 'Service' : 'Problème'}</p>
            <p className="font-semibold">{serviceLabel}</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold border-b pb-2">Vos coordonnées</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Nom</p>
            <p className="font-semibold">{data.clientInfo.name}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
            <p className="font-semibold">{data.clientInfo.phone}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="font-semibold">{data.clientInfo.email}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Adresse</p>
            <p className="font-semibold">{data.clientInfo.address}</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold border-b pb-2">Détails {isQuote ? 'du projet' : 'de l\'intervention'}</h4>
        {isQuote ? (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Période souhaitée</p>
            <p className="font-semibold">{data.clientInfo.timeline}</p>
            <p className="text-sm font-medium text-muted-foreground pt-2">Description</p>
            <p className="font-semibold">{data.quoteData.details?.description || 'Non spécifié'}</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Description du problème</p>
            <p className="font-semibold">{data.interventionData.description}</p>
            <p className="text-sm font-medium text-muted-foreground pt-2">Urgence</p>
            <p className="font-semibold">{data.interventionData.urgency}</p>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <Button type="button" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Envoi en cours...' : 'Valider et envoyer par Email'}
          </Button>
        </div>
      </div>
    );
  };

  // --- Rendu principal ---

  return (
    <section id="funnel" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Obtenez votre Devis ou Demandez une Intervention
        </h2>
        
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader className="border-b">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">{currentStep?.title}</CardTitle>
              <div className="text-sm font-medium text-primary">
                Étape {step} / {steps.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            {StepComponent && <StepComponent />}
          </CardContent>
          
          {step > 1 && step < steps.length && (
            <div className="flex justify-start p-6 pt-0">
              <Button type="button" variant="ghost" onClick={prevStep}>
                <ChevronLeft className="w-4 h-4 mr-2" /> Retour
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default QuoteFunnel;
