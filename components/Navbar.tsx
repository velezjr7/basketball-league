import React from 'react';
import { NavLink } from 'react-router-dom';
import { CalendarDays, Trophy, BarChart2, Dribbble } from 'lucide-react';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2 md:px-4 rounded-lg transition-colors duration-200 ${
      isActive 
        ? 'text-orange-600 bg-orange-50 md:bg-transparent font-semibold' 
        : 'text-gray-500 hover:text-orange-500'
    }`;

  return (
    <>
      {/* Desktop Header */}
      <nav className="hidden md:block bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg text-white">
                <Dribbble size={24} />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">BasketLeague</span>
          </div>
          <div className="flex items-center gap-2">
            <NavLink to="/" className={linkClass}>
              <CalendarDays size={18} />
              <span>Jornadas</span>
            </NavLink>
            <NavLink to="/posiciones" className={linkClass}>
              <Trophy size={18} />
              <span>Posiciones</span>
            </NavLink>
            <NavLink to="/estadisticas" className={linkClass}>
              <BarChart2 size={18} />
              <span>Estadísticas</span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          <NavLink to="/" className={linkClass}>
            <CalendarDays size={20} />
            <span className="text-[10px]">Jornadas</span>
          </NavLink>
          <NavLink to="/posiciones" className={linkClass}>
            <Trophy size={20} />
            <span className="text-[10px]">Posiciones</span>
          </NavLink>
          <NavLink to="/estadisticas" className={linkClass}>
            <BarChart2 size={20} />
            <span className="text-[10px]">Stats</span>
          </NavLink>
        </div>
      </nav>
      
      {/* Mobile Top Bar (Logo Only) */}
      <div className="md:hidden bg-white border-b border-gray-200 p-3 sticky top-0 z-40">
        <div className="flex items-center justify-center gap-2">
            <div className="bg-orange-600 p-1 rounded-md text-white">
                <Dribbble size={20} />
            </div>
            <span className="text-lg font-bold text-gray-900">BasketLeague</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;