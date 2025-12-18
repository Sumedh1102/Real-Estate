import { Link } from "react-router-dom";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";

function PropertyCard({
  id,
  image,
  address,
  beds,
  baths,
  sqft,
  price,
  description,
  location,
  type,
}) {
  return (
    <div className="group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden bg-transparent">
      <Link to={`/property/${id}`}>
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl h-[400px] w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={description}
            className="w-full h-full object-cover"
          />
          {/* Badge */}
          <div
            className={`absolute top-2 right-2 px-3 py-1.5 bg-white rounded-md text-xs font-semibold uppercase tracking-wide ${type === "sale"
              ? "bg-[#C5D4A0] text-[#3D4A2D]"
              : "bg-[#E8D4B8] text-[#6B5B4D]"
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
      </Link>
    </div>
  );
}

export default PropertyCard;
