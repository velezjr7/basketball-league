export interface Team {
  id: string;
  name: string;
  shortName: string; // Used for mobile or tight spaces
  image: string; // Path to image in public/images/teams/
  color: string; // Hex code for team branding
}

export interface Match {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore?: number;
  awayScore?: number;
  isPlayed: boolean;
  date: string;
  time: string;
  location: string;
}

export interface Round {
  id: string;
  name: string; // e.g., "Jornada 1"
  matches: Match[];
}

export interface TeamStats {
  teamId: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  pointsFor: number;
  pointsAgainst: number;
  diff: number;
  points: number; // Standings points (e.g., 2 for win, 1 for loss)
}