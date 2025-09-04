import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/Logo_for_Titanium_Engineering_Project_Management.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'services', path: '/services' },
    // { key: 'consultant', path: '/consultant' },
    // { key: 'projects', path: '/projects' },
    { key: 'blog', path: '/blog' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Titanium Engineering" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-gray-700 hover:text-[#04244D] transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-[#04244D] font-semibold' : ''
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#04244D] transition-colors duration-300"
            >
              <span>{currentLanguage.flag}</span>
              <span>{currentLanguage.name}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      i18n.language === language.code ? 'bg-gray-50 text-[#04244D]' : 'text-gray-700'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <div></div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#04244D]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`block py-2 text-gray-700 hover:text-[#04244D] transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-[#04244D] font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500 mb-2">{t('common.language')}</p>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`flex items-center space-x-2 w-full py-2 text-left ${
                    i18n.language === language.code ? 'text-[#04244D] font-semibold' : 'text-gray-700'
                  }`}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;