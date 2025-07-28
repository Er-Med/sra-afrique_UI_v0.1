import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'orange';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, color }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      icon: 'text-blue-600',
      hover: 'hover:bg-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      icon: 'text-green-600',
      hover: 'hover:bg-green-100'
    },
    orange: {
      bg: 'bg-orange-50',
      icon: 'text-orange-600',
      hover: 'hover:bg-orange-100'
    }
  };

  const classes = colorClasses[color];

  return (
    <div className={`${classes.bg} p-8 rounded-xl shadow-lg ${classes.hover} transition-all duration-300 hover:shadow-xl hover:scale-105 group`}>
      <div className={`inline-flex items-center justify-center w-16 h-16 ${classes.bg} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`h-8 w-8 ${classes.icon}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;