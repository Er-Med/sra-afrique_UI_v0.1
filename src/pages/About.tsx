import React from 'react';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous nous engageons pleinement dans chaque projet pour garantir des résultats exceptionnels.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies et méthodologies pour créer des solutions innovantes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour co-créer des solutions durables.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Nous visons un impact positif et durable sur les communautés et l\'économie africaine.'
    }
  ];

  const team = [
    {
      name: 'Dr. Amina Benali',
      role: 'Directrice Générale',
      description: 'Expert en développement économique avec 15 ans d\'expérience en Afrique.',
      image: 'https://images.pexels.com/photos/3781691/pexels-photo-3781691.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mohamed Kone',
      role: 'Directeur Technique',
      description: 'Spécialiste en innovation technologique et transformation digitale.',
      image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Diallo',
      role: 'Responsable Développement Durable',
      description: 'Experte en environnement et développement durable en Afrique.',
      image: 'https://images.pexels.com/photos/3831849/pexels-photo-3831849.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">À Propos de SRA Afrique</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Pionniers du développement durable et de l'innovation en Afrique depuis plus d'une décennie
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SRA Afrique s'engage à accompagner les organisations, gouvernements et entreprises dans leur transformation 
                vers un développement durable et inclusif. Nous croyons fermement au potentiel immense du continent africain 
                et œuvrons pour le révéler à travers des solutions innovantes et adaptées.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre approche unique combine expertise locale, technologies de pointe et méthodologies éprouvées pour 
                créer un impact positif et durable sur les communautés que nous servons.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-700 mb-6">
                Être le partenaire de référence pour la transformation durable de l'Afrique, en contribuant à 
                l'émergence d'un continent prospère, innovant et respectueux de son environnement.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-blue-600">2030</div>
                <div className="text-gray-600">Objectif : 1000 projets transformateurs réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600">
              Plus d'une décennie au service du développement africain
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2012 - Fondation</h3>
                    <p className="text-gray-600">
                      Création de SRA Afrique avec la vision de transformer le développement en Afrique
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2015 - Expansion</h3>
                    <p className="text-gray-600">
                      Extension de nos services à 5 pays africains avec 25 projets réalisés
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Innovation</h3>
                    <p className="text-gray-600">
                      Lancement de notre division technologie et innovation digitale
                    </p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2025 - Excellence</h3>
                    <p className="text-gray-600">
                      150+ projets réalisés, présence dans 12 pays, équipe de 50+ experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Notre Équipe Dirigeante</h2>
            <p className="text-xl text-gray-600">
              Des leaders passionnés et expérimentés au service de l'Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
              <div className="text-gray-300">Années d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-gray-300">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-gray-300">Pays Couverts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Experts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;