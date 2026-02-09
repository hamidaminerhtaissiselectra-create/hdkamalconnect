import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ServicesHubLinkProps {
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

/**
 * Composant réutilisable pour lier vers la page hub /services
 * À utiliser dans toutes les pages de services individuelles
 */
const ServicesHubLink = ({ variant = "outline", className = "" }: ServicesHubLinkProps) => {
  return (
    <Button 
      variant={variant} 
      size="sm" 
      className={`gap-2 ${className}`}
      asChild
    >
      <Link to="/services">
        <ArrowLeft className="w-4 h-4" />
        Tous nos services
      </Link>
    </Button>
  );
};

export default ServicesHubLink;
