import { ArrowRight } from "lucide-react";
import properties from "../Data/properties";
import PropertyCard from "../Components/PropertyCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="w-full bg-[#F5F1E9] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="border border-black/10 mb-3"></div>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] mb-16" />
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">
                Recent Listings
              </span>
              <h2 className="text-3xl md:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight translate ml-32">
                Take a peek at hottest homes
                <br />
                and discover what could be yours
              </h2>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
