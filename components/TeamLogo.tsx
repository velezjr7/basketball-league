import React from 'react';
import { Team } from '../types';

interface TeamLogoProps {
  team?: Team;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({ team, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32'
  };

  const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

  if (!team) {
    return <div className={`${sizeClasses[size]} bg-gray-200 rounded-full`}></div>;
  }

  // Determine image source. Using picsum as fallback/demo if local file fails (simulated here)
  // In a real scenario, this would just be `/images/teams/${team.image}`
  // For this demo, since we don't have the files, we use a placeholder service with a deterministic seed based on ID
  const imgSrc = `https://picsum.photos/seed/${team.id}/200/200`; 

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm border border-gray-100 ${sizeClasses[size]} ${className}`}>
        <img 
            src={imgSrc} 
            alt={team.name}
            className="w-full h-full object-cover"
            onError={(e) => {
                // Fallback if image fails
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-gray-800');
            }}
        />
        <span className="absolute text-xs font-bold text-gray-400 opacity-0">{getInitials(team.name)}</span>
    </div>
  );
};

export default TeamLogo;