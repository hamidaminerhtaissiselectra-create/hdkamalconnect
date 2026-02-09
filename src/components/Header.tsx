import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const navLinks = useMemo(
    () => [
      { label: "Services", id: "services", isLink: true, href: "/services" },
      { label: "À Propos", id: "about" },
      { label: "Zones d'intervention", id: "zones", isLink: true, href: "/zones-intervention" },
      { label: "Blog", id: "blog", isLink: true, href: "/blog" },
	      { label: "Contact", id: "contact" },
    ],
    [],
  );

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (id === "quote") {
      scrollToSection("quote", { mode: "quote" });
      return;
    }

	      scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">HD</span>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground block">HD Connect</span>
              <span className="text-xs text-muted-foreground block">Sécurité & Technologie</span>
            </div>
          </Link>

	          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.id}
                  to={link.href!}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              onClick={() => handleNavClick("quote")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Devis Gratuit
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isLink ? (
                  <Link
                    key={link.id}
                    to={link.href!}
                    className="text-left text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-left text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <Button
                onClick={() => handleNavClick("quote")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Devis Gratuit
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

