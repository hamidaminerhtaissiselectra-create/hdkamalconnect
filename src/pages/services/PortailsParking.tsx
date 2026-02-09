import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { DoorOpen, Car, Phone, Key, Smartphone, MapPin, HardHat, Settings, CheckCircle, Building2, Home, Zap, Users, Award, MessageSquare, Building, Store, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServiceLinks from "@/components/ServiceLinks";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceHero from "@/components/ServiceHero";
import ContentSection from "@/components/ContentSection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceShowcase from "@/components/ServiceShowcase";
import ImageBreak from "@/components/ImageBreak";
import RegionCoverage from "@/components/RegionCoverage";
import CTAIntermediate from "@/components/CTAIntermediate";
import CTAFloating from "@/components/CTAFloating";
import LightStatsSection from "@/components/LightStatsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ColoredAdvantagesSection from "@/components/ColoredAdvantagesSection";
import ColoredProcessSteps from "@/components/ColoredProcessSteps";
import TechnologiesGaranties from "@/components/TechnologiesGaranties";
import GarantiesSection from "@/components/GarantiesSection";
import BlogCTASection from "@/components/BlogCTASection";
import heroPortailsImage from "@/assets/hero-portails.webp";
import portailAutoImage from "@/assets/portail-coulissant-villa.webp";
import garageMotorisImage from "@/assets/garage-motorise.webp";
import barriereLevantImage from "@/assets/barriere-parking-auto.webp";
import barriereParkingImage from "@/assets/barriere-parking.webp";
import portailMaisonImage from "@/assets/portail-maison-particulier.webp";
import servicePageImage from "@/assets/service-page-portails.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryPortailCoulissant from "@/assets/gallery-portail-coulissant.webp";
import galleryPortailGarage from "@/assets/gallery-portail-garage.webp";
import galleryPortailBarriere from "@/assets/gallery-portail-barriere.webp";

const PortailsParking = () => {
  const { portailsParking } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Motorisation Portail & Barrière Parking 2025-2026 | Accès Intelligent IA | HD Connect",
    description: "Expert en motorisation de portails et barrières parking 2025-2026. Ouverture par smartphone, reconnaissance de plaque IA, installation certifiée. Devis gratuit rapidement.",
    keywords: "motorisation portail automatique 2025-2026, barrière parking intelligente, reconnaissance plaque immatriculation IA, porte garage motorisée, HD Connect, accès parking entreprise",
    canonicalUrl: "https://hdconnect.fr/services/portails-parking",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Portails & Parking", url: "/services/portails-parking" },
  ];

  const faqItems = portailsParking.faq || [];

  const features = [
    { icon: DoorOpen, title: "Portails Automatiques Motorisés", description: "Motorisation de portails coulissants et battants avec télécommandes, digicodes, badges et contrôle à distance via smartphone pour un accès sécurisé." },
    { icon: Car, title: "Portes de Garage Motorisées", description: "Installation et motorisation de portes sectionnelles, basculantes et enroulables avec ouverture/fermeture automatique et sécurité anti-pincement." },
    { icon: Key, title: "Systèmes de Contrôle d'Accès", description: "Gestion complète des accès par badges, télécommandes, codes PIN ou reconnaissance faciale. Historique des passages et gestion multi-utilisateurs." },
    { icon: Phone, title: "Interphones et Vidéophones", description: "Solutions audio et vidéo pour immeubles et résidences, avec ouverture à distance sécurisée, enregistrement des appels et notifications push." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Visite Technique Gratuite", description: "Évaluation sur site de vos besoins, mesures précises, analyse de la structure et choix de la solution adaptée à votre configuration." },
    { icon: HardHat, title: "2. Installation Professionnelle", description: "Pose du système de motorisation, interphone ou barrière par nos techniciens qualifiés. Travaux réalisés en minimisant les perturbations." },
    { icon: Settings, title: "3. Programmation et Configuration", description: "Configuration complète des télécommandes, badges, codes PIN et applications mobiles. Formation des utilisateurs à l'utilisation du système." },
    { icon: CheckCircle, title: "4. Garantie et Maintenance", description: "Garantie constructeur sur les équipements, dépannage rapide et contrats de maintenance pour une tranquillité d'esprit durable." },
  ];

  const useCases = [
    { 
      icon: Home, 
      title: "Résidences Individuelles", 
      description: "Motorisation de portails et portes de garage pour plus de confort et de sécurité. Accès par télécommande, code PIN ou smartphone avec historique des passages.",
      features: ["Portail coulissant/battant", "Porte garage motorisée", "Télécommande", "Accès smartphone"]
    },
    { 
      icon: Building2, 
      title: "Immeubles et Copropriétés", 
      description: "Interphones vidéo pour chaque appartement, portail collectif motorisé et gestion centralisée des accès. Ouverture à distance sécurisée.",
      features: ["Interphone vidéo", "Portail motorisé", "Gestion centralisée", "Ouverture à distance"]
    },
    { 
      icon: Store, 
      title: "Commerces et Entreprises", 
      description: "Portails et barrières de parking motorisés avec gestion des accès par badge ou code. Comptage des véhicules et historique des passages.",
      features: ["Barrière parking", "Gestion badges", "Comptage véhicules", "Historique accès"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Sécurisés", 
      description: "Systèmes de contrôle d'accès robustes pour zones sensibles. Intégration avec systèmes d'alarme et vidéosurveillance pour une sécurité maximale.",
      features: ["Contrôle d'accès avancé", "Intégration alarme", "Reconnaissance faciale", "Audit trail complet"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Reconnue", description: "Partenaires certifiés des plus grandes marques (Somfy, Nice, BFT, Came). Installation conforme aux normes de sécurité." },
    { icon: Zap, title: "Installation Rapide", description: "Intervention professionnelle avec minimal de perturbations. Mise en service complète en 1 à 2 jours." },
    { icon: Key, title: "Sécurité Renforcée", description: "Systèmes sécurisés avec chiffrement des codes, historique des passages et alertes en temps réel." },
    { icon: Users, title: "Support Dédié", description: "Hotline technique disponible, dépannage rapide et contrats de maintenance pour une tranquillité d'esprit." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-violet-500/5 to-indigo-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Portails Automatiques et Barrières Parking"
        serviceDescription="Expert en motorisation de portails, portes de garage, barrières de parking et interphones. Installation professionnelle, contrôle d'accès sécurisé. Intervention sur toute la France."
        serviceUrl="/services/portails-parking"
        serviceImage="/assets/service-portail.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Motorisation Portails, Portes de Garage et Barrières Parking"
          subtitle="Expert Portails & Parking"
          description="Automatisez vos accès pour plus de confort et de sécurité. HD Connect motorise vos portails, portes de garage et barrières de parking avec contrôle par télécommande, code PIN ou smartphone."
          backgroundImage={heroPortailsImage}
          icon={<DoorOpen className="w-4 h-4" />}
          badgeText="Expert Portails & Parking"
          accentColor="portail"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Choisir la Motorisation Intelligente par IA en 2025-2026 ?"
          badge="Confort & Accès IA"
          badgeIcon={<DoorOpen className="w-4 h-4" />}
          imagePosition="right"
          image={portailAutoImage}
          imageAlt="Portail automatique motorisé haute sécurité d'une résidence moderne avec système de contrôle d'accès intelligent intégré"
          content={
            <>
              <p>
                La motorisation des portails et portes de garage offre bien plus que du confort : c'est aussi une question de <strong>sécurité</strong> et de <strong>praticité</strong>. En 2025-2026, HD Connect intègre l'<strong>Intelligence Artificielle</strong> pour une gestion des accès sans friction.
              </p>
              <p>
                Nos systèmes de <strong>reconnaissance de plaque d'immatriculation (LPR) par IA</strong> permettent une ouverture automatique et sécurisée de votre portail ou barrière de parking dès votre arrivée, sans aucune manipulation. Pour les visiteurs, nos interphones vidéo IP avec IA filtrent les appels et vous notifient directement sur votre smartphone avec une image haute définition.
              </p>
              <p>
                Chez HD Connect, nous installons des systèmes de motorisation certifiés (Somfy, Nice, Came) conformes aux normes de sécurité les plus strictes. Nos solutions intègrent des <strong>capteurs de sécurité intelligents</strong> capables de distinguer un obstacle d'un simple passage, évitant ainsi les arrêts intempestifs tout en garantissant une protection totale.
              </p>
              <p>
                Nos systèmes offrent une <strong>gestion centralisée et cloud</strong> : vous contrôlez vos accès de n'importe où dans le monde, avec un historique complet des passages pour une traçabilité parfaite.
              </p>
              <p>
                L'intégration de la <strong>Reconnaissance de Plaque d'Immatriculation (LPR) par IA</strong> permet une gestion des accès ultra-rapide et sécurisée pour les flottes de véhicules. De plus, nos interphones vidéo IP offrent une qualité d'image HD et une ouverture à distance via smartphone, augmentant le confort et la sécurité des résidents. En cas de panne critique, notre service d'urgence vous assure une **intervention sur site Urgence** en Île-de-France.
              </p>
            </>
          }
          delay={0}
        />

        {/* SECTION FONCTIONNALITÉS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Solutions de Motorisation Complètes
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-indigo-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Comment Fonctionne un Système de Motorisation Sécurisé ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système de motorisation professionnel repose sur plusieurs composants interdépendants : le moteur, la carte de commande, les capteurs de sécurité et les interfaces de contrôle.
                </p>
                <p>
                  <strong>Le moteur est le cœur du système</strong>. Nous utilisons exclusivement des moteurs certifiés CE, conçus pour fonctionner 24h/24 en toutes conditions météorologiques. Le moteur est équipé d'un système de freinage automatique qui maintient le portail fermé même en cas de coupure de courant.
                </p>
                <p>
                  <strong>La carte de commande gère l'ensemble du système</strong>. Elle reçoit les ordres (télécommande, code PIN, badge, smartphone) et commande l'ouverture/fermeture du portail. Elle monitore en permanence les capteurs de sécurité et arrête immédiatement le portail en cas de détection d'obstacle.
                </p>
                <p>
                  <strong>Les capteurs de sécurité sont obligatoires</strong>. Les photo-cellules détectent tout obstacle dans la trajectoire du portail. Les détecteurs de présence évitent l'ouverture du portail si quelqu'un se tient trop près. Ces capteurs sont testés régulièrement pour garantir leur bon fonctionnement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={servicePageImage}
          alt="Portail automatique motorisé haute sécurité s'ouvrant au coucher du soleil avec système de contrôle intelligent"
          caption="Motorisation de portails avec accès intelligent et contrôle par smartphone"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Automatisez vos accès"
          subtitle="Devis gratuit pour la motorisation de votre portail ou porte de garage."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="portail"
          showBenefits={true}
          urgencyText="Partenaire certifié Somfy, Nice, BFT"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Motorisation Portails en Chiffres"
          stats={[
            { value: "30 000+", label: "Cycles garantis", description: "ouverture/fermeture" },
            { value: "2 ans", label: "Garantie moteur", description: "pièces et main d'œuvre" },
            { value: "1-2j", label: "Installation", description: "mise en service rapide" },
            { value: "24/7", label: "Dépannage", description: "intervention express" },
          ]}
          variant="portail"
        />

        {/* SECTION CAS D'USAGE - COMPOSANT AMÉLIORÉ */}
        <UseCasesSection
          title="Solutions Adaptées à Chaque Type d'Accès"
          subtitle="HD Connect propose des solutions de motorisation pour tous les types de portails, particuliers comme professionnels."
          useCases={useCases}
          accentColor="portail"
        />

        {/* SECTION AVANTAGES HD CONNECT */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Motorisation ?"
          advantages={advantages}
          accentColor="portail"
        />

        {/* SECTION ZONE GÉOGRAPHIQUE DYNAMIQUE */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Installation Portails & Parking sur Toute la France
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                HD Connect intervient sur l'ensemble du territoire national pour la motorisation de vos portails et barrières de parking. Que vous soyez en <strong>Île-de-France</strong> (Paris, Versailles, Saint-Denis, Boulogne), dans le <strong>Nord</strong> (Lille, Valenciennes), le <strong>Sud</strong> (Marseille, Nice, Toulouse), l'<strong>Est</strong> (Lyon, Strasbourg) ou l'<strong>Ouest</strong> (Nantes, Bordeaux, Rennes), nos équipes se déplacent pour automatiser vos accès.
              </p>
              <div className="mt-6">
                <Link to="/zones-intervention">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Voir toutes nos zones d'intervention
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à automatiser vos accès ?"
          subtitle="Devis gratuit et installation professionnelle de votre motorisation."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <ColoredProcessSteps
          title="Votre Projet de Motorisation en 4 Étapes"
          steps={processSteps}
          accentColor="portail"
        />

        <ServicePrestations serviceName="Portails & Parking" interventionMode={true} />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Devis de Motorisation
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée rapidement. Visite technique gratuite, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Formulaire de Devis en Ligne
                </Button>
                <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phoneMobile}
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FLOATING CONVERSION */}
        <CTAFloating serviceName="accès" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="portail" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["conseils"]} 
          title="Guides Motorisation et Accès"
        />

        <ServiceLinks currentService="portails-parking" />

        {/* IMAGE BREAK */}
        <ImageBreak 
          image={garageMotorisImage} 
          alt="Porte de garage motorisée HD Connect"
          caption="Automatisez vos accès pour plus de confort et de sécurité au quotidien"
        />

        {/* SEO RÉGIONS FRANCE */}
        <RegionCoverage 
          serviceName="Portails & Parking"
          serviceSlug="portails-parking"
        />

        {/* GALERIE RÉALISATIONS */}
        <ServiceShowcase
          title="Nos Réalisations Portails & Motorisation"
          description="Découvrez nos installations de portails automatiques et barrières de parking"
          images={[
            { src: galleryPortailCoulissant, alt: "Portail coulissant aluminium villa moderne" },
            { src: galleryPortailGarage, alt: "Porte garage sectionnelle motorisée" },
            { src: galleryPortailBarriere, alt: "Barrière levante parking entreprise" }
          ]}
        />

        {/* SECTION FAQ EXPERTE ACCORDÉON */}
        <FAQAccordion 
          items={faqItems}
          title="Questions Fréquentes sur les Portails"
        />
      </main>
      <Footer />
    </div>
  );
};

export default PortailsParking;
