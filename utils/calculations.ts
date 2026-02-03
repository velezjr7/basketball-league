import { TeamStats, Round } from "../types";
import { TEAMS } from "../data/teams";

// Constants for points
const POINTS_WIN = 3;
const POINTS_LOSS = 1;
const POINTS_DEFAULT = 0;

export const calculateStandings = (rounds: Round[]): TeamStats[] => {
  // Initialize stats for all teams
  const stats: Record<string, TeamStats> = {};

  TEAMS.forEach((team) => {
    stats[team.id] = {
      teamId: team.id,
      gamesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      pointsFor: 0,
      pointsAgainst: 0,
      diff: 0,
      points: 0,
      gamesLostByDefault: 0,
    };
  });

  // Process all matches
  rounds.forEach((round) => {
    round.matches.forEach((match) => {
      // Only process if played or decided by default
      if (
        (match.status === "played" || match.status === "default") &&
        match.homeScore !== undefined &&
        match.awayScore !== undefined
      ) {
        // Home Team Update
        const home = stats[match.homeTeamId];
        home.gamesPlayed += 1;
        home.pointsFor += match.homeScore;
        home.pointsAgainst += match.awayScore;

        // Away Team Update
        const away = stats[match.awayTeamId];
        away.gamesPlayed += 1;
        away.pointsFor += match.awayScore;
        away.pointsAgainst += match.homeScore;

        if (match.homeScore > match.awayScore) {
          // Home Wins
          home.gamesWon += 1;
          home.points += POINTS_WIN;

          // Away Loses
          away.gamesLost += 1;
          if (match.status === "default") {
            away.gamesLostByDefault += 1;
            away.points += POINTS_DEFAULT;
          } else {
            away.points += POINTS_LOSS;
          }
        } else {
          // Away Wins
          away.gamesWon += 1;
          away.points += POINTS_WIN;

          // Home Loses
          home.gamesLost += 1;
          if (match.status === "default") {
            home.gamesLostByDefault += 1;
            home.points += POINTS_DEFAULT;
          } else {
            home.points += POINTS_LOSS;
          }
        }
      }
    });
  });

  // Calculate Diff and Convert to Array
  return Object.values(stats)
    .map((stat) => ({
      ...stat,
      diff: stat.pointsFor - stat.pointsAgainst,
    }))
    .sort((a, b) => {
      // Sort by Points, then Diff, then Points For
      if (b.points !== a.points) return b.points - a.points;
      if (b.diff !== a.diff) return b.diff - a.diff;
      return b.pointsFor - a.pointsFor;
    });
};

export const getSpecialStats = (standings: TeamStats[]) => {
  if (standings.length === 0) return null;

  // Best Offense (Team Canastero)
  const bestOffense = [...standings].sort(
    (a, b) => b.pointsFor - a.pointsFor,
  )[0];

  // Worst Defense (Points Against)
  // We want the team with the HIGHEST pointsAgainst
  const worstDefense = [...standings].sort(
    (a, b) => b.pointsAgainst - a.pointsAgainst,
  )[0];

  // Best Defense (Fewest points allowed)
  const bestDefense = [...standings].sort(
    (a, b) => a.pointsAgainst - b.pointsAgainst,
  )[0];

  // Highest Diff
  const bestDiff = [...standings].sort((a, b) => b.diff - a.diff)[0];

  return {
    bestOffense,
    worstDefense,
    bestDefense,
    bestDiff,
  };
};
