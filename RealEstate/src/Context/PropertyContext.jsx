import React, { createContext, useState, useEffect, useContext } from 'react';
import initialProperties from '../Data/properties';

const PropertyContext = createContext();

export const useProperties = () => useContext(PropertyContext);

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState(() => {
        const savedProperties = localStorage.getItem('siteProperties_v30');
        if (savedProperties) {
            return JSON.parse(savedProperties);
        }
        return initialProperties;
    });

    // Sync with LocalStorage whenever properties change
    useEffect(() => {
        localStorage.setItem('siteProperties_v30', JSON.stringify(properties));
    }, [properties]);

    const addProperty = (newProperty) => {
        setProperties((prev) => [...prev, newProperty]);
    };

    const updateProperty = (id, updatedProperty) => {
        setProperties((prev) => 
            prev.map(property => property.id === id ? updatedProperty : property)
        );
    };

    const deleteProperty = (id) => {
        if(window.confirm('Are you sure you want to delete this property?')) {
            setProperties((prev) => prev.filter(property => property.id !== id));
        }
    };

    const value = {
        properties,
        addProperty,
        updateProperty,
        deleteProperty
    };

    return (
        <PropertyContext.Provider value={value}>
            {children}
        </PropertyContext.Provider>
    );
};
