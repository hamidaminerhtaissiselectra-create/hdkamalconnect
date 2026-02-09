// Données structurées globales JSON-LD pour le SEO
// Schema.org Organization + LocalBusiness + Services

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hdconnect.fr/#organization",
  "name": "HD Connect",
  "alternateName": "HD Connect Sécurité",
  "url": "https://hdconnect.fr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://hdconnect.fr/og-image.jpg",
    "width": 512,
    "height": 512
  },
  "image": "https://hdconnect.fr/og-image.jpg",
  // Answer-First: description autonome et citable
  "description": "HD Connect est le spécialiste français de l'installation de systèmes de sécurité professionnels. Vidéosurveillance 4K, alarmes certifiées NF&A2P et contrôle d'accès biométrique pour particuliers et entreprises depuis 2015.",
  "foundingDate": "2015",
  "telephone": "+33 6 27 13 53 04",
  "email": "kamal@hdconnect.fr",
  // Preuves d'autorité intégrées
  "knowsAbout": [
    "Installation vidéosurveillance 4K",
    "Alarme anti-intrusion NF&A2P",
    "Contrôle d'accès biométrique",
    "Domotique maison connectée",
    "Maintenance systèmes sécurité",
    "Conformité RGPD vidéosurveillance"
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification NF&A2P" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "APSAD P3" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Installateur certifié Hikvision" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Installateur certifié Ajax" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Créteil",
    "addressLocality": "Créteil",
    "postalCode": "94000",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.facebook.com/hdconnectsecurite",
    "https://www.linkedin.com/company/hdconnect-securite",
    "https://www.instagram.com/hdconnect_securite"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33627135304",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French"],
      "hoursAvailable": "Mo-Fr 09:00-18:00"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+33627135304",
      "contactType": "emergency",
      "areaServed": "FR",
      "availableLanguage": ["French"],
      "hoursAvailable": "Mo-Su 00:00-23:59",
      "description": "Dépannage urgence 24/7"
    }
  ],
  // Preuves d'expérience
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 15 },
  "award": ["Plus de 500 clients satisfaits", "Garantie 5 ans installation", "Intervention rapide 4h"]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hdconnect.fr/#localbusiness",
  "name": "HD Connect - Sécurité et Domotique",
  "image": "https://hdconnect.fr/og-image.jpg",
  "url": "https://hdconnect.fr",
  "telephone": "+33 6 27 13 53 04",
  "email": "kamal@hdconnect.fr",
  "priceRange": "€€€",
  // Answer-First: description autonome
  "description": "HD Connect installe des systèmes de sécurité professionnels pour protéger maisons et entreprises. Techniciens certifiés, équipements NF&A2P, intervention rapide en France.",
  "slogan": "Votre sécurité, notre expertise depuis 2015",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Créteil",
    "addressLocality": "Créteil",
    "postalCode": "94000",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.7904,
    "longitude": 2.4556
  },
  "areaServed": [
    { "@type": "Country", "name": "France" },
    { "@type": "AdministrativeArea", "name": "Île-de-France" },
    { "@type": "AdministrativeArea", "name": "Auvergne-Rhône-Alpes" },
    { "@type": "AdministrativeArea", "name": "Provence-Alpes-Côte d'Azur" },
    { "@type": "AdministrativeArea", "name": "Nouvelle-Aquitaine" },
    { "@type": "AdministrativeArea", "name": "Occitanie" },
    { "@type": "AdministrativeArea", "name": "Hauts-de-France" },
    { "@type": "AdministrativeArea", "name": "Grand Est" },
    { "@type": "AdministrativeArea", "name": "Pays de la Loire" },
    { "@type": "AdministrativeArea", "name": "Bretagne" },
    { "@type": "AdministrativeArea", "name": "Normandie" },
    { "@type": "AdministrativeArea", "name": "Bourgogne-Franche-Comté" },
    { "@type": "AdministrativeArea", "name": "Centre-Val de Loire" },
    { "@type": "AdministrativeArea", "name": "Corse" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  // Preuves d'autorité
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "215",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Client vérifié" },
      "reviewBody": "Installation rapide et professionnelle. Le système de vidéosurveillance fonctionne parfaitement."
    }
  ],
  // Certifications (preuves)
  "hasCredential": "Certification NF&A2P, APSAD P3, Installateur certifié Hikvision et Ajax"
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services HD Connect",
  // Answer-First
  "description": "HD Connect propose 9 services de sécurité électronique : installation vidéosurveillance, alarme, contrôle d'accès, domotique, réseau, maintenance, antennes, portails et location de matériel.",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Installation Vidéosurveillance",
      // Answer-First: description citable
      "description": "L'installation de caméras de vidéosurveillance 4K permet de surveiller et protéger vos biens 24h/24. Accès mobile, enregistrement NVR, analyse vidéo IA.",
      "url": "https://hdconnect.fr/services/videosurveillance",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation vidéosurveillance professionnelle"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Installation Alarme Anti-Intrusion",
      "description": "Une alarme anti-intrusion certifiée NF&A2P protège efficacement maison et entreprise contre les cambriolages. Détecteurs, sirènes et télésurveillance 24/7.",
      "url": "https://hdconnect.fr/services/alarme",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation alarme certifiée NF&A2P"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Contrôle d'Accès Biométrique",
      "description": "Le contrôle d'accès sécurise les entrées avec badges RFID, biométrie et digicodes. Gestion centralisée pour bureaux, immeubles et sites industriels.",
      "url": "https://hdconnect.fr/services/controle-acces",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation contrôle d'accès professionnel"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Domotique Maison Connectée",
      "description": "La domotique centralise et automatise la gestion de votre sécurité. Alarme, caméras et éclairage dans une application unique compatible Google Home et Alexa.",
      "url": "https://hdconnect.fr/services/domotique",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation domotique sécurité"
    },
    {
      "@type": "Service",
      "position": 5,
      "name": "Infrastructure Réseau",
      "description": "Un réseau informatique professionnel garantit la fiabilité de vos systèmes connectés. Câblage structuré Cat 6/7, fibre optique et WiFi entreprise.",
      "url": "https://hdconnect.fr/services/reseau",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation réseau informatique"
    },
    {
      "@type": "Service",
      "position": 6,
      "name": "Maintenance et Dépannage",
      "description": "La maintenance préventive garantit le bon fonctionnement de vos systèmes de sécurité. Contrats annuels et dépannage urgence 4h en Île-de-France.",
      "url": "https://hdconnect.fr/services/maintenance",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Maintenance systèmes de sécurité"
    },
    {
      "@type": "Service",
      "position": 7,
      "name": "Installation Antennes et Satellite",
      "description": "L'installation d'antennes TNT et paraboles satellite assure une réception TV optimale. Intervention pour particuliers, copropriétés et professionnels.",
      "url": "https://hdconnect.fr/services/antenne-satellite",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation antenne et satellite"
    },
    {
      "@type": "Service",
      "position": 8,
      "name": "Portails et Automatismes",
      "description": "La motorisation de portails et barrières automatise et sécurise vos accès extérieurs. Portails coulissants, portes de garage et interphonie.",
      "url": "https://hdconnect.fr/services/portails-parking",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Installation portails automatiques"
    },
    {
      "@type": "Service",
      "position": 9,
      "name": "Location Matériel Sécurité",
      "description": "La location de matériel de sécurité répond aux besoins temporaires : chantiers, événements, surveillance provisoire. Caméras solaires et alarmes portables.",
      "url": "https://hdconnect.fr/services/location",
      "provider": { "@id": "https://hdconnect.fr/#organization" },
      "areaServed": { "@type": "Country", "name": "France" },
      "serviceType": "Location équipement sécurité"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hdconnect.fr/#website",
  "url": "https://hdconnect.fr",
  "name": "HD Connect",
  "description": "HD Connect est le spécialiste français de l'installation de systèmes de sécurité professionnels depuis 2015.",
  "publisher": { "@id": "https://hdconnect.fr/#organization" },
  "inLanguage": "fr-FR",
  "abstract": "HD Connect is a specialized security systems integrator in France, providing AI-enhanced video surveillance, certified alarms, and networking solutions for a secure environment.",
  "keywords": "security systems, video surveillance, alarm installation, access control, networking, home automation, France",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hdconnect.fr/recherche?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Schema Speakable pour optimisation IA/Recherche vocale
export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "HD Connect - Installation Sécurité France",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".answer-first", ".hero-subtitle", ".faq-answer"]
  },
  "usageInfo": "https://hdconnect.fr/ai-instructions.md",
  "creativeWorkStatus": "Published",
  "about": [
    { "@type": "Thing", "name": "Vidéosurveillance" },
    { "@type": "Thing", "name": "Alarme anti-intrusion" },
    { "@type": "Thing", "name": "Contrôle d'accès" },
    { "@type": "Thing", "name": "Domotique" }
  ]
};

// Schema HowTo pour guides d'installation (Featured Snippets)
export const getHowToSchema = (title: string, steps: { name: string; text: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": title,
  "description": `Guide complet pour ${title.toLowerCase()} par HD Connect, expert sécurité certifié.`,
  "totalTime": "PT30M",
  "tool": [
    { "@type": "HowToTool", "name": "Équipement de sécurité certifié" },
    { "@type": "HowToTool", "name": "Outils d'installation professionnels" }
  ],
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text
  }))
});

// Fonction pour générer le JSON-LD complet de la page d'accueil
export const getHomePageJsonLd = () => {
  return [
    organizationSchema,
    localBusinessSchema,
    servicesSchema,
    websiteSchema,
    speakableSchema
  ];
};
