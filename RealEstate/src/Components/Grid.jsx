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
        <span className="text-black text-xl font-normal tracking-tight">{name}</span>

        <button className="w-10 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300">
          <ChevronRight className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="w-full bg-[#F5F1E9] min-h-screen py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
       {/* Section Header */}
          <div className="border border-black/10 mb-3"></div>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] mb-16" />
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">Neighborhood</span>
            <h2 className="text-3xl md:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight translate ml-32">
              Where you live matters
              <br />
              — pick the perfect spot
            </h2>
            </div>
          </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
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
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-xl text-sm font-medium uppercase tracking-wide hover:scale-105 hover:shadow-xl transition-all duration-300">
              VIEW ALL NEIGHBORHOODS
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
      </div>
    </main>
  );
}
