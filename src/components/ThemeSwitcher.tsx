import React from 'react';
import { Square, Circle } from 'lucide-react';

interface ThemeSwitcherProps {
 isSharp: boolean;
 onToggle: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isSharp, onToggle }) => {
 return (
  <div className="fixed bottom-6 right-6 z-50">
   <button
    onClick={onToggle}
    className={`bg-sra-primary text-white p-3 transition-all duration-200 transform hover:scale-105 ${isSharp
     ? 'shadow-sharp-lg hover:shadow-sharp-xl'
     : 'shadow-lg hover:shadow-xl rounded-lg'
     }`}
    title={isSharp ? "Switch to Rounded Design" : "Switch to Sharp Design"}
   >
    {isSharp ? (
     <Circle className="w-6 h-6" />
    ) : (
     <Square className="w-6 h-6" />
    )}
   </button>
  </div>
 );
};

export default ThemeSwitcher; 