import { Link } from "react-router-dom";
import { MapPin, BedDouble, Building2, Square } from "lucide-react";

function PropertyCard({
  id,
  image,
  address,
  bhk,
  builder,
  sqft,
  price,
  location,
  type,
}) {
  return (
    <div className="group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden bg-transparent">
      <Link to={`/property/${id}`}>
        {/* Image Section */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl h-[420px] w-full">
          <img
            src={image || "/placeholder.svg"}
            alt="Property Image"
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
          {/* Builder */}
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-[#1a1a1a] font-medium mb-1">
            <Building2 className="w-3.5 h-3.5" />
            <span>{builder}</span>
          </div>

          {/* Details and Price Row */}
          <div className="flex items-center justify-between">
            {/* Property Details */}
            <div className="flex items-center gap-7 text-[14px] text-[#1a1a1a]">
              <div className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5" />
                <span>{bhk}</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="w-3.5 h-3.5" />
                <span>{sqft}</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-base font-semibold text-[#1a1a1a]">{price}</div>
          </div>

          {/* Address */}
          <div className="border mt-2 border-black/10"></div>
          <div className="mt-3 text-sm text-[#555] leading-snug flex items-start gap-1.5">
            <MapPin className="w-4 h-4 mt-0.5" />
            <p>{address}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PropertyCard;
