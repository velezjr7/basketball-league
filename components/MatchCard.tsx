import React from 'react';
import { Match, Team } from '../types';
import { getTeamById } from '../data/teams';
import TeamLogo from './TeamLogo';
import { Calendar, MapPin } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const homeTeam = getTeamById(match.homeTeamId);
  const awayTeam = getTeamById(match.awayTeamId);

  if (!homeTeam || !awayTeam) return null;

  const isHomeWinner = match.isPlayed && (match.homeScore || 0) > (match.awayScore || 0);
  const isAwayWinner = match.isPlayed && (match.awayScore || 0) > (match.homeScore || 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3 hover:shadow-md transition-shadow">
      
      {/* Meta Info */}
      <div className="flex justify-between items-center text-xs text-gray-500 mb-4 border-b border-gray-100 pb-2">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <span>{match.date} • {match.time}</span>
        </div>
        <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span className="truncate max-w-[100px]">{match.location}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        
        {/* Home Team */}
        <div className="flex-1 flex flex-col items-center gap-2">
          <TeamLogo team={homeTeam} size="md" />
          <div className="text-center">
            <span className={`block font-semibold text-sm ${isHomeWinner ? 'text-black' : 'text-gray-600'}`}>
              {homeTeam.shortName}
            </span>
          </div>
        </div>

        {/* Score / VS */}
        <div className="flex flex-col items-center justify-center px-4">
          {match.isPlayed ? (
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-bold ${isHomeWinner ? 'text-orange-600' : 'text-gray-800'}`}>
                {match.homeScore}
              </span>
              <span className="text-gray-300">-</span>
              <span className={`text-2xl font-bold ${isAwayWinner ? 'text-orange-600' : 'text-gray-800'}`}>
                {match.awayScore}
              </span>
            </div>
          ) : (
            <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-400">VS</span>
            </div>
          )}
           <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">
             {match.isPlayed ? 'Final' : 'Pendiente'}
           </div>
        </div>

        {/* Away Team */}
        <div className="flex-1 flex flex-col items-center gap-2">
          <TeamLogo team={awayTeam} size="md" />
           <div className="text-center">
            <span className={`block font-semibold text-sm ${isAwayWinner ? 'text-black' : 'text-gray-600'}`}>
              {awayTeam.shortName}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MatchCard;