import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Bell, ChevronLeft, Menu, Search } from "lucide-react";
import { notifications } from "../../data/mockData";

const routeTitles: Record<string, string> = {
  "/": "",
  "/membership": "Membership",
  "/challenges": "Challenges",
  "/achievements": "Achievements",
  "/leaderboard": "Leaderboard",
  "/progress": "My Progress",
  "/booking": "Booking",
  "/profile": "Profile",
  "/notifications": "Notifications",
  "/clubs": "Club Finder",
  "/blog": "Blog & News",
  "/promotions": "Promotions",
  "/menu": "Menu",
};

export function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const title = routeTitles[location.pathname] || "";
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div
      className="flex items-center justify-between px-5 py-3 shrink-0"
      style={{ background: isHome ? "#111111" : "#FFFFFF", borderBottom: isHome ? "none" : "1px solid #f0f0f0" }}
    >
      {isHome ? (
        <>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 800, color: "#FFD600" }}>Go</span>
              <span style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>Fit</span>
              <span
                className="ml-1 px-1.5 py-0.5 rounded"
                style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#111" }}
              >
                INDONESIA
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/notifications")}
              className="relative p-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <Bell size={20} color="#FFFFFF" />
              {unreadCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 flex items-center justify-center rounded-full"
                  style={{ width: "16px", height: "16px", background: "#FF4D7D", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#fff" }}
                >
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => navigate("/menu")}
              className="p-1.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <Menu size={20} color="#FFFFFF" />
            </button>
          </div>
        </>
      ) : (
        <>
          <button onClick={() => navigate(-1)} className="p-1">
            <ChevronLeft size={24} color="#111" />
          </button>
          <span style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 600, color: "#111111" }}>
            {title}
          </span>
          <button
            onClick={() => navigate("/notifications")}
            className="relative p-1"
          >
            <Bell size={22} color="#111" />
            {unreadCount > 0 && (
              <span
                className="absolute top-0 right-0 flex items-center justify-center rounded-full"
                style={{ width: "14px", height: "14px", background: "#FF4D7D", fontFamily: "Poppins", fontSize: "8px", fontWeight: 700, color: "#fff" }}
              >
                {unreadCount}
              </span>
            )}
          </button>
        </>
      )}
    </div>
  );
}
