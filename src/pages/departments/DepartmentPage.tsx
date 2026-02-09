import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import MiniTestimonials from "@/components/MiniTestimonials";
import WhyHDConnect from "@/components/WhyHDConnect";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import DepartmentHeroParallax from "@/components/department/DepartmentHeroParallax";
import { getDepartmentBySlug, allDepartments, getDepartmentsByRegion } from "@/data/departmentsData";
import { getCitiesByDepartment } from "@/data/citiesData";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Building2,
  Shield,
  Phone,
  CheckCircle,
  Clock,
  Award,
  Users,
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Zap,
  Building,
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const DepartmentPage = () => {
  const { departmentSlug } = useParams<{ departmentSlug: string }>();
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  if (!departmentSlug) {
    return <Navigate to="/zones-intervention" replace />;
  }

  const department = getDepartmentBySlug(departmentSlug);

  if (!department) {
    return <Navigate to="/zones-intervention" replace />;
  }

  // Récupérer les villes du département qui ont une page dédiée
  const departmentCities = getCitiesByDepartment(department.code);

  useSEO({
    title: `Expert Sécurité ${department.name} (${department.code}) | Vidéosurveillance & Alarme | HD Connect`,
    description: department.seoDescription,
    keywords: `sécurité ${department.name}, ${department.code}, vidéosurveillance ${department.name}, alarme ${department.name}, installation caméra ${department.code}, HD Connect`,
    canonicalUrl: `https://hdconnect.fr/departements/${department.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: department.region, url: `/zones-intervention/${department.regionSlug}` },
    { name: `${department.name} (${department.code})`, url: `/departements/${department.slug}` },
  ];

  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: `Installation de caméras HD et 4K dans le ${department.code}. Surveillance intérieure et extérieure.`,
      link: "/services/videosurveillance"
    },
    {
      icon: ShieldAlert,
      title: "Systèmes d'Alarme",
      description: `Alarmes anti-intrusion certifiées NF&A2P en ${department.name}. Télésurveillance 24/7.`,
      link: "/services/alarme"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: `Solutions de contrôle d'accès professionnelles dans le ${department.code}. Badges, biométrie.`,
      link: "/services/controle-acces"
    },
    {
      icon: Home,
      title: "Domotique",
      description: `Maison intelligente en ${department.name}. Automatisation sécurité et confort.`,
      link: "/services/domotique"
    },
    {
      icon: Wifi,
      title: "Réseau & Câblage",
      description: `Infrastructure réseau professionnelle dans le ${department.code}. WiFi 6E, câblage Cat 6A.`,
      link: "/services/reseau"
    },
    {
      icon: Wrench,
      title: "Maintenance 24/7",
      description: `Maintenance et dépannage express en ${department.name}. Contrats préventifs.`,
      link: "/services/maintenance"
    }
  ];

  const faqItems = [
    {
      question: `HD Connect intervient-il dans tout le département ${department.name} (${department.code}) ?`,
      answer: `Oui, HD Connect assure une couverture complète du département ${department.name}. Nos techniciens interviennent dans toutes les communes du ${department.code}, notamment ${department.mainCities.slice(0, 5).join(", ")}.`
    },
    {
      question: `Quels sont les délais d'intervention dans le ${department.code} ?`,
      answer: `Nos délais d'intervention en ${department.name} sont généralement de 24 à 48 heures pour les installations programmées. Pour les urgences, nous pouvons intervenir le jour même selon disponibilité.`
    },
    {
      question: `Les frais de déplacement sont-ils inclus dans le ${department.code} ?`,
      answer: `Les frais de déplacement en ${department.name} sont généralement inclus dans nos devis. Nous vous communiquons un devis transparent avant toute intervention.`
    },
    {
      question: `Quelles villes principales couvrez-vous dans le ${department.code} ?`,
      answer: `Nous intervenons dans les principales villes du ${department.name} : ${department.mainCities.join(", ")}, ainsi que toutes les autres communes du département.`
    },
    {
      question: `Proposez-vous des contrats de maintenance dans le ${department.code} ?`,
      answer: `Oui, nous proposons des contrats de maintenance annuels pour les clients du ${department.name}. Ces contrats incluent des visites préventives régulières et un support prioritaire.`
    }
  ];

  // JSON-LD pour la page département
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité ${department.name}`,
    "image": "https://hdconnect.fr/logo.png",
    "url": `https://hdconnect.fr/departements/${department.slug}`,
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${department.name} (${department.code})`
    },
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Maintenance sécurité"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Départements voisins de la même région
  const regionDepartments = getDepartmentsByRegion(department.regionSlug);
  const nearbyDepartments = regionDepartments
    .filter(d => d.slug !== department.slug)
    .slice(0, 4);

  const priorityBadge = department.priority === 'primaire' 
    ? { label: "Zone Primaire", color: "bg-green-500/10 text-green-600 border-green-500/20" }
    : { label: "Zone Secondaire", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section avec Parallax */}
      <DepartmentHeroParallax department={department} breadcrumbItems={breadcrumbItems} />

      {/* Infos Département - avec animations */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Building2, value: `${department.mainCities.length}+`, label: "Villes principales" },
              { icon: Users, value: department.population, label: "Habitants" },
              { icon: Clock, value: "24h", label: "Délai max" },
              { icon: Shield, value: "5 ans", label: "Garantie" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-card rounded-xl border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services dans le {department.code}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect propose une gamme complète de solutions de sécurité pour les particuliers et professionnels du {department.name}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="hover-lift h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Villes Principales */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Villes Principales du {department.code}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos services dans les principales villes du département.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {department.mainCities.map((cityName, index) => {
              // Vérifier si la ville a une page dédiée
              const cityData = departmentCities.find(c => c.name === cityName);
              const hasPage = !!cityData;
              
              return (
                <AnimatedSection key={cityName} animation="scale-in" delay={index * 50}>
                  {hasPage ? (
                    <Link to={`/villes/${cityData.slug}`}>
                      <div className="p-4 bg-card border border-border rounded-xl text-center hover-lift cursor-pointer transition-all hover:border-primary/50">
                        <Building className="w-5 h-5 text-primary mx-auto mb-2" />
                        <span className="font-medium text-foreground text-sm">{cityName}</span>
                        <div className="text-xs text-primary mt-1">Voir →</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="p-4 bg-card border border-border rounded-xl text-center">
                      <Building className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                      <span className="font-medium text-foreground text-sm">{cityName}</span>
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Points Forts Économiques */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Atouts Économiques du {department.name}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              HD Connect accompagne les acteurs économiques majeurs du département.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {department.economicHighlights.map((highlight, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Award className="w-6 h-6" />
                  <span className="text-sm text-center">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Départements Voisins */}
      {nearbyDepartments.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Départements Voisins
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  HD Connect intervient également dans les départements limitrophes de {department.region}.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {nearbyDepartments.map((nearbyDept, index) => (
                <AnimatedSection key={nearbyDept.slug} animation="scale-in" delay={index * 100}>
                  <Link to={`/departements/${nearbyDept.slug}`}>
                    <Card className="hover-lift h-full border-border group cursor-pointer transition-all duration-300 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                          {nearbyDept.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Département {nearbyDept.code}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes - {department.name} ({department.code})
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <MiniTestimonials />

      {/* Why HD Connect */}
      <WhyHDConnect />

      {/* Quote Section */}
      <section id="quote" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Devis Gratuit - {department.name} ({department.code})
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Obtenez votre devis personnalisé pour votre projet de sécurité dans le {department.code}.
              </p>
            </div>
          </AnimatedSection>
          
          <QuoteFunnelSimple />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepartmentPage;
