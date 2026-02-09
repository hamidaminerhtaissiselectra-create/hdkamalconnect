import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  serviceImage?: string;
  faqItems?: FAQItem[];
  breadcrumbs: { name: string; url: string }[];
  cityName?: string;
}

const ServiceSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceImage,
  faqItems,
  breadcrumbs,
  cityName,
}: ServiceSchemaProps) => {
  const baseUrl = 'https://hdconnect.fr';

  // Service Schema avec Answer-First
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    // Answer-First: description autonome et citable
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'HD Connect',
      // Answer-First: slogan citable
      description: 'HD Connect est le spécialiste français de l\'installation de systèmes de sécurité professionnels depuis 2015.',
      telephone: '+33 6 27 13 53 04',
      email: 'kamal@hdconnect.fr',
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityName || 'Paris',
        addressRegion: 'Île-de-France',
        postalCode: '75001',
        addressCountry: 'FR',
      },
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      priceRange: '€€€',
      openingHours: 'Mo-Fr 09:00-18:00',
      // Preuves d'autorité
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        reviewCount: '215',
      },
      // Certifications (preuves)
      hasCredential: [
        'Certification NF&A2P',
        'APSAD P3',
        'Installateur certifié Hikvision',
        'Installateur certifié Ajax'
      ],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de Sécurité HD Connect',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Installation Alarme NF&A2P',
            description: 'Installation d\'alarmes certifiées pour maisons et entreprises',
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vidéosurveillance 4K',
            description: 'Installation de caméras 4K avec accès mobile et enregistrement',
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Contrôle d\'Accès',
            description: 'Installation de systèmes de contrôle d\'accès biométrique et badges',
          }
        }
      ]
    },
    areaServed: cityName
      ? {
          '@type': 'City',
          name: cityName,
          '@id': `${baseUrl}/villes/${cityName.toLowerCase().replace(/\s/g, '-')}`,
        }
      : [
          { '@type': 'Country', name: 'France' },
          { '@type': 'State', name: 'Île-de-France' },
          { '@type': 'City', name: 'Paris' },
          { '@type': 'City', name: 'Lyon' },
          { '@type': 'City', name: 'Marseille' },
        ],
    url: `${baseUrl}${serviceUrl}`,
    ...(serviceImage && { image: `${baseUrl}${serviceImage}` }),
    // Preuves d'autorité
    award: ['Garantie 5 ans installation', 'Plus de 500 clients satisfaits'],
    serviceType: serviceName,
  };

  // FAQ Schema
  const faqSchema = faqItems?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${baseUrl}${crumb.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default ServiceSchema;
