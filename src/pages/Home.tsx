import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight, Users, Target, Award, TrendingUp,
  //  Globe, Lightbulb,
  Play, Star, CheckCircle, Clock, Zap,
  // LucideIcon 
} from 'lucide-react';
// import StatsChart from '../components/StatsChart';
// import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: t('home.stats.projects'), value: 150, icon: Target },
    { label: t('home.stats.clients'), value: 89, icon: Users },
    { label: t('home.stats.experience'), value: 12, icon: Award },
    { label: t('home.stats.growth'), value: 25, icon: TrendingUp },
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sra-primary via-sra-primary to-sra-light-blue text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sra-orange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-sra-soft-green rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sra-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[80vh]">
            <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-sra-orange bg-opacity-20 backdrop-blur-sm border border-sra-orange border-opacity-30 text-sra-orange text-sm font-medium">
                <Star className="w-4 h-4 mr-2 fill-current" />
                {t('home.hero.badge')}
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight uppercase tracking-wide">
                <span className="block bg-gradient-to-r from-white via-sra-orange to-sra-orange bg-clip-text text-transparent">
                  {t('home.hero.title')}
                </span>
                <span className="block text-sra-orange mt-2">
                  {t('home.hero.subtitle')}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl">
                {t('home.hero.description')}
              </p>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 text-sm text-white">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-sra-orange to-sra-purple rounded-full border-2 border-sra-primary"></div>
                    ))}
                  </div>
                  <span className="ml-2">89+ {t('home.hero.clients')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-sra-orange fill-current" />
                    ))}
                  </div>
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-sra-soft-green" />
                  <span>{t('home.hero.guarantee')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-5 h-5 text-sra-light-blue" />
                  <span>{t('home.hero.fast')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Zap className="w-5 h-5 text-sra-orange" />
                  <span>{t('home.hero.innovative')}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/services"
                  className="btn-primary flex items-center gap-1"
                >
                  <span className="relative z-10">{t('home.hero.cta1')}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="btn-secondary flex items-center gap-1"
                >
                  <span className="relative z-10">{t('home.hero.cta2')}</span>
                </Link>
              </div>

              {/* Urgency Element */}
              {/* <div className="flex items-center space-x-2 text-sm text-white bg-sra-primary bg-opacity-30 backdrop-blur-sm p-3 border border-sra-light-blue">
                <Clock className="w-4 h-4 text-sra-orange" />
                <span>{t('home.hero.urgency')}</span>
              </div> */}
            </div>

            {/* Right Side - Interactive Visual */}
            <div className={`lg:col-span-1 hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 border border-white/20 shadow-sharp-xl">
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-sra-orange to-sra-purple shadow-sharp-lg transform rotate-12 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-sra-soft-green to-sra-light-blue shadow-sharp-lg transform -rotate-12 animate-pulse animation-delay-1000"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide">{t('home.hero.cardTitle')}</h3>

                    {/* Animated Stats */}
                    <div className="space-y-4">
                      {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <div key={index} className={`flex items-center justify-between p-4 transition-all duration-500 ${currentStat === index
                            ? 'bg-gradient-to-r from-sra-orange/20 to-sra-purple/20 border border-sra-orange/30'
                            : 'bg-white/5 border border-white/10'
                            }`}>
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 transition-all duration-300 ${currentStat === index ? 'bg-sra-orange text-sra-primary' : 'bg-white/10 text-white'
                                }`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-white font-medium">{stat.label}</span>
                            </div>
                            <span className={`text-2xl font-bold transition-all duration-300 ${currentStat === index ? 'text-sra-orange' : 'text-white'
                              }`}>
                              {stat.value}+
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Play Button */}
                    <div className="flex items-center justify-center pt-4">
                      <button className="group relative w-16 h-16 bg-gradient-to-r from-sra-orange to-sra-purple flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-sharp-lg">
                        <Play className="w-6 h-6 text-sra-primary ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/60 mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ...... */}
      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('home.stats.title')}
            </h2>
            <div className="section-accent"></div>
            <p className="text-xl text-gray-600">
              {t('home.stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="card p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sra-light-blue bg-opacity-10 mb-4">
                    <Icon className="h-8 w-8 text-sra-primary" />
                  </div>
                  <div className="text-4xl font-bold text-sra-primary mb-2">{stat.value}+</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <StatsChart />
        </div>
      </section> */}

      {/* Services Section */}
      {/* <se/* The above code is a TypeScript React component that displays a section on a webpage for
      services. It includes a title, subtitle, a list of service cards, and a button to view
      all services. The services are mapped over from an array called `services` and each
      service is displayed using the `ServiceCard` component. The title and subtitle are
      dynamically rendered using the `t` function to fetch translations for the text content.
      The section is styled using Tailwind CSS classes for layout and design. 
      ction className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('home.services.title')}
            </h2>
            <div className="section-accent"></div>
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
              className="btn-primary"
            >
              {t('home.services.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </se> */}

      {/* About Preview Section */}
      {/*<section className="py-16 bg-gradient-to-r from-sra-primary to-sra-light-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide">
                {t('home.about.title')}
              </h2>
              <div className="w-16 h-0.5 bg-sra-orange"></div>
              <p className="text-xl text-white leading-relaxed">
                {t('home.about.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sra-orange"></div>
                  <span>{t('home.about.expertise')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sra-orange"></div>
                  <span>{t('home.about.approach')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sra-orange"></div>
                  <span>{t('home.about.innovation')}</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="btn-primary"
              >
                {t('home.about.learnMore')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white">{t('home.about.satisfaction')}</span>
                    <span className="text-2xl font-bold">98%</span>
                  </div>
                  <div className="w-full bg-sra-primary h-2">
                    <div className="bg-sra-orange h-2" style={{ width: '98%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white">{t('home.about.onTime')}</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div className="w-full bg-sra-primary h-2">
                    <div className="bg-sra-orange h-2" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-sra-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 uppercase tracking-wide">
            {t('home.cta.title')}
          </h2>
          <div className="w-16 h-0.5 bg-sra-orange mx-auto mb-6"></div>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            {t('home.cta.button')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Home;