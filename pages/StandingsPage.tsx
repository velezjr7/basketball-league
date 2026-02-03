import React, { useMemo, useState } from "react";
import { calculateStandings } from "../utils/calculations";
import { SCHEDULE } from "../data/schedule";
import { getTeamById } from "../data/teams";
import TeamLogo from "../components/TeamLogo";
import { Search } from "lucide-react";

const StandingsPage: React.FC = () => {
  const standings = useMemo(() => calculateStandings(SCHEDULE), []);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStandings = standings.filter((stat) => {
    const team = getTeamById(stat.teamId);
    if (!team) return false;
    return team.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tabla General</h1>
          <p className="text-gray-500">Clasificación actualizada al momento.</p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar equipo..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition duration-150 ease-in-out shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[300px]">
        {filteredStandings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 font-medium text-center w-12">#</th>
                  <th className="px-4 py-3 font-medium">Equipo</th>
                  <th
                    className="px-3 py-3 font-medium text-center"
                    title="Juegos Jugados">
                    JJ
                  </th>
                  <th
                    className="px-3 py-3 font-medium text-center"
                    title="Juegos Ganados">
                    JG
                  </th>
                  <th
                    className="px-3 py-3 font-medium text-center"
                    title="Juegos Perdidos">
                    JP
                  </th>
                  <th
                    className="px-3 py-3 font-medium text-center text-red-600"
                    title="Perdidos por Default">
                    PDF
                  </th>
                  <th
                    className="px-3 py-3 font-medium text-center hidden md:table-cell"
                    title="Puntos a Favor">
                    PF
                  </th>
                  <th
                    className="px-3 py-3 font-medium text-center hidden md:table-cell"
                    title="Puntos en Contra">
                    PC
                  </th>
                  <th
                    className="px-3 py-3 font-medium text-center"
                    title="Diferencia">
                    DIF
                  </th>
                  <th className="px-4 py-3 font-bold text-center text-gray-900 bg-gray-100/50">
                    PTS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredStandings.map((stat) => {
                  const team = getTeamById(stat.teamId);
                  if (!team) return null;

                  // We find the original rank index
                  const rank =
                    standings.findIndex((s) => s.teamId === stat.teamId) + 1;

                  return (
                    <tr
                      key={stat.teamId}
                      className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-semibold text-gray-500">
                        {rank}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <TeamLogo team={team} size="sm" />
                          <span className="font-semibold text-gray-900 hidden sm:inline">
                            {team.name}
                          </span>
                          <span className="font-semibold text-gray-900 sm:hidden">
                            {team.shortName}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center text-gray-600">
                        {stat.gamesPlayed}
                      </td>
                      <td className="px-3 py-3 text-center text-green-600 font-medium">
                        {stat.gamesWon}
                      </td>
                      <td className="px-3 py-3 text-center text-red-500 font-medium">
                        {stat.gamesLost}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-400 font-medium">
                        {stat.gamesLostByDefault}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-500 hidden md:table-cell">
                        {stat.pointsFor}
                      </td>
                      <td className="px-3 py-3 text-center text-gray-500 hidden md:table-cell">
                        {stat.pointsAgainst}
                      </td>
                      <td
                        className={`px-3 py-3 text-center font-medium ${stat.diff > 0 ? "text-green-600" : stat.diff < 0 ? "text-red-500" : "text-gray-500"}`}>
                        {stat.diff > 0 ? "+" : ""}
                        {stat.diff}
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-gray-900 bg-gray-50/50">
                        {stat.points}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48 text-gray-500">
            <Search size={32} className="mb-2 text-gray-300" />
            <p>No se encontraron equipos que coincidan con "{searchTerm}".</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500 justify-end">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span> JG:
          Ganados (3 pts)
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500"></span> JP: Perdidos
          (1 pt)
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span> PDF:
          Default (0 pts)
        </div>
      </div>
    </div>
  );
};

export default StandingsPage;
