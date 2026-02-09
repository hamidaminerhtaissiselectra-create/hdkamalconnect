import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, CheckCircle, Star, MessageSquare } from 'lucide-react';
import { CityData } from '@/data/citiesData';

interface CityPageProps {
  city: CityData;
}

export const EnrichedCityPage = ({ city }: CityPageProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité à ${city.name}`,
    "description": city.description,
    "url": `https://hdconnect.fr/villes/${city.slug}`,
    "telephone": "+33 1 84 80 88 44",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.region,
      "addressCountry": "FR"
    },
    "areaServed": city.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Sécurité à {city.name}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Protection complète pour votre sécurité à {city.name}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary">Demander un devis gratuit</Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Appeler maintenant
              </Button>
            </div>
          </div>
        </section>

        {/* Localisation */}
        <section className="py-12 px-4 md:px-8 bg-muted">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Localisation à {city.name}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  <strong>Région :</strong> {city.region}
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Département :</strong> {city.department} ({city.departmentCode})
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Population :</strong> {city.population} habitants
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Nos Services à {city.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Vidéosurveillance 4K', 'Alarmes certifiées NF&A2P', "Contrôle d'accès biométrique", 'Domotique sécurisée', 'Maintenance 24/7', "Dépannage d'urgence"].map((service) => (
                <Card key={service} className="p-6">
                  <CheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-muted-foreground">
                    Service professionnel et fiable à {city.name}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 px-4 md:px-8 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Zones d'Intervention à {city.name}</h2>
            <p className="text-muted-foreground mb-6">
              Nous intervenons à {city.name} et dans les communes limitrophes suivantes :
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.nearbyTowns?.map((town) => (
                <div key={town} className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{town}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Témoignages Clients à {city.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Service excellent et professionnel à {city.name}. Très satisfait de la qualité du travail."
                  </p>
                  <p className="font-semibold">Client {i} - {city.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-8 bg-muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Questions Fréquentes - {city.name}</h2>
            <div className="space-y-4">
              {[
                {
                  q: `Intervenez-vous rapidement à ${city.name} ?`,
                  a: `Oui, nous garantissons une intervention en 4 heures pour les urgences à ${city.name} et ses environs.`
                },
                {
                  q: `Couvrez-vous les communes limitrophes de ${city.name} ?`,
                  a: `Oui, nous couvrons ${city.name} et toutes les communes alentours de plus de 3000 habitants.`
                },
                {
                  q: `Vos alarmes sont-elles certifiées ?`,
                  a: `Oui, toutes nos alarmes sont certifiées NF&A2P, la norme française de référence.`
                },
              ].map((item, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Sécurisez votre bien à {city.name}</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez nos experts pour une consultation gratuite
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">Demander un devis</Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                01 84 80 88 44
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnrichedCityPage;
