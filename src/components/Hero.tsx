import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight, Play, Sparkles } from "lucide-react";
import { content } from "@/data/content";
import heroImage from "@/assets/hero-security.webp";
import { useEffect, useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";

const Hero = () => {
  const heroContent = content.hero;
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trust badges avec preuves d'autorité
  const trustBadges = [
    { label: "Intervention 4h Urgence", icon: CheckCircle },
    { label: "Certifié NF&A2P & APSAD", icon: CheckCircle },
    { label: "Garantie 5 Ans", icon: CheckCircle },
  ];

  return (
    <section id="accueil" className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Expert en sécurité HD Connect installant un système de vidéosurveillance et d'alarme intelligente pour une protection professionnelle 2025-2026" 
          className="w-full h-full object-cover transition-transform duration-100"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.15}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Decorative Elements with Parallax */}
      <div 
        className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block"
        style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: '1s' }}
      ></div>
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge with Answer-First positioning */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className={`badge-primary mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Shield className="w-5 h-5" />
            <span>Spécialiste Sécurité depuis 2015</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </motion.div>

          {/* Main Heading with Answer-First - phrase autonome et citable */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] text-center md:text-left transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-gradient-animated">Vidéosurveillance</span>,{" "}
            <span className="text-gradient-animated" style={{ animationDelay: '0.5s' }}>Alarme</span> &{" "}
            <span className="text-gradient-animated" style={{ animationDelay: '1s' }}>Domotique</span> :{" "}
            Votre Sécurité, Notre Priorité
          </motion.h1>

          {/* Subtitle - Answer-First: phrase autonome citable par IA */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-center md:text-left max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <strong>HD Connect installe des systèmes de sécurité professionnels</strong> pour protéger maisons et entreprises : vidéosurveillance 4K, alarmes certifiées NF&A2P, contrôle d'accès biométrique. Techniciens certifiés, intervention rapide 4h, garantie 5 ans.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button 
              onClick={() => scrollToSection("quote", { mode: "quote" })} 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {heroContent.ctaQuote}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection("quote", { mode: "intervention" })} 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5 text-accent" />
              Intervention Urgente
            </Button>
          </motion.div>

          {/* Trust Badges with staggered animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {trustBadges.map((badge, index) => {
              const badgeColors = [
                'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                'from-green-500/20 to-emerald-500/20 border-green-500/30',
                'from-violet-500/20 to-purple-500/20 border-violet-500/30'
              ];
              const iconColors = ['text-blue-500', 'text-green-500', 'text-violet-500'];
              return (
                <motion.div 
                  key={badge.label} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br ${badgeColors[index]} backdrop-blur-sm border hover:scale-105 transition-all duration-500 hover:shadow-lg card-hover-glow ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-card/80 flex items-center justify-center shadow-inner">
                    <badge.icon className={`w-5 h-5 ${iconColors[index]}`} />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{badge.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator with bounce animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Découvrir</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;