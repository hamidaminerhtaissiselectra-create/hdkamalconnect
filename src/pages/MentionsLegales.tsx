import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { content } from "@/data/content";

const MentionsLegales = () => {
  useSEO({
    title: "Mentions Légales | HD Connect",
    description: "Mentions légales du site HD Connect - Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site hdconnect.fr",
    canonicalUrl: "https://hdconnect.fr/mentions-legales",
    noIndex: true,
  });

  const breadcrumbs = [{ name: "Mentions légales", url: "/mentions-legales" }];
  const contactInfo = content.company.contact;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Éditeur du site</h2>
                <p className="text-muted-foreground">
                  Le site hdconnect.fr est édité par :<br />
                  <strong>HD Connect</strong><br />
                  Adresse : {contactInfo.address}<br />
                  Téléphone : {contactInfo.phoneMobile}<br />
                  Email : {contactInfo.email}<br />
                  SIRET : [À compléter]<br />
                  Directeur de la publication : Kamal
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hébergement</h2>
                <p className="text-muted-foreground">
                  Le site est hébergé par :<br />
                  <strong>Lovable / Netlify</strong><br />
                  Adresse : San Francisco, CA, USA
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground">
                  L'ensemble du contenu du site hdconnect.fr (textes, images, vidéos, logos, marques) est protégé 
                  par le droit d'auteur et le droit des marques. Toute reproduction, représentation, modification 
                  ou exploitation non autorisée est interdite et constitue une contrefaçon sanctionnée par le Code 
                  de la propriété intellectuelle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Responsabilité</h2>
                <p className="text-muted-foreground">
                  HD Connect s'efforce d'assurer l'exactitude des informations diffusées sur ce site. 
                  Toutefois, HD Connect ne saurait être tenu responsable des erreurs, omissions ou des 
                  résultats qui pourraient être obtenus par un mauvais usage de ces informations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Liens hypertextes</h2>
                <p className="text-muted-foreground">
                  Le site peut contenir des liens vers d'autres sites. HD Connect n'exerce aucun contrôle 
                  sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Droit applicable</h2>
                <p className="text-muted-foreground">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                  les tribunaux français seront seuls compétents.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
