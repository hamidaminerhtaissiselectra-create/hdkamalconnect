import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";
import { content } from "@/data/content";

const NotFound = () => {
  const location = useLocation();
  const contactInfo = content.company.contact;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Graphic */}
            <div className="relative mb-8">
              <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-20 h-20 md:w-28 md:h-28 text-primary animate-pulse" />
              </div>
            </div>

            {/* Message */}
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Page introuvable
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Vérifiez l'URL ou retournez à la page d'accueil.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Home className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-primary/30 hover:border-primary"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Page précédente
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <p className="text-muted-foreground mb-4">
                Besoin d'aide ? Contactez-nous directement :
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-primary hover:underline font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  {contactInfo.phoneMobile}
                </a>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
