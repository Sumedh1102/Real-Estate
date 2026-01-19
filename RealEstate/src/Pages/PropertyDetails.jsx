import { useParams } from "react-router-dom";
import { useProperties } from "../Context/PropertyContext";
import Info from "../DemoComponents/Info";
import Gallery from "../DemoComponents/Gallery";
import Info2 from "../DemoComponents/Info2";
import Hero from "../DemoComponents/Hero";

const PropertyDetails = () => {
  const { id } = useParams();
  const { properties } = useProperties();

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="p-10 text-center">Property not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Hero property={property} />
      <Gallery property={property} />
      <Info property={property} />
      <Info2 property={property} />
    </div>
  );
};

export default PropertyDetails;
