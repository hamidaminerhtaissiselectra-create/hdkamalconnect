import { Wrench, Settings, Package, Clock, Shield, ArrowRight, CheckCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion } from "framer-motion";
import homeInstallationImage from "@/assets/home-installation-tech.webp";
import homeDepannageImage from "@/assets/home-depannage-urgence.webp";
import homeLocationImage from "@/assets/home-location-event.webp";

const services = [
  {
    icon: Settings,
    title: "Installation Professionnelle",
    description: "Nous installons vos systèmes de sécurité avec expertise et rigueur. Étude gratuite, installation discrète et mise en service complète.",
    features: [
      "Étude de site gratuite et personnalisée",
      "Installation rapide rapidement",
      "Configuration et formation incluses",
      "Garantie 5 ans pièces et main d'œuvre"
    ],
    image: homeInstallationImage,
    color: "from-blue-500 to-cyan-500",
    link: "/services/installation"
  },
  {
    icon: Wrench,
    title: "Dépannage Express 24/7",
    description: "Panne, dysfonctionnement ou urgence ? Notre équipe intervient rapidement pour remettre votre système en état de fonctionnement.",
    features: [
      "Intervention Rapide en urgence",
      "Disponible 24h/24, 7j/7",
      "Diagnostic gratuit par téléphone",
      "Techniciens certifiés et équipés"
    ],
    image: homeDepannageImage,
    color: "from-indigo-500 to-blue-500",
    link: "/services/depannage"
  },
  {
    icon: Package,
    title: "Location d'Équipements",
    description: "Besoin temporaire de sécurité ? Nous proposons la location de matériel professionnel pour vos événements ou chantiers.",
    features: [
      "Caméras et alarmes portables",
      "Équipements de chantier sécurisés",
      "Événementiel et salons professionnels",
      "Installation et retrait inclus"
    ],
    image: homeLocationImage,
    color: "from-sky-500 to-cyan-500",
    link: "/services/location"
  }
];

const ServicesHighlight = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="services-highlight" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-accent mb-3">
            <Truck className="w-4 h-4" />
            <span>Nos Prestations</span>
          </div>
          <h2 className="section-title text-center">
            Installation, Dépannage & Location
          </h2>
          <p className="section-subtitle text-center">
            HD Connect vous accompagne à chaque étape : de l'installation de vos équipements à leur maintenance, 
            en passant par la location de matériel pour vos besoins ponctuels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card 
                  className="group hover-lift overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-all duration-300 h-full card-hover-glow"
                >
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} - HD Connect services de sécurité`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={service.link} className="w-full">
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 group/btn shadow-lg hover:shadow-xl transition-all"
                      >
                        <span>En savoir plus</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Clock, value: "Urgence", label: "Délai d'intervention urgence", color: "from-orange-500/20 to-amber-500/20 border-orange-500/30", iconColor: "text-orange-500" },
            { icon: Shield, value: "5 ans", label: "Garantie équipements", color: "from-green-500/20 to-emerald-500/20 border-green-500/30", iconColor: "text-green-500" },
            { icon: Settings, value: "Urgence", label: "Installation express", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30", iconColor: "text-blue-500" },
            { icon: Wrench, value: "24/7", label: "Support technique", color: "from-violet-500/20 to-purple-500/20 border-violet-500/30", iconColor: "text-violet-500" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-4 md:p-6 rounded-xl bg-gradient-to-br ${stat.color} border text-center hover:scale-105 transition-transform duration-300`}
            >
              <stat.icon className={`w-8 h-8 ${stat.iconColor} mx-auto mb-2`} />
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
