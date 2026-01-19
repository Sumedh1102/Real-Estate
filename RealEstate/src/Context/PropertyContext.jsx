import React, { createContext, useState, useEffect, useContext } from 'react';
import initialProperties from '../Data/properties';

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState(() => {
        // 1. Try to get data from LocalStorage
        const savedProperties = localStorage.getItem('siteProperties');

        if (savedProperties) {
            return JSON.parse(savedProperties);
        } else {
            // 2. If no data, use the initial static data
            return initialProperties;
        }
    });

    // Sync with LocalStorage whenever properties change
    useEffect(() => {
        localStorage.setItem('siteProperties', JSON.stringify(properties));
    }, [properties]);

    const addProperty = (newProperty) => {
        setProperties((prev) => [...prev, newProperty]);
    };

    const value = {
        properties,
        addProperty
    };

    return (
        <PropertyContext.Provider value={value}>
            {children}
        </PropertyContext.Provider>
    );
};
