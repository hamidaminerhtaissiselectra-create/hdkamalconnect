import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/data/content";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, MapPin, Camera, ShieldAlert, Fingerprint, Home, Network, Wrench, Satellite, DoorOpen, Settings, Truck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";

const LegalPage = () => {
  const location = useLocation();
  const isMentions = location.pathname === '/mentions-legales';
  const legalData = isMentions ? content.legal.mentions : content.legal.privacy;
  const Icon = isMentions ? FileText : Shield;

  useSEO({
    title: isMentions 
      ? "Mentions Légales | HD Connect - Sécurité en France" 
      : "Politique de Confidentialité | HD Connect - Protection des Données",
    description: isMentions
      ? "Mentions légales de HD Connect, expert en vidéosurveillance, alarme et contrôle d'accès en France. SIRET, RCS, informations légales complètes."
      : "Politique de confidentialité HD Connect. Protection de vos données personnelles conformément au RGPD. Sécurité et transparence.",
    keywords: isMentions
      ? "mentions légales, HD Connect, vidéosurveillance, alarme, sécurité, France, RGPD"
      : "politique confidentialité, RGPD, protection données, HD Connect, sécurité, vie privée",
    canonicalUrl: isMentions ? "https://hdconnect.fr/mentions-legales" : "https://hdconnect.fr/politique-confidentialite"
  });

  const services = [
    { name: "Vidéosurveillance", icon: Camera, href: "/services/videosurveillance", color: "bg-blue-500" },
    { name: "Alarme", icon: ShieldAlert, href: "/services/alarme", color: "bg-red-500" },
    { name: "Contrôle d'Accès", icon: Fingerprint, href: "/services/controle-acces", color: "bg-emerald-500" },
    { name: "Domotique", icon: Home, href: "/services/domotique", color: "bg-purple-500" },
    { name: "Réseau", icon: Network, href: "/services/reseau", color: "bg-cyan-500" },
    { name: "Maintenance", icon: Wrench, href: "/services/maintenance", color: "bg-orange-500" },
    { name: "Antenne & Satellite", icon: Satellite, href: "/services/antenne-satellite", color: "bg-teal-500" },
    { name: "Portails & Parking", icon: DoorOpen, href: "/services/portails-parking", color: "bg-indigo-500" },
    { name: "Installation", icon: Settings, href: "/services/installation", color: "bg-green-500" },
    { name: "Dépannage", icon: AlertCircle, href: "/services/depannage", color: "bg-amber-500" },
    { name: "Location", icon: Truck, href: "/services/location", color: "bg-pink-500" },
  ];

  const regions = [
    "Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes", "Occitanie", 
    "Nouvelle-Aquitaine", "Hauts-de-France", "Grand Est", "Bretagne", 
    "Normandie", "Pays de la Loire", "Centre-Val de Loire", "Bourgogne-Franche-Comté"
  ];

  const majorCities = [
    "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier",
    "Bordeaux", "Lille", "Rennes", "Reims", "Toulon", "Le Havre", "Saint-Étienne", "Grenoble",
    "Dijon", "Angers", "Nîmes", "Villeurbanne", "Clermont-Ferrand", "Le Mans", "Aix-en-Provence", "Brest"
  ];

  const breadcrumbItems = [
    { name: isMentions ? "Mentions Légales" : "Politique de Confidentialité", url: location.pathname },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mt-6"
            >
              <div className="badge-primary mb-6 justify-center">
                <Icon className="w-5 h-5" />
                <span>Informations Légales</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {legalData.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                HD Connect - Expert en sécurité électronique sur toute la France
              </p>
              <Link to="/">
                <Button variant="outline" className="border-primary/30 hover:border-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg"
            >
              <div className="prose prose-lg max-w-none">
                {legalData.content.split('\n\n').map((paragraph, index) => {
                  const isTitle = /^\d+\./.test(paragraph) || 
                                  paragraph.startsWith('INFORMATIONS') ||
                                  paragraph.startsWith('POLITIQUE') ||
                                  paragraph.startsWith('Éditeur') ||
                                  paragraph.startsWith('Directeur') ||
                                  paragraph.startsWith('Hébergement') ||
                                  paragraph.startsWith('Propriété') ||
                                  paragraph.startsWith('Limitation') ||
                                  paragraph.startsWith('Liens') ||
                                  paragraph.startsWith('Crédits') ||
                                  paragraph.startsWith('Dernière') ||
                                  paragraph.startsWith('Données');
                  
                  if (isTitle) {
                    return (
                      <h2 key={index} className="text-xl font-bold text-foreground mt-8 mb-4 first:mt-0">
                        {paragraph}
                      </h2>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation between legal pages */}
            <div className="max-w-4xl mx-auto mt-8 flex justify-center gap-4">
              <Link to="/mentions-legales">
                <Button 
                  variant={isMentions ? "default" : "outline"}
                  className={!isMentions ? "border-primary/30 hover:border-primary" : ""}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Mentions Légales
                </Button>
              </Link>
              <Link to="/politique-confidentialite">
                <Button 
                  variant={!isMentions ? "default" : "outline"}
                  className={isMentions ? "border-primary/30 hover:border-primary" : ""}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Politique de Confidentialité
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Section - Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nos Services de Sécurité
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect propose une gamme complète de solutions de sécurité électronique pour particuliers et professionnels.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={service.href}
                      className="flex flex-col items-center p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                    >
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <ServiceIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground text-center">{service.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Section - Coverage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="badge-primary mb-4 justify-center">
                <MapPin className="w-4 h-4" />
                <span>Couverture Nationale</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Intervention sur Toute la France
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect intervient dans l'ensemble des régions françaises pour l'installation, la maintenance et le dépannage de vos systèmes de sécurité.
              </p>
            </motion.div>

            {/* Regions */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Nos Régions d'Intervention</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {regions.map((region, index) => (
                  <motion.span
                    key={region}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-foreground border border-primary/20"
                  >
                    {region}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Principales Villes Couvertes</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 text-center">
                {majorCities.map((city, index) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                  >
                    {city}
                  </motion.span>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8 text-sm">
                Et plus de 500 autres communes en France métropolitaine. 
                <Link to="/zones-intervention" className="text-primary hover:underline ml-1">
                  Voir toutes nos zones d'intervention →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
