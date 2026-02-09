import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock, Shield, CheckCircle, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
interface CTAFloatingProps {
  serviceName?: string;
}

// Composant CTA flottant pour les pages services - maximise la conversion
const CTAFloating = ({
  serviceName = "sécurité"
}: CTAFloatingProps) => {
  const {
    phoneNumber,
    callUrl
  } = usePhoneCall();
  const {
    scrollToSection
  } = useSmoothScroll();
  return <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Carte principale */}
          <motion.div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-3xl overflow-hidden shadow-2xl" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            {/* Décoration background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium" initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2,
                type: "spring"
              }}>
                  <Zap className="w-4 h-4" />
                  Offre spéciale : Audit de sécurité GRATUIT
                </motion.div>
              </div>

              {/* Titre */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
                Protégez votre {serviceName} dès aujourd'hui
              </h2>
              <p className="text-white/90 text-center text-lg mb-8 max-w-2xl mx-auto">
                Obtenez votre devis personnalisé en moins de 24h. 
                Installation par des techniciens certifiés, garantie 5 ans.
              </p>

              {/* Bénéfices */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[{
                icon: Clock,
                text: "Devis en 24h"
              }, {
                icon: Shield,
                text: "Garantie 5 ans"
              }, {
                icon: CheckCircle,
                text: "Sans engagement"
              }, {
                icon: Star,
                text: "4.9/5 étoiles"
              }].map((item, index) => <motion.div key={index} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10" initial={{
                opacity: 0,
                y: 10
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.1 * index + 0.3
              }}>
                    <item.icon className="w-6 h-6 text-white" />
                    <span className="text-white text-sm font-medium text-center">{item.text}</span>
                  </motion.div>)}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection("quote", {
                mode: "quote"
              })} className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-lg px-8 py-7">
                  Demander mon devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/30 hover:border-white/70 text-lg px-8 py-7 transition-all">
                    <Phone className="mr-2 w-5 h-5" />
                    {phoneNumber}
                  </Button>
                </a>
              </div>

              {/* Réassurance finale */}
              <p className="text-white/70 text-center text-sm mt-6">
                Plus de 2000 clients nous font confiance • Intervention en Île-de-France et toute la France
              </p>
            </div>
          </motion.div>

          {/* Mini-CTA urgence en dessous */}
          <motion.div className="mt-6 p-4 bg-secondary/50 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.5
        }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">
                  Urgence ? Intervention garantie Urgence en Île-de-France.
                </span>
              </div>
            
          </motion.div>
        </div>
      </div>
    </section>;
};
export default CTAFloating;