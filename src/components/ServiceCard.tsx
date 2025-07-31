import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  color: 'primary' | 'light-blue' | 'orange' | 'soft-green' | 'purple';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, color }) => {
  const colorClasses = {
    primary: {
      bg: 'bg-sra-primary bg-opacity-10',
      icon: 'text-sra-primary',
      hover: 'hover:bg-sra-primary hover:bg-opacity-20'
    },
    'light-blue': {
      bg: 'bg-sra-light-blue bg-opacity-10',
      icon: 'text-sra-light-blue',
      hover: 'hover:bg-sra-light-blue hover:bg-opacity-20'
    },
    orange: {
      bg: 'bg-sra-orange bg-opacity-10',
      icon: 'text-sra-orange',
      hover: 'hover:bg-sra-orange hover:bg-opacity-20'
    },
    'soft-green': {
      bg: 'bg-sra-soft-green bg-opacity-10',
      icon: 'text-sra-soft-green',
      hover: 'hover:bg-sra-soft-green hover:bg-opacity-20'
    },
    purple: {
      bg: 'bg-sra-purple bg-opacity-10',
      icon: 'text-sra-purple',
      hover: 'hover:bg-sra-purple hover:bg-opacity-20'
    }
  };

  const classes = colorClasses[color];

  return (
    <div className={`${classes.bg} p-8 shadow-sharp ${classes.hover} transition-all duration-200 hover:shadow-sharp-lg hover:scale-105 group border border-gray-200`}>
      <div className={`inline-flex items-center justify-center w-16 h-16 ${classes.bg} mb-6 group-hover:scale-110 transition-transform duration-200`}>
        <Icon className={`h-8 w-8 ${classes.icon}`} />
      </div>
      <h3 className="text-xl font-bold text-sra-primary mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;