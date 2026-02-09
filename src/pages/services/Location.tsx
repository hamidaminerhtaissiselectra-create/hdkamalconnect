import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { Package, Clock, Calendar, CheckCircle, Shield, Award, Zap, Users, MapPin, Truck, Building2, PartyPopper, HardHat, Camera, Lock, Settings, Phone, FileText, ArrowRight, Star, BadgeCheck, Euro, TrendingUp, AlertTriangle, Wrench, Sun, Battery, Wifi, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceHero from "@/components/ServiceHero";
import ContentSection from "@/components/ContentSection";
import FAQAccordion from "@/components/FAQAccordion";
import ImageBreak from "@/components/ImageBreak";
import RegionCoverage from "@/components/RegionCoverage";
import CTAIntermediate from "@/components/CTAIntermediate";
import CTAFloating from "@/components/CTAFloating";
import ServiceLinks from "@/components/ServiceLinks";
import ColoredAdvantagesSection from "@/components/ColoredAdvantagesSection";
import ColoredProcessSteps from "@/components/ColoredProcessSteps";
import TechnologiesGaranties from "@/components/TechnologiesGaranties";
import GarantiesSection from "@/components/GarantiesSection";
import BlogCTASection from "@/components/BlogCTASection";
import ServiceShowcase from "@/components/ServiceShowcase";
import heroLocationImage from "@/assets/hero-location-unique.webp";
import locationEquipementUniqueImage from "@/assets/location-equipement-table.webp";
import locationDeliveryImage from "@/assets/location-chantier-livraison.webp";
import servicePageImage from "@/assets/service-page-location.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryLocationSolar from "@/assets/gallery-location-solar.webp";
import galleryLocationEvent from "@/assets/gallery-location-event.webp";
import galleryLocationKit from "@/assets/gallery-location-kit.webp";

const Location = () => {
  const { location } = content.pageServices;
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Location Vidéosurveillance Chantier & Alarme Temporaire 2025-2026 | HD Connect",
    description: "Expert en location de caméras solaires 4G et alarmes sans fil pour chantiers et événements. Installation incluse, surveillance IA 24/7. À partir de 49€/jour.",
    keywords: "location vidéosurveillance chantier 2025-2026, location alarme temporaire, caméra solaire 4G location, sécurité événementielle, HD Connect, location sécurité autonome",
    canonicalUrl: "https://hdconnect.fr/services/location",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Location", url: "/services/location" },
  ];

  const faqItems = location?.faq || [
    { 
      question: "Quelle est la durée minimale de location ?", 
      answer: "La durée minimale est d'une journée pour les événements. Pour les chantiers, nous proposons des forfaits à la semaine ou au mois avec tarifs dégressifs (-15% après 1 mois, -25% après 3 mois, -40% après 6 mois). La durée est 100% flexible et sans engagement de renouvellement." 
    },
    { 
      question: "L'installation et le retrait sont-ils inclus dans le prix ?", 
      answer: "Oui, le prix de location inclut la livraison, l'installation par nos techniciens certifiés, la configuration complète, la formation express, le support technique 24/7 et le retrait en fin de location. Aucun frais caché, tout est compris dans le tarif annoncé." 
    },
    { 
      question: "Le matériel est-il assuré en cas de vol ou casse ?", 
      answer: "Oui, notre matériel est couvert par une assurance tous risques. En cas de vol (avec dépôt de plainte) ou dégradation accidentelle, une franchise de 10% de la valeur s'applique. Option assurance sans franchise disponible (+15% du tarif de location)." 
    },
    { 
      question: "Puis-je surveiller mon chantier à distance en temps réel ?", 
      answer: "Absolument ! Tous nos systèmes de location sont configurés avec accès distant via application mobile (iOS/Android) et navigateur web. Visualisation en direct, alertes push, téléchargement des enregistrements : tout est inclus. La connexion 4G/5G est fournie pour les sites sans internet." 
    },
    { 
      question: "Les caméras solaires fonctionnent-elles vraiment sans électricité ?", 
      answer: "Oui, nos caméras autonomes combinent panneaux solaires haute efficacité et batteries lithium longue durée (7 jours d'autonomie sans soleil). Transmission 4G intégrée pour les images en temps réel. Solution idéale pour chantiers, zones agricoles ou sites isolés sans raccordement électrique." 
    },
    { 
      question: "Proposez-vous la location avec option d'achat ?", 
      answer: "Oui, après 6 mois de location minimum, vous pouvez acquérir le matériel à prix réduit (jusqu'à -30% sur le neuf). Les loyers versés sont partiellement déduits du prix d'achat. Idéal pour tester un système avant engagement définitif." 
    },
    { 
      question: "Quel est le délai d'installation pour une location ?", 
      answer: "En Île-de-France : intervention possible en quelques heures pour les urgences, sinon rapidement en standard. Autres régions : intervention rapide. Pour les projets planifiés à l'avance, nous garantissons la disponibilité du matériel à la date convenue." 
    },
    { 
      question: "Quels équipements proposez-vous en location ?", 
      answer: "Notre catalogue : caméras de surveillance (fixes, dômes, PTZ, thermiques), systèmes 100% autonomes solaires, alarmes portables Grade 2, kits de contrôle d'accès temporaires, barrières de chantier, enregistreurs NVR avec écrans de visualisation. Tout le matériel professionnel pour une sécurité temporaire efficace." 
    },
  ];

  const features = [
    { icon: Package, title: "Équipement Premium Dernière Génération", description: "Matériel professionnel haut de gamme : caméras 4K avec vision nocturne couleur, alarmes Grade 2 NF&A2P, systèmes 100% autonomes avec panneau solaire et batterie lithium longue durée." },
    { icon: Truck, title: "Installation & Retrait Tout Compris", description: "Nos techniciens certifiés livrent, installent, configurent et forment vos équipes. À la fin de la location, nous récupérons le matériel sans frais supplémentaires. Zéro logistique pour vous." },
    { icon: Calendar, title: "Durée 100% Flexible", description: "De 1 jour à 24 mois, nous adaptons la durée de location à votre projet. Tarifs dégressifs pour les locations longue durée. Prolongation possible à tout moment sans frais de dossier." },
    { icon: Shield, title: "Support Technique 24/7 Inclus", description: "Pendant toute la durée de la location, notre équipe technique reste disponible 24h/24, 7j/7 pour toute question ou intervention d'urgence. Hotline dédiée et intervention sur site si nécessaire." },
  ];

  const processSteps = [
    { icon: Phone, title: "1. Évaluation Gratuite", description: "Décrivez-nous votre projet, la durée et le niveau de protection souhaité. Un expert évalue vos besoins et vous propose la solution adaptée rapidement." },
    { icon: FileText, title: "2. Devis Transparent", description: "Recevez un devis détaillé incluant le matériel, l'installation, la durée, le support et l'assurance. Prix ferme et définitif, tout compris, sans surprise." },
    { icon: HardHat, title: "3. Installation Express", description: "Nos techniciens installent et configurent le système complet sur votre site en quelques heures. Formation rapide de vos équipes et remise des accès distants." },
    { icon: CheckCircle, title: "4. Surveillance Immédiate", description: "Votre site est protégé ! Accès distant sur smartphone, alertes en temps réel et support technique disponible 24/7 pendant toute la durée de la location." },
  ];

  const useCases = [
    { 
      icon: HardHat, 
      title: "Chantiers BTP & Construction", 
      description: "Protection temporaire de vos chantiers contre le vol de matériaux (cuivre, câbles), d'engins (pelleteuses, compacteurs) et le vandalisme. Nos systèmes autonomes fonctionnent sans électricité grâce aux panneaux solaires et batteries intégrées. Idéal pour les sites isolés ou en phase de gros œuvre.",
      features: ["Caméras solaires 4G autonomes", "Alarme périmétrique sans fil", "Accès distant chantier temps réel", "Sirène puissante 110dB"],
      duration: "1 semaine à 24 mois"
    },
    { 
      icon: PartyPopper, 
      title: "Événements & Salons Professionnels", 
      description: "Sécurisation complète de vos événements : salons professionnels, concerts, festivals, mariages, inaugurations. Contrôle d'accès par badges ou QR codes, comptage des visiteurs en temps réel et vidéosurveillance HD pour la gestion des flux et la sécurité des participants.",
      features: ["Contrôle accès badges/QR", "Vidéosurveillance HD multi-caméras", "Comptage visiteurs temps réel", "Installation/désinstallation express"],
      duration: "1 jour à 2 semaines"
    },
    { 
      icon: Building2, 
      title: "Locaux Vacants & Transition Immobilière", 
      description: "Protection de vos locaux commerciaux ou industriels en attente de vente, de rénovation ou de relocation. Évitez les squats, les dégradations et les vols. Surveillance active avec rondes vidéo à distance et alertes instantanées en cas d'intrusion détectée.",
      features: ["Alarme anti-intrusion Grade 2", "Ronde vidéo à distance quotidienne", "Alerte intrusion temps réel", "Intervention gardiennage possible"],
      duration: "1 mois à 12 mois"
    },
    { 
      icon: Camera, 
      title: "Test Avant Achat & Validation Projet", 
      description: "Testez un système de vidéosurveillance ou d'alarme complet avant de vous engager sur un achat définitif. Validez l'adaptation du système à vos besoins réels, la qualité d'image, la facilité d'utilisation et l'intégration dans votre environnement.",
      features: ["Matériel haut de gamme dernière génération", "Configuration identique à l'achat", "Support dédié pendant le test", "Option d'achat avec remise -30%"],
      duration: "1 à 3 mois"
    },
    { 
      icon: Sun, 
      title: "Sites Agricoles & Exploitations", 
      description: "Protection des exploitations agricoles, des hangars de stockage, du matériel agricole et des élevages. Nos caméras solaires autonomes sont parfaites pour les zones rurales sans électricité ni connexion internet fixe. Surveillance 24/7 via 4G.",
      features: ["100% autonome solaire + 4G", "Vision nocturne longue portée", "Détection véhicules et personnes", "Alertes sur smartphone"],
      duration: "3 mois à 24 mois"
    },
    { 
      icon: Wrench, 
      title: "Travaux de Rénovation & Démolition", 
      description: "Sécurisation des sites de rénovation ou de démolition pendant les phases sensibles. Protection contre le vol de matériaux de valeur (cuivre, métaux) et surveillance des accès pour la sécurité des travailleurs et le respect des horaires de chantier.",
      features: ["Caméras anti-poussière IP67", "Détection de mouvement intelligente", "Historique des entrées/sorties", "Accès multi-utilisateurs"],
      duration: "1 semaine à 6 mois"
    },
  ];

  const advantages = [
    { icon: Award, title: "Matériel Professionnel Certifié", description: "Équipements de marques reconnues (Hikvision, Dahua, Ajax), entretenus et mis à jour régulièrement. Qualité garantie pour une protection optimale de vos sites." },
    { icon: Zap, title: "Déploiement Express rapidement", description: "Installation en quelques heures, même sur des sites complexes ou isolés. Intervention express possible rapidement en Île-de-France pour les urgences." },
    { icon: Euro, title: "Sans Investissement Initial Lourd", description: "Pas d'achat de matériel, pas de coût d'installation définitif. Payez uniquement pour la durée dont vous avez besoin. Solution idéale pour maîtriser votre budget sécurité." },
    { icon: Users, title: "Accompagnement Clé en Main", description: "De l'étude de vos besoins à la récupération du matériel, nous gérons tout. Un interlocuteur unique, un support 24/7. Vous vous concentrez sur votre activité." },
  ];

  const equipmentCatalog = [
    { icon: Camera, title: "Caméras de Surveillance", items: ["Caméras bullet 4K varifocales", "Dômes PTZ 360°", "Caméras thermiques détection chaleur", "Caméras solaires 4G autonomes", "Mini-caméras discrètes"] },
    { icon: Shield, title: "Systèmes d'Alarme", items: ["Centrales d'alarme Grade 2", "Détecteurs de mouvement PIR", "Contacts d'ouverture portes/fenêtres", "Sirènes intérieures et extérieures", "Claviers et télécommandes"] },
    { icon: Lock, title: "Contrôle d'Accès", items: ["Lecteurs de badges RFID", "Digicodes anti-vandale", "Barrières et bornes levantes", "Tourniquets et portillons", "Interphones vidéo IP"] },
    { icon: Battery, title: "Alimentation Autonome", items: ["Panneaux solaires 100W-200W", "Batteries lithium 100Ah", "Onduleurs de secours", "Coffrets étanches IP66", "Mâts et supports de fixation"] },
  ];

  const certifications = [
    { icon: BadgeCheck, title: "Certification APSAD", description: "Systèmes conformes aux référentiels APSAD pour une reconnaissance par les assureurs." },
    { icon: Shield, title: "Norme NF&A2P", description: "Matériel certifié NF&A2P pour une protection optimale contre les tentatives d'intrusion." },
    { icon: Star, title: "Marques Premium", description: "Partenaire officiel Hikvision, Dahua, Ajax. Matériel professionnel haut de gamme." },
    { icon: Award, title: "Techniciens Certifiés", description: "Équipes formées et certifiées par les constructeurs. Expertise garantie." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/5 to-sky-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Location Équipements de Sécurité Professionnels"
        serviceDescription="Location de matériel de sécurité professionnel pour chantiers BTP, événements, locaux vacants et besoins temporaires. Caméras autonomes solaires, alarmes Grade 2, contrôle d'accès. Installation, configuration et retrait inclus. Support 24/7."
        serviceUrl="/services/location"
        serviceImage="/assets/prestations-location.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO */}
        <ServiceHero
          title="Location Vidéosurveillance Chantier & Alarme Temporaire 2025-2026"
          subtitle="Sécurité Flexible & Autonome par IA"
          description="Sécurisez vos chantiers, événements et sites isolés avec nos solutions de location 2025-2026. Caméras solaires 4G avec analyse IA, alarmes sans fil NF&A2P et kits de sécurité autonomes. Installation express rapidement, maintenance 24/7 incluse."
          backgroundImage={heroLocationImage}
          icon={<Package className="w-4 h-4" />}
          badgeText="Solutions de Location Premium 2025-2026"
          accentColor="location"
        />

        {/* BANDEAU CONFIANCE */}
        <section className="py-6 bg-gradient-to-r from-sky-600 to-sky-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white text-sm font-medium">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" />
                <span>Matériel Certifié NF&A2P</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Installation rapidement</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Assurance Tous Risques</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Support 24/7 Inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DESCRIPTION ENRICHIE */}
        <ContentSection
          title="La Location de Matériel de Sécurité : Une Solution Intelligente"
          badge="Demande Croissante"
          badgeIcon={<TrendingUp className="w-4 h-4" />}
          imagePosition="right"
          image={locationDeliveryImage}
          imageAlt="Livraison et installation d'équipements de sécurité HD Connect"
          accentColor="primary"
          content={
            <>
              <p>
                <strong>La location d'équipements de sécurité connaît une croissance exponentielle en France</strong>, portée par la hausse des vols sur chantiers (+35% depuis 2020) et la multiplication des événements nécessitant une sécurisation temporaire. Les entreprises du BTP, les organisateurs d'événements et les gestionnaires immobiliers recherchent des solutions flexibles, sans investissement lourd.
              </p>
              <p>
                HD Connect répond à cette demande avec une offre de <strong>location tout compris</strong> : matériel professionnel de dernière génération, installation par des techniciens certifiés, configuration complète avec accès distant, support technique 24/7 et récupération du matériel en fin de location. Vous payez uniquement pour la durée dont vous avez besoin.
              </p>
              <p>
                Nos solutions sont particulièrement adaptées aux <strong>sites sans électricité</strong> grâce à nos caméras 100% autonomes équipées de panneaux solaires et de batteries lithium longue durée. Elles intègrent une connexion 4G/5G pour la transmission des images en temps réel, sans nécessiter de connexion internet fixe.
              </p>
              <p>
                <strong>Pourquoi louer plutôt qu'acheter ?</strong> La location vous permet de bénéficier d'un matériel toujours à jour, sans immobilisation de capital, avec une maintenance et un support inclus. C'est la solution idéale pour les besoins temporaires ou pour tester un système avant un achat définitif.
              </p>
              <p>
                En 2025-2026, nos solutions de location intègrent l'<strong>analyse vidéo par IA</strong> pour une détection plus précise des intrusions sur vos chantiers, réduisant les fausses alertes et optimisant la réactivité des rondes de gardiennage. Cette fonctionnalité est essentielle pour le GEO et l'E-E-A-T.
              </p>
              <p>
                Nous proposons également la **Location avec Option d'Achat (LOA)**. Après une période de test, vous pouvez acquérir le matériel à un prix réduit, les loyers versés étant déduits du prix d'achat. En cas de problème technique, notre service de maintenance vous assure une **intervention sur site Urgence** en Île-de-France. C'est la solution idéale pour valider votre investissement avant de vous engager.
              </p>
            </>
          }
          delay={0}
        />

        {/* SECTION FONCTIONNALITÉS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Les Avantages de la Location HD Connect
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Une offre complète pensée pour votre tranquillité : matériel premium, installation pro, support continu.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <Card className="hover-lift h-full border-sky-500/20 hover:border-sky-500/40 transition-colors">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/20">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION TECHNIQUE DÉTAILLÉE */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Comment Fonctionne la Location de Sécurité Temporaire ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  La location de matériel de sécurité chez HD Connect suit un processus simple et efficace, conçu pour vous offrir une protection opérationnelle en un minimum de temps. Voici comment cela fonctionne concrètement.
                </p>
                <p>
                  <strong>Étape 1 : L'évaluation de vos besoins</strong>. Un expert HD Connect analyse votre situation : type de site à protéger (chantier, événement, local vacant), superficie, points d'accès, présence ou non d'électricité et de connexion internet, durée de la location et niveau de protection souhaité. Cette évaluation est gratuite et sans engagement.
                </p>
                <p>
                  <strong>Étape 2 : La proposition sur mesure</strong>. Sur la base de cette analyse, nous élaborons une solution adaptée : nombre et type de caméras, système d'alarme, contrôle d'accès si nécessaire. Nous vous remettons un devis détaillé, tout compris, avec un prix ferme et définitif. Pas de frais cachés, pas de surprise en fin de location.
                </p>
                <p>
                  <strong>Étape 3 : L'installation professionnelle</strong>. Nos techniciens certifiés se déplacent sur votre site pour installer et configurer l'ensemble du système. Ils vérifient la couverture des caméras, testent l'alarme, configurent les accès distants sur votre smartphone et vous forment à l'utilisation. L'installation dure généralement quelques heures seulement.
                </p>
                <p>
                  <strong>Étape 4 : La surveillance active</strong>. Dès la mise en service, vous avez accès à votre système depuis n'importe où via l'application mobile. Vous recevez des alertes en temps réel en cas de détection de mouvement ou d'intrusion. Notre équipe technique reste disponible 24h/24 pour toute question ou intervention d'urgence.
                </p>
                <p>
                  <strong>Étape 5 : La récupération du matériel</strong>. En fin de location, nos techniciens se déplacent pour récupérer l'ensemble du matériel. Si vous souhaitez prolonger ou acquérir le système, nous nous adaptons. Simple, efficace, sans contrainte.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK */}
        <ImageBreak 
          image={servicePageImage}
          alt="Tour de vidéosurveillance mobile autonome solaire 4G sur chantier de construction avec caméras de sécurité"
          caption="Solutions de sécurité autonomes pour chantiers : caméras solaires 4G sans électricité requise"
          accentColor="primary"
        />

        {/* CTA INTERMÉDIAIRE PUISSANT */}
        <CTAIntermediate 
          title="Protégez votre chantier ou événement dès maintenant"
          subtitle="Devis gratuit rapidement. Installation possible rapidement en Île-de-France."
          phoneNumber={phoneNumber}
          variant="gradient"
          accentColor="location"
          showBenefits={true}
          urgencyText="À partir de 49€/jour - Tout compris"
        />

        {/* SECTION CATALOGUE ÉQUIPEMENTS */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Notre Catalogue de Location
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Du matériel professionnel haut de gamme, entretenu et mis à jour régulièrement.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {equipmentCatalog.map((category, index) => {
                const Icon = category.icon;
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <Card className="h-full hover-lift">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-lg">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION CAS D'USAGE ENRICHIS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Situations Idéales pour la Location de Sécurité
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect répond à tous vos besoins de sécurité temporaire, quel que soit votre secteur d'activité.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <Card className="p-6 hover-lift h-full border-sky-500/10 hover:border-sky-500/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-700/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-sky-500" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{useCase.title}</CardTitle>
                          <span className="text-xs text-sky-400 font-medium">{useCase.duration}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.features.map((feature, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION CERTIFICATIONS & CONFIANCE */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Certifications et Garanties de Qualité
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Un matériel certifié, des techniciens qualifiés, pour une protection sans compromis.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <div className="text-center p-6 rounded-2xl bg-card border hover-lift h-full">
                      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-sky-500/20 to-sky-700/20 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-sky-500" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION AVANTAGES */}
        <ColoredAdvantagesSection
          title="Pourquoi Louer avec HD Connect ?"
          advantages={advantages}
          accentColor="location"
        />

        {/* COUVERTURE RÉGIONALE */}
        <RegionCoverage serviceName="Location Équipements Sécurité" serviceSlug="location" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à sécuriser votre site temporairement ?"
          subtitle="Devis gratuit et installation rapidement partout en France."
          phoneNumber={phoneNumber}
          variant="accent"
          showBenefits={false}
        />

        {/* PROCESSUS */}
        <ColoredProcessSteps
          title="Votre Location en 4 Étapes Simples"
          steps={processSteps}
          accentColor="location"
        />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Équipements en Location"
          description="Découvrez notre parc de matériel professionnel disponible à la location."
          images={[
            { src: galleryLocationSolar, alt: "Caméra solaire autonome chantier BTP" },
            { src: galleryLocationEvent, alt: "Sécurisation événement avec contrôle d'accès" },
            { src: galleryLocationKit, alt: "Kit alarme portable professionnel en valise" }
          ]}
        />
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Questions Fréquentes sur la Location
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Toutes les réponses à vos questions sur notre service de location d'équipements de sécurité.
              </p>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* CTA FINAL PUISSANT */}
        <section className="section-padding bg-gradient-to-r from-sky-600 to-sky-800">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à sécuriser votre site temporaire ?
              </h2>
              <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                Devis gratuit rapidement. Installation possible rapidement. Support 24/7 inclus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "intervention" })}
                  className="bg-white text-sky-700 hover:bg-sky-50 text-lg h-14 px-10 shadow-xl"
                >
                  Demander une intervention
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/30 hover:border-white/70 text-lg h-14 px-8 transition-all">
                    <Phone className="mr-2 w-5 h-5" />
                    {phoneNumber}
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FLOATING CONVERSION */}
        <CTAFloating serviceName="chantier" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="location" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["videosurveillance", "conseils"]} 
          title="Guides Location et Sécurité Temporaire"
        />

        {/* LIENS SERVICES */}
        <ServiceLinks currentService="location" />
      </main>
      <Footer />
    </div>
  );
};

export default Location;
