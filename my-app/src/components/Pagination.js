import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const Pagination = ({ profiles, profilesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  // Calculate the profiles to display on the current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-5 relative">
      <div className="flex justify-end mt-5 sticky -top-10 z-10 pt-16">
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded 
                          ${currentPage === index + 1 ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}
                          hover:bg-orange-600 hover:text-white focus:outline-none focus:bg-orange-600 focus:text-white transition duration-300`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProfiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
      
    </div>
  );
};

export default Pagination;
