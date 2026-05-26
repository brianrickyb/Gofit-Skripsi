import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Home, Trophy, Target, BarChart2, User } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/challenges", icon: Target, label: "Challenges" },
  { path: "/leaderboard", icon: Trophy, label: "Rank" },
  { path: "/progress", icon: BarChart2, label: "Progress" },
  { path: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="flex items-center justify-around shrink-0 border-t"
      style={{
        background: "#FFFFFF",
        borderColor: "#f0f0f0",
        paddingBottom: "8px",
        paddingTop: "8px",
      }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-0.5 min-w-[56px] py-1 relative"
          >
            {isActive && (
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2"
                style={{ width: "32px", height: "3px", background: "#FFD600", borderRadius: "2px" }}
              />
            )}
            <Icon
              size={22}
              color={isActive ? "#FFD600" : "#9E9E9E"}
              strokeWidth={isActive ? 2.5 : 1.8}
            />
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#111111" : "#9E9E9E",
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
