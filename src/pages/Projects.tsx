import React from 'react';
import { Calendar, MapPin, Users, Award, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Transformation Digitale - Ministère de l\'Agriculture',
      description: 'Mise en place d\'une plateforme digitale pour moderniser la gestion agricole au Sénégal.',
      image: 'https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technologie',
      location: 'Dakar, Sénégal',
      date: '2024',
      status: 'Terminé',
      impact: '50,000 agriculteurs connectés',
      client: 'Gouvernement du Sénégal'
    },
    {
      title: 'Projet Énergie Solaire Communautaire',
      description: 'Installation de systèmes solaires pour alimenter 25 villages ruraux en électricité propre.',
      image: 'https://images.pexels.com/photos/9875433/pexels-photo-9875433.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Énergie Renouvelable',
      location: 'Mali',
      date: '2023',
      status: 'Terminé',
      impact: '15,000 bénéficiaires',
      client: 'Banque Mondiale'
    },
    {
      title: 'Centre de Formation Professionnelle',
      description: 'Création d\'un centre de formation aux métiers du numérique pour les jeunes.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Formation',
      location: 'Abidjan, Côte d\'Ivoire',
      date: '2024',
      status: 'En cours',
      impact: '500 jeunes formés/an',
      client: 'Union Africaine'
    },
    {
      title: 'Système de Gestion des Déchets Urbains',
      description: 'Solution innovante pour optimiser la collecte et le recyclage des déchets urbains.',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Environnement',
      location: 'Rabat, Maroc',
      date: '2023',
      status: 'Terminé',
      impact: '70% d\'amélioration du recyclage',
      client: 'Ville de Rabat'
    },
    {
      title: 'Plateforme E-commerce Agricole',
      description: 'Marketplace digitale connectant directement producteurs et consommateurs.',
      image: 'https://images.pexels.com/photos/1435238/pexels-photo-1435238.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Agriculture',
      location: 'Ghana',
      date: '2024',
      status: 'En cours',
      impact: '1,200 producteurs inscrits',
      client: 'Secteur Privé'
    },
    {
      title: 'Programme de Microfinance Digitale',
      description: 'Solution bancaire mobile pour l\'inclusion financière des populations rurales.',
      image: 'https://images.pexels.com/photos/7841834/pexels-photo-7841834.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Finance',
      location: 'Rwanda',
      date: '2023',
      status: 'Terminé',
      impact: '25,000 nouveaux comptes',
      client: 'Banque Centrale du Rwanda'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projets Réalisés' },
    { number: '15', label: 'Pays Couverts' },
    { number: '500K+', label: 'Bénéficiaires' },
    { number: '98%', label: 'Taux de Succès' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé':
        return 'bg-green-100 text-green-800';
      case 'En cours':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technologie': 'bg-blue-500',
      'Énergie Renouvelable': 'bg-green-500',
      'Formation': 'bg-purple-500',
      'Environnement': 'bg-orange-500',
      'Agriculture': 'bg-yellow-500',
      'Finance': 'bg-red-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Projets</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Découvrez comment nous transformons l'Afrique à travers des projets concrets et impactants
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Projets Récents
            </h2>
            <p className="text-xl text-gray-600">
              Une sélection de nos réalisations les plus impactantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Impact</div>
                        <div className="font-semibold text-blue-600">{project.impact}</div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Témoignages de Réussite
            </h2>
            <p className="text-xl text-gray-600">
              Ce que disent nos partenaires de nos réalisations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold text-gray-900">Excellence en Innovation</span>
              </div>
              <p className="text-gray-600 mb-4">
                "SRA Afrique a révolutionné notre approche agricole avec leur plateforme digitale. Les résultats dépassent nos attentes."
              </p>
              <div className="text-sm text-gray-500">
                - Ministre de l'Agriculture, Sénégal
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold text-gray-900">Impact Environnemental</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Le projet solaire a transformé la vie de nos communautés. Une approche professionnelle et des résultats durables."
              </p>
              <div className="text-sm text-gray-500">
                - Directeur Régional, Banque Mondiale
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="font-semibold text-gray-900">Formation de Qualité</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Le centre de formation a créé de vraies opportunités pour nos jeunes. Un investissement dans l'avenir de l'Afrique."
              </p>
              <div className="text-sm text-gray-500">
                - Représentant Union Africaine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Votre Projet, Notre Expertise
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients satisfaits et transformez vos idées en projets concrets et impactants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300"
            >
              Discuter de votre projet
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;