import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Shield, Lock, Wifi, Home, Wrench, ArrowRight, Sparkles, Radio, DoorOpen, Package } from "lucide-react";
import { content } from "@/data/content";
import { Link } from "react-router-dom";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useParallax";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import cameraImage from "@/assets/home-service-videosurveillance.webp";
import alarmImage from "@/assets/home-service-alarme.webp";
import accessImage from "@/assets/home-service-controle-acces.webp";
import maintenanceImage from "@/assets/home-service-maintenance.webp";
import reseauImage from "@/assets/home-service-reseau.webp";
import domotiqueImage from "@/assets/home-service-domotique.webp";
import antenneImage from "@/assets/home-service-antenne.webp";
import portailImage from "@/assets/home-service-portails.webp";
import locationImage from "@/assets/location-equipement-table.webp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Shield,
  Lock,
  Wifi,
  Home,
  Wrench,
  Radio,
  DoorOpen,
  Package,
};

const imageMap: Record<string, string> = {
  "Vidéosurveillance": cameraImage,
  "Systèmes d'Alarme": alarmImage,
  "Contrôle d'Accès": accessImage,
  "Maintenance & Dépannage": maintenanceImage,
  "Réseau & Câblage": reseauImage,
  "Domotique Sécurité": domotiqueImage,
  "Antennes & Satellite": antenneImage,
  "Portails & Parking": portailImage,
  "Location Matériel": locationImage,
};

// Configuration des couleurs distinctives par service
const colorMap: Record<string, { bg: string; iconBg: string; hover: string }> = {
  "Vidéosurveillance": { 
    bg: "from-blue-500 to-blue-600", 
    iconBg: "bg-blue-500", 
    hover: "hover:border-blue-400" 
  },
  "Systèmes d'Alarme": { 
    bg: "from-red-500 to-red-600", 
    iconBg: "bg-red-500", 
    hover: "hover:border-red-400" 
  },
  "Contrôle d'Accès": { 
    bg: "from-emerald-500 to-emerald-600", 
    iconBg: "bg-emerald-500", 
    hover: "hover:border-emerald-400" 
  },
  "Maintenance & Dépannage": { 
    bg: "from-orange-500 to-orange-600", 
    iconBg: "bg-orange-500", 
    hover: "hover:border-orange-400" 
  },
  "Réseau & Câblage": { 
    bg: "from-cyan-500 to-cyan-600", 
    iconBg: "bg-cyan-500", 
    hover: "hover:border-cyan-400" 
  },
  "Domotique Sécurité": { 
    bg: "from-purple-500 to-purple-600", 
    iconBg: "bg-purple-500", 
    hover: "hover:border-purple-400" 
  },
  "Antennes & Satellite": { 
    bg: "from-indigo-500 to-indigo-600", 
    iconBg: "bg-indigo-500", 
    hover: "hover:border-indigo-400" 
  },
  "Portails & Parking": { 
    bg: "from-amber-500 to-amber-600", 
    iconBg: "bg-amber-500", 
    hover: "hover:border-amber-400" 
  },
  "Location Matériel": { 
    bg: "from-teal-500 to-teal-600", 
    iconBg: "bg-teal-500", 
    hover: "hover:border-teal-400" 
  },
};

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(content.services.items.length, 100);
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with animation */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="badge-accent mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Solutions Complètes</span>
          </div>
          <h2 className="section-title text-center">
            {content.services.title}
          </h2>
          <p className="section-subtitle text-center">
            {content.services.subtitle}
          </p>
        </div>

        {/* Services Grid with staggered animation */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera;
            const image = imageMap[service.title];
            const colors = colorMap[service.title] || { bg: "from-primary to-accent", iconBg: "bg-primary", hover: "hover:border-primary/30" };
            
            return (
              <Card 
                key={index} 
                className={`group hover-lift overflow-hidden bg-card border-border/50 ${colors.hover} transition-all duration-500 flex flex-col h-full ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image with parallax hover effect */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img 
                    src={image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  
                  {/* Floating Icon with distinctive color */}
                  <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg shadow-black/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>
                
                <CardHeader className="pt-4 flex-grow">
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0 mt-auto">
                  <Link to={service.link} className="w-full block">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-center gap-2 group/btn hover:bg-primary/5 hover:text-primary transition-all duration-300"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
          
          {/* CTA Card integrated in grid */}
          <Card 
            className={`group hover-lift overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary transition-all duration-500 flex flex-col h-full justify-center items-center text-center p-6 ${visibleItems[content.services.items.length] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${content.services.items.length * 100}ms` }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground mb-2">
              Projet sur mesure ?
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </p>
            <Button 
              size="lg"
              onClick={() => scrollToSection("quote", { mode: "quote" })}
              className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105"
            >
              Contactez-nous
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;