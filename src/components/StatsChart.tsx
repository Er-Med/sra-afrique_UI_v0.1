import React from 'react';
import { useTranslation } from 'react-i18next';

const StatsChart = () => {
  const { t } = useTranslation();

  const data = [
    { year: '2020', projets: 25, clients: 15, croissance: 10 },
    { year: '2021', projets: 45, clients: 32, croissance: 18 },
    { year: '2022', projets: 78, clients: 56, croissance: 22 },
    { year: '2023', projets: 125, clients: 78, croissance: 28 },
    { year: '2024', projets: 150, clients: 89, croissance: 25 },
  ];

  const maxValue = 150;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {t('home.stats.title')}
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">{t('home.stats.projects')} par Année</h4>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-600">{item.year}</div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                      style={{ width: `${(item.projets / maxValue) * 100}%` }}
                    >
                      <span className="text-white text-xs font-semibold">{item.projets}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart Representation */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Croissance des {t('home.stats.clients')}</h4>
          <div className="relative h-64 bg-gray-50 rounded-lg p-4">
            <div className="absolute inset-4">
              {/* Grid lines */}
              <div className="grid grid-cols-5 grid-rows-4 h-full w-full">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="border-gray-200 border-t border-l border-dashed opacity-30"></div>
                ))}
              </div>
              
              {/* Data points */}
              <div className="absolute inset-0 flex items-end justify-between">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <div 
                        className="w-3 h-3 bg-blue-500 rounded-full shadow-lg"
                        style={{ 
                          transform: `translateY(-${(item.clients / 100) * 200}px)` 
                        }}
                      ></div>
                      <div 
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                        style={{ 
                          transform: `translate(-50%, -${(item.clients / 100) * 200}px)` 
                        }}
                      >
                        {item.clients}
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 font-medium">{item.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">+500%</div>
          <div className="text-gray-700 font-medium">Croissance des Projets</div>
          <div className="text-sm text-gray-500 mt-1">Depuis 2020</div>
        </div>
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">+493%</div>
          <div className="text-gray-700 font-medium">Expansion Clientèle</div>
          <div className="text-sm text-gray-500 mt-1">Base clients élargie</div>
        </div>
        <div className="bg-orange-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
          <div className="text-gray-700 font-medium">Taux de Croissance</div>
          <div className="text-sm text-gray-500 mt-1">Croissance moyenne</div>
        </div>
      </div>
    </div>
  );
};

export default StatsChart;