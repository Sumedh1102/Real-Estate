import React, { useState } from 'react';
import { useProperties } from '../Context/PropertyContext';
import { useNavigate } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const AdminDashboard = () => {
  const { addProperty } = useProperties();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    address: '',
    bhk: '',
    builder: '',
    sqft: '',
    description: '',
    image: '', // Main image
    type: 'sale',
    location: '',
    amenities: [],
    interiorFeatures: [],
    exteriorFeatures: [],
    neighborhoodDetails: [],
    locationHighlights: [],
    images: [],
    additionalInfo: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (category, index, field, value) => {
    const updatedArray = [...formData[category]];
    updatedArray[index] = { ...updatedArray[index], [field]: value };
    setFormData({ ...formData, [category]: updatedArray });
  };

  const addItem = (category, template) => {
    setFormData({ ...formData, [category]: [...formData[category], template] });
  };

  const removeItem = (category, index) => {
    const updatedArray = formData[category].filter((_, i) => i !== index);
    setFormData({ ...formData, [category]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a simple ID based on title
    const id = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    // Filter out empty entries from arrays (basic validation)
    const cleanArray = (arr, key) => arr.filter(item => item[key]?.trim());

    const newProperty = {
      ...formData,
      id,
      amenities: cleanArray(formData.amenities, 'text'),
      interiorFeatures: cleanArray(formData.interiorFeatures, 'feature'),
      exteriorFeatures: cleanArray(formData.exteriorFeatures, 'feature'),
      neighborhoodDetails: cleanArray(formData.neighborhoodDetails, 'label'),
      locationHighlights: cleanArray(formData.locationHighlights, 'amenity'),
      images: formData.images.filter(img => img.url?.trim()),
      additionalInfo: cleanArray(formData.additionalInfo, 'label'),
    };

    addProperty(newProperty);
    alert('Property Added Successfully!');
    navigate('/');
  };

  // Generic render helper for lists
  const renderList = (title, category, fields, template) => (
    <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <button
          type="button"
          onClick={() => addItem(category, template)}
          className="flex items-center gap-1 text-sm text-black hover:text-gray-700 bg-white border border-gray-300 px-3 py-1 rounded-md shadow-sm transition-colors"
        >
          <Plus size={16} /> Add Item
        </button>
      </div>
      {formData[category].length === 0 && (
        <p className="text-sm text-gray-500 italic">No items added yet.</p>
      )}
      <div className="space-y-3">
        {formData[category].map((item, index) => (
          <div key={index} className="flex gap-3 items-start bg-white p-3 rounded-md shadow-sm border border-gray-100">
            {fields.map((field) => (
              <div key={field.name} className="flex-1">
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm p-2 border"
                  value={item[field.name]}
                  onChange={(e) => handleArrayChange(category, index, field.name, e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => removeItem(category, index)}
              className="text-red-500 hover:text-red-700 p-2"
              title="Remove"
            >
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 my-10">
      <div className="max-w-5xl mx-auto bg-white p-8">
        <h1 className="text-3xl font-thin text-gray-900 mb-8 border-b pb-4">Add
          <span className='text-blue-500 font-bold'> New </span> Property</h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* --- Basic Functionality --- */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Property Title</label>
              <input type="text" name="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.title} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price</label>
              <input type="text" name="price" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.price} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">BHK</label>
              <input type="text" name="bhk" placeholder="e.g. 2 BHK" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.bhk} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Builder</label>
              <input type="text" name="builder" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.builder} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sqft</label>
              <input type="text" name="sqft" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.sqft} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select name="type" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.type} onChange={handleChange} >
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.address} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location (Short description)</label>
            <input type="text" name="location" placeholder="e.g. for sale in Nalasopara West" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.location} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Main Image URL</label>
            <input type="url" name="image" placeholder="https://..." required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.image} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2 border" value={formData.description} onChange={handleChange} />
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-semibold mb-6">Detailed Information</h2>

            {/* Amenities */}
            {renderList('Amenities', 'amenities',
              [{ name: 'icon', placeholder: 'Icon Name (e.g. Building2)' }, { name: 'text', placeholder: 'Amenity Name' }],
              { icon: 'Building2', text: '' }
            )}

            {/* Interior Features */}
            {renderList('Interior Features', 'interiorFeatures',
              [{ name: 'feature', placeholder: 'Feature (e.g. Living Room)' }, { name: 'description', placeholder: 'Description' }],
              { feature: '', description: '' }
            )}

            {/* Exterior Features */}
            {renderList('Exterior Features', 'exteriorFeatures',
              [{ name: 'feature', placeholder: 'Feature (e.g. Elevation)' }, { name: 'description', placeholder: 'Description' }],
              { feature: '', description: '' }
            )}

            {/* Neighborhood */}
            {renderList('Neighborhood Details', 'neighborhoodDetails',
              [{ name: 'label', placeholder: 'Label (e.g. Lifestyle:)' }, { name: 'text', placeholder: 'Detail text' }],
              { label: '', text: '' }
            )}

            {/* Location Highlights */}
            {renderList('Location Highlights', 'locationHighlights',
              [{ name: 'amenity', placeholder: 'Place (e.g. Station)' }, { name: 'distance', placeholder: 'Distance (e.g. 5 mins)' }],
              { amenity: '', distance: '' }
            )}

            {/* Additional Info */}
            {renderList('Additional Info', 'additionalInfo',
              [{ name: 'label', placeholder: 'Label (e.g. Status:)' }, { name: 'text', placeholder: 'Value (e.g. OC Received)' }],
              { label: '', text: '' }
            )}

            {/* Images Gallery */}
            {renderList('Gallery Images', 'images',
              [{ name: 'url', placeholder: 'Image URL' }, { name: 'alt', placeholder: 'Alt Text' }],
              { id: Date.now(), url: '', alt: '' }
            )}

          </div>

          <div className="pt-5 flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
