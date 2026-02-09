import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wrench, Clock, PhoneCall, Shield, CheckCircle, TrendingUp, MapPin, HardHat, Settings, Zap, Users, Award, Phone, MessageSquare, Building, Store, Factory, Home as HomeIcon } from "lucide-react";
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
import heroMaintenanceImage from "@/assets/hero-maintenance.webp";
import maintenanceTechImage from "@/assets/maintenance-check-panel.webp";
import maintenanceDiagnosticImage from "@/assets/maintenance-diagnostic.webp";
import maintenanceTeamImage from "@/assets/maintenance-equipe-terrain.webp";
import servicePageImage from "@/assets/service-page-maintenance.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryMaintenanceDiag from "@/assets/gallery-maintenance-diag.webp";
import galleryMaintenanceRepair from "@/assets/gallery-maintenance-repair.webp";
import galleryMaintenanceVan from "@/assets/gallery-maintenance-van.webp";

const Maintenance = () => {
  const { maintenance } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Maintenance Sécurité & Dépannage Alarme/Vidéo 2025-2026 | Support IA 24/7 | HD Connect",
    description: "Expert en maintenance préventive et dépannage express 2025-2026. Support technique IA 24/7, intervention rapide, pièces d'origine garanties. Sécurisez vos installations.",
    keywords: "maintenance sécurité 2025-2026, dépannage alarme express, réparation vidéosurveillance, contrat maintenance SLA, support technique IA, HD Connect, sécurité électronique",
    canonicalUrl: "https://hdconnect.fr/services/maintenance",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Maintenance", url: "/services/maintenance" },
  ];

  const faqItems = maintenance.faq || [];

  const features = [
    { icon: Clock, title: "Support 24/7 Prioritaire", description: "Assistance technique disponible à tout moment avec hotline dédiée, réponse immédiate et intervention rapide même les nuits, week-ends et jours fériés." },
    { icon: PhoneCall, title: "Intervention Garantie Express", description: "Délai d'intervention contractuel  pour maintenir votre sécurité opérationnelle sans interruption prolongée." },
    { icon: CheckCircle, title: "Maintenance Préventive Complète", description: "Contrôles réguliers exhaustifs pour prévenir les pannes : nettoyage, vérification des connexions, tests complets, rapport détaillé après chaque visite." },
    { icon: TrendingUp, title: "Mises à Jour Firmware Incluses", description: "Installation des dernières mises à jour firmware et patches de sécurité pour une performance optimale et une protection contre les vulnérabilités." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit Technique Initial", description: "Évaluation complète de l'état de vos équipements, analyse des risques de panne et définition du contrat le plus adapté à vos besoins et budget." },
    { icon: HardHat, title: "2. Visites Préventives Planifiées", description: "Interventions régulières (annuelles, semestrielles ou mensuelles) pour nettoyage des optiques, vérification des connexions, tests complets et mise à jour des firmwares." },
    { icon: Settings, title: "3. Dépannage Express Prioritaire", description: "Intervention rapide et prioritaire en cas de panne, avec diagnostic technique complet, pièces de rechange d'origine et mise en service rapide." },
    { icon: CheckCircle, title: "4. Reporting et Suivi Continu", description: "Rapports détaillés après chaque intervention, suivi de l'état de santé de votre parc, alertes préventives et recommandations d'amélioration." },
  ];

  const useCases = [
    { 
      icon: HomeIcon, 
      title: "Résidences Privées", 
      description: "Contrats de maintenance pour vos systèmes de sécurité domestique. Visites annuelles, dépannage prioritaire et support technique dédié pour votre tranquillité d'esprit.",
      features: ["Visite annuelle incluse", "Dépannage prioritaire", "Pièces de rechange", "Support technique 24/7"]
    },
    { 
      icon: Building, 
      title: "Entreprises et Bureaux", 
      description: "Contrats de maintenance préventive pour les systèmes critiques. Visites régulières, monitoring proactif et intervention rapide en cas de problème.",
      features: ["Visites semestrielles", "Monitoring 24/7", "Intervention Rapide garantie", "Rapports détaillés"]
    },
    { 
      icon: Store, 
      title: "Commerces et Retail", 
      description: "Maintenance adaptée aux horaires commerciaux. Interventions en dehors des heures d'ouverture, dépannage express et support prioritaire.",
      features: ["Interventions hors horaires", "Dépannage express", "Pièces en stock", "Contrats flexibles"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Critiques", 
      description: "Contrats SLA (Service Level Agreement) avec garanties de disponibilité. Équipes dédiées, pièces de rechange en stock et intervention immédiate.",
      features: ["SLA garantis", "Équipes dédiées", "Stock pièces", "Intervention immédiate"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Techniciens Certifiés", description: "Tous nos techniciens sont certifiés par les constructeurs (Hikvision, Dahua, Axis, etc.) avec plus de 5 ans d'expérience en maintenance." },
    { icon: Zap, title: "Pièces d'Origine Garanties", description: "Utilisation exclusive de pièces d'origine avec garantie constructeur. Aucune pièce contrefaite ou de mauvaise qualité." },
    { icon: Shield, title: "Contrats Flexibles", description: "Contrats adaptés à votre budget et vos besoins : maintenance annuelle, semestrielle, mensuelle ou à la demande." },
    { icon: Clock, title: "Intervention Garantie", description: "Délai d'intervention contractuel  avec pénalité financière en cas de non-respect. Votre sécurité est notre priorité." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-yellow-500/5 to-amber-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Maintenance et Dépannage Systèmes de Sécurité"
        serviceDescription="Expert en maintenance préventive et dépannage de systèmes de sécurité : alarme, vidéosurveillance, contrôle d'accès. Support 24/7, intervention express, contrats SLA. Intervention sur toute la France."
        serviceUrl="/services/maintenance"
        serviceImage="/assets/service-maintenance.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Maintenance et Dépannage Systèmes de Sécurité"
          subtitle="Expert Maintenance 24/7"
          description="Assurez la continuité de votre sécurité avec nos contrats de maintenance préventive et dépannage express. HD Connect intervient 24h/24 pour maintenir vos systèmes en parfait état : alarme, vidéosurveillance, contrôle d'accès, réseau."
          backgroundImage={heroMaintenanceImage}
          icon={<Wrench className="w-4 h-4" />}
          badgeText="Expert Maintenance 24/7"
          accentColor="maintenance"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Choisir la Maintenance Préventive Intelligente en 2025-2026 ?"
          badge="Support IA & Réactivité"
          badgeIcon={<Wrench className="w-4 h-4" />}
          imagePosition="right"
          image={maintenanceTechImage}
          imageAlt="Technicien expert certifié effectuant un diagnostic technique approfondi sur un panneau de contrôle d'alarme avec outils de mesure numériques"
          content={
            <>
              <p>
                La maintenance préventive des systèmes de sécurité est souvent négligée, jusqu'au jour où une panne survient. Or, une caméra défaillante ou une alarme non fonctionnelle peuvent coûter bien plus cher qu'un contrat de maintenance annuel. Selon les assureurs, une panne de sécurité peut entraîner <strong>une augmentation de prime de 20 à 50%</strong>.
              </p>
              <p>
                En 2025-2026, HD Connect révolutionne le support avec la <strong>télémaintenance assistée par IA</strong>. Nos systèmes surveillent en temps réel l'état de santé de vos équipements et détectent les signes avant-coureurs de défaillance (baisse de tension, perte de paquets réseau, usure batterie) avant même que la panne ne survienne.
              </p>
              <p>
                Chez HD Connect, nous proposons des contrats de maintenance adaptés à chaque profil : maintenance annuelle pour les résidences, contrats SLA pour les sites critiques, ou interventions à la demande. Notre approche privilégie la <strong>prévention intelligente plutôt que la réaction</strong>.
              </p>
              <p>
                Nous disposons d'un <strong>stock de pièces de rechange d'origine</strong> en permanence, permettant une **intervention sur site Urgence** en Île-de-France en cas de défaillance critique, garantissant une continuité de service absolue.
              </p>
              <p>
                Pour les entreprises, nos contrats de type **SLA (Service Level Agreement)** garantissent contractuellement un temps de rétablissement maximal, avec des pénalités en cas de non-respect. C'est l'assurance d'une sécurité opérationnelle 24/7, indispensable pour les sites critiques.
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
                Services de Maintenance Professionnels
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
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-amber-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0"
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
                Comment Fonctionne Notre Maintenance Préventive ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  La maintenance préventive repose sur un calendrier d'interventions régulières planifiées. Contrairement à la maintenance corrective (réparation après panne), la maintenance préventive anticipe les problèmes et les résout avant qu'ils n'impactent votre sécurité.
                </p>
                <p>
                  <strong>Lors de chaque visite, nos techniciens effectuent</strong> : nettoyage des optiques des caméras (accumulation de poussière = baisse de qualité), vérification des connexions réseau et électriques, test complet des fonctionnalités, mise à jour des firmwares, vérification des batteries de secours et rapport détaillé.
                </p>
                <p>
                  <strong>Le monitoring proactif complète la maintenance</strong>. Nos systèmes envoient des alertes automatiques en cas d'anomalie détectée (caméra déconnectée, alarme désarmée, batterie faible). Nous contactons immédiatement le client pour résoudre le problème avant qu'il ne devienne critique.
                </p>
                <p>
                  <strong>En cas de panne urgente</strong>, votre appel est traité en priorité. Nos techniciens interviennent dans le délai contractuel  avec diagnostic complet, pièces de rechange d'origine et mise en service rapide. Aucune attente, aucune improvisation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={servicePageImage}
          alt="Technicien certifié effectuant un diagnostic de maintenance préventive sur panneau de contrôle avec équipement de mesure professionnel"
          caption="Maintenance préventive par techniciens certifiés pour une sécurité continue"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Assurez la continuité de vos systèmes"
          subtitle="Découvrez nos contrats de maintenance préventive et dépannage express 24/7."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="maintenance"
          showBenefits={true}
          urgencyText="Intervention garantie Urgence"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Maintenance Préventive en Chiffres"
          stats={[
            { value: "-70%", label: "Pannes évitées", description: "grâce à la prévention" },
            { value: "Urgence", label: "Intervention", description: "délai garanti en IDF" },
            { value: "24/7", label: "Disponibilité", description: "support technique" },
            { value: "5 ans", label: "Garantie", description: "pièces et main d'œuvre" },
          ]}
          variant="maintenance"
        />

        {/* SECTION CAS D'USAGE - COMPOSANT AMÉLIORÉ */}
        <UseCasesSection
          title="Contrats de Maintenance Adaptés à Votre Profil"
          subtitle="HD Connect propose des formules flexibles pour chaque type de client, particuliers et professionnels."
          useCases={useCases}
          accentColor="maintenance"
        />

        {/* SECTION AVANTAGES HD CONNECT */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Maintenance ?"
          advantages={advantages}
          accentColor="maintenance"
        />

        {/* SECTION COUVERTURE FRANCE PAR RÉGIONS */}
        <RegionCoverage serviceName="Maintenance" serviceSlug="maintenance" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à protéger vos systèmes ?"
          subtitle="Découvrez nos contrats de maintenance adaptés à votre budget."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <ColoredProcessSteps
          title="Votre Contrat de Maintenance en 4 Étapes"
          steps={processSteps}
          accentColor="maintenance"
        />

        <ServicePrestations serviceName="Maintenance" interventionMode={true} />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Notre Équipe Maintenance"
          description="Techniciens certifiés intervenant sur tous types de systèmes de sécurité."
          images={[
            { src: galleryMaintenanceDiag, alt: "Technicien diagnostic avec multimètre" },
            { src: galleryMaintenanceRepair, alt: "Remplacement batterie centrale alarme" },
            { src: galleryMaintenanceVan, alt: "Véhicule intervention maintenance" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Devis de Maintenance
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée rapidement. Audit technique gratuit, sans engagement.
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
        <CTAFloating serviceName="équipements" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="maintenance" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["conseils"]} 
          title="Guides Maintenance et Dépannage"
        />

        <ServiceLinks currentService="maintenance" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Maintenance"
          subtitle="Réponses à vos questions sur les contrats de maintenance et le dépannage."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Maintenance;
