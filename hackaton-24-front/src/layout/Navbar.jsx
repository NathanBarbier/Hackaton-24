import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false)
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const CloseDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto" src="/assets/LogoJo2024.png" alt="Paris 2024" />
          </div>
          <div className="hidden sm:flex sm:space-x-2 flex-1 justify-center">
            {/* Liens du menu pour les écrans normaux */}
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page"onClick={CloseDropdown}>
              Accueil
            </Link>
            <Link to="/Prediction" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={CloseDropdown}>
              Predictions 2024
            </Link>
            <div className="relative">
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none" onClick={toggleDropdown}>
                Visualisation
                <svg className="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute bg-white rounded-md mt-2 shadow-lg z-10`}>
                {/* Contenu du menu de visualisation */}
                <div className="flex flex-col">
                  <Link to="/AverageAgeByDiscipline" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                    Âge moyen par discipline
                  </Link>
                  <Link to="/GenderPerformanceByCountry" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                    Performance par genre et par pays
                  </Link>
                  <Link to="/HostPerformance" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                    Performance des pays hôtes
                  </Link>
                  <Link to="/MedalByCoutries" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                    Médailles par pays
                  </Link>
                  <Link to="/MedalByCountriesByYear" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                    Médailles par pays par année
                  </Link>
                  <Link to="/MedalByDisciplineByCountry" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                    Médailles par discipline par pays
                  </Link>
                  <Link to="/Top10Athletes" className="text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium block" style={{ maxWidth: '200px' }} onClick={toggleDropdown}>
                  Top Athlètes ayant plus de 10 médailles
                  </Link>
                </div>
              </div>
            </div>

          </div>
          {/* Bouton du menu mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none"
            >
              Menu
            </button>
          </div>
        </div>
        {/* Menu mobile */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Liens du menu pour les appareils mobiles */}
            <Link to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu} aria-current="page">
              Accueil
            </Link>
            <Link to="/Prediction" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
              Predictions 2024
            </Link>
            <div className="relative">
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:outline-none" onClick={toggleDropdown}>
                Visualisation
                <svg className="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute bg-white rounded-md mt-2 shadow-lg`}>
                <Link to="/AverageAgeByDiscipline" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                  Âge moyen par discipline
                </Link>
                <Link to="/GenderPerformanceByCountry" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                  Performance par genre et par pays
                </Link>
                <Link to="/HostPerformance" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                  Performance des pays hôtes
                </Link>
                <Link to="/MedalByCoutries" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                  Médailles par pays
                </Link>
                <Link to="/MedalByCountriesByYear" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                  Médailles par pays par année
                </Link>
                <Link to="/MedalByDisciplineByCountry" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                  Médailles par discipline par pays
                </Link>
                <Link to="/Top10Athletes" className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium" onClick={closeMobileMenu}>
                Top Athlètes ayant plus de 10 médailles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
