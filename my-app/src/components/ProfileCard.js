import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProfileCard = ({ name, title, date, imgSrc, description, phone, email, linkedin, localisation, website }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const togglePhone = () => setShowPhone(!showPhone);
  const toggleEmail = () => setShowEmail(!showEmail);
  const toggleLocation = () => setShowLocation(!showLocation);

  const handleLinkedInClick = () => {
    window.open(linkedin, '_blank');
  };
  
  const handleReadMoreClick = () => {
    if (website) {
      window.open(website, '_blank');
    } else {
      console.error('Website URL not provided.');
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-2xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6">
        <img className="w-32 h-32 rounded-full mx-auto border-4 border-blue-100" src={imgSrc} alt={name} />
        <h2 className="text-center text-2xl font-semibold mt-4 text-blue-900">{name}</h2>
        <div className="flex justify-center mt-6 space-x-6">
          <div onClick={togglePhone} className="cursor-pointer text-blue-900 hover:text-orange-600 text-xl">
            <i className="fas fa-phone"></i>
            {showPhone && <span className="ml-2">{phone}</span>}
          </div>
          <div onClick={toggleEmail} className="cursor-pointer text-blue-900 hover:text-orange-600 text-xl">
            <i className="fas fa-envelope"></i>
            {showEmail && <span className="ml-2">{email}</span>}
          </div>
          <div onClick={toggleLocation} className="cursor-pointer text-blue-900 hover:text-orange-600 text-xl">
            <i className="fas fa-map-marker-alt"></i>
            {showLocation && <span className="ml-2">{localisation}</span>}
          </div>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-orange-600 text-xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="mt-9">
          <h3 className="text-xl font-semibold text-blue-900">Job title</h3>
          <p className="text-blue-800 mt-2 leading-relaxed text-justify">{title}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-blue-900">Posted on</h3>
          <p className="text-blue-800 mt-2 leading-relaxed text-justify">{date}</p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-900">Description</h3>
          <p className="text-blue-800 mt-2 leading-relaxed text-justify line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button onClick={handleReadMoreClick} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
            Visit us
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
