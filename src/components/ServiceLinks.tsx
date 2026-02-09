import { Link } from "react-router-dom";
import { services } from "@/data/seoData";
import { regionsData } from "@/data/regionsData";
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  Camera, 
  ShieldAlert, 
  Fingerprint, 
  Home, 
  Network, 
  Wrench, 
  Satellite, 
  DoorOpen,
  Globe,
  Settings,
  Truck,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceLinksProps {
  currentService: string;
}

// Configuration des icônes et couleurs par service
const serviceConfig: Record<string, { icon: React.ElementType; gradient: string; borderHover: string }> = {
  'videosurveillance': { 
    icon: Camera, 
    gradient: 'from-blue-500 to-cyan-500',
    borderHover: 'hover:border-blue-500/30'
  },
  'alarme': { 
    icon: ShieldAlert, 
    gradient: 'from-red-500 to-orange-500',
    borderHover: 'hover:border-red-500/30'
  },
  'controle-acces': { 
    icon: Fingerprint, 
    gradient: 'from-green-500 to-emerald-500',
    borderHover: 'hover:border-green-500/30'
  },
  'domotique': { 
    icon: Home, 
    gradient: 'from-purple-500 to-violet-500',
    borderHover: 'hover:border-purple-500/30'
  },
  'reseau': { 
    icon: Network, 
    gradient: 'from-indigo-500 to-blue-500',
    borderHover: 'hover:border-indigo-500/30'
  },
  'maintenance': { 
    icon: Wrench, 
    gradient: 'from-amber-500 to-yellow-500',
    borderHover: 'hover:border-amber-500/30'
  },
  'antenne-satellite': { 
    icon: Satellite, 
    gradient: 'from-teal-500 to-cyan-500',
    borderHover: 'hover:border-teal-500/30'
  },
  'portails-parking': { 
    icon: DoorOpen, 
    gradient: 'from-slate-500 to-gray-600',
    borderHover: 'hover:border-slate-500/30'
  },
  'installation': { 
    icon: Settings, 
    gradient: 'from-emerald-500 to-green-600',
    borderHover: 'hover:border-emerald-500/30'
  },
  'location': { 
    icon: Truck, 
    gradient: 'from-sky-500 to-blue-600',
    borderHover: 'hover:border-sky-500/30'
  },
  'depannage': { 
    icon: AlertCircle, 
    gradient: 'from-orange-500 to-red-500',
    borderHover: 'hover:border-orange-500/30'
  },
};

// Couleurs pour les régions
const regionColors = [
  { gradient: 'from-blue-500 to-indigo-500', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500/20 hover:border-blue-500/40' },
  { gradient: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20 hover:border-emerald-500/40' },
  { gradient: 'from-orange-500 to-amber-500', bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-500/20 hover:border-orange-500/40' },
  { gradient: 'from-purple-500 to-violet-500', bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/20 hover:border-purple-500/40' },
  { gradient: 'from-rose-500 to-pink-500', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-500/20 hover:border-rose-500/40' },
];

// Composant de maillage interne complet
// Architecture SEO : liens services + régions stratégiques + villes principales
const ServiceLinks = ({ currentService }: ServiceLinksProps) => {
  const otherServices = services.filter(s => s.slug !== currentService);
  
  // 5 régions prioritaires pour le maillage
  const priorityRegions = regionsData.slice(0, 5);

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Maillage Services */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              Nos Expertises
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Découvrez nos autres services de sécurité
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {otherServices.slice(0, 8).map((service, index) => {
              const config = serviceConfig[service.slug] || { 
                icon: Building2, 
                gradient: 'from-gray-500 to-gray-600',
                borderHover: 'hover:border-gray-500/30'
              };
              const Icon = config.icon;
              
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className={`flex flex-col items-center gap-3 p-5 rounded-xl bg-card border-2 border-border ${config.borderHover} hover:shadow-xl transition-all duration-300 group text-center h-full`}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Maillage Régions */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center justify-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </motion.div>
              Nos zones d'intervention
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {priorityRegions.map((region, index) => {
              const colorSet = regionColors[index % regionColors.length];
              return (
                <motion.div
                  key={region.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Link
                    to={`/zones-intervention/${region.slug}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${colorSet.bg} border ${colorSet.border} ${colorSet.text} font-medium text-sm transition-all hover:shadow-md`}
                  >
                    <motion.div 
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${colorSet.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-3 h-3 text-white" />
                    </motion.div>
                    {region.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/zones-intervention"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm hover:bg-primary/20 transition-all hover:shadow-md"
              >
                Toutes les régions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* CTA Hub Régions */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/zones-intervention"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Building2 className="w-5 h-5" />
            Explorer toutes nos zones d'intervention
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceLinks;
