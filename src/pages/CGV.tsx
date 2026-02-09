import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { content } from "@/data/content";

const CGV = () => {
  useSEO({
    title: "Conditions Générales de Vente | HD Connect",
    description: "Conditions générales de vente des services HD Connect - Installation, maintenance et location de systèmes de sécurité",
    canonicalUrl: "https://hdconnect.fr/cgv",
    noIndex: true,
  });

  const breadcrumbs = [{ name: "Conditions générales de vente", url: "/cgv" }];
  const contactInfo = content.company.contact;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Conditions Générales de Vente</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Objet</h2>
                <p className="text-muted-foreground">
                  Les présentes conditions générales de vente (CGV) régissent les relations contractuelles 
                  entre HD Connect et ses clients dans le cadre de la fourniture de services d'installation, 
                  de maintenance et de location de systèmes de sécurité électronique.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Devis et commandes</h2>
                <p className="text-muted-foreground">
                  Tout devis établi par HD Connect est valable 30 jours à compter de sa date d'émission. 
                  La commande devient ferme et définitive après acceptation écrite du devis par le client 
                  et versement d'un acompte de 30% du montant total.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Prix et paiement</h2>
                <p className="text-muted-foreground">
                  Les prix sont exprimés en euros TTC. Le paiement s'effectue selon les modalités suivantes :<br />
                  - 30% à la commande<br />
                  - 70% à la fin de l'installation<br /><br />
                  Pour les contrats de maintenance, le paiement est dû annuellement à la date anniversaire du contrat.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Délais d'intervention</h2>
                <p className="text-muted-foreground">
                  HD Connect s'engage à réaliser les installations dans un délai de 2 à 4 semaines 
                  suivant la validation de la commande, sous réserve de la disponibilité des équipements. 
                  Pour les interventions d'urgence en Île-de-France, le délai est de 4 heures maximum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Garantie</h2>
                <p className="text-muted-foreground">
                  HD Connect garantit ses installations pendant 5 ans pièces et main d'œuvre. 
                  Cette garantie couvre les défauts de fabrication et les problèmes d'installation. 
                  Elle ne couvre pas les dommages résultant d'une mauvaise utilisation, d'un acte de vandalisme 
                  ou d'un cas de force majeure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6 - Responsabilité</h2>
                <p className="text-muted-foreground">
                  La responsabilité de HD Connect est limitée au montant de la prestation réalisée. 
                  HD Connect ne saurait être tenu responsable des dommages indirects ou consécutifs 
                  (perte d'exploitation, préjudice commercial, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 7 - Résiliation</h2>
                <p className="text-muted-foreground">
                  En cas de non-paiement ou de manquement grave aux obligations contractuelles, 
                  HD Connect se réserve le droit de résilier le contrat de plein droit, 15 jours 
                  après mise en demeure restée sans effet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Article 8 - Litiges</h2>
                <p className="text-muted-foreground">
                  En cas de litige, les parties s'engagent à rechercher une solution amiable. 
                  À défaut, les tribunaux de Paris seront seuls compétents.<br /><br />
                  Contact : {contactInfo.email} | {contactInfo.phoneMobile}
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

export default CGV;
