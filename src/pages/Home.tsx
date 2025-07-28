import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, Target, Award, TrendingUp, Globe, Lightbulb } from 'lucide-react';
import StatsChart from '../components/StatsChart';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('home.stats.projects'), value: 150, icon: Target },
    { label: t('home.stats.clients'), value: 89, icon: Users },
    { label: t('home.stats.experience'), value: 12, icon: Award },
    { label: t('home.stats.growth'), value: 25, icon: TrendingUp },
  ];

  const services = [
    {
      title: t('home.services.strategic.title'),
      description: t('home.services.strategic.description'),
      icon: Target,
      color: 'blue'
    },
    {
      title: t('home.services.innovation.title'),
      description: t('home.services.innovation.description'),
      icon: Lightbulb,
      color: 'green'
    },
    {
      title: t('home.services.sustainable.title'),
      description: t('home.services.sustainable.description'),
      icon: Globe,
      color: 'orange'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {t('home.hero.title')}
                <span className="block text-yellow-400">{t('home.hero.subtitle')}</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  {t('home.hero.cta1')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  {t('home.hero.cta2')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl transform rotate-3 opacity-80"></div>
                <div className="absolute inset-0 w-full h-96 bg-gradient-to-br from-blue-400 to-green-500 rounded-3xl shadow-2xl transform -rotate-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.stats.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.stats.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}+</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <StatsChart />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {t('home.services.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t('home.about.title')}
              </h2>
              <p className="text-xl text-green-100 leading-relaxed">
                {t('home.about.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>{t('home.about.expertise')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>{t('home.about.approach')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>{t('home.about.innovation')}</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                {t('home.about.learnMore')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-green-200">{t('home.about.satisfaction')}</span>
                    <span className="text-2xl font-bold">98%</span>
                  </div>
                  <div className="w-full bg-green-700 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-green-200">{t('home.about.onTime')}</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div className="w-full bg-green-700 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            {t('home.cta.button')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;