import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const HeaderRounded = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const location = useLocation();
 const { t } = useTranslation();

 const navigation = [
  { name: t('nav.home'), href: '/' },
  { name: t('nav.about'), href: '/about' },
  { name: t('nav.services'), href: '/services' },
  { name: t('nav.projects'), href: '/projects' },
  { name: t('nav.contact'), href: '/contact' },
 ];

 const isActive = (href: string) => location.pathname === href;

 return (
  <header className="bg-white shadow-lg sticky top-0 z-50">
   {/* Top Bar */}
   <div className="bg-sra-primary text-white py-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex flex-wrap justify-between items-center text-sm">
      <div className="flex items-center space-x-6">
       <div className="flex items-center space-x-2">
        <MapPin className="h-4 w-4" />
        <span>{t('header.location')}</span>
       </div>
       <div className="flex items-center space-x-2">
        <Phone className="h-4 w-4" />
        <span>{t('header.phone')}</span>
       </div>
      </div>
      <div className="flex items-center space-x-2">
       <Mail className="h-4 w-4" />
       <span>{t('header.email')}</span>
      </div>
     </div>
    </div>
   </div>

   {/* Main Header */}
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
     <Link to="/" className="flex items-center space-x-3">
      <div className="flex items-center justify-center p-2">
       <img
        src="/logo.png"
        alt="SRA Africa Logo"
        className="h-12 w-auto object-contain"
       />
      </div>
     </Link>

     {/* Desktop Navigation */}
     <div className="hidden md:flex items-center space-x-8">
      <nav className="flex space-x-8">
       {navigation.map((item) => (
        <Link
         key={item.name}
         to={item.href}
         className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(item.href)
          ? 'text-sra-primary bg-sra-light-blue bg-opacity-10 rounded-lg'
          : 'text-gray-700 hover:text-sra-primary hover:bg-sra-light-blue hover:bg-opacity-10 hover:rounded-lg'
          }`}
        >
         {item.name}
        </Link>
       ))}
      </nav>
      <LanguageSwitcher />
     </div>

     {/* Mobile menu button */}
     <div className="md:hidden">
      <button
       onClick={() => setIsMenuOpen(!isMenuOpen)}
       className="p-2 rounded-md text-gray-700 hover:text-sra-primary hover:bg-sra-light-blue hover:bg-opacity-10 transition-all duration-200"
      >
       {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
     </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
     <div className="md:hidden py-4 border-t border-gray-200">
      <nav className="flex flex-col space-y-2">
       {navigation.map((item) => (
        <Link
         key={item.name}
         to={item.href}
         onClick={() => setIsMenuOpen(false)}
         className={`px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${isActive(item.href)
          ? 'text-sra-primary bg-sra-light-blue bg-opacity-10 rounded-lg'
          : 'text-gray-700 hover:text-sra-primary hover:bg-sra-light-blue hover:bg-opacity-10 hover:rounded-lg'
          }`}
        >
         {item.name}
        </Link>
       ))}
       <div className="px-4 py-3 border-t border-gray-200 mt-2 pt-4">
        <LanguageSwitcher />
       </div>
      </nav>
     </div>
    )}
   </div>
  </header>
 );
};

export default HeaderRounded; 