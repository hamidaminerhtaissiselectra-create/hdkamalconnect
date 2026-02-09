import { Phone, ClipboardList, Truck, HardHat, CheckCircle, Headphones, ArrowRight, Calendar, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Prise de Contact",
    description: "Contactez-nous par téléphone, email ou via notre formulaire en ligne. Un conseiller expert vous répond sous 2 heures pour comprendre vos besoins.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Étude Personnalisée",
    description: "Nous analysons votre situation et réalisons une étude de site gratuite. Vous recevez un devis détaillé et transparent sous 24 à 48 heures.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Calendar,
    title: "Planification",
    description: "Une fois le devis validé, nous planifions l'intervention à votre convenance. Nous nous adaptons à vos contraintes horaires et d'activité.",
    color: "from-amber-500 to-orange-500"
  },
  {
    number: "04",
    icon: HardHat,
    title: "Installation Experte",
    description: "Nos techniciens certifiés réalisent l'installation avec soin et discrétion. Travail propre, respect des lieux et mise en service complète.",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "05",
    icon: Settings,
    title: "Configuration & Formation",
    description: "Nous configurons votre système selon vos besoins et formons vos équipes à son utilisation. Vous êtes opérationnel dès le premier jour.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    number: "06",
    icon: Headphones,
    title: "Suivi & Support",
    description: "Bénéficiez d'un support technique 24/7 et de notre contrat de maintenance préventive pour une sécurité sans faille sur le long terme.",
    color: "from-red-500 to-pink-500"
  }
];

const commitments = [
  { icon: CheckCircle, text: "Devis gratuit et sans engagement" },
  { icon: CheckCircle, text: "Aucuns frais cachés" },
  { icon: CheckCircle, text: "Matériel certifié et garanti 5 ans" },
  { icon: CheckCircle, text: "Techniciens qualifiés et formés" },
  { icon: CheckCircle, text: "Intervention propre et respectueuse" },
  { icon: CheckCircle, text: "Formation complète incluse" },
];

const InterventionProcess = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="intervention-process" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="badge-primary mb-3">
            <Truck className="w-4 h-4" />
            <span>Notre Méthode</span>
          </div>
          <h2 className="section-title text-center">
            Comment se déroule une intervention ?
          </h2>
          <p className="section-subtitle text-center">
            De votre premier appel à la mise en service de votre système de sécurité, 
            découvrez notre processus éprouvé pour une installation réussie.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto mb-10">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="bg-gradient-to-r from-foreground to-foreground/90 rounded-2xl p-8 md:p-12 text-background">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Nos Engagements Qualité
              </h3>
              <p className="text-background/80 leading-relaxed mb-6">
                Chez HD Connect, la satisfaction client est notre priorité absolue. 
                Nous nous engageons à fournir un service d'excellence à chaque intervention.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <commitment.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-background/90">{commitment.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background/10 rounded-xl p-6 backdrop-blur-sm">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-xl font-bold mb-3">Prêt à sécuriser vos locaux ?</h4>
              <p className="text-background/70 text-sm mb-6">
                Contactez-nous dès maintenant pour une étude gratuite et personnalisée de vos besoins en sécurité.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-background border-2 border-background/50 hover:bg-white/30 hover:border-background/70 transition-all"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    {phoneNumber}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionProcess;
