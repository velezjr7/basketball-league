import { Team } from "../types";

export const TEAMS: Team[] = [
  {
    id: "barrio",
    name: "Barrio",
    shortName: "BAR",
    image: "halcones.png",
    color: "#ef4444",
  },
  {
    id: "blackB",
    name: "Black Mambas",
    shortName: "BMA",
    image: "toros.png",
    color: "#000000",
  },
  {
    id: "bulls",
    name: "Bulls",
    shortName: "BUL",
    image: "lobos.png",
    color: "#dc2626",
  },
  {
    id: "fussion",
    name: "Fussion",
    shortName: "FUS",
    image: "rayos.png",
    color: "#10b981",
  },
  {
    id: "grass",
    name: "Grassbrothers",
    shortName: "GBR",
    image: "guerreros.png",
    color: "#f59e0b",
  },
  {
    id: "leg",
    name: "Legends",
    shortName: "LEG",
    image: "dragones.png",
    color: "#7f1d1d",
  },
  {
    id: "mex",
    name: "Mexticacán",
    shortName: "MTN",
    image: "tiburones.png",
    color: "#06b6d4",
  },
  {
    id: "okc",
    name: "Oklahoma",
    shortName: "OKC",
    image: "aguilas.png",
    color: "#93c5fd",
  },
  {
    id: "pit",
    name: "Pitufos",
    shortName: "PIU",
    image: "panteras.png",
    color: "#1e40af",
  },
  {
    id: "thu",
    name: "Thunders",
    shortName: "THU",
    image: "cobras.png",
    color: "#93c5fd",
  },
  {
    id: "tia",
    name: "Tianguis",
    shortName: "TNG",
    image: "titanes.png",
    color: "#4f46e5",
  },
];

// Helper to get team by ID
export const getTeamById = (id: string): Team | undefined => {
  return TEAMS.find((t) => t.id === id);
};
