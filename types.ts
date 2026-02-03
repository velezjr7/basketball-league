export interface Team {
  id: string;
  name: string;
  shortName: string; // Used for mobile or tight spaces
  image: string; // Path to image in public/images/teams/
  color: string; // Hex code for team branding
}

export type MatchStatus = "scheduled" | "played" | "suspended" | "default";

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore?: number;
  awayScore?: number;
  status: MatchStatus;
  date: string;
  time: string;
  location: string;
  rescheduledDate?: string; // If suspended, when is it played?
}

export interface Round {
  id: string;
  name: string; // e.g., "Jornada 1"
  matches: Match[];
  restingTeamId?: string;
}

export interface TeamStats {
  teamId: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  pointsFor: number;
  pointsAgainst: number;
  diff: number;
  points: number; // Standings points
  gamesLostByDefault: number; // New field for default losses
}
