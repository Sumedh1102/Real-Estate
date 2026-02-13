import React, { useState } from "react";
import PropertyCard from "../Components/PropertyCard";
import { useProperties } from "../Context/PropertyContext";

const AllProperties = () => {
    const { properties } = useProperties();
    const [selectedCity, setSelectedCity] = useState("All");

    const cities = ["All", "Virar", "Vasai", "Nalasopara"];

    const filteredProperties = properties.filter(property =>
        selectedCity === "All" ? true : property.city === selectedCity
    );

    return (
        <main className="min-h-screen pt-20"> {/* Added padding top for navbar */}
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
                                    All Listings
                                </span>
                            </div>

                            {/* Heading & Filters */}
                            <div className="flex flex-col gap-6 lg:translate-x-40">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight">
                                    Explore Our Complete Collection
                                    <br />
                                    Find Your Perfect Home
                                </h2>

                                {/* Filter Tabs */}
                                <div className="flex flex-wrap gap-3">
                                    {cities.map((city) => (
                                        <button
                                            key={city}
                                            onClick={() => setSelectedCity(city)}
                                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCity === city
                                                ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                                                : "bg-transparent text-[#1a1a1a] border-[#1a1a1a]/30 hover:border-[#1a1a1a]"
                                                }`}
                                        >
                                            {city}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Grid */}
                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {filteredProperties.map((property, index) => (
                                <PropertyCard key={index} {...property} />
                            ))}
                        </div>
                    ) : (
                        <div className="w-full py-20 text-center">
                            <h3 className="text-xl text-[#1a1a1a]/60">
                                No properties found in {selectedCity} yet.
                            </h3>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default AllProperties;
