import { useParallax } from "@/hooks/useParallax";
import { MapPin, Phone, ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { CityData } from "@/data/citiesData";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";

interface CityHeroParallaxProps {
  city: CityData;
  breadcrumbItems: { name: string; url: string }[];
}

const CityHeroParallax = ({ city, breadcrumbItems }: CityHeroParallaxProps) => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();
  const { ref: parallaxRef, offset } = useParallax({ speed: 0.3, direction: 'up' });

  // Stats spécifiques à la ville
  const stats = [
    { icon: Shield, label: "Interventions", value: "500+" },
    { icon: Award, label: "Clients satisfaits", value: "98%" },
    { icon: Clock, label: "Intervention", value: "< 4h" },
  ];

  return (
    <section 
      ref={parallaxRef}
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
    >
      {/* Background avec parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      
      {/* Éléments décoratifs animés */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-10 left-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute top-40 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lignes décoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-5xl mx-auto text-center mt-8">
          {/* Badge localisation animé */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-semibold mb-6 border border-primary/20 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 animate-pulse" />
            <span>{city.department} ({city.departmentCode}) • {city.region}</span>
          </motion.div>
          
          {/* Titre principal avec animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Expert Sécurité à{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {city.name}
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h1>
          
          {/* Description avec animation */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {city.description}
          </motion.p>

          {/* Stats rapides */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="font-bold text-foreground">{stat.value}</span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTAs avec animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("quote", { mode: "quote" })}
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-8 bg-card/80 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/20 text-primary transition-all hover:scale-105"
              asChild
            >
              <a href={callUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-5 h-5" />
                {phoneNumber}
              </a>
            </Button>
          </motion.div>

          {/* Badge de confiance */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-primary" /> Certifié NF&A2P
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4 text-accent" /> Garantie 5 ans
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" /> Devis gratuit 24h
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CityHeroParallax;
