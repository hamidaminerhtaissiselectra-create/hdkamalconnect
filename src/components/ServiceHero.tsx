import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";


interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  icon: React.ReactNode;
  badgeText: string;
  ctaText?: string;
  ctaLink?: string;
  accentColor?: "primary" | "video" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail" | "installation" | "depannage" | "location";
}

const accentGradients = {
  primary: "from-primary to-accent",
  video: "from-blue-500 to-blue-700",
  alarme: "from-red-500 to-red-700",
  acces: "from-green-500 to-green-700",
  domotique: "from-amber-400 to-amber-600",
  reseau: "from-cyan-500 to-cyan-700",
  maintenance: "from-violet-500 to-violet-700",
  antenne: "from-orange-500 to-orange-700",
  portail: "from-pink-500 to-pink-700",
  installation: "from-teal-500 to-teal-700",
  depannage: "from-rose-500 to-rose-700",
  location: "from-sky-500 to-sky-700",
};

const ServiceHero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  icon,
  badgeText,
  ctaText = "Demander un devis gratuit",
  ctaLink = "/#quote",
  accentColor = "primary",
}: ServiceHeroProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const gradientClass = accentGradients[accentColor] || accentGradients.primary;
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  const isQuoteCta = useMemo(() => {
    if (!ctaLink) return true;
    return ctaLink === "/#quote" || ctaLink === "#quote" || ctaLink.includes("quote");
  }, [ctaLink]);

  const handleQuoteClick = () => {
    scrollToSection("quote", { mode: "quote" });
  };


  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center pt-20 md:pt-24 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover brightness-110 contrast-105"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.15}px)` }}
          loading="eager"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        
        {/* Gradient overlays - optimisés pour visibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent md:from-background/70 md:via-background/40 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30"></div>
        
        {/* Accent color overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-10`}></div>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        className={`absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br ${gradientClass} rounded-full blur-3xl opacity-20 hidden lg:block`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br ${gradientClass} rounded-full blur-3xl opacity-15 hidden lg:block`}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Back to services link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 text-muted-foreground hover:text-foreground bg-background/50 backdrop-blur-sm"
            asChild
          >
            <Link to="/services">
              <ArrowLeft className="w-4 h-4" />
              Tous nos services
            </Link>
          </Button>
        </motion.div>

        {/* Content container with glass effect */}
        <motion.div 
          className="max-w-3xl bg-gradient-to-br from-background/90 via-background/80 to-background/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-border/40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Badge with accent color */}
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradientClass} text-white mb-6 shadow-lg`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {icon}
            <span className="font-semibold text-sm">{badgeText}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="relative">
              {title}
              <motion.span 
                className={`absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r ${gradientClass} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            {isQuoteCta ? (
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={handleQuoteClick}
                  className={`bg-gradient-to-r ${gradientClass} text-white hover:shadow-2xl text-base md:text-lg h-12 md:h-14 px-6 md:px-10 shadow-lg transition-all duration-300 group font-semibold`}
                >
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            ) : (
              <Link to={ctaLink}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${gradientClass} text-white hover:shadow-2xl text-base md:text-lg h-12 md:h-14 px-6 md:px-10 shadow-lg transition-all duration-300 group font-semibold`}
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            )}
            <a href={callUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${gradientClass}/20 backdrop-blur-sm text-foreground border-2 border-current/30 hover:border-current/50 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 transition-all duration-300 group`}
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                  {phoneNumber}
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-muted-foreground font-medium">Découvrir</span>
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradientClass}`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceHero;
