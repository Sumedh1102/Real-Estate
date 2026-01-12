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
                  <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Label */}
            <div className="flex items-center gap-2 sm:pt-1">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#1a1a1a]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium">
                Recent Listing 
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight lg:translate-x-40">
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
