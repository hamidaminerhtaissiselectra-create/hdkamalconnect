import { useState, useEffect } from "react";
import { FileText, Phone, MessageCircle, X, Zap, ArrowRight, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const GlobalFloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMobileBanner, setShowMobileBanner] = useState(true);
  const { scrollToSection } = useSmoothScroll();
  const contactInfo = content.company.contact;
  const isMobile = useIsMobile();

  // WhatsApp formaté
  const whatsappNumber = contactInfo.phoneMobile.replace(/\s/g, '').replace('+', '');
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite un devis pour mes besoins en sécurité.");

  // Détecter le scroll pour afficher le bouton
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Arrêter le pulse après quelques secondes
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Masquer la bannière mobile après 15 secondes
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setShowMobileBanner(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleQuoteClick = () => {
    setIsExpanded(false);
    setShowMobileBanner(false);
    scrollToSection("quote", { mode: "quote" });
  };

  const handleInterventionClick = () => {
    setIsExpanded(false);
    setShowMobileBanner(false);
    scrollToSection("quote", { mode: "intervention" });
  };

  return (
    <>
      {/* Bannière mobile sticky en bas */}
      <AnimatePresence>
        {isMobile && showMobileBanner && hasScrolled && !isExpanded && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-primary via-accent to-primary p-3 shadow-2xl"
          >
            <div className="container mx-auto flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm">Devis gratuit en 2 min</span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQuoteClick}
                  className="px-4 py-2 bg-white text-primary font-bold rounded-full text-sm shadow-lg"
                >
                  Devis
                </motion.button>
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}
                  className="px-4 py-2 bg-white/20 text-white font-bold rounded-full text-sm border border-white/30"
                >
                  <Phone className="w-4 h-4" />
                </motion.a>
                <button 
                  onClick={() => setShowMobileBanner(false)}
                  className="p-1 text-white/70 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu flottant */}
      <div className={`fixed ${isMobile && showMobileBanner && hasScrolled ? 'bottom-20' : 'bottom-6'} right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300`}>
      {/* Menu étendu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-5 mb-3 min-w-[280px]"
          >
            <div className="flex flex-col gap-3">
              {/* Header */}
              <div className="text-center pb-2 border-b border-border">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">Contact Rapide</p>
                <p className="text-muted-foreground text-sm mt-1">Réponse rapidement garantie</p>
              </div>

              {/* Bouton Devis Gratuit */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleQuoteClick}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">Devis Gratuit</p>
                  <p className="text-sm opacity-90">En 2 minutes</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Bouton Urgence */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInterventionClick}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-left flex-1">
                  <p className="font-bold text-lg">Intervention Urgente</p>
                  <p className="text-sm opacity-90">Réponse rapide</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Séparateur */}
              <div className="flex items-center gap-2 py-1">
                <div className="flex-1 h-px bg-border"></div>
                <span className="text-xs text-muted-foreground">ou contactez-nous</span>
                <div className="flex-1 h-px bg-border"></div>
              </div>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp</span>
                <span className="ml-auto text-sm opacity-90">{contactInfo.phoneMobile}</span>
              </motion.a>

              {/* Appel */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}
                className="flex items-center gap-3 p-3 bg-primary/10 hover:bg-primary/20 text-foreground rounded-xl transition-all"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold">Appeler</span>
                <span className="ml-auto text-sm text-muted-foreground">{contactInfo.phoneMobile}</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton principal flottant */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: hasScrolled ? 1 : 0.8, opacity: hasScrolled ? 1 : 0.7 }}
        className="relative"
      >
        {/* Rings de pulse */}
        {showPulse && !isExpanded && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/30"
              animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-accent/30"
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5, delay: 0.3 }}
            />
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
            isExpanded
              ? "bg-muted-foreground"
              : "bg-gradient-to-br from-primary via-accent to-primary float-bounce"
          }`}
          style={{
            boxShadow: isExpanded 
              ? "0 10px 30px rgba(0,0,0,0.2)" 
              : "0 10px 40px hsl(217 91% 55% / 0.4), 0 0 60px hsl(217 91% 55% / 0.2)"
          }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="cta"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex flex-col items-center"
              >
                <FileText className="w-6 h-6 text-white" />
                <span className="text-[9px] font-bold text-white mt-0.5">DEVIS</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Badge notification */}
        {!isExpanded && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <Zap className="w-3 h-3 text-white" />
          </motion.span>
        )}
      </motion.div>
    </div>
    </>
  );
};

export default GlobalFloatingCTA;