import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CityData, getCitiesByRegion } from "@/data/citiesData";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useParallax } from "@/hooks/useParallax";

interface CityCoverageSectionProps {
  city: CityData;
}

const CityCoverageSection = ({ city }: CityCoverageSectionProps) => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { ref, offset } = useParallax({ speed: 0.2, direction: 'down' });
  
  // Récupérer les villes voisines de la même région
  const regionCities = getCitiesByRegion(city.region).filter(c => c.slug !== city.slug).slice(0, 6);

  return (
    <section 
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Background avec parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      />
      
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-80 h-80 bg-white/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        {/* Grille */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Couverture Complète à {city.name}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-4 leading-relaxed max-w-3xl mx-auto"
          >
            Nos techniciens interviennent dans tous les quartiers de {city.name} et communes environnantes du {city.department} ({city.departmentCode}).
          </motion.p>
          
          {/* Affichage de toutes les villes secondaires */}
          {city.nearbyTowns && city.nearbyTowns.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-6"
            >
              <p className="text-white/80 text-sm mb-3">Communes rattachées et villes voisines :</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {city.nearbyTowns.map((town, index) => (
                  <motion.span 
                    key={town}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.03 }}
                    className="px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full text-sm border border-white/20 text-white/90"
                  >
                    {town}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
          
          {city.neighborhoods && city.neighborhoods.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {city.neighborhoods.slice(0, 8).map((neighborhood, index) => (
                <motion.span 
                  key={neighborhood}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20"
                >
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {neighborhood}
                </motion.span>
              ))}
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8"
              asChild
            >
              <a href={callUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-5 h-5" />
                {phoneNumber}
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-primary text-lg px-8 transition-all"
              asChild
            >
              <Link to={`/zones-intervention/${city.regionSlug}`}>
                Voir toute la région {city.region}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Villes voisines */}
        {regionCities.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-white/70 text-center mb-4">Nous intervenons aussi à :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {regionCities.map((nearbyCity) => (
                <Link 
                  key={nearbyCity.slug}
                  to={`/villes/${nearbyCity.slug}`}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors border border-white/10 hover:border-white/30"
                >
                  <span className="font-medium text-white">{nearbyCity.name}</span>
                  <span className="text-white/60 text-sm ml-1">({nearbyCity.departmentCode})</span>
                </Link>
              ))}
              <Link 
                to={`/zones-intervention/${city.regionSlug}`}
                className="px-4 py-2 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors flex items-center gap-1"
              >
                Toutes les villes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CityCoverageSection;
