import React, { useState } from 'react';

const Gallery = ({ property }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            url: property?.image || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
            alt: property?.title || "Modern ranch home exterior"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
            alt: "Contemporary home with landscaping"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=600&fit=crop",
            alt: "Architectural detail facade"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=600&fit=crop",
            alt: "Modern home exterior angle"
        }
    ];

    return (
        <section className="w-full bg-[#F7F5EE] px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-[1600px] mx-auto relative">
                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-10 gap-4 lg:gap-6">
                    {/* Left Large Image */}
                    <div className="col-span-4 h-[500px] lg:h-[600px]">
                        <img
                            src={images[0].url}
                            alt={images[0].alt}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Middle Large Image */}
                    <div className="col-span-4 h-[500px] lg:h-[600px]">
                        <img
                            src={images[1].url}
                            alt={images[1].alt}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>

                    {/* Right Grid of 2 Images */}
                    <div className="col-span-2 grid grid-rows-2 gap-4 lg:gap-6 h-[500px] lg:h-[600px]">
                        {images.slice(2, 4).map((image, idx) => (
                            <div
                                key={image.id}
                                className="relative cursor-pointer hover:opacity-90 transition-opacity"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
                    <div className="h-[400px]">
                        <img
                            src={images[0].url}
                            alt={images[0].alt}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    <div className="h-[400px]">
                        <img
                            src={images[1].url}
                            alt={images[1].alt}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                    <div className="grid grid-cols-2 col-span-2 gap-4">
                        {images.slice(2, 4).map((image) => (
                            <div key={image.id} className="h-[200px]">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="grid sm:hidden grid-cols-1 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="h-[300px]">
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    ))}
                </div>

                {/* Modal for Selected Image */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-2xl w-full aspect-square">
                            <button
                                className="absolute -top-12 right-0 text-white text-4xl font-light hover:text-gray-300 transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                ×
                            </button>
                            <img
                                src={selectedImage.url}
                                alt={selectedImage.alt}
                                className="w-full h-full object-cover rounded-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;