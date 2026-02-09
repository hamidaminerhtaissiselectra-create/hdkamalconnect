import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Wrench, Clock, Phone, AlertTriangle, CheckCircle, Shield, Award, Zap, Users, MapPin, Truck, Home, Building2, Factory, Camera, Lock, Radio, Settings, PhoneCall, Calendar } from "lucide-react";
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
import LightStatsSection from "@/components/LightStatsSection";
import ColoredAdvantagesSection from "@/components/ColoredAdvantagesSection";
import ColoredProcessSteps from "@/components/ColoredProcessSteps";
import TechnologiesGaranties from "@/components/TechnologiesGaranties";
import GarantiesSection from "@/components/GarantiesSection";
import BlogCTASection from "@/components/BlogCTASection";
import ServiceShowcase from "@/components/ServiceShowcase";
import heroDepannageImage from "@/assets/hero-depannage-unique.webp";
import depannageTechUniqueImage from "@/assets/depannage-diagnostic-work.webp";
import depannageUrgenceImage from "@/assets/depannage-sensor-replace.webp";
import servicePageImage from "@/assets/service-page-depannage.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryDepannageDiagnostic from "@/assets/gallery-depannage-diagnostic.webp";
import galleryDepannageRepair from "@/assets/gallery-depannage-repair.webp";
import galleryDepannageVan from "@/assets/gallery-depannage-van.webp";

const Depannage = () => {
  const { depannage } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Dépannage Sécurité Express 2025-2026 | Réparation Alarme & Vidéo 24/7 | HD Connect",
    description: "Urgence sécurité 2025-2026 : intervention rapide garantie. Dépannage alarme, caméra et contrôle d'accès par techniciens certifiés. Diagnostic gratuit 24h/24.",
    keywords: "dépannage sécurité express 2025-2026, réparation alarme urgence, dépannage vidéosurveillance 24/7, technicien sécurité intervention rapide, HD Connect, panne alarme Paris",
    canonicalUrl: "https://hdconnect.fr/services/depannage",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Dépannage", url: "/services/depannage" },
  ];

  const faqItems = depannage?.faq || [
    { 
      question: "Intervenez-vous en urgence 24h/24 et 7j/7 ?", 
      answer: "Oui, notre service d'urgence est disponible 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Pour les pannes critiques (système de sécurité totalement hors service), appelez notre numéro d'astreinte. Nous intervenons rapidement en Île-de-France et sous 24h dans les autres régions." 
    },
    { 
      question: "Le diagnostic téléphonique est-il vraiment gratuit ?", 
      answer: "Oui, le pré-diagnostic par téléphone est toujours gratuit. Nos experts tentent d'abord de résoudre votre problème à distance (réinitialisation, paramétrage). Si une intervention sur site est nécessaire, le diagnostic sur place est facturé mais intégralement déduit du montant de la réparation effectuée." 
    },
    { 
      question: "Dépannez-vous les systèmes que vous n'avez pas installés ?", 
      answer: "Oui, nous intervenons sur tous les systèmes de sécurité, quelle que soit la marque ou l'installateur d'origine. Notre équipe est formée sur les principales marques du marché : Hikvision, Dahua, Axis, Ajax, Honeywell, DSC, Paradox, Risco, Intratone, etc." 
    },
    { 
      question: "Combien coûte un dépannage en moyenne ?", 
      answer: "Le coût dépend de la complexité de la panne. Un déplacement avec diagnostic coûte environ 89€ HT en Île-de-France. Les réparations courantes (remplacement détecteur, reconfiguration) varient de 150€ à 350€. Un devis précis est établi avant toute intervention non urgente." 
    },
    { 
      question: "Proposez-vous des contrats pour éviter les pannes ?", 
      answer: "Oui, nous proposons des contrats de maintenance préventive qui réduisent considérablement les risques de panne. Ces contrats incluent 1 à 2 visites annuelles de contrôle, les mises à jour logicielles, et une priorité d'intervention avec tarifs préférentiels en cas de dépannage." 
    },
    { 
      question: "Que se passe-t-il si vous ne pouvez pas réparer ?", 
      answer: "Si le matériel est irréparable, nous vous proposons un remplacement à tarif préférentiel avec installation incluse. Pour les équipements sous garantie constructeur, nous gérons le retour SAV et le prêt de matériel de remplacement si possible." 
    },
    { 
      question: "Fournissez-vous un rapport d'intervention ?", 
      answer: "Oui, chaque intervention donne lieu à un rapport détaillé : description de la panne, diagnostic effectué, réparation réalisée, pièces remplacées et recommandations de maintenance. Ce document est utile pour votre assurance et le suivi de vos équipements." 
    },
  ];

  const features = [
    { icon: Clock, title: "Intervention Rapide", description: "Notre équipe se déplace rapidement en cas d'urgence. En Île-de-France, nous garantissons une intervention rapide maximum, 7j/7." },
    { icon: Phone, title: "Diagnostic Téléphonique Gratuit", description: "Appelez-nous pour décrire votre problème. Nos experts tentent d'abord de le résoudre à distance avant d'envoyer un technicien." },
    { icon: Wrench, title: "Techniciens Multi-Marques", description: "Nos techniciens sont formés sur toutes les marques : Hikvision, Dahua, Ajax, Honeywell, DSC, Paradox, Axis, et bien d'autres." },
    { icon: CheckCircle, title: "Pièces d'Origine Garanties", description: "Nous n'utilisons que des pièces d'origine constructeur pour garantir la fiabilité et la durabilité de vos réparations." },
  ];

  const processSteps = [
    { icon: PhoneCall, title: "1. Appel Urgence", description: "Appelez notre hotline disponible 24/7. Un expert évalue votre situation et tente un diagnostic à distance immédiat." },
    { icon: Truck, title: "2. Déplacement Express", description: "Si le problème ne peut être résolu à distance, un technicien est dépêché sur site dans les meilleurs délais." },
    { icon: Wrench, title: "3. Diagnostic et Réparation", description: "Le technicien identifie la cause de la panne, effectue la réparation et teste l'ensemble du système." },
    { icon: CheckCircle, title: "4. Rapport et Garantie", description: "Vous recevez un rapport d'intervention détaillé. La réparation est garantie 6 mois pièces et main d'œuvre." },
  ];

  const panneTypes = [
    { 
      icon: Camera, 
      title: "Pannes Vidéosurveillance", 
      description: "Caméra qui ne fonctionne plus, image noire ou floue, NVR/DVR en panne, perte d'accès distant, problème de réseau.",
      problems: ["Caméra HS", "Image noire/floue", "NVR en panne", "Pas d'accès mobile", "Stockage saturé"]
    },
    { 
      icon: Shield, 
      title: "Pannes Alarme", 
      description: "Centrale qui ne répond plus, détecteur défaillant, fausses alertes répétées, sirène muette, perte de connexion.",
      problems: ["Centrale HS", "Fausses alertes", "Sirène muette", "Détecteur défaillant", "Batterie faible"]
    },
    { 
      icon: Lock, 
      title: "Pannes Contrôle d'Accès", 
      description: "Badge non reconnu, interphone en panne, serrure bloquée, problème de gestion des accès.",
      problems: ["Badge refusé", "Interphone muet", "Serrure bloquée", "Clavier HS", "Gâche défaillante"]
    },
    { 
      icon: Radio, 
      title: "Pannes Réseau & Domotique", 
      description: "Perte de connexion, WiFi instable, switch en panne, problème d'automatisation.",
      problems: ["Perte WiFi", "Réseau lent", "Switch HS", "Domotique déconnectée", "VPN en panne"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Disponibilité 24/7", description: "Service d'astreinte disponible nuit et jour, week-ends et jours fériés pour les urgences critiques." },
    { icon: Zap, title: "Réactivité Maximale", description: "Intervention Rapide en Île-de-France. Prise en charge immédiate de votre demande par téléphone." },
    { icon: Shield, title: "Garantie 6 Mois", description: "Toutes nos réparations sont garanties 6 mois pièces et main d'œuvre. Pas de surprise." },
    { icon: Users, title: "Experts Certifiés", description: "Techniciens formés et certifiés par les plus grandes marques. Compétences mises à jour en continu." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Dépannage Systèmes de Sécurité Express 24/7"
        serviceDescription="Dépannage urgent de systèmes de sécurité 24h/24, 7j/7. Intervention Rapide en Île-de-France, diagnostic gratuit, techniciens certifiés multi-marques. Caméras, alarmes, contrôle d'accès."
        serviceUrl="/services/depannage"
        serviceImage="/assets/prestations-depannage.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO */}
        <ServiceHero
          title="Dépannage Sécurité Express 24h/24, 7j/7"
          subtitle="Dépannage Urgent"
          description="Panne de caméra, alarme défaillante ou contrôle d'accès bloqué ? HD Connect intervient en urgence 24h/24 pour remettre votre système de sécurité en état de fonctionnement. Diagnostic gratuit par téléphone, intervention rapide."
          backgroundImage={heroDepannageImage}
          icon={<Wrench className="w-4 h-4" />}
          badgeText="Dépannage Urgent"
          accentColor="depannage"
        />

        {/* SECTION DESCRIPTION */}
        <ContentSection
          title="Votre Sécurité Ne Peut Pas Attendre : Dépannage Express 2025-2026"
          badge="Urgence & Réactivité IA"
          badgeIcon={<AlertTriangle className="w-4 h-4" />}
          imagePosition="right"
          image={depannageTechUniqueImage}
          imageAlt="Technicien expert HD Connect certifié effectuant une réparation d'urgence sur un système de sécurité électronique avec équipement de diagnostic mobile"
          content={
            <>
              <p>
                Une panne de votre système de sécurité vous laisse vulnérable. <strong>Chaque minute compte</strong> lorsque votre alarme est hors service ou que vos caméras ne fonctionnent plus. C'est pourquoi HD Connect a mis en place un service de dépannage express disponible 24h/24, 7j/7.
              </p>
              <p>
                En 2025-2026, nos techniciens utilisent des <strong>outils de diagnostic assistés par IA</strong> pour identifier instantanément l'origine de la panne, qu'elle soit matérielle, logicielle ou liée au réseau. Cette technologie nous permet de réduire le temps d'intervention de 30% et de garantir une remise en service immédiate.
              </p>
              <p>
                Notre équipe de techniciens certifiés est formée pour intervenir sur tous les types de systèmes, quelle que soit la marque ou l'installateur d'origine. Nous diagnostiquons rapidement la cause de la panne et effectuons la réparation sur place dans la majorité des cas grâce à notre stock de pièces embarqué.
              </p>
              <p>
                Avant même le déplacement, nos experts tentent de <strong>résoudre votre problème par télémaintenance</strong>. Si une intervention sur site est nécessaire, nous vous garantissons un délai d'intervention rapide en Île-de-France.
              </p>
              <p>
                Chaque intervention est couverte par une <strong>garantie de 6 mois</strong>, pièces et main-d'œuvre. Notre objectif n'est pas seulement de réparer, mais de garantir que la panne ne se reproduira pas. Notre engagement est clair : une **intervention sur site Urgence** en Île-de-France pour toute urgence.
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
                Notre Service Dépannage
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
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-orange-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg flex-shrink-0"
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
          alt="Technicien d'urgence effectuant un diagnostic électronique sur panneau de sécurité avec véhicule d'intervention en arrière-plan"
          caption="Intervention express par techniciens certifiés avec équipement de diagnostic mobile"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Panne urgente ? Appelez maintenant !"
          subtitle="Notre équipe est disponible 24h/24, 7j/7 pour intervenir rapidement."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="depannage"
          showBenefits={true}
          urgencyText="Intervention Rapide en IDF"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Dépannage Express en Chiffres"
          stats={[
            { value: "Urgence", label: "Intervention", description: "délai garanti en IDF" },
            { value: "24/7", label: "Disponibilité", description: "nuits et week-ends" },
            { value: "6 mois", label: "Garantie", description: "sur réparations" },
            { value: "95%", label: "Résolution", description: "dès 1ère intervention" },
          ]}
          variant="depannage"
        />

        {/* SECTION TYPES DE PANNES */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Types de Pannes que Nous Réparons
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Nos techniciens interviennent sur tous les types de systèmes de sécurité.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {panneTypes.map((panne, index) => {
                const Icon = panne.icon;
                return (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{panne.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{panne.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {panne.problems.map((problem, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-destructive/10 text-destructive rounded-full">
                            {problem}
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

        {/* SECTION AVANTAGES */}
        <ColoredAdvantagesSection
          title="Pourquoi Choisir HD Connect pour Votre Dépannage ?"
          advantages={advantages}
          accentColor="depannage"
        />

        {/* COUVERTURE RÉGIONALE */}
        <RegionCoverage serviceName="Dépannage" serviceSlug="depannage" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Panne critique ? Appelez maintenant !"
          subtitle="Diagnostic gratuit et intervention rapide en Île-de-France."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* PROCESSUS */}
        <ColoredProcessSteps
          title="Votre Dépannage en 4 Étapes"
          steps={processSteps}
          accentColor="depannage"
        />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Interventions de Dépannage"
          description="Découvrez nos techniciens en action : diagnostic, réparation et intervention d'urgence."
          images={[
            { src: galleryDepannageDiagnostic, alt: "Technicien diagnostic système alarme avec multimètre" },
            { src: galleryDepannageRepair, alt: "Réparation caméra extérieure sur site" },
            { src: galleryDepannageVan, alt: "Véhicule intervention dépannage HD Connect" }
          ]}
        />
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Questions Fréquentes sur le Dépannage
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
                Besoin d'un Dépannage Rapide ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Intervention Rapide en Île-de-France. Diagnostic gratuit, devis transparent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "intervention" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
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
        <CTAFloating serviceName="système" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="depannage" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["videosurveillance", "alarme", "conseils"]} 
          title="Guides Dépannage et Maintenance"
        />

        {/* LIENS SERVICES */}
        <ServiceLinks currentService="depannage" />
      </main>
      <Footer />
    </div>
  );
};

export default Depannage;
