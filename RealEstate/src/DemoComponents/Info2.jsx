import React from 'react';
import {
    Home, Palmtree, Flower2, Train, Leaf, Waves,
    WashingMachine, Building2, Flame, CircleParking,
    TrainFront, Droplets, Sprout
} from 'lucide-react';

const Info2 = ({ property }) => {

    /* ================= Amenities ================= */
    const amenities = [
        { icon: Home, text: 'Balcony' },
        { icon: Palmtree, text: 'Terrace' },
        { icon: Flower2, text: 'Garden' },
        { icon: Train, text: 'Near subway' },
        { icon: Leaf, text: 'Lush Green Lawn' },
        { icon: Waves, text: 'Lake View' },
        { icon: WashingMachine, text: 'Laundry / Washer' },
        { icon: Building2, text: 'Private Rooftop Lounge' },
        { icon: Flame, text: 'Fire Safety System' },
        { icon: CircleParking, text: 'Smart Parking System' },
        { icon: TrainFront, text: 'Near Train Station' },
        { icon: Droplets, text: 'Swimming Pool' },
        { icon: Sprout, text: 'Rooftop Garden' }
    ];

    /* ================= Interior ================= */
    const interiorFeatures = [
        { feature: 'Flooring', description: 'Solid oak hardwood with herringbone pattern' },
        { feature: 'Living Room', description: 'Fireplace, coffered ceilings, built-in bookshelves' },
        { feature: 'Dining Room', description: 'Formal dining for 10 with terrace access' },
        { feature: 'Master Suite', description: 'Private floor with spa bathroom & walk-in closet' },
        { feature: 'Bathrooms', description: 'Marble vanities, soaking tubs, radiant heating' },
        { feature: 'Office', description: 'Private study overlooking the garden' },
        { feature: 'Basement', description: 'Finished level with gym & storage' },
        { feature: 'HVAC', description: 'Multi-zone climate control & air purification' }
    ];

    /* ================= Exterior ================= */
    const exteriorFeatures = [
        { feature: 'Terrace', description: 'Landscaped rooftop terrace with city views' },
        { feature: 'Backyard', description: 'Private courtyard with stone patio' },
        { feature: 'Facade', description: 'Restored limestone exterior with iron detailing' },
        { feature: 'Windows', description: 'Double-glazed soundproof windows' },
        { feature: 'Lighting', description: 'Architectural lighting with motion sensors' }
    ];

    /* ================= Neighborhood ================= */
    const neighborhoodDetails = [
        { label: 'Lifestyle:', text: 'Elegant, quiet, and family-oriented.' },
        { label: 'Community:', text: 'Professionals, long-time residents, art lovers.' },
        { label: 'Nearby Spots:', text: 'Central Park, The Met, Madison Avenue.' },
        { label: 'Accessibility:', text: '10 min to Midtown, 25 min to Airport.' },
        { label: 'Schools:', text: 'Near Dalton, Spence & Regis High School.' }
    ];

    /* ================= Location ================= */
    const locationHighlights = [
        { amenity: 'Central Park', distance: '0.4 miles' },
        { amenity: 'The Met Museum', distance: '0.6 miles' },
        { amenity: 'Madison Avenue', distance: '0.3 miles' },
        { amenity: '86th Street Subway', distance: '0.5 miles' },
        { amenity: 'Midtown Manhattan', distance: '1.8 miles' }
    ];

    /* ================= Extra ================= */
    const additionalInfo = [
        { label: 'Property Tax:', text: '$52,000 / year' },
        { label: 'Energy Rating:', text: 'A (Fully upgraded)' },
        { label: 'Ownership:', text: 'Freehold' },
        { label: 'Furniture:', text: 'Optional designer package' },
        { label: 'Security:', text: 'Smart access control system' }
    ];

    const mapSrc = property?.address
        ? `https://www.google.com/maps?q=${encodeURIComponent(property.address)}&output=embed`
        : "https://www.google.com/maps?q=Upper+East+Side,+New+York&output=embed";

    return (
        <div className="bg-[#F7F5EE]">
            <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

                {/* ================= Amenities ================= */}
                <section>
                    <h2 className="text-4xl font-medium mb-8">Amenities</h2>
                    <div className="flex flex-wrap gap-4">
                        {amenities.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="flex items-center gap-3 bg-[#EFEEE8] px-5 py-3 rounded-full">
                                    <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
                                    <span className="text-gray-800">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ================= Interior ================= */}
                <section>
                    <h2 className="text-4xl font-medium mb-8">Interior Features</h2>
                    <Table data={interiorFeatures} />
                </section>

                {/* ================= Exterior ================= */}
                <section>
                    <h2 className="text-4xl font-medium mb-8">Exterior Features</h2>
                    <Table data={exteriorFeatures} />
                </section>

                {/* ================= Neighborhood ================= */}
                <section>
                    <h2 className="text-4xl font-medium mb-6">Neighborhood</h2>
                    <p className="mb-6">
                        <span className="font-bold">Upper East Side</span> is Manhattan’s most timeless enclave.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {neighborhoodDetails.map((item, i) => (
                            <li key={i}>
                                <span className="font-bold">{item.label}</span> {item.text}
                            </li>
                        ))}
                    </ul>
                    <Quote text="It's not just an address — it's a legacy." />
                </section>

                {/* ================= Location Highlights ================= */}
                <section>
                    <h2 className="text-4xl font-medium mb-8">Location Highlights</h2>
                    <Table data={locationHighlights} />
                </section>

                {/* ================= Additional Info ================= */}
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
                        <td className="py-4 px-6 font-medium w-1/3">{item.feature || item.amenity}</td>
                        <td className="py-4 px-6">{item.description || item.distance}</td>
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
