import { MapPin, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { frenchCities, services } from "@/data/seoData";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useParallax";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const mainLocations = frenchCities.slice(0, 12);

const idfCities = frenchCities.filter(c => c.region === 'Île-de-France').slice(0, 8);

const LocalSEO = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(mainLocations.length, 80);
  const { scrollToSection } = useSmoothScroll();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Sécurité et Vidéosurveillance",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr",
    "telephone": "+33 6 27 13 53 04",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=HD+Connect+Paris",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Mo", "Tu", "We", "Th", "Fr"], "opens": "09:00", "closes": "18:00" }
    ],
    "serviceType": [
      "Installation de caméras de surveillance",
      "Installation de systèmes d'alarme",
      "Contrôle d'accès",
      "Dépannage et maintenance d'équipements de sécurité"
    ]
  };

  return (
    <section id="local-seo" className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Decorative Elements with Parallax */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef} 
          className={`text-center mb-8 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="badge-primary mb-3">
            <MapPin className="w-4 h-4" />
            <span>Zones d'Intervention</span>
          </div>
          <h2 className="section-title text-center">
            Nous intervenons près de chez vous
          </h2>
          <p className="section-subtitle text-center">
            HD Connect assure des interventions rapides pour le dépannage, l'installation et la location d'équipements de sécurité dans toute la France.
          </p>
        </div>

        {/* Main Locations Grid - Sans liens vers pages dynamiques (conformité SEO) */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
          {mainLocations.map((location, index) => {
            const isHighlight = index < 3;
            return (
              <div 
                key={location.slug}
                className={`p-3 rounded-xl text-center transition-all duration-500 group ${
                  isHighlight 
                    ? 'bg-gradient-to-br from-primary to-accent text-white shadow-lg' 
                    : 'bg-card border border-border'
                } ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <MapPin className={`w-4 h-4 mx-auto mb-1 ${isHighlight ? 'text-white' : 'text-primary'}`} />
                <p className="font-semibold text-sm">{location.name}</p>
                <p className={`text-xs ${isHighlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  ({location.dept})
                </p>
              </div>
            );
          })}
        </div>

        {/* Services Available in These Cities */}
        <div className="bg-card rounded-2xl border border-border p-5 md:p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            Nos services disponibles dans toutes ces villes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="flex items-center gap-2 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
              >
                <span className="text-sm font-medium">{service.name}</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* IDF Cities - Sans liens vers pages dynamiques (conformité SEO) */}
        <div className="bg-card rounded-2xl border border-border p-5 md:p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            Également en Île-de-France
          </h3>
          <div className="flex flex-wrap gap-2">
            {idfCities.map((city) => (
              <span 
                key={city.slug}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {city.name}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              + toute l'Île-de-France
            </span>
          </div>
        </div>

        {/* Services disponibles - Liens vers pages services uniquement */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border border-primary/20">
            <h4 className="font-bold text-foreground mb-3">Services Sécurité</h4>
            <div className="flex flex-wrap gap-2">
              <Link to="/services/videosurveillance" className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                Vidéosurveillance
              </Link>
              <Link to="/services/alarme" className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                Alarme
              </Link>
              <Link to="/services/controle-acces" className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                Contrôle d'accès
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-5 border border-accent/20">
            <h4 className="font-bold text-foreground mb-3">Services Connectés</h4>
            <div className="flex flex-wrap gap-2">
              <Link to="/services/domotique" className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent hover:bg-accent hover:text-white transition-colors">
                Domotique
              </Link>
              <Link to="/services/reseau" className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent hover:bg-accent hover:text-white transition-colors">
                Réseau
              </Link>
              <Link to="/services/maintenance" className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent hover:bg-accent hover:text-white transition-colors">
                Maintenance
              </Link>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-foreground to-foreground/90 rounded-2xl p-6 md:p-8 text-background relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Notre Couverture Nationale</h3>
            <p className="text-background/80 leading-relaxed mb-4 text-sm md:text-base">
              Nous intervenons principalement dans la région de <strong className="text-background">Paris (75) et la petite couronne (94)</strong>, incluant des villes comme Créteil et Vincennes, pour garantir une réactivité maximale. Notre expertise s'étend également aux grandes métropoles françaises.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("quote", { mode: "quote" })}
            >
              Vérifier mon éligibilité
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;
