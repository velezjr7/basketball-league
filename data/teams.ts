import { Team } from "../types";

export const TEAMS: Team[] = [
  {
    id: "barrio",
    name: "Barrio",
    shortName: "BAR",
    image: "barrio.png",
    color: "#ef4444",
  },
  {
    id: "blackB",
    name: "Black Mambas",
    shortName: "BMA",
    image: "blackmambas.jpg",
    color: "#000000",
  },
  {
    id: "bulls",
    name: "Bulls",
    shortName: "BUL",
    image: "bulls.jpg",
    color: "#dc2626",
  },
  {
    id: "fussion",
    name: "Fussion",
    shortName: "FUS",
    image: "fussion.png",
    color: "#10b981",
  },
  {
    id: "grass",
    name: "Grassbrothers",
    shortName: "GBR",
    image: "grass.jpeg",
    color: "#f59e0b",
  },
  {
    id: "leg",
    name: "Legends",
    shortName: "LEG",
    image: "legends.png",
    color: "#7f1d1d",
  },
  {
    id: "mex",
    name: "Mexticacán",
    shortName: "MTN",
    image: "mex.png",
    color: "#06b6d4",
  },
  {
    id: "okc",
    name: "Oklahoma",
    shortName: "OKC",
    image: "oklahoma.png",
    color: "#93c5fd",
  },
  {
    id: "pit",
    name: "Pitufos",
    shortName: "PIU",
    image: "pitufos.jpg",
    color: "#1e40af",
  },
  {
    id: "thu",
    name: "Thunders",
    shortName: "THU",
    image: "thunder.png",
    color: "#93c5fd",
  },
  {
    id: "tia",
    name: "Tianguis",
    shortName: "TNG",
    image: "tianguis.png",
    color: "#4f46e5",
  },
];

// Helper to get team by ID
export const getTeamById = (id: string): Team | undefined => {
  return TEAMS.find((t) => t.id === id);
};
