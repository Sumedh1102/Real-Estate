import { MapPin, BedDouble, Bath, Square, ArrowRight } from "lucide-react"

function PropertyCard({ image, address, beds, baths, sqft, price, description, location, type }) {
  return (
    <div className="group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden bg-transparent">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl h-[400px] w-full">
        <img src={image || "/placeholder.svg"} alt={description} className="w-full h-full object-cover" />
        {/* Badge */}
        <div
          className={`absolute top-2 right-2 px-3 py-1.5 bg-white rounded-md text-xs font-semibold uppercase tracking-wide ${
            type === "sale" ? "bg-[#C5D4A0] text-[#3D4A2D]" : "bg-[#E8D4B8] text-[#6B5B4D]"
          }`}
        >
          {type === "sale" ? "For Sale" : "For Rent"}
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-4 pb-2">
        {/* Address */}
        <div className="flex items-center gap-1.5 text-[14px] uppercase tracking-wide text-[#1a1a1a] font-medium mb-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{address}</span>
        </div>

        {/* Details and Price Row */}
        <div className="flex items-center justify-between">
          {/* Property Details */}
          <div className="flex items-center gap-3 text-[16px] text-[#1a1a1a]">
            <div className="flex items-center gap-1">
              <BedDouble className="w-3.5 h-3.5" />
              <span>{beds}</span>
              <span className="w-1 h-1 rounded-full bg-[#1a1a1a] ml-1" />
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" />
              <span>{baths}</span>
              <span className="w-1 h-1 rounded-full bg-[#1a1a1a] ml-1" />
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-3.5 h-3.5" />
              <span>{sqft}</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-xl font-semibold text-[#1a1a1a]">{price}</div>
        </div>

        {/* Description */}
        <div className="border mt-2 border-black/10"></div>
        <div className="mt-3 text-base text-[#555] leading-snug">
          <p>{description}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

const properties = [
  {
    image: "https://i.pinimg.com/736x/2f/91/f1/2f91f17da797fd060f516407695987cf.jpg",
    address: "240 COLLINS AVE, MIAMI BEACH, FL 33139",
    beds: 5,
    baths: 6,
    sqft: "8,100 SQ FT",
    price: "$12,500,000",
    description: "Luxury 6-bedroom beachfront villa",
    location: "for sale in Miami Beach, Florida",
    type: "sale",
  },
  {
    image: "https://i.pinimg.com/736x/b9/f6/21/b9f621c7d12c8afe967985fa42446e88.jpg",
    address: "4408 LAKESIDE DR, DALLAS, TX 75205",
    beds: 4,
    baths: 3.5,
    sqft: "3,000 SQ FT",
    price: "$8,900/m",
    description: "Elegant 4-Bedroom Single-Family",
    location: "Home for Rent – Highland Park, Texas",
    type: "rent",
  },
  {
    image: "https://i.pinimg.com/1200x/e2/d2/b7/e2d2b7877ffb88a68d6b72e5ea0bd965.jpg",
    address: "985 PARK AVE, NEW YORK, NY 10028",
    beds: 4,
    baths: 3.5,
    sqft: "4,200 SQ FT",
    price: "$5,250,000",
    description: "5-Bedroom Single-Family Home for",
    location: "Sale – Upper East Side, New York",
    type: "sale",
  },
  {
    image: "https://i.pinimg.com/1200x/d9/93/d8/d993d80fa365525ebab4663f6d2d247c.jpg",
    address: "9420 WILSHIRE BLVD, BEVERLY HILLS, CA 90212",
    beds: 6,
    baths: 7,
    sqft: "8,200 SQ FT",
    price: "$9,950,000",
    description: "Luxury 6-Bedroom Modern",
    location: "Home for Sale – Beverly Hills",
    type: "sale",
  },
]

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
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">Recent Listings</span>
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

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-xl text-sm font-medium uppercase tracking-wide hover:scale-105 hover:shadow-xl transition-all duration-300">
              View Properties
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
