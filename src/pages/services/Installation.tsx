import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Settings, HardHat, CheckCircle, Clock, Shield, Award, Zap, Users, MapPin, FileText, Home, Building2, Factory, Store, Wrench, Phone, Camera, Lock, Radio, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import LightStatsSection from "@/components/LightStatsSection";
import ColoredAdvantagesSection from "@/components/ColoredAdvantagesSection";
import ColoredProcessSteps from "@/components/ColoredProcessSteps";
import TechnologiesGaranties from "@/components/TechnologiesGaranties";
import GarantiesSection from "@/components/GarantiesSection";
import BlogCTASection from "@/components/BlogCTASection";
import heroInstallationImage from "@/assets/hero-installation-unique.webp";
import technicianWorkImage from "@/assets/installation-outdoor-work.webp";
import installCameraUniqueImage from "@/assets/installation-alarm-config.webp";
import servicePageImage from "@/assets/service-page-installation.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryInstallCamera from "@/assets/gallery-install-camera.webp";
import galleryInstallAlarm from "@/assets/gallery-install-alarm.webp";
import galleryInstallRack from "@/assets/gallery-install-rack.webp";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import ServiceShowcase from "@/components/ServiceShowcase";

const Installation = () => {
  const { installation } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Installateur Sécurité Professionnel 2025-2026 | Installation rapidement | HD Connect",
    description: "Expert en installation de systèmes de sécurité intelligents 2025-2026. Vidéosurveillance, alarme NF&A2P, contrôle d'accès. Étude gratuite, installation garantie 5 ans.",
    keywords: "installateur sécurité professionnel 2025-2026, installation alarme maison, pose caméra surveillance, technicien sécurité certifié, HD Connect, installation sécurité entreprise",
    canonicalUrl: "https://hdconnect.fr/services/installation",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Installation", url: "/services/installation" },
  ];

  const faqItems = installation?.faq || [
    { 
      question: "Combien de temps dure une installation de système de sécurité ?", 
      answer: "La durée varie selon la complexité : quelques heures pour une maison standard (jusqu'à 6 caméras ou alarme), 1-2 jours pour des locaux professionnels de 500m². Nous planifions l'intervention pour minimiser la perturbation de votre activité et pouvons travailler en dehors des heures ouvrées." 
    },
    { 
      question: "L'étude de site est-elle vraiment gratuite et sans engagement ?", 
      answer: "Oui, notre audit de sécurité est 100% gratuit et sans engagement. Nos experts se déplacent pour évaluer vos besoins, identifier les points de vulnérabilité, et vous proposer une solution personnalisée avec devis détaillé. Vous êtes libre de comparer avec d'autres offres." 
    },
    { 
      question: "Quelles marques de matériel installez-vous ?", 
      answer: "Nous sommes installateurs certifiés des marques leaders : Hikvision, Dahua, Axis pour la vidéosurveillance ; Ajax, Honeywell, Risco pour les alarmes ; Intratone, CDVI, Salto pour le contrôle d'accès. Nous sélectionnons le matériel le plus adapté à votre projet et votre budget." 
    },
    { 
      question: "Proposez-vous une garantie sur l'installation ?", 
      answer: "Oui, nos installations sont garanties 5 ans pièces et main d'œuvre. Cette garantie couvre les défauts de fabrication et les problèmes liés à l'installation. Les contrats de maintenance préventive prolongent cette couverture et assurent le bon fonctionnement dans le temps." 
    },
    { 
      question: "Intervenez-vous partout en France ?", 
      answer: "HD Connect intervient sur toute la France métropolitaine. Nous avons des équipes basées en Île-de-France, Lyon, Marseille, Bordeaux et dans les principales métropoles pour une intervention rapide. Pour les zones rurales, nous garantissons une intervention rapide." 
    },
    { 
      question: "Fournissez-vous les équipements ou dois-je les acheter ailleurs ?", 
      answer: "Nous fournissons et installons les équipements de marques professionnelles. Le devis tout compris inclut : le matériel garanti, l'installation certifiée, la configuration complète, la formation à l'utilisation et le support technique. Vous bénéficiez ainsi d'un interlocuteur unique et d'une garantie globale." 
    },
    { 
      question: "Pouvez-vous reprendre une installation existante d'un autre prestataire ?", 
      answer: "Oui, nous réalisons régulièrement des audits et reprises d'installations existantes. Nous évaluons l'état du système, proposons des mises à niveau si nécessaire et assurons ensuite la maintenance. La plupart des marques professionnelles sont compatibles avec nos services." 
    },
    { 
      question: "Comment se déroule la formation après installation ?", 
      answer: "Chaque installation inclut une formation complète : prise en main de l'interface utilisateur, paramétrage des alertes, utilisation de l'application mobile, gestion des codes d'accès. Nous remettons une documentation et restons disponibles par téléphone pour toute question ultérieure." 
    },
  ];

  const features = [
    { icon: FileText, title: "Étude de Site Gratuite", description: "Analyse complète de vos besoins par un expert : audit de sécurité, identification des vulnérabilités, recommandations personnalisées et devis détaillé sans engagement." },
    { icon: HardHat, title: "Techniciens Certifiés", description: "Tous nos installateurs sont formés et certifiés par les plus grandes marques du secteur. Installation propre et soignée, dans le respect des normes en vigueur." },
    { icon: Settings, title: "Configuration Complète", description: "Paramétrage personnalisé de tous vos équipements : zones de détection, accès distants, alertes, scénarios automatisés. Tout est prêt à l'emploi." },
    { icon: Users, title: "Formation Incluse", description: "Formation complète des utilisateurs à la prise en main du système. Documentation remise et support téléphonique pour toute question après l'installation." },
  ];

  const processSteps = [
    { icon: Phone, title: "1. Prise de Contact", description: "Appelez-nous ou remplissez le formulaire en ligne. Un conseiller évalue vos besoins et planifie une visite technique gratuite rapidement." },
    { icon: MapPin, title: "2. Étude de Site", description: "Notre technicien se déplace gratuitement pour auditer votre site, identifier les points de vulnérabilité et vous conseiller sur la solution optimale." },
    { icon: FileText, title: "3. Devis Détaillé", description: "Vous recevez un devis transparent et détaillé rapidement après la visite. Le prix est ferme et définitif, sans surprise ni frais cachés." },
    { icon: HardHat, title: "4. Installation Express", description: "Une fois le devis validé, nos techniciens interviennent rapidement. Installation propre, configuration complète et formation à l'utilisation." },
  ];

  const systemTypes = [
    { 
      icon: Camera, 
      title: "Vidéosurveillance", 
      description: "Installation de systèmes de vidéosurveillance HD et 4K pour particuliers et professionnels. Caméras intérieures, extérieures, dômes, PTZ.",
      features: ["Caméras IP HD/4K", "NVR/DVR haute capacité", "Accès mobile sécurisé", "Analyse vidéo IA"],
      link: "/services/videosurveillance"
    },
    { 
      icon: Shield, 
      title: "Alarmes Anti-Intrusion", 
      description: "Systèmes d'alarme certifiés NF&A2P pour une protection optimale. Détecteurs de mouvement, sirènes, télésurveillance 24/7.",
      features: ["Certification NF&A2P", "Détecteurs double technologie", "Contrôle smartphone", "Télésurveillance 24/7"],
      link: "/services/alarme"
    },
    { 
      icon: Lock, 
      title: "Contrôle d'Accès", 
      description: "Solutions de contrôle d'accès pour sécuriser vos entrées : badges, biométrie, interphones vidéo, digicodes.",
      features: ["Lecteurs badges RFID", "Biométrie avancée", "Interphones IP", "Gestion multi-sites"],
      link: "/services/controle-acces"
    },
    { 
      icon: Wifi, 
      title: "Réseau & Domotique", 
      description: "Infrastructure réseau professionnelle et intégration domotique pour centraliser la gestion de votre sécurité.",
      features: ["Câblage RJ45/fibre", "WiFi professionnel", "Domotique sécurité", "Automatisation"],
      link: "/services/reseau"
    },
  ];

  const advantages = [
    { icon: Award, title: "10+ Ans d'Expertise", description: "Plus d'une décennie d'expérience dans l'installation de systèmes de sécurité pour particuliers et professionnels." },
    { icon: Zap, title: "Installation rapidement", description: "De la validation du devis à la mise en service en les meilleurs délais. Intervention express le jour même possible." },
    { icon: Shield, title: "Garantie 5 Ans", description: "Tous nos équipements et installations sont couverts par une garantie de 5 ans pièces et main d'œuvre." },
    { icon: Clock, title: "Support 24/7", description: "Assistance technique disponible 24h/24, 7j/7 par téléphone. Intervention sur site rapide en cas de problème." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-teal-500/5 to-green-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Systèmes de Sécurité Professionnelle"
        serviceDescription="Expert en installation de systèmes de sécurité : vidéosurveillance, alarmes anti-intrusion, contrôle d'accès, domotique. Étude gratuite, installation rapidement, garantie 5 ans. Intervention sur toute la France."
        serviceUrl="/services/installation"
        serviceImage="/assets/prestations-installation.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO */}
        <ServiceHero
          title="Installation Professionnelle de Systèmes de Sécurité"
          subtitle="Installation Expert"
          description="HD Connect installe vos systèmes de sécurité avec expertise et rigueur. Étude de site gratuite, installation rapide rapidement, configuration complète et garantie 5 ans. Confiez votre sécurité à des professionnels certifiés."
          backgroundImage={heroInstallationImage}
          icon={<Settings className="w-4 h-4" />}
          badgeText="Installation Expert"
          accentColor="installation"
        />

        {/* SECTION DESCRIPTION */}
        <ContentSection
          title="L'Installation Professionnelle 2025-2026 : La Clé d'une Sécurité Fiable par IA"
          badge="Expertise Métier & IA"
          badgeIcon={<Settings className="w-4 h-4" />}
          imagePosition="right"
          image={technicianWorkImage}
          imageAlt="Technicien expert HD Connect certifié installant une caméra de sécurité intelligente sur un support mural extérieur haute résistance"
          content={
            <>
              <p>
                Un système de sécurité n'est efficace que s'il est correctement installé et configuré. <strong>80% des pannes et dysfonctionnements</strong> sont dus à une installation défaillante ou un paramétrage incorrect. C'est pourquoi HD Connect fait de l'installation professionnelle sa priorité absolue.
              </p>
              <p>
                En 2025-2026, nos installations intègrent systématiquement le <strong>paramétrage des algorithmes d'IA</strong>. Nos techniciens ne se contentent pas de poser le matériel ; ils configurent les zones de détection intelligente, les franchissements de ligne virtuelle et les scénarios d'automatisation pour une protection proactive.
              </p>
              <p>
                Nos techniciens certifiés interviennent sur tous types de sites : maisons, appartements, commerces, bureaux, entrepôts. Nous assurons le câblage structuré, la pose des équipements, la configuration réseau sécurisée et la formation complète à l'utilisation des applications mobiles.
              </p>
              <p>
                Choisir HD Connect, c'est l'assurance d'une installation <strong>propre, discrète et performante</strong>, couverte par une garantie de 5 ans pièces et main d'œuvre, conforme aux normes les plus strictes du marché.
              </p>
              <p>
                De plus, chaque installation est couverte par une <strong>garantie de 5 ans</strong>, pièces et main-d'œuvre, un gage de notre confiance dans la qualité de notre travail et des matériaux que nous utilisons. L'étude de site et le devis sont systématiquement <strong>gratuits et sans engagement</strong>. En cas de besoin, notre service de maintenance vous assure une **intervention sur site Urgence** en Île-de-France.
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
                Notre Engagement Qualité
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
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-green-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg flex-shrink-0"
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

        {/* IMAGE BREAK */}
        <ImageBreak 
          image={servicePageImage}
          alt="Technicien professionnel installant une caméra de sécurité sur échelle avec outils de précision"
          caption="Installation professionnelle par techniciens certifiés avec équipement professionnel"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Besoin d'une installation professionnelle ?"
          subtitle="Demandez une étude de site gratuite et un devis personnalisé rapidement."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="installation"
          showBenefits={true}
          urgencyText="Installation rapidement garantie"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Notre Expertise Installation en Chiffres"
          stats={[
            { value: "5 ans", label: "Garantie", description: "pièces et main d'œuvre" },
            { value: "Urgence", label: "Installation", description: "délai d'intervention" },
            { value: "2000+", label: "Projets", description: "réalisés depuis 2014" },
            { value: "98%", label: "Satisfaction", description: "clients recommandent" },
          ]}
          variant="installation"
        />

        {/* SECTION TYPES DE SYSTÈMES */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Systèmes que Nous Installons
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect installe tous les types de systèmes de sécurité électronique.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {systemTypes.map((system, index) => {
                const Icon = system.icon;
                return (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{system.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{system.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {system.features.map((feature, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link to={system.link}>
                        <Button variant="outline" className="w-full">
                          En savoir plus
                        </Button>
                      </Link>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION AVANTAGES */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Installation ?"
          advantages={advantages}
          accentColor="installation"
        />

        {/* COUVERTURE RÉGIONALE */}
        <RegionCoverage serviceName="Installation" serviceSlug="installation" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à lancer votre projet ?"
          subtitle="Étude de site gratuite et devis détaillé rapidement."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* PROCESSUS */}
        <ColoredProcessSteps
          title="Votre Installation en 4 Étapes"
          steps={processSteps}
          accentColor="installation"
        />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations Professionnelles"
          description="Découvrez la qualité de nos réalisations : caméras, alarmes et infrastructures réseau."
          images={[
            { src: galleryInstallCamera, alt: "Installation caméra dôme plafond commercial" },
            { src: galleryInstallAlarm, alt: "Configuration panneau alarme tactile" },
            { src: galleryInstallRack, alt: "Installation baie serveur câblage structuré" }
          ]}
        />
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Questions Fréquentes sur l'Installation
              </h2>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Devis d'Installation Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée rapidement. Étude de site offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "intervention" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Demander une intervention
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
        <CTAFloating serviceName="projet" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="installation" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["videosurveillance", "alarme", "conseils"]} 
          title="Guides et Conseils Installation"
        />

        {/* LIENS SERVICES */}
        <ServiceLinks currentService="installation" />
      </main>
      <Footer />
    </div>
  );
};

export default Installation;
