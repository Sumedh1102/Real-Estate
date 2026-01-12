import React from 'react';
import { Tag, DollarSign, Bed, Building2, Maximize2, Expand, Calendar, Layers, Car, FileText, Download } from 'lucide-react';

const Info = ({ property }) => {
    // Default demo data if property is missing specific fields
    const defaultData = {
        lotSize: '0.5 acres',
        builtIn: '2018',
        floors: '2',
        parking: '2',
        propertyId: 'UES-1487-SFH'
    };

    const propertyData = [
        [
            { icon: Tag, label: 'Type', value: property?.type === 'rent' ? 'For Rent' : 'For Sale' },
            { icon: DollarSign, label: 'Price', value: property?.price || '$0' },
            { icon: Bed, label: 'BHK', value: property?.bhk || 'N/A' },
            { icon: Building2, label: 'Builder', value: property?.builder || 'N/A' },
            { icon: Maximize2, label: 'Size', value: property?.sqft || '0 sq ft' }
        ],
        [
            { icon: Expand, label: 'Lot Size', value: defaultData.lotSize },
            { icon: Calendar, label: 'Built in', value: defaultData.builtIn },
            { icon: Layers, label: 'Floors', value: defaultData.floors },
            { icon: Car, label: 'Parking', value: defaultData.parking },
            { icon: FileText, label: 'Property ID', value: property?.id || defaultData.propertyId }
        ]
    ];

    return (
        <div className="min-h-fit bg-[#F7F5EE] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Property Info Container */}
                <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-sm">
                    {/* Property Info Grid */}
                    <div className="space-y-12">
                        {propertyData.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6"
                            >
                                {row.map((item, itemIndex) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={itemIndex}
                                            className="flex flex-col items-center text-center space-y-3"
                                        >
                                            <Icon className="w-6 h-6 text-gray-900 stroke-[1.5]" />
                                            <div className="space-y-1">
                                                <div className="text-gray-900 font-medium text-sm">
                                                    {item.label}
                                                </div>
                                                <div className="text-gray-600 text-base">
                                                    {item.value}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download Button */}
                <div className="flex justify-center mt-8">
                    <button className="inline-flex items-center gap-3 bg-black text-white px-12 py-4 rounded-2xl font-medium text-sm tracking-wide hover:bg-gray-900 transition-colors">
                        <Download className="w-5 h-5" />
                        DOWNLOAD PLAN
                    </button>
                </div>

                {/* Description */}
                <div className="max-w-7xl mx-auto mt-12 px-4">
                    <p className="text-gray-800 text-2xl font-medium leading-relaxed">
                        {property?.description || "No description available."}
                    </p>
                    <p className="text-gray-600 mt-4 text-lg">
                        {property?.address}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Info;