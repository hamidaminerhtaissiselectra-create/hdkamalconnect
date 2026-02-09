import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { CityData } from "@/data/citiesData";
import {
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Radio,
  DoorOpen,
  ArrowRight,
} from "lucide-react";

interface CityServicesGridProps {
  city: CityData;
}

const CityServicesGrid = ({ city }: CityServicesGridProps) => {
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      slug: "videosurveillance",
      description: `Caméras HD/4K avec IA à ${city.name}. Vision nocturne, accès mobile 24/7.`,
      link: `/villes/${city.slug}/videosurveillance`,
      features: ["Caméras 4K", "IA intégrée", "Cloud sécurisé"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: ShieldAlert,
      title: "Alarmes",
      slug: "alarme",
      description: `Alarmes NF&A2P avec télésurveillance à ${city.name}.`,
      link: `/villes/${city.slug}/alarme`,
      features: ["Certifié NF&A2P", "Télésurveillance", "Sirène 110dB"],
      gradient: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-500"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      slug: "controle-acces",
      description: `Badges, biométrie et interphones vidéo à ${city.name}.`,
      link: `/villes/${city.slug}/controle-acces`,
      features: ["Biométrie", "RFID", "Gestion cloud"],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Home,
      title: "Domotique",
      slug: "domotique",
      description: `Maison intelligente et automatisation à ${city.name}.`,
      link: `/villes/${city.slug}/domotique`,
      features: ["Éclairage", "Chauffage", "Scénarios"],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: Wifi,
      title: "Réseau",
      slug: "reseau",
      description: `WiFi 6E, câblage Cat 6A et firewall à ${city.name}.`,
      link: `/villes/${city.slug}/reseau`,
      features: ["WiFi 6E", "Fibre", "Firewall"],
      gradient: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-500"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      slug: "maintenance",
      description: `Maintenance préventive et dépannage 24/7 à ${city.name}.`,
      link: `/villes/${city.slug}/maintenance`,
      features: ["24/7", "Préventif", "Réactif"],
      gradient: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-500"
    },
    {
      icon: Radio,
      title: "Antenne & Satellite",
      slug: "antenne-satellite",
      description: `TNT, satellite et antennes collectives à ${city.name}.`,
      link: `/villes/${city.slug}/antenne-satellite`,
      features: ["TNT HD", "Satellite", "Collectif"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-500"
    },
    {
      icon: DoorOpen,
      title: "Portails & Parking",
      slug: "portails-parking",
      description: `Motorisation et contrôle parking à ${city.name}.`,
      link: `/villes/${city.slug}/portails-parking`,
      features: ["Coulissant", "Battant", "Barrières"],
      gradient: "from-slate-500/20 to-gray-500/20",
      iconColor: "text-slate-500"
    }
  ];

  // Animation variants pour effet stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-14">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
            >
              8 solutions de sécurité
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nos Services à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {city.name}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Solutions complètes de sécurité et domotique pour particuliers et professionnels.
            </p>
          </div>
        </AnimatedSection>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Link to={service.link}>
                <Card className="group h-full border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Gradient de fond animé */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Icône avec animation */}
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                      </motion.div>
                      
                      <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        {service.title}
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.span>
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                        {service.description}
                      </p>
                      
                      {/* Tags avec animation */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <motion.span 
                            key={feature}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-xs px-2.5 py-1 bg-secondary/80 rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CityServicesGrid;
