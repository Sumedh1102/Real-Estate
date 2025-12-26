import { ChevronRight } from "lucide-react";

const neighborhoods = [
  {
    name: "Miami Beach, Florida",
    image: "https://i.pinimg.com/736x/69/a7/cf/69a7cfbb63b8bf02c0a8a1c26fe03762.jpg",
  },
  {
    name: "Beverly Hills, California",
    image: "https://i.pinimg.com/1200x/5a/aa/26/5aaa26fc1a2b691ff7254f4239873033.jpg",
  },
  {
    name: "Malibu, California",
    image: "https://i.pinimg.com/1200x/6d/1e/07/6d1e07563a6388be6cc4f4797a831a39.jpg",
  },
  {
    name: "Hawaii",
    image: "https://i.pinimg.com/736x/19/59/24/1959243ac014fb2260180ca0db35ddd9.jpg",
  },
  {
    name: "Brickell, Miami",
    image: "https://i.pinimg.com/736x/a4/f2/d9/a4f2d99415cf9a98d83341339b557ed5.jpg",
    hasViewButton: true,
  },
  {
    name: "SoHo, New York City",
    image: "https://i.pinimg.com/1200x/c4/62/71/c462719d28f2f397a355c0281eb8ac18.jpg",
  },
];

function NeighborhoodCard({ name, image, hasViewButton }) {
  return (
    <div className="group cursor-pointer">
      {/* Card Container */}
      <div className="bg-white rounded-[10px] shadow-sm overflow-hidden transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden p-2">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-105 rounded-lg"
          />
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between mt-3 px-1">
        <span className="text-black text-base sm:text-lg md:text-xl font-normal tracking-tight">{name}</span>

        <button className="w-8 h-8 sm:w-10 sm:h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 flex-shrink-0">
          <ChevronRight className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full bg-[#F5F1E9] min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="border-t border-black/10 mb-6 sm:mb-8"></div>
        
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Label - Mobile: stacked, Desktop: left */}
            <div className="flex items-center gap-2 sm:pt-1">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#1a1a1a]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium">
                Neighborhood
              </span>
            </div>
            
            {/* Heading - Mobile: below label, Desktop: right side */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight lg:translate-x-40">
              Where you live matters
              <br />
              —pick the perfect spot
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-6 lg:gap-8">
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard
              key={neighborhood.name}
              name={neighborhood.name}
              image={neighborhood.image}
              hasViewButton={neighborhood.hasViewButton}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-12 md:mt-14">
          <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-medium uppercase tracking-wide hover:scale-105 hover:shadow-xl transition-all duration-300">
            VIEW ALL NEIGHBORHOODS
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
}