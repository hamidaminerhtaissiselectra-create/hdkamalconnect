import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { content } from "@/data/content";

const PolitiqueConfidentialite = () => {
  useSEO({
    title: "Politique de Confidentialité | HD Connect",
    description: "Politique de confidentialité et protection des données personnelles du site HD Connect - RGPD et cookies",
    canonicalUrl: "https://hdconnect.fr/politique-confidentialite",
    noIndex: true,
  });

  const breadcrumbs = [{ name: "Politique de confidentialité", url: "/politique-confidentialite" }];
  const contactInfo = content.company.contact;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Collecte des données personnelles</h2>
                <p className="text-muted-foreground">
                  HD Connect collecte les données personnelles suivantes lors de l'utilisation de notre site :<br />
                  - Nom et prénom<br />
                  - Adresse email<br />
                  - Numéro de téléphone<br />
                  - Adresse postale (pour les demandes de devis)<br />
                  - Données de navigation (cookies)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Finalité du traitement</h2>
                <p className="text-muted-foreground">
                  Les données collectées sont utilisées pour :<br />
                  - Répondre à vos demandes de devis et de contact<br />
                  - Assurer le suivi de nos prestations<br />
                  - Améliorer nos services<br />
                  - Respecter nos obligations légales
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Base légale du traitement</h2>
                <p className="text-muted-foreground">
                  Le traitement de vos données est fondé sur :<br />
                  - Votre consentement (formulaire de contact)<br />
                  - L'exécution d'un contrat (demande de devis)<br />
                  - Notre intérêt légitime (amélioration des services)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Durée de conservation</h2>
                <p className="text-muted-foreground">
                  Vos données sont conservées pendant :<br />
                  - 3 ans pour les prospects n'ayant pas donné suite<br />
                  - 5 ans après la fin de la relation commerciale pour les clients<br />
                  - 10 ans pour les données de facturation (obligation légale)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Vos droits</h2>
                <p className="text-muted-foreground">
                  Conformément au RGPD, vous disposez des droits suivants :<br />
                  - Droit d'accès à vos données<br />
                  - Droit de rectification<br />
                  - Droit à l'effacement ("droit à l'oubli")<br />
                  - Droit à la limitation du traitement<br />
                  - Droit à la portabilité<br />
                  - Droit d'opposition<br /><br />
                  Pour exercer ces droits, contactez-nous à : {contactInfo.email}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
                <p className="text-muted-foreground">
                  Notre site utilise des cookies pour :<br />
                  - Assurer le bon fonctionnement du site (cookies techniques)<br />
                  - Mesurer l'audience (Google Analytics)<br />
                  - Personnaliser votre expérience<br /><br />
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact DPO</h2>
                <p className="text-muted-foreground">
                  Pour toute question relative à la protection de vos données :<br />
                  Email : {contactInfo.email}<br />
                  Téléphone : {contactInfo.phoneMobile}<br /><br />
                  Vous pouvez également introduire une réclamation auprès de la CNIL.
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

export default PolitiqueConfidentialite;
