import React, { useMemo } from 'react';
import { calculateStandings, getSpecialStats } from '../utils/calculations';
import { SCHEDULE } from '../data/schedule';
import { getTeamById } from '../data/teams';
import TeamLogo from '../components/TeamLogo';
import { Flame, ShieldAlert, ShieldCheck, TrendingUp } from 'lucide-react';

const StatsPage: React.FC = () => {
  const stats = useMemo(() => {
    const standings = calculateStandings(SCHEDULE);
    return getSpecialStats(standings);
  }, []);

  if (!stats) return <div className="p-8 text-center text-gray-500">No hay datos suficientes aún.</div>;

  const Card = ({ title, teamStat, icon: Icon, colorClass, label, valueLabel }: any) => {
    const team = getTeamById(teamStat.teamId);
    if (!team) return null;

    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group">
        <div className={`absolute top-0 left-0 w-full h-1 ${colorClass}`}></div>
        <div className={`p-3 rounded-full mb-4 bg-gray-50 ${colorClass.replace('bg-', 'text-')}`}>
            <Icon size={24} />
        </div>
        <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-4">{title}</h3>
        
        <TeamLogo team={team} size="xl" className="mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300" />
        
        <h2 className="text-xl font-bold text-gray-900 mb-1">{team.name}</h2>
        
        <div className="mt-2 px-4 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
           {valueLabel}: {label}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24 md:pb-8">
       <div className="mb-8 text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Estadísticas Especiales</h1>
        <p className="text-gray-500">Líderes del torneo en ofensiva y defensiva.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
            title="Equipo Canastero" 
            teamStat={stats.bestOffense} 
            icon={Flame} 
            colorClass="bg-orange-500"
            valueLabel="Puntos Anotados"
            label={stats.bestOffense.pointsFor}
        />
        
        <Card 
            title="Peor Defensa" 
            teamStat={stats.worstDefense} 
            icon={ShieldAlert} 
            colorClass="bg-red-500"
            valueLabel="Puntos Recibidos"
            label={stats.worstDefense.pointsAgainst}
        />
        
        <Card 
            title="Muralla Defensiva" 
            teamStat={stats.bestDefense} 
            icon={ShieldCheck} 
            colorClass="bg-blue-500"
            valueLabel="Puntos Recibidos"
            label={stats.bestDefense.pointsAgainst}
        />

        <Card 
            title="Mejor Diferencia" 
            teamStat={stats.bestDiff} 
            icon={TrendingUp} 
            colorClass="bg-green-500"
            valueLabel="Diferencia de Puntos"
            label={`+${stats.bestDiff.diff}`}
        />
      </div>
    </div>
  );
};

export default StatsPage;