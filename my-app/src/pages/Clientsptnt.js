import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import profiles from '../components/Clients';

// Icon component for search icon
const SearchIcon = () => (
  <svg
    className="w-6 h-6 text-gray-400 absolute top-3 left-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.879-4.879M15.618 10.382A5 5 0 1110 5a5 5 0 015.618 5.382z"
    />
  </svg>
);

// Function to get unique values from an array
const getUniqueValues = (array, key) => {
  const values = array.map(item => item[key]);
  return [...new Set(values)];
};

export default function ClientsPage() {
  const profilesPerPage = 8;
  const [query, setQuery] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

  const uniqueTitles = getUniqueValues(profiles, 'title');
  const uniqueCompanies = getUniqueValues(profiles, 'name');

  // Function to filter profiles based on search query, filters, and month
  useEffect(() => {
    let filtered = profiles;

    if (query && query.trim() !== '') {
      const lowerCaseQuery = query.toLowerCase();
      filtered = filtered.filter(profile => {
        const matchesName = profile.name && profile.name.toLowerCase().includes(lowerCaseQuery);
        const matchesTitle = profile.title && profile.title.toLowerCase().includes(lowerCaseQuery);
        const matchesDescription = profile.description && profile.description.toLowerCase().includes(lowerCaseQuery);
        return matchesName || matchesTitle || matchesDescription;
      });
    }
    if (titleFilter) {
      filtered = filtered.filter(profile =>
        profile.title && profile.title.toLowerCase() === titleFilter.toLowerCase()
      );
    }
    if (nameFilter) {
      filtered = filtered.filter(profile =>
        profile.name && profile.name.toLowerCase() === nameFilter.toLowerCase()
      );
    }

    setFilteredProfiles(filtered);
  }, [query, titleFilter, nameFilter]);

  // Update suggestions based on the query
  useEffect(() => {
    if (!query || query.trim() === '') {
      setSuggestions([]);
      return;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    const filteredSuggestions = [
      ...new Set(
        profiles.flatMap(profile => {
          const suggestionsArray = [];

          if (profile.name.toLowerCase().includes(lowerCaseQuery)) {
            suggestionsArray.push(profile.name);
          }

          if (profile.title.toLowerCase().includes(lowerCaseQuery)) {
            suggestionsArray.push(profile.title);
          }

          if (profile.description.toLowerCase().includes(lowerCaseQuery)) {
            const words = profile.description.split(' ');
            const matchingIndex = words.findIndex(word => word.toLowerCase().includes(lowerCaseQuery));
            if (matchingIndex > 0) {
              suggestionsArray.push(`${words[matchingIndex - 1]} ${words[matchingIndex]}`);
            } else if (matchingIndex === 0) {
              suggestionsArray.push(words[matchingIndex]);
            }
          }

          return suggestionsArray;
        }).filter(item =>
          item.toLowerCase().includes(lowerCaseQuery) && item.toLowerCase() !== lowerCaseQuery
        )
      )
    ];

    setSuggestions(filteredSuggestions);
  }, [query]);

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    setActiveSuggestionIndex(-1); // Reset suggestion index after selection
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex(prevIndex => Math.min(prevIndex + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex === -1) {
        // If no suggestion is active, submit current input value
        handleSubmit(e);
      } else if (activeSuggestionIndex >= 0) {
        // If suggestion is active, select it
        handleSuggestionClick(suggestions[activeSuggestionIndex]);
        e.preventDefault(); // Prevent default form submission
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query.trim()); // Trim query before filtering
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row md:items-center md:space-x-4 bg-orange-200 p-4 rounded-md shadow-md sticky top-0 z-20">
        <form className="relative flex-grow mb-4 md:mb-0" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent pl-10"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <SearchIcon />
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion}
                  className={`px-4 py-2 cursor-pointer ${activeSuggestionIndex === index ? 'bg-blue-100' : ''}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setActiveSuggestionIndex(index)}
                >
                  {/* Highlight the searched query in suggestion */}
                  {suggestion.toLowerCase().includes(query.toLowerCase()) ? (
                    <>
                      {suggestion.substring(0, suggestion.toLowerCase().indexOf(query.toLowerCase()))}
                      <span className="bg-yellow-200">
                        {suggestion.substring(suggestion.toLowerCase().indexOf(query.toLowerCase()), suggestion.toLowerCase().indexOf(query.toLowerCase()) + query.length)}
                      </span>
                      {suggestion.substring(suggestion.toLowerCase().indexOf(query.toLowerCase()) + query.length)}
                    </>
                  ) : (
                    suggestion
                  )}
                </li>
              ))}
            </ul>
          )}
        </form>
        <select
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        >
          <option value="">Select Title</option>
          {uniqueTitles.map(title => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
        <select
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        >
          <option value="">Select Name</option>
          {uniqueCompanies.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>
      <Pagination profiles={filteredProfiles} profilesPerPage={profilesPerPage} />
    </div>
  );
}
