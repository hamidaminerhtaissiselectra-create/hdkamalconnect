// Données structurées JSON-LD pour HD Connect (LocalBusiness + Organization)

interface OrganizationSchemaProps {
  includeLocalBusiness?: boolean;
}

const OrganizationSchema = ({ includeLocalBusiness = true }: OrganizationSchemaProps) => {
  const baseUrl = 'https://hdconnect.fr';

  // Organization Schema - Schéma principal de l'entreprise
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'HD Connect',
    alternateName: 'HD Connect Sécurité',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/og-image.webp`,
      width: 1200,
      height: 630,
    },
    image: `${baseUrl}/og-image.webp`,
    description: 'Expert français en installation de systèmes de sécurité : vidéosurveillance 4K, alarmes certifiées NF&A2P, contrôle d\'accès biométrique. Intervention France entière.',
    slogan: 'Votre sécurité, notre expertise.',
    foundingDate: '2014',
    telephone: '+33 6 27 13 53 04',
    email: 'kamal@hdconnect.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    sameAs: [
      'https://www.linkedin.com/company/hdconnect-securite',
      'https://www.facebook.com/hdconnectsecurite',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+33 6 27 13 53 04',
        contactType: 'customer service',
        availableLanguage: ['French'],
        areaServed: 'FR',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+33 1 83 64 36 40',
        contactType: 'technical support',
        availableLanguage: ['French'],
        areaServed: 'FR',
      },
    ],
    knowsAbout: [
      'Vidéosurveillance',
      'Systèmes d\'alarme',
      'Contrôle d\'accès',
      'Domotique',
      'Réseau informatique',
      'Antennes satellite',
      'Portails automatiques',
    ],
  };

  // LocalBusiness Schema - Pour le SEO local
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'HD Connect',
    description: 'Installation de systèmes de sécurité professionnels : vidéosurveillance, alarmes, contrôle d\'accès. Intervention rapide en France.',
    url: baseUrl,
    telephone: '+33 6 27 13 53 04',
    email: 'kamal@hdconnect.fr',
    image: `${baseUrl}/og-image.webp`,
    logo: `${baseUrl}/og-image.webp`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522,
    },
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'AdministrativeArea', name: 'Île-de-France' },
      { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
      { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
      { '@type': 'AdministrativeArea', name: 'Occitanie' },
      { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
      { '@type': 'AdministrativeArea', name: 'Hauts-de-France' },
      { '@type': 'AdministrativeArea', name: 'Grand Est' },
      { '@type': 'AdministrativeArea', name: 'Bretagne' },
      { '@type': 'AdministrativeArea', name: 'Normandie' },
      { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
      { '@type': 'AdministrativeArea', name: 'Centre-Val de Loire' },
      { '@type': 'AdministrativeArea', name: 'Bourgogne-Franche-Comté' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de sécurité HD Connect',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation Vidéosurveillance',
            description: 'Installation de caméras HD et 4K avec enregistrement et accès mobile',
            url: `${baseUrl}/services/videosurveillance`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Système d\'Alarme',
            description: 'Installation d\'alarmes anti-intrusion certifiées NF&A2P',
            url: `${baseUrl}/services/alarme`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Contrôle d\'Accès',
            description: 'Solutions de contrôle d\'accès biométrique, badge et digicode',
            url: `${baseUrl}/services/controle-acces`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Domotique',
            description: 'Intégration domotique pour une sécurité intelligente',
            url: `${baseUrl}/services/domotique`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance et Dépannage',
            description: 'Maintenance préventive et intervention d\'urgence 24/7',
            url: `${baseUrl}/services/maintenance`,
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '200',
      reviewCount: '185',
    },
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'HD Connect',
    description: 'Expert en installation de systèmes de sécurité en France',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'fr-FR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {includeLocalBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default OrganizationSchema;
