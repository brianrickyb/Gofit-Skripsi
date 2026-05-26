import React from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ChevronRight, X, Home, CreditCard, Calendar, Trophy,
  BarChart2, User, Bell, MapPin, BookOpen, Gift, Target,
  MessageSquare, Phone, Lock, Info
} from "lucide-react";
import { currentUser } from "../data/mockData";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Target, label: "Challenges", path: "/challenges" },
  { icon: Trophy, label: "Leaderboard", path: "/leaderboard" },
  { icon: BarChart2, label: "My Progress", path: "/progress" },
  { divider: true },
  { icon: User, label: "My Profile", path: "/profile" },
  { icon: CreditCard, label: "My Membership", path: "/membership" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Calendar, label: "Booking & Sessions", path: "/booking" },
  { divider: true },
  { icon: MapPin, label: "Club Finder", path: "/clubs" },
  { icon: BookOpen, label: "Blog & News", path: "/blog" },
  { icon: Gift, label: "Promotions & Referral", path: "/promotions" },
  { divider: true },
  { icon: MessageSquare, label: "Contact Support", path: "/" },
  { icon: Phone, label: "Call GoFit", path: "/" },
  { icon: Lock, label: "Privacy Policy", path: "/" },
  { icon: Info, label: "About GoFit", path: "/" },
];

export function MenuScreen() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-6" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        {/* User card */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-4 rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="rounded-2xl"
            style={{ width: "56px", height: "56px", objectFit: "cover", border: "2px solid #FFD600" }}
          />
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>
              {currentUser.name}
            </p>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
              GoFit Premium · {currentUser.homeClub}
            </p>
          </div>
          <ChevronRight size={18} color="#FFFFFF60" />
        </motion.div>
      </div>

      <div className="px-4 pt-4 pb-6">
        <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {menuItems.map((item: any, i) => {
            if (item.divider) {
              return <div key={i} className="border-t" style={{ borderColor: "#F0F0F0" }} />;
            }
            const Icon = item.icon;
            return (
              <motion.button
                key={item.path + item.label}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center gap-3 px-4 py-3.5"
              >
                <div
                  className="flex items-center justify-center rounded-xl shrink-0"
                  style={{ width: "36px", height: "36px", background: "#F5F5F5" }}
                >
                  <Icon size={18} color="#111" />
                </div>
                <span
                  style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 500, color: "#111", flex: 1, textAlign: "left" }}
                >
                  {item.label}
                </span>
                <ChevronRight size={14} color="#BDBDBD" />
              </motion.button>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-6">
          {["📘", "📸", "🐦"].map((icon, i) => (
            <button
              key={i}
              className="flex items-center justify-center rounded-full"
              style={{ width: "44px", height: "44px", background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}
            >
              <span style={{ fontSize: "20px" }}>{icon}</span>
            </button>
          ))}
        </div>

        <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#BDBDBD", textAlign: "center", marginTop: "12px" }}>
          Version 1.09.831 · GoFit Indonesia
        </p>
      </div>
    </div>
  );
}
