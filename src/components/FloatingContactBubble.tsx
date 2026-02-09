import { useState } from "react";
import { Phone, X, FileText, MessageCircle } from "lucide-react";
import { content } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const FloatingContactBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const contactInfo = content.company.contact;

  // Numéro WhatsApp formaté (sans espaces ni +)
  const whatsappNumber = contactInfo.phoneMobile.replace(/\s/g, "").replace("+", "");
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite un devis pour mes besoins en sécurité.");

  const scrollToQuote = () => {
    setIsOpen(false);
    scrollToSection("quote", { mode: "quote" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Menu déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-card border border-border rounded-2xl shadow-2xl p-4 mb-2"
          >
            <div className="flex flex-col gap-3 min-w-[220px]">
              {/* Bouton Devis */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToQuote}
                className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl hover:shadow-lg transition-all font-semibold"
              >
                <FileText className="w-5 h-5" />
                <span>Devis Gratuit</span>
              </motion.button>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs opacity-80">WhatsApp</p>
                  <p className="font-semibold">{contactInfo.phoneMobile}</p>
                </div>
              </motion.a>

              {/* Appel Direct Mobile */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 bg-primary/10 hover:bg-primary/20 rounded-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Appel direct</p>
                  <p className="font-semibold text-foreground">{contactInfo.phoneMobile}</p>
                </div>
              </motion.a>

              {/* Appel Direct Fixe */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${contactInfo.phoneFixe.replace(/\s/g, '')}`}
                className="flex items-center gap-3 px-4 py-3 bg-accent/10 hover:bg-accent/20 rounded-xl transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Ligne fixe</p>
                  <p className="font-semibold text-foreground">{contactInfo.phoneFixe}</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton principal */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? "bg-muted-foreground" 
            : "bg-gradient-to-br from-primary to-accent"
        }`}
        aria-label={isOpen ? "Fermer le menu contact" : "Ouvrir le menu contact"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-7 h-7 text-background" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative"
            >
              <Phone className="w-7 h-7 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Badge indicateur avec pulse */}
      {!isOpen && (
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
        >
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </motion.span>
      )}
    </div>
  );
};

export default FloatingContactBubble;
