import React, { useState } from 'react';
import { SCHEDULE } from '../data/schedule';
import MatchCard from '../components/MatchCard';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const SchedulePage: React.FC = () => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

  const rounds = SCHEDULE;
  const currentRound = rounds[currentRoundIndex];

  const handlePrev = () => {
    setCurrentRoundIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentRoundIndex((prev) => (prev < rounds.length - 1 ? prev + 1 : prev));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentRoundIndex(Number(e.target.value));
  };

  return (
    <div className="max-w-xl mx-auto p-4 pb-24 md:pb-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="text-orange-600" />
            Calendario
        </h1>
      </div>

      {/* Round Control */}
      <div className="flex items-center gap-2 bg-white rounded-xl p-2 shadow-sm border border-gray-100 mb-6 sticky top-20 md:top-4 z-30">
        <button 
          onClick={handlePrev} 
          disabled={currentRoundIndex === 0}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 text-gray-600 transition-colors"
          aria-label="Jornada anterior"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex-1 relative">
            <select 
                value={currentRoundIndex}
                onChange={handleSelectChange}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 text-center font-bold py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer transition-all hover:bg-gray-100"
            >
                {rounds.map((round, index) => (
                    <option key={round.id} value={index}>
                        {round.name}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
            <div className="text-center mt-1">
                 <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Temporada Regular</span>
            </div>
        </div>

        <button 
          onClick={handleNext} 
          disabled={currentRoundIndex === rounds.length - 1}
          className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 text-gray-600 transition-colors"
           aria-label="Siguiente jornada"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Match List */}
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {currentRound.matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>

      {/* Empty State / Rest Info */}
      <div className="mt-6 text-center text-xs text-gray-400">
        * Un equipo descansa por jornada debido al número impar de participantes.
      </div>
    </div>
  );
};

export default SchedulePage;