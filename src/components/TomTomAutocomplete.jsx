import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function TomTomAutocomplete({ place, setPlace }) {
  const [inputValue, setInputValue] = useState(place?.label || '');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside--useffect for this
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch suggestions from TomTom
  const fetchSuggestions = async (query) => {
    if (!query) return setSuggestions([]);
    try {
      const res = await axios.get(
        `https://api.tomtom.com/search/2/search/${encodeURIComponent(query)}.json`,
        {
          params: { key: import.meta.env.VITE_TOMTOM_API_KEY, limit: 5 },
        }
      );
      const results = res.data.results.map((item) => ({
        label: item.poi?.name || item.address?.freeformAddress || item.address?.municipality,
        location: item.position,
      }));
      setSuggestions(results);
      setIsOpen(true);
    } catch (err) {
      console.error('TomTom API error:', err);
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const handleSelect = (item) => {
    setPlace(item);          
    setInputValue(item.label); 
    setIsOpen(false);          };

  return (
    <div ref={wrapperRef} className="relative w-full autocomplete-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a location"
        className="border rounded px-3 py-2 w-full"
      />
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded w-full z-50 max-h-60 overflow-y-auto shadow-lg">
          {suggestions.map((item, idx) => (
            <li
              key={idx}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TomTomAutocomplete;
