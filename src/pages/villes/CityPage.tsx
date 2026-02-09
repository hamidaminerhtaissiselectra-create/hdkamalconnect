import { useParams, Navigate } from "react-router-dom";
import CityServicePage from "./CityServicePage";
import { getCityBySlug } from "@/data/citiesData";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  if (!citySlug) {
    return <Navigate to="/zones-intervention" replace />;
  }
  
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return <Navigate to="/zones-intervention" replace />;
  }
  
  return <CityServicePage city={city} />;
};

export default CityPage;
