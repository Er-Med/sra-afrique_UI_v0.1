import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterRounded = () => {
 const { t } = useTranslation();

 return (
  <footer className="bg-sra-primary text-white">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     {/* Company Info */}
     <div className="space-y-4">
      <div className="flex items-center space-x-3">
       <div className="flex items-center justify-center p-2">
        <img
         src="/logo.png"
         alt="SRA Africa Logo"
         className="h-10 w-auto object-contain"
        />
       </div>
       <div>
        <h3 className="text-xl font-bold">{t('footer.company')}</h3>
        <p className="text-white text-opacity-80 text-sm">{t('footer.tagline')}</p>
       </div>
      </div>
      <p className="text-white text-opacity-80 text-sm leading-relaxed">
       {t('footer.description')}
      </p>
     </div>

     {/* Quick Links */}
     <div>
      <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">{t('footer.quickLinks')}</h4>
      <ul className="space-y-2">
       <li><Link to="/" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 rounded-md px-2 py-1 hover:bg-white hover:bg-opacity-10">{t('nav.home')}</Link></li>
       <li><Link to="/about" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 rounded-md px-2 py-1 hover:bg-white hover:bg-opacity-10">{t('nav.about')}</Link></li>
       <li><Link to="/services" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 rounded-md px-2 py-1 hover:bg-white hover:bg-opacity-10">{t('nav.services')}</Link></li>
       <li><Link to="/projects" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 rounded-md px-2 py-1 hover:bg-white hover:bg-opacity-10">{t('nav.projects')}</Link></li>
       <li><Link to="/contact" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 rounded-md px-2 py-1 hover:bg-white hover:bg-opacity-10">{t('nav.contact')}</Link></li>
      </ul>
     </div>

     {/* Services */}
     <div>
      <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">{t('footer.ourServices')}</h4>
      <ul className="space-y-2">
       <li className="text-white text-opacity-80">{t('footer.services.strategic')}</li>
       <li className="text-white text-opacity-80">{t('footer.services.sustainable')}</li>
       <li className="text-white text-opacity-80">{t('footer.services.innovation')}</li>
       <li className="text-white text-opacity-80">{t('footer.services.training')}</li>
       <li className="text-white text-opacity-80">{t('footer.services.market')}</li>
      </ul>
     </div>

     {/* Contact Info */}
     <div>
      <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">{t('footer.contact')}</h4>
      <div className="space-y-3">
       <div className="flex items-start space-x-3">
        <MapPin className="h-5 w-5 text-sra-orange mt-0.5 flex-shrink-0" />
        <p className="text-white text-opacity-80 text-sm">
         {t('footer.address1')}<br />
         {t('footer.address2')}
        </p>
       </div>
       <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-sra-orange flex-shrink-0" />
        <p className="text-white text-opacity-80 text-sm">{t('header.phone')}</p>
       </div>
       <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-sra-orange flex-shrink-0" />
        <p className="text-white text-opacity-80 text-sm">{t('header.email')}</p>
       </div>
      </div>

      {/* Social Media */}
      <div className="mt-6">
       <h5 className="text-sm font-semibold mb-3 uppercase tracking-wide">{t('footer.followUs')}</h5>
       <div className="flex space-x-3">
        <a href="#" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-10">
         <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-10">
         <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-10">
         <Linkedin className="h-5 w-5" />
        </a>
        <a href="#" className="text-white text-opacity-80 hover:text-sra-orange transition-all duration-200 p-2 rounded-full hover:bg-white hover:bg-opacity-10">
         <Instagram className="h-5 w-5" />
        </a>
       </div>
      </div>
     </div>
    </div>

    <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
     <p className="text-white text-opacity-80 text-sm">
      {t('footer.rights')}
     </p>
    </div>
   </div>
  </footer>
 );
};

export default FooterRounded; 