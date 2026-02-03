import React from "react";
import { Match } from "../types";
import { getTeamById } from "../data/teams";
import TeamLogo from "./TeamLogo";
import { Calendar, MapPin, AlertTriangle, AlertCircle } from "lucide-react";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const homeTeam = getTeamById(match.homeTeamId);
  const awayTeam = getTeamById(match.awayTeamId);

  if (!homeTeam || !awayTeam) return null;

  const isPlayedOrDefault =
    match.status === "played" || match.status === "default";
  const isSuspended = match.status === "suspended";

  const isHomeWinner =
    isPlayedOrDefault && (match.homeScore || 0) > (match.awayScore || 0);
  const isAwayWinner =
    isPlayedOrDefault && (match.awayScore || 0) > (match.homeScore || 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3 hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Status Badges */}
      {isSuspended && (
        <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg flex items-center gap-1">
          <AlertTriangle size={12} /> SUSPENDIDO
        </div>
      )}
      {match.status === "default" && (
        <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg flex items-center gap-1">
          <AlertCircle size={12} /> DEFAULT
        </div>
      )}

      {/* Meta Info */}
      <div className="flex flex-col gap-1 text-xs text-gray-500 mb-4 border-b border-gray-100 pb-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span
              className={isSuspended ? "line-through decoration-red-500" : ""}>
              {match.date} • {match.time}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span className="truncate max-w-[100px]">{match.location}</span>
          </div>
        </div>

        {/* Rescheduled Info */}
        {isSuspended && match.rescheduledDate && (
          <div className="text-orange-600 font-medium flex items-center gap-1 mt-1">
            Reagendado: {match.rescheduledDate}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        {/* Home Team */}
        <div className="flex-1 flex flex-col items-center gap-2 text-center w-1/3">
          <TeamLogo team={homeTeam} size="md" />
          <div>
            <span
              className={`block font-semibold text-sm leading-tight ${isHomeWinner ? "text-black" : "text-gray-600"}`}>
              {homeTeam.name}
            </span>
          </div>
        </div>

        {/* Score / VS */}
        <div className="flex flex-col items-center justify-center px-2 w-1/3">
          {isPlayedOrDefault ? (
            <div className="flex items-center gap-3">
              <span
                className={`text-2xl font-bold ${isHomeWinner ? "text-orange-600" : "text-gray-800"}`}>
                {match.homeScore}
              </span>
              <span className="text-gray-300">-</span>
              <span
                className={`text-2xl font-bold ${isAwayWinner ? "text-orange-600" : "text-gray-800"}`}>
                {match.awayScore}
              </span>
            </div>
          ) : (
            <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-400">VS</span>
            </div>
          )}
          <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">
            {match.status === "played"
              ? "Final"
              : match.status === "default"
                ? "Forfeit"
                : match.status === "suspended"
                  ? "Pendiente"
                  : "Programado"}
          </div>
        </div>

        {/* Away Team */}
        <div className="flex-1 flex flex-col items-center gap-2 text-center w-1/3">
          <TeamLogo team={awayTeam} size="md" />
          <div>
            <span
              className={`block font-semibold text-sm leading-tight ${isAwayWinner ? "text-black" : "text-gray-600"}`}>
              {awayTeam.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
