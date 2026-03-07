import React, { createContext, useState, useEffect, useContext } from 'react';
import initialProperties from '../Data/properties';

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState(initialProperties);

    // Sync with LocalStorage whenever properties change
    // useEffect(() => {
    //     localStorage.setItem('siteProperties_v30', JSON.stringify(properties));
    // }, [properties]);

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
