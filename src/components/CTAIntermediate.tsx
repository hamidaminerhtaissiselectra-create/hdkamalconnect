import { Button } from "@/components/ui/button";
import { Phone, FileText, ArrowRight, Sparkles, CheckCircle, Clock, Shield, Gift, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { usePhoneCall } from "@/hooks/usePhoneCall";
interface CTAIntermediateProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  variant?: "primary" | "secondary" | "accent" | "gradient" | "urgency" | "value";
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail" | "installation" | "depannage" | "location";
  showBenefits?: boolean;
  urgencyText?: string;
  interventionMode?: boolean;
}

const accentGradients = {
  primary: "from-primary via-accent to-primary",
  video: "from-blue-500 via-blue-600 to-blue-700",
  alarme: "from-red-500 via-red-600 to-red-700",
  acces: "from-green-500 via-green-600 to-green-700",
  domotique: "from-amber-400 via-amber-500 to-amber-600",
  reseau: "from-cyan-500 via-cyan-600 to-cyan-700",
  maintenance: "from-violet-500 via-violet-600 to-violet-700",
  antenne: "from-orange-500 via-orange-600 to-orange-700",
  portail: "from-pink-500 via-pink-600 to-pink-700",
  installation: "from-teal-500 via-teal-600 to-teal-700",
  depannage: "from-rose-500 via-rose-600 to-rose-700",
  location: "from-sky-500 via-sky-600 to-sky-700",
};

const CTAIntermediate = ({
  title = "Besoin d'un devis personnalisé ?",
  subtitle = "Nos experts sont disponibles pour étudier votre projet et vous proposer une solution sur mesure.",
  phoneNumber: phoneNumberProp,
  variant = "primary",
  accentColor = "primary",
  showBenefits = false,
  urgencyText = "",
  interventionMode = false
}: CTAIntermediateProps) => {
  const { scrollToSection } = useSmoothScroll();
  const { phoneNumber: hookPhoneNumber, callUrl } = usePhoneCall();
  const displayPhoneNumber = phoneNumberProp || hookPhoneNumber;
  const gradientClass = accentGradients[accentColor] || accentGradients.primary;
  
  const ctaLabel = interventionMode ? "Besoin d'une intervention" : "Demander un devis";
  const ctaMode = interventionMode ? "intervention" : "quote";
  
  const isGradient = variant === "gradient" || variant === "urgency" || variant === "value";
  
  const bgClass = isGradient
    ? `bg-gradient-to-r ${gradientClass} text-white`
    : variant === "primary" 
    ? "bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10"
    : variant === "accent"
    ? "bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10"
    : "bg-secondary/50";

  // Bénéfices à afficher
	  const benefits = [
	    { icon: CheckCircle, text: "Devis gratuit rapidement" },
	    { icon: Clock, text: "Intervention Rapide Urgence" },
	    { icon: Shield, text: "Garantie 5 ans" },
	    { icon: Gift, text: "Audit offert" },
	  ];

  return (
    <section className={`py-12 md:py-16 ${bgClass} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge urgence optionnel */}
            {urgencyText && (
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Sparkles className="w-4 h-4" />
                {urgencyText}
              </motion.div>
            )}
            
            {/* Decorative icon si pas de badge urgence */}
            {!urgencyText && (
              <motion.div 
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${isGradient ? 'bg-white/20' : 'bg-primary/10'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Sparkles className={`w-6 h-6 ${isGradient ? 'text-white' : 'text-primary'}`} />
              </motion.div>
            )}
            
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${isGradient ? 'text-white' : 'text-foreground'}`}>
              {title}
            </h3>
            <p className={`mb-6 text-base md:text-lg max-w-xl mx-auto ${isGradient ? 'text-white/90' : 'text-muted-foreground'}`}>
              {subtitle}
            </p>

            {/* Bénéfices optionnels */}
            {showBenefits && (
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
                      isGradient ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <benefit.icon className="w-4 h-4" />
                    {benefit.text}
                  </motion.div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("quote", { mode: ctaMode })}
                variant={interventionMode ? "intervention" : undefined}
                className={`gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-sm sm:text-base px-4 sm:px-6 h-12 sm:h-14 whitespace-nowrap ${
                  interventionMode
                    ? ''
                    : isGradient 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                }`}
              >
                {interventionMode ? (
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                ) : (
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                )}
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
              <a href={callUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className={`gap-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-4 sm:px-6 h-12 sm:h-14 whitespace-nowrap ${
                    isGradient 
                      ? 'bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/30 hover:border-white/70' 
                      : 'bg-primary/10 text-primary border-2 border-primary/30 hover:bg-primary/20'
                  }`}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold">{displayPhoneNumber}</span>
                </Button>
              </a>
            </div>

            {/* Texte de réassurance */}
            <p className={`mt-6 text-sm ${isGradient ? 'text-white/70' : 'text-muted-foreground'}`}>
              ✓ Sans engagement • ✓ Réponse rapidement • ✓ Techniciens certifiés
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTAIntermediate;
