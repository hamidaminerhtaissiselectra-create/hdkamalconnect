import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wifi, Cable, Shield, Server, Network, Settings, CheckCircle, Zap, HardHat, MapPin, Lock, Users, Award, Phone, MessageSquare, Building, Store, Factory, Home, Clock } from "lucide-react";
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
import heroReseauImage from "@/assets/hero-reseau.webp";
import networkServerImage from "@/assets/reseau-baie-cables.webp";
import reseauSwitchImage from "@/assets/reseau-switch.webp";
import reseauWifiImage from "@/assets/reseau-wifi-install.webp";
import reseauMaisonImage from "@/assets/reseau-maison-particulier.webp";
import servicePageImage from "@/assets/service-page-reseau.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryReseauRack from "@/assets/gallery-reseau-rack.webp";
import galleryReseauSwitch from "@/assets/gallery-reseau-switch.webp";
import galleryReseauWifi from "@/assets/gallery-reseau-wifi.webp";

const Reseau = () => {
  const { reseau } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Installation Réseau WiFi 7 & Câblage Cat 7 Professionnel 2025-2026 | HD Connect",
    description: "Expert en infrastructure réseau haute performance 2025-2026. WiFi 7, câblage certifié Cat 7, sécurité Firewall IA. Connectivité stable et sécurisée pour entreprises.",
    keywords: "installation réseau WiFi 7 2025-2026, câblage informatique Cat 7, réseau professionnel fibre, sécurité réseau IA, infrastructure IT entreprise, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/reseau",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Réseau", url: "/services/reseau" },
  ];

  const faqItems = reseau.faq || [];

  const features = [
    { icon: Wifi, title: "WiFi 6E/7 Ultra-Performant", description: "Installation de bornes WiFi dernière génération pour une couverture optimale, des débits ultra-rapides (jusqu'à 10 Gbps) et une latence minimale pour vos applications critiques." },
    { icon: Cable, title: "Câblage Cat 6A/7 Certifié", description: "Infrastructure réseau certifiée Fluke avec garantie 25 ans. Supports 10 Gbps jusqu'à 100m (Cat 6A) ou 25/40 Gbps (Cat 7) pour une fiabilité maximale et une évolutivité garantie." },
    { icon: Shield, title: "Sécurité Réseau Avancée", description: "Mise en place de pare-feu nouvelle génération (UTM), segmentation VLAN, VPN chiffré et filtrage web. Protection complète contre les cyberattaques, intrusions et fuites de données." },
    { icon: Server, title: "Architecture Évolutive et Scalable", description: "Conception de réseaux modulaires avec VLAN segmentés, redondance et failover automatique. Évolutivité garantie pour accompagner votre croissance sans refonte majeure." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit et Conception", description: "Analyse complète de vos besoins, étude de site, évaluation de l'infrastructure existante et conception de l'architecture réseau la plus performante et sécurisée." },
    { icon: HardHat, title: "2. Installation Physique", description: "Déploiement du câblage structuré, installation des baies de brassage, des switchs, des routeurs et des bornes WiFi. Travaux réalisés en minimisant l'impact sur votre activité." },
    { icon: Settings, title: "3. Configuration et Sécurité", description: "Configuration complète des VLAN, du WiFi avec authentification 802.1X, du Firewall UTM, des VPN et des politiques de sécurité. Tests exhaustifs avant mise en production." },
    { icon: CheckCircle, title: "4. Certification et Support", description: "Tests de performance avec testeur professionnel Fluke, certification du câblage avec rapport détaillé. Support technique continu et mises à jour de sécurité régulières." },
  ];

  const useCases = [
    { 
      icon: Building, 
      title: "Entreprises et Bureaux", 
      description: "Infrastructure réseau robuste pour supporter votre croissance. Câblage structuré certifié, WiFi professionnel, Firewall UTM et VPN pour une sécurité maximale.",
      features: ["Câblage Cat 6A certifié", "WiFi 6E multi-SSID", "Firewall UTM", "VPN site-to-site"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Logistiques", 
      description: "Réseaux haute disponibilité avec redondance complète. Support des applications critiques, monitoring en temps réel et maintenance proactive.",
      features: ["Redondance complète", "Monitoring 24/7", "Câblage blindé", "Synchronisation horaire"]
    },
    { 
      icon: Store, 
      title: "Commerces et Retail", 
      description: "Réseaux sécurisés pour les points de vente avec WiFi client et réseau administrateur segmenté. Intégration avec les systèmes de caisse et de vidéosurveillance.",
      features: ["WiFi client isolé", "Segmentation VLAN", "Filtrage web", "Bande passante garantie"]
    },
    { 
      icon: Home, 
      title: "Résidences et Copropriétés", 
      description: "Fibre optique et WiFi 6 pour les immeubles collectifs. Distribution de la bande passante équitable et sécurité renforcée pour les données résidentes.",
      features: ["Fibre optique", "WiFi 6 commun", "Segmentation par étage", "Accès sécurisé"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Certification Fluke", description: "Tous nos câblages sont certifiés par testeur Fluke professionnel avec garantie 25 ans. Rapports détaillés et conformité aux normes ISO/IEC 6A." },
    { icon: Zap, title: "Installation Express", description: "Déploiement rapide et professionnel minimisant l'interruption de service. Équipes expérimentées et matériel de qualité professionnelle." },
    { icon: Lock, title: "Sécurité Renforcée", description: "Pare-feu nouvelle génération, segmentation VLAN, VPN chiffré et filtrage web. Protection complète contre les menaces cyber." },
    { icon: Clock, title: "Support 24/7 Dédié", description: "Hotline technique disponible 24h/24. Monitoring proactif, alertes en temps réel et intervention rapide en cas de problème." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-500/5 to-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/5 to-sky-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Réseau Informatique Professionnel"
        serviceDescription="Expert en infrastructure réseau : câblage Cat 6A/7 certifié, WiFi 6E/7, Firewall UTM, VPN. Installation, configuration et maintenance pour entreprises et résidences. Intervention sur toute la France."
        serviceUrl="/services/reseau"
        serviceImage="/assets/service-reseau.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Infrastructure Réseau Informatique Professionnelle"
          subtitle="Expert Réseau Informatique"
          description="Construisez une infrastructure réseau fiable et sécurisée. HD Connect installe des réseaux haute performance : câblage structuré certifié, WiFi 6E/7, Firewall UTM et VPN pour une connectivité optimale et une sécurité maximale."
          backgroundImage={heroReseauImage}
          icon={<Network className="w-4 h-4" />}
          badgeText="Expert Réseau Informatique"
          accentColor="reseau"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Choisir une Infrastructure Réseau Haute Performance en 2025-2026 ?"
          badge="Performance & Sécurité IA"
          badgeIcon={<Network className="w-4 h-4" />}
          imagePosition="right"
          image={networkServerImage}
          imageAlt="Technicien expert certifié intervenant sur une baie de brassage serveur haute densité avec câblage structuré Cat 7 et switchs 10Gbps"
          content={
            <>
              <p>
                Un réseau informatique performant est le fondement de toute entreprise moderne. Une infrastructure réseau défaillante coûte en moyenne <strong>5 600 € par heure d'indisponibilité</strong> selon les études IDC. Au-delà des coûts directs, une mauvaise connectivité impacte la productivité.
              </p>
              <p>
                En 2025-2026, HD Connect déploie des solutions de <strong>WiFi 7 et de câblage Cat 7</strong> permettant des débits allant jusqu'à 40 Gbps. Nos infrastructures intègrent désormais une <strong>sécurité réseau pilotée par IA</strong>, capable de détecter et de bloquer les cybermenaces en temps réel avant qu'elles n'atteignent vos serveurs.
              </p>
              <p>
                Nos solutions combinent un <strong>câblage structuré certifié Fluke</strong> avec une garantie constructeur de 25 ans, assurant une pérennité maximale à votre investissement IT.
              </p>
              <p>
                Notre approche privilégie la <strong>scalabilité et la redondance intelligente</strong>. Votre réseau est conçu pour supporter l'augmentation massive des flux de données liés à l'IA et au cloud computing, tout en garantissant une disponibilité de 99,99%.
              </p>
              <p>
                Chaque installation de câblage est soumise à une <strong>certification Fluke</strong>, garantissant une performance maximale et une conformité aux normes internationales. Ce rapport de certification est un gage de qualité pour votre assurance et un prérequis pour les infrastructures critiques. En cas de panne critique, notre service d'urgence vous assure une **intervention sur site Urgence** en Île-de-France.
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
                Technologies Réseau de Pointe
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
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-sky-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-lg flex-shrink-0"
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
                Comment Fonctionne une Infrastructure Réseau Moderne ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un réseau informatique professionnel repose sur plusieurs couches interconnectées : la couche physique (câblage), la couche d'accès (WiFi, switchs), la couche de distribution (routeurs, Firewall) et la couche de sécurité (VPN, filtrage).
                </p>
                <p>
                  <strong>Le câblage structuré est la fondation</strong>. Un câblage Cat 6A certifié supporte 10 Gbps jusqu'à 100 mètres, tandis que le Cat 7 atteint 25 à 40 Gbps. Chaque câble est testé individuellement avec un testeur Fluke pour garantir la conformité aux normes ISO/IEC 6A. La certification inclut un rapport détaillé et une garantie 25 ans.
                </p>
                <p>
                  <strong>Le WiFi 6E/7 offre une expérience utilisateur fluide</strong>. Contrairement au WiFi 5, le WiFi 6 utilise la technologie OFDMA qui divise le canal en sous-canaux, permettant à plusieurs appareils de communiquer simultanément sans ralentissement. Le WiFi 6E ajoute la bande 6 GHz pour encore plus de capacité.
                </p>
                <p>
                  <strong>La sécurité est intégrée à chaque niveau</strong>. Un Firewall UTM (Unified Threat Management) inspecte le trafic entrant/sortant, bloque les menaces connues et détecte les comportements suspects. La segmentation VLAN isole les réseaux sensibles (données financières, données clients) des réseaux publics (WiFi visiteurs). Le VPN chiffre les connexions distantes pour protéger les données en transit.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={servicePageImage}
          alt="Salle serveur professionnelle avec câblage Cat7 organisé et switchs haute performance avec LEDs actives"
          caption="Infrastructure réseau haute performance avec câblage certifié Fluke"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Boostez votre infrastructure réseau"
          subtitle="Étude gratuite de votre infrastructure par nos ingénieurs réseau certifiés."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="reseau"
          showBenefits={true}
          urgencyText="Certification Fluke incluse"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Performance Réseau Garantie"
          stats={[
            { value: "10Gb/s", label: "Débit maximal", description: "câblage Cat 6A certifié" },
            { value: "25 ans", label: "Garantie câblage", description: "certification Fluke" },
            { value: "99.9%", label: "Disponibilité", description: "architecture redondante" },
            { value: "24/7", label: "Support technique", description: "monitoring proactif" },
          ]}
          variant="reseau"
        />

        {/* SECTION CAS D'USAGE - COMPOSANT AMÉLIORÉ */}
        <UseCasesSection
          title="Solutions Réseau Adaptées à Votre Secteur"
          subtitle="HD Connect conçoit des réseaux optimisés pour chaque type d'environnement, particuliers comme professionnels."
          useCases={useCases}
          accentColor="reseau"
        />

        {/* SECTION AVANTAGES HD CONNECT */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Réseau ?"
          advantages={advantages}
          accentColor="reseau"
        />

        {/* SECTION COUVERTURE FRANCE PAR RÉGIONS */}
        <RegionCoverage serviceName="Réseau & Câblage" serviceSlug="reseau" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à optimiser votre réseau ?"
          subtitle="Nos ingénieurs conçoivent gratuitement votre infrastructure réseau."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <ColoredProcessSteps
          title="Votre Projet Réseau en 4 Étapes"
          steps={processSteps}
          accentColor="reseau"
        />

        <ServicePrestations serviceName="Réseau" interventionMode={true} />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations Réseau"
          description="Découvrez nos réalisations : baies de brassage, serveurs et infrastructures professionnelles."
          images={[
            { src: galleryReseauRack, alt: "Baie serveur avec câblage organisé" },
            { src: galleryReseauSwitch, alt: "Switch réseau LEDs actives" },
            { src: galleryReseauWifi, alt: "Borne WiFi plafond bureau" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Audit Réseau Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée rapidement. Étude technique offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
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
        <CTAFloating serviceName="infrastructure" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="reseau" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["conseils"]} 
          title="Guides Infrastructure Réseau"
        />

        <ServiceLinks currentService="reseau" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur les Réseaux Informatiques"
          subtitle="Réponses à vos questions sur le câblage, WiFi, Firewall et infrastructure réseau."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Reseau;
