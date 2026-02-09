import AnimatedSection from "@/components/AnimatedSection";

interface TechnologiesGarantiesProps {
  variant?: "videosurveillance" | "alarme" | "acces" | "domotique" | "reseau" | "maintenance" | "antenne" | "portail" | "installation" | "depannage" | "location";
}

const variantData = {
  videosurveillance: {
    title: "Technologies & Garanties",
    items: [
      { title: "Marques Premium", description: "Hikvision, Dahua, Axis, Hanwha - Leaders mondiaux en vidéosurveillance" },
      { title: "Certification NF", description: "Installateurs certifiés et conformes aux normes françaises et européennes" },
      { title: "Garantie 3 ans", description: "Garantie constructeur + installation avec maintenance préventive incluse" },
    ]
  },
  alarme: {
    title: "Technologies & Garanties",
    items: [
      { title: "Marques Certifiées", description: "Ajax, Risco, Paradox, Vanderbilt - Systèmes NF&A2P reconnus par les assureurs" },
      { title: "Certification NF&A2P", description: "Installation conforme aux exigences des assurances et normes APSAD" },
      { title: "Garantie 5 ans", description: "Équipements garantis 5 ans avec maintenance préventive incluse" },
    ]
  },
  acces: {
    title: "Technologies & Garanties",
    items: [
      { title: "Marques Leaders", description: "CDVI, Intratone, Comelit - Solutions de contrôle d'accès professionnelles" },
      { title: "Compatibilité", description: "Systèmes compatibles avec les principaux interphones et vigiks" },
      { title: "Garantie 2 ans", description: "Garantie constructeur avec support technique dédié" },
    ]
  },
  domotique: {
    title: "Technologies & Garanties",
    items: [
      { title: "Écosystèmes", description: "Google Home, Alexa, Apple HomeKit - Compatibilité multi-plateformes" },
      { title: "Protocoles", description: "Zigbee, Z-Wave, Matter, WiFi - Solutions filaires et sans fil" },
      { title: "Garantie 2 ans", description: "Garantie constructeur avec mises à jour logicielles incluses" },
    ]
  },
  reseau: {
    title: "Technologies & Garanties",
    items: [
      { title: "Équipements Pro", description: "Ubiquiti, Cisco, TP-Link Pro - Infrastructure réseau professionnelle" },
      { title: "Certification", description: "Câblage certifié Cat 6A/7 avec garantie 25 ans" },
      { title: "Support 24/7", description: "Monitoring et maintenance proactive de votre infrastructure" },
    ]
  },
  maintenance: {
    title: "Nos Engagements",
    items: [
      { title: "Réactivité", description: "Intervention Rapide en urgence, 24h en standard sur toute la France" },
      { title: "Multi-marques", description: "Techniciens formés sur toutes les marques du marché" },
      { title: "Contrats flexibles", description: "Formules adaptées à vos besoins : préventif, correctif, tout inclus" },
    ]
  },
  antenne: {
    title: "Technologies & Garanties",
    items: [
      { title: "Marques Qualité", description: "Triax, Televes, Cahors - Équipements de réception premium" },
      { title: "Normes TNT/SAT", description: "Installation conforme aux normes en vigueur (HD, 4K, collectif)" },
      { title: "Garantie 2 ans", description: "Équipements et main d'œuvre garantis 2 ans" },
    ]
  },
  portail: {
    title: "Technologies & Garanties",
    items: [
      { title: "Motorisations", description: "CAME, Nice, Somfy, Faac - Leaders de l'automatisme en Europe" },
      { title: "Sécurité", description: "Systèmes conformes aux normes NF EN 12453 et marquage CE" },
      { title: "Garantie 2 ans", description: "Motorisation et installation garanties avec SAV réactif" },
    ]
  },
  installation: {
    title: "Nos Engagements",
    items: [
      { title: "Expertise Multi-métiers", description: "Techniciens qualifiés en sécurité, réseau, domotique et automatismes" },
      { title: "Qualité Garantie", description: "Installation soignée avec tests complets et formation utilisateur" },
      { title: "SAV Réactif", description: "Support technique et dépannage rapide post-installation" },
    ]
  },
  depannage: {
    title: "Nos Engagements",
    items: [
      { title: "Rapidité", description: "Intervention d'urgence sous 2h en Île-de-France, 24h ailleurs" },
      { title: "Diagnostic Précis", description: "Identification rapide des pannes avec équipement de mesure pro" },
      { title: "Tarifs Transparents", description: "Devis avant intervention, pas de mauvaise surprise" },
    ]
  },
  location: {
    title: "Nos Engagements",
    items: [
      { title: "Matériel Récent", description: "Équipements de dernière génération, révisés et testés" },
      { title: "Flexibilité", description: "Location courte ou longue durée, livraison et installation incluses" },
      { title: "Support Inclus", description: "Assistance technique pendant toute la durée de la location" },
    ]
  },
};

const TechnologiesGaranties = ({ variant = "videosurveillance" }: TechnologiesGarantiesProps) => {
  const data = variantData[variant];

  return (
    <AnimatedSection>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {data.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {data.items.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default TechnologiesGaranties;
