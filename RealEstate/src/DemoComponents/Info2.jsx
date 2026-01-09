import React from 'react';
import {
    Home, Palmtree, Flower2, Train, Leaf, Waves,
    WashingMachine, Building2, Flame, CircleParking,
    TrainFront, Droplets, Sprout
} from 'lucide-react';

const Info2 = ({ property }) => {

    const iconMap = {
        Home, Palmtree, Flower2, Train, Leaf, Waves,
        WashingMachine, Building2, Flame, CircleParking,
        TrainFront, Droplets, Sprout
    };

    /* ================= Dynamic Data ================= */
    const amenities = property?.amenities || [];
    const interiorFeatures = property?.interiorFeatures || [];
    const exteriorFeatures = property?.exteriorFeatures || [];
    const neighborhoodDetails = property?.neighborhoodDetails || [];
    const locationHighlights = property?.locationHighlights || [];
    const additionalInfo = property?.additionalInfo || [];

    const mapSrc = property?.address
        ? `https://www.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`
        : "https://www.google.com/maps?q=Nalasopara+West,+Maharashtra&output=embed";

    return (
        <div className="bg-[#F7F5EE]">
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

                {/* ================= Amenities ================= */}
                {amenities.length > 0 && (
                    <section>
                        <h2 className="text-4xl font-medium mb-8">Amenities</h2>
                        <div className="flex flex-wrap gap-4">
                            {amenities.map((item, i) => {
                                const Icon = iconMap[item.icon] || Home; // Fallback icon
                                return (
                                    <div key={i} className="flex items-center gap-3 bg-[#EFEEE8] px-5 py-3 rounded-full">
                                        <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                                        <span className="text-gray-800">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* ================= Interior ================= */}
                {interiorFeatures.length > 0 && (
                    <section>
                        <h2 className="text-4xl font-medium mb-8">Interior Features</h2>
                        <Table data={interiorFeatures} />
                    </section>
                )}

                {/* ================= Exterior ================= */}
                {exteriorFeatures.length > 0 && (
                    <section>
                        <h2 className="text-4xl font-medium mb-8">Exterior Features</h2>
                        <Table data={exteriorFeatures} />
                    </section>
                )}

                {/* ================= Neighborhood ================= */}
                {neighborhoodDetails.length > 0 && (
                    <section>
                        <h2 className="text-4xl font-medium mb-6">Neighborhood</h2>
                        <p className="mb-6">
                            <span className="font-bold">Nalasopara (West)</span> is a rapidly growing residential hub with excellent connectivity.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {neighborhoodDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="font-bold">{item.label}</span> {item.text}
                                </li>
                            ))}
                        </ul>
                        <Quote text="A perfect blend of comfort, connectivity & modern living." />
                    </section>
                )}

                {/* ================= Location Highlights ================= */}
                {locationHighlights.length > 0 && (
                    <section>
                        <h2 className="text-4xl font-medium mb-8">Location Highlights</h2>
                        <Table data={locationHighlights} />
                    </section>
                )}

                {/* ================= Additional Info ================= */}
                {additionalInfo.length > 0 && (
                    <section>
                        <h2 className="text-4xl font-medium mb-8">Additional Information</h2>
                        <ul className="space-y-3">
                            {additionalInfo.map((item, i) => (
                                <li key={i}>
                                    <span className="font-bold">{item.label}</span> {item.text}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* ================= Map ================= */}
                <section>
                    <h2 className="text-4xl font-medium mb-8">Location</h2>
                    <div className="border border-gray-300 rounded-lg overflow-hidden aspect-[16/9]">
                        <iframe
                            src={mapSrc}
                            className="w-full h-full"
                            loading="lazy"
                            title="Map"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

/* ================= Reusable Components ================= */

const Table = ({ data }) => (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
        <table className="w-full">
            <tbody>
                {data.map((item, i) => (
                    <tr key={i} className="border-t border-gray-300">
                        <td className="py-4 px-6 font-medium w-1/3">
                            {item.feature || item.amenity}
                        </td>
                        <td className="py-4 px-6">
                            {item.description || item.distance}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Quote = ({ text }) => (
    <div className="bg-[#EFEEE8] border-l-4 border-gray-900 px-8 py-6 italic text-lg">
        “{text}”
    </div>
);

export default Info2;
