import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { regionsData } from "@/data/regionsData";
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
  Bell,
  Lock,
  Wifi,
  Home as HomeIcon,
  Tv,
  Car
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import des images locales des régions
import ileDeFranceImg from "@/assets/regions/ile-de-france.webp";
import auvergneRhoneAlpesImg from "@/assets/regions/auvergne-rhone-alpes.webp";
import provenceAlpesCoteAzurImg from "@/assets/regions/provence-alpes-cote-d-azur.webp";
import nouvelleAquitaineImg from "@/assets/regions/nouvelle-aquitaine.webp";
import occitanieImg from "@/assets/regions/occitanie.webp";
import hautsDeFranceImg from "@/assets/regions/hauts-de-france.webp";
import grandEstImg from "@/assets/regions/grand-est.webp";
import paysDeLaLoireImg from "@/assets/regions/pays-de-la-loire.webp";
import bretagneImg from "@/assets/regions/bretagne.webp";
import normandieImg from "@/assets/regions/normandie.webp";
import bourgogneFrancheComteImg from "@/assets/regions/bourgogne-franche-comte.webp";
import centreValDeLoireImg from "@/assets/regions/centre-val-de-loire.webp";
import corseImg from "@/assets/regions/corse.webp";

const ZonesIntervention = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  // SEO selon le document - Title et Meta Description optimisés
  useSEO({
    title: "Expert Sécurité 2025-2026 France | Vidéosurveillance IA & Alarme NF&A2P | HD Connect",
    description: "Expert sécurité 2025-2026 : installation vidéosurveillance IA, alarmes NF&A2P et contrôle d'accès dans toute la France. Intervention express Urgence en Île-de-France.",
    keywords: "expert sécurité France 2025-2026, installation vidéosurveillance IA, alarme NF&A2P nationale, HD Connect zones intervention, sécurité électronique France",
    canonicalUrl: "https://hdconnect.fr/zones-intervention",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
  ];

  // Services principaux selon le document
  const servicesPrincipaux = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: "Caméras HD/4K, enregistrement NVR, accès distant smartphone. Installation, dépannage et location disponibles.",
      actions: ["Installation", "Dépannage", "Location"],
      link: "/services/videosurveillance"
    },
    {
      icon: Bell,
      title: "Alarmes",
      description: "Systèmes anti-intrusion certifiés NF&A2P, détection périmétrique, télésurveillance 24/7.",
      actions: ["Installation", "Dépannage", "Location"],
      link: "/services/alarme"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: "Badges, biométrie, interphonie vidéo, gestion centralisée des accès multi-sites.",
      actions: ["Installation", "Dépannage", "Location"],
      link: "/services/controle-acces"
    }
  ];

  // Services secondaires selon le document
  const servicesSecondaires = [
    { icon: Wifi, title: "Réseau", link: "/services/reseau" },
    { icon: HomeIcon, title: "Domotique", link: "/services/domotique" },
    { icon: Tv, title: "Antenne & Satellite", link: "/services/antenne-satellite" },
    { icon: Car, title: "Portails & Parking", link: "/services/portails-parking" }
  ];

  // Stats
  const stats = [
    { icon: MapPin, value: "13", label: "Régions couvertes" },
    { icon: Building2, value: "96", label: "Départements" },
    { icon: Users, value: "2000+", label: "Clients satisfaits" },
    { icon: Clock, value: "24-48h", label: "Délai d'intervention" }
  ];

  // FAQ stratégique selon le document
  const faqs = [
    {
      question: "Dans quelles zones HD Connect intervient-il en priorité ?",
      answer: "HD Connect intervient en priorité en Île-de-France, notamment à Paris et dans les départements 92, 93 et 94. Ces zones bénéficient d'interventions garanties sous 24 à 48 heures. Nous couvrons également l'ensemble des grandes métropoles françaises avec des délais adaptés."
    },
    {
      question: "Quels sont les délais d'intervention selon ma localisation ?",
      answer: "En Île-de-France : intervention rapidement. Dans les grandes métropoles (Lyon, Marseille, Toulouse, etc.) : intervention sous rapidement. Pour les autres zones : nous étudions chaque demande au cas par cas et vous communiquons un délai précis lors de votre prise de contact."
    },
    {
      question: "Y a-t-il des frais de déplacement supplémentaires ?",
      answer: "En Île-de-France, les frais de déplacement sont généralement inclus dans nos devis. Pour les interventions en province, un forfait déplacement peut s'appliquer selon la distance. Ce montant est toujours communiqué de manière transparente avant toute intervention."
    },
    {
      question: "HD Connect peut-il intervenir en urgence ?",
      answer: "Oui, nous proposons un service d'intervention d'urgence pour les pannes critiques de systèmes de sécurité. En Île-de-France, nous pouvons intervenir le jour même selon les disponibilités. Contactez-nous par téléphone pour les urgences."
    },
    {
      question: "Comment se passe la maintenance pour les clients éloignés ?",
      answer: "Nous proposons des contrats de maintenance préventive avec des passages planifiés. Pour les clients situés hors Île-de-France, nous optimisons les tournées de nos techniciens. De nombreuses vérifications peuvent également être effectuées à distance grâce à la télémaintenance."
    },
    {
      question: "Intervenez-vous pour les professionnels et les particuliers ?",
      answer: "Absolument. HD Connect accompagne aussi bien les particuliers souhaitant sécuriser leur domicile que les professionnels (commerces, bureaux, industries) et les collectivités. Nos solutions sont adaptées à chaque profil et chaque budget."
    }
  ];

  // JSON-LD ServiceAreaBusiness selon le document
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Sécurité et Domotique",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr",
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Créteil",
      "addressLocality": "Créteil",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": regionsData.map(region => ({
      "@type": "AdministrativeArea",
      "name": region.name
    })),
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Dépannage sécurité",
      "Location matériel sécurité",
      "Maintenance sécurité"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // JSON-LD FAQPage selon le document
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Bloc 1: Hero et Preuve de Confiance (E-E-A-T) */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Couverture Nationale</span>
            </div>
            
            {/* H1 selon le document */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Sécurité 2025-2026 France : <span className="text-primary">Installation, Dépannage et Location IA</span>
            </h1>
            
            {/* Texte SAB selon le document */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Basés en Île-de-France, nous protégeons la France entière grâce à notre réseau d'intervenants locaux certifiés. Notre expertise se concentre sur l'Installation, le Dépannage et la Location de <strong>Vidéosurveillance</strong>, <strong>Alarmes</strong> et <strong>Contrôle d'Accès</strong> pour garantir une sécurité optimale, où que vous soyez.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* CTA Flottant selon le document */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => {
                  const element = document.getElementById("regions-grid");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                  }
                }}
              >
                Vérifier la disponibilité dans ma zone
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary transition-all"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Style Signature */}
      <section className="py-12 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const colors = [
                'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                'from-green-500/20 to-emerald-500/20 border-green-500/30',
                'from-violet-500/20 to-purple-500/20 border-violet-500/30',
                'from-orange-500/20 to-amber-500/20 border-orange-500/30'
              ];
              const iconColors = ['text-blue-500', 'text-green-500', 'text-violet-500', 'text-orange-500'];
              return (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <div className={`text-center p-5 rounded-xl bg-gradient-to-br ${colors[index]} backdrop-blur-sm border hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                    <div className="w-12 h-12 mx-auto rounded-xl bg-card/80 flex items-center justify-center shadow-inner mb-3">
                      <stat.icon className={`w-6 h-6 ${iconColors[index]}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloc 2: Les Services Principaux */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 font-medium mb-4">
                <Shield className="w-4 h-4" />
                <span>Expertise Complète</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services Principaux : Installation, Dépannage et Location Partout en France
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trois piliers d'expertise pour une sécurité complète sur tout le territoire.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {servicesPrincipaux.map((service, index) => {
              const colors = [
                { bg: 'from-blue-500/20 to-cyan-500/20', icon: 'text-blue-500', border: 'hover:border-blue-500/50' },
                { bg: 'from-orange-500/20 to-amber-500/20', icon: 'text-orange-500', border: 'hover:border-orange-500/50' },
                { bg: 'from-violet-500/20 to-purple-500/20', icon: 'text-violet-500', border: 'hover:border-violet-500/50' }
              ];
              const colorSet = colors[index];
              return (
                <AnimatedSection key={service.title} animation="scale-in" delay={index * 100}>
                  <Link to={service.link}>
                    <Card className={`h-full hover-lift border-border group cursor-pointer transition-all duration-300 ${colorSet.border}`}>
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorSet.bg} flex items-center justify-center mb-4 shadow-lg`}>
                          <service.icon className={`w-7 h-7 ${colorSet.icon}`} />
                        </div>
                        <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.actions.map((action) => (
                            <span 
                              key={action}
                              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                            >
                              {action}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloc 3: Grille des Régions */}
      <section id="regions-grid" className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 font-medium mb-4">
                <MapPin className="w-4 h-4" />
                <span>13 Régions Couvertes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choisissez Votre Région
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cliquez sur votre région pour découvrir nos services locaux et obtenir un devis personnalisé.
              </p>
            </div>
          </AnimatedSection>

          {/* Grille des régions avec photos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regionsData.map((region, index) => {
              // Images emblématiques locales des régions françaises
              const regionImages: Record<string, string> = {
                "ile-de-france": ileDeFranceImg,
                "auvergne-rhone-alpes": auvergneRhoneAlpesImg,
                "provence-alpes-cote-d-azur": provenceAlpesCoteAzurImg,
                "nouvelle-aquitaine": nouvelleAquitaineImg,
                "occitanie": occitanieImg,
                "hauts-de-france": hautsDeFranceImg,
                "grand-est": grandEstImg,
                "pays-de-la-loire": paysDeLaLoireImg,
                "bretagne": bretagneImg,
                "normandie": normandieImg,
                "bourgogne-franche-comte": bourgogneFrancheComteImg,
                "centre-val-de-loire": centreValDeLoireImg,
                "corse": corseImg
              };
              
              // Couleurs par région
              const regionColors = [
                { bg: 'from-blue-500/20 to-cyan-500/20', icon: 'text-blue-500', border: 'hover:border-blue-500/50' },
                { bg: 'from-green-500/20 to-emerald-500/20', icon: 'text-green-500', border: 'hover:border-green-500/50' },
                { bg: 'from-violet-500/20 to-purple-500/20', icon: 'text-violet-500', border: 'hover:border-violet-500/50' },
                { bg: 'from-orange-500/20 to-amber-500/20', icon: 'text-orange-500', border: 'hover:border-orange-500/50' },
                { bg: 'from-rose-500/20 to-pink-500/20', icon: 'text-rose-500', border: 'hover:border-rose-500/50' },
                { bg: 'from-teal-500/20 to-cyan-500/20', icon: 'text-teal-500', border: 'hover:border-teal-500/50' },
                { bg: 'from-indigo-500/20 to-blue-500/20', icon: 'text-indigo-500', border: 'hover:border-indigo-500/50' },
                { bg: 'from-yellow-500/20 to-amber-500/20', icon: 'text-yellow-600', border: 'hover:border-yellow-500/50' },
                { bg: 'from-sky-500/20 to-blue-500/20', icon: 'text-sky-500', border: 'hover:border-sky-500/50' },
                { bg: 'from-lime-500/20 to-green-500/20', icon: 'text-lime-600', border: 'hover:border-lime-500/50' },
                { bg: 'from-fuchsia-500/20 to-pink-500/20', icon: 'text-fuchsia-500', border: 'hover:border-fuchsia-500/50' },
                { bg: 'from-red-500/20 to-orange-500/20', icon: 'text-red-500', border: 'hover:border-red-500/50' },
                { bg: 'from-emerald-500/20 to-teal-500/20', icon: 'text-emerald-500', border: 'hover:border-emerald-500/50' }
              ];
              
              const colorSet = regionColors[index % regionColors.length];
              
              return (
                <AnimatedSection key={region.slug} animation="scale-in" delay={index * 50}>
                  <Link to={`/zones-intervention/${region.slug}`}>
                    <Card className={`hover-lift h-full border-border group cursor-pointer transition-all duration-300 overflow-hidden ${colorSet.border}`}>
                      {/* Image de la région */}
                      <div className="relative h-32 overflow-hidden">
                        <img 
                          src={regionImages[region.slug]} 
                          alt={`Région ${region.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${colorSet.bg} backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                          <MapPin className={`w-5 h-5 ${colorSet.icon}`} />
                        </div>
                        <ArrowRight className="absolute top-3 right-3 w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                          {region.name}
                        </h3>
                        
                        <div className="flex flex-wrap gap-1 mb-3">
                          {region.mainCities.slice(0, 3).map((city) => (
                            <span 
                              key={city}
                              className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                            >
                              {city}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{region.departments.length}</span> départements
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloc 4: Les Services Secondaires */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-600 font-medium mb-4">
                <Wifi className="w-4 h-4" />
                <span>Services Complémentaires</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Une Expertise Complémentaire : Réseau, Domotique et Automatisme
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des services additionnels pour une protection et un confort complets.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {servicesSecondaires.map((service, index) => {
              const colors = [
                { bg: 'from-cyan-500/20 to-blue-500/20', icon: 'text-cyan-500' },
                { bg: 'from-emerald-500/20 to-green-500/20', icon: 'text-emerald-500' },
                { bg: 'from-amber-500/20 to-orange-500/20', icon: 'text-amber-500' },
                { bg: 'from-rose-500/20 to-pink-500/20', icon: 'text-rose-500' }
              ];
              const colorSet = colors[index];
              return (
                <AnimatedSection key={service.title} animation="scale-in" delay={index * 50}>
                  <Link to={service.link}>
                    <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group text-center hover:scale-105">
                      <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${colorSet.bg} flex items-center justify-center mb-3 shadow-md`}>
                        <service.icon className={`w-7 h-7 ${colorSet.icon}`} />
                      </div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {service.title}
                      </h3>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bloc 5: FAQ Stratégique */}
      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes sur notre Couverture Nationale et nos Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retrouvez les réponses aux questions les plus courantes concernant notre couverture géographique et nos modalités d'intervention.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <AccordionItem value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bloc 6: Le Répertoire Exhaustif (Départements) */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 font-medium mb-4">
                <Building2 className="w-4 h-4" />
                <span>96 Départements</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Liste Complète des Départements Couverts par HD Connect
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retrouvez l'ensemble des départements où nous intervenons, classés par région.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-3">
              {regionsData.map((region, index) => (
                <AnimatedSection key={region.slug} animation="fade-up" delay={index * 30}>
                  <AccordionItem value={region.slug} className="bg-card border border-border rounded-xl px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{region.name}</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          ({region.departments.length} départements)
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {region.departments.map((dept) => (
                          <span 
                            key={dept.code}
                            className="text-sm px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                          >
                            {dept.name} ({dept.code})
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Services Uniformes Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des Services Uniformes sur Tout le Territoire
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Où que vous soyez en France, bénéficiez de la même qualité de service et d'expertise HD Connect.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Vidéosurveillance HD/4K",
                "Systèmes d'alarme certifiés",
                "Contrôle d'accès biométrique",
                "Domotique intelligente",
                "Réseau & câblage",
                "Maintenance 24/7"
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 8: Conclusion et Appel à l'Action */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Votre Projet de Sécurité Commence Ici
            </h2>
            <p className="text-muted-foreground mb-8">
              Notre réseau s'étend chaque jour. Contactez-nous pour vérifier notre disponibilité 
              dans votre secteur et obtenir un devis personnalisé pour l'Installation, le Dépannage ou la Location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un Devis Personnalisé
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-primary/20 backdrop-blur-sm text-primary border-2 border-primary/50 hover:bg-primary/30 hover:border-primary/70 text-lg px-8 transition-all"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZonesIntervention;
