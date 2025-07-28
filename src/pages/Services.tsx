import React from 'react';
import { Target, Lightbulb, Globe, Users, TrendingUp, BookOpen, Briefcase, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Conseil Stratégique',
      description: 'Accompagnement dans la définition et la mise en œuvre de stratégies de développement adaptées aux défis africains.',
      features: [
        'Planification stratégique',
        'Analyse de marché',
        'Études de faisabilité',
        'Accompagnement à la transformation'
      ],
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Technologie',
      description: 'Solutions technologiques innovantes pour accélérer le développement et la transformation digitale.',
      features: [
        'Transformation digitale',
        'Solutions IoT',
        'Intelligence artificielle',
        'Plateformes digitales'
      ],
      color: 'green'
    },
    {
      icon: Globe,
      title: 'Développement Durable',
      description: 'Projets respectueux de l\'environnement et socialement responsables pour un avenir durable.',
      features: [
        'Projets environnementaux',
        'Énergie renouvelable',
        'Gestion des ressources',
        'Impact social'
      ],
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Formation & Capacitation',
      description: 'Programmes de formation pour développer les compétences et renforcer les capacités locales.',
      features: [
        'Formation professionnelle',
        'Renforcement institutionnel',
        'Leadership',
        'Compétences techniques'
      ],
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Études de Marché',
      description: 'Analyses approfondies des marchés africains pour orienter vos décisions d\'investissement.',
      features: [
        'Analyse concurrentielle',
        'Études sectorielles',
        'Opportunités d\'investissement',
        'Risques et mitigation'
      ],
      color: 'red'
    },
    {
      icon: Briefcase,
      title: 'Gestion de Projets',
      description: 'Gestion complète de projets complexes avec une approche méthodique et des résultats mesurables.',
      features: [
        'Planification de projet',
        'Suivi et évaluation',
        'Gestion des risques',
        'Livraison qualité'
      ],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      red: 'bg-red-50 text-red-600 border-red-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Des solutions complètes et personnalisées pour transformer l'Afrique
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous offrons une gamme complète de services pour accompagner votre transformation et votre croissance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = getColorClasses(service.color);
              
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${colorClasses}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Nos prestations :</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-gray-600">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600">Évaluation approfondie de vos besoins et de votre contexte</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Conception</h3>
              <p className="text-gray-600">Élaboration de solutions sur mesure adaptées à vos défis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mise en œuvre</h3>
              <p className="text-gray-600">Déploiement des solutions avec un suivi rigoureux</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Évaluation</h3>
              <p className="text-gray-600">Mesure des résultats et optimisation continue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir SRA Afrique ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expertise Locale</h3>
                    <p className="text-gray-600">Connaissance approfondie des marchés et cultures africains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation Continue</h3>
                    <p className="text-gray-600">Solutions créatives adaptées aux défis contemporains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Engagement Durable</h3>
                    <p className="text-gray-600">Partenariat à long terme pour un impact pérenne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Équipe Multidisciplinaire</h3>
                    <p className="text-gray-600">Experts qualifiés dans tous les domaines clés</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Garanties</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Satisfaction Client</span>
                  <span className="text-2xl font-bold text-blue-600">98%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Projets Livrés à Temps</span>
                  <span className="text-2xl font-bold text-green-600">95%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-900">Taux de Réussite</span>
                  <span className="text-2xl font-bold text-orange-600">97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous accompagner dans votre transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Demander un devis
            </a>
            <a
              href="tel:+212522123456"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;