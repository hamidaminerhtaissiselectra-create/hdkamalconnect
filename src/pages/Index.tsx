import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesHighlight from "@/components/ServicesHighlight";
import InterventionProcess from "@/components/InterventionProcess";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import { MissionBlock, SolutionsBlock, ExpertiseBlock, CoverageBlock, ClientTypesBlock } from "@/components/HomeSEOBlocks";
import { useSEO } from "@/hooks/useSEO";
import { getHomePageJsonLd } from "@/data/structuredData";
import { homeFAQItems, getHomeFAQJsonLd } from "@/data/homeFAQ";
import HomeCTALinks from "@/components/HomeCTALinks";

const Index = () => {
  // SEO optimisé Answer-First pour la page d'accueil
  useSEO({
    // Answer-First: title citable
    title: "HD Connect | Installation Vidéosurveillance, Alarme & Domotique en France",
    // Answer-First: description autonome et citable
    description: "HD Connect installe des systèmes de sécurité professionnels : vidéosurveillance 4K, alarmes certifiées NF&A2P et contrôle d'accès biométrique. Techniciens certifiés, intervention rapide, garantie 5 ans.",
    keywords: "installation vidéosurveillance, alarme maison, contrôle accès entreprise, domotique sécurité, HD Connect, sécurité professionnelle France",
    canonicalUrl: "https://hdconnect.fr/",
  });

  // Données structurées JSON-LD pour la page d'accueil
  const jsonLdSchemas = getHomePageJsonLd();
  const faqJsonLd = getHomeFAQJsonLd();

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* FAQ JSON-LD for People Also Ask */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <MissionBlock />
        <Services />
        {/* CTAs vers Hub Services, Blog et Zones d'intervention */}
        <HomeCTALinks />
        <SolutionsBlock />
        <ClientTypesBlock />
        <Testimonials />
        <ExpertiseBlock />
        <ServicesHighlight />
        <InterventionProcess />
        <CoverageBlock />
        {/* FAQ Section for People Also Ask */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Sécurité"
          subtitle="Retrouvez les réponses aux questions les plus posées sur nos services"
          items={homeFAQItems}
        />
        <QuoteFunnelSimple />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
