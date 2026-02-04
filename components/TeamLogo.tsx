import React, { useState, useEffect } from "react";
import { Team } from "../types";

interface TeamLogoProps {
  team?: Team;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const TeamLogo: React.FC<TeamLogoProps> = ({
  team,
  size = "md",
  className = "",
}) => {
  const [imgSrc, setImgSrc] = useState<string>("");

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
  };

  const getInitials = (name: string) => name.substring(0, 2).toUpperCase();

  useEffect(() => {
    if (team) {
      // Primary source: Local file in public/images/teams/
      setImgSrc(`/images/teams/${team.image}`);
    }
  }, [team]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If local image fails, fallback to Picsum using ID as seed so it's consistent
    if (
      team &&
      e.currentTarget.src !== `https://picsum.photos/seed/${team.id}/200/200`
    ) {
      e.currentTarget.src = `https://picsum.photos/seed/${team.id}/200/200`;
    } else {
      // If fallback also fails, hide image to show initials
      e.currentTarget.style.display = "none";
      e.currentTarget.parentElement?.classList.add("bg-gray-800");
      const span = e.currentTarget.parentElement?.querySelector("span");
      if (span) span.classList.remove("opacity-0");
    }
  };

  if (!team) {
    return (
      <div className={`${sizeClasses[size]} bg-gray-200 rounded-full`}></div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm border border-gray-100 ${sizeClasses[size]} ${className}`}>
      <img
        src={imgSrc}
        alt={team.name}
        className="w-full h-full object-cover"
        onError={handleError}
      />
      <span className="absolute text-xs font-bold text-gray-400 opacity-0 pointer-events-none">
        {getInitials(team.name)}
      </span>
    </div>
  );
};

export default TeamLogo;
