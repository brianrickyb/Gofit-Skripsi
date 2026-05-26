import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  User, Settings, Bell, Heart, Shield, LogOut, ChevronRight,
  Flame, Zap, Trophy, Star, Edit3, ExternalLink
} from "lucide-react";
import { currentUser, achievements } from "../data/mockData";
import { XPBar } from "../components/gamification/XPBar";
import { AchievementBadge } from "../components/gamification/AchievementBadge";

export function ProfileScreen() {
  const navigate = useNavigate();
  const [notif, setNotif] = useState(true);
  const [healthApp, setHealthApp] = useState(true);
  const unlockedBadges = achievements.filter((a) => a.isUnlocked);

  const menuItems = [
    {
      section: "Account",
      items: [
        { icon: User, label: "Edit Profile", desc: "Update personal information", path: "/profile" },
        { icon: CreditCard2, label: "My Membership", desc: "View membership details", path: "/membership" },
        { icon: Receipt2, label: "Billing History", desc: "View payment history", path: "/membership" },
      ],
    },
    {
      section: "Fitness",
      items: [
        { icon: Heart, label: "Health App", desc: "Sync with your health app", path: "/profile", toggle: healthApp, setToggle: setHealthApp },
        { icon: Bell, label: "Push Notifications", desc: "Manage your alerts", path: "/profile", toggle: notif, setToggle: setNotif },
      ],
    },
    {
      section: "GoFit",
      items: [
        { icon: MapPin2, label: "Club Finder", desc: "Find nearest GoFit locations", path: "/clubs" },
        { icon: FileText2, label: "Blog & News", desc: "Stay updated", path: "/blog" },
        { icon: Gift2, label: "Promotions", desc: "Offers and referrals", path: "/promotions" },
        { icon: Info2, label: "Legal Information", desc: "Privacy policy & terms", path: "/profile" },
      ],
    },
  ];

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Profile Header */}
      <div
        className="px-4 pt-4 pb-6 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}
      >
        <div className="absolute -right-12 -top-12 rounded-full opacity-10" style={{ width: "160px", height: "160px", background: "#FFD600" }} />

        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="rounded-2xl"
              style={{ width: "72px", height: "72px", objectFit: "cover", border: "3px solid #FFD600" }}
            />
            <button
              className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full"
              style={{ width: "22px", height: "22px", background: "#FFD600" }}
            >
              <Edit3 size={11} color="#111" />
            </button>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              {currentUser.name}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 rounded-full" style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#111" }}>
                PREMIUM
              </span>
              <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
                Since {currentUser.memberSince}
              </span>
            </div>
          </div>
        </div>

        <XPBar level={currentUser.level} xp={currentUser.xp} xpToNext={currentUser.xpToNext} compact />

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {[
            { label: "Points", value: currentUser.points.toLocaleString(), icon: "⭐", color: "#FFD600" },
            { label: "Streak", value: `${currentUser.streak}d`, icon: "🔥", color: "#FF4D7D" },
            { label: "Badges", value: currentUser.badges, icon: "🏆", color: "#2ED4C5" },
            { label: "Level", value: currentUser.level, icon: "⚡", color: "#9C27B0" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl p-2"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "14px" }}>{s.icon}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: s.color }}>{s.value}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "8px", color: "#FFFFFF70" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 pb-6">
        {/* Recent Badges */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
              Recent Badges
            </h3>
            <button onClick={() => navigate("/achievements")} className="flex items-center gap-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#2ED4C5" }}>See all</span>
              <ChevronRight size={14} color="#2ED4C5" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {unlockedBadges.slice(0, 6).map((ach) => (
              <AchievementBadge key={ach.id} achievement={ach} size="sm" />
            ))}
          </div>
        </div>

        {/* Streak History */}
        <div className="rounded-2xl p-4 mb-4 flex items-center gap-4" style={{ background: "#111111" }}>
          <div className="flex flex-col items-center">
            <Flame size={28} color="#FF4D7D" />
            <span style={{ fontFamily: "Poppins", fontSize: "28px", fontWeight: 800, color: "#FF4D7D" }}>
              {currentUser.streak}
            </span>
            <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>STREAK</span>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#FFFFFF" }}>
              You're on fire! 🔥
            </p>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70", marginTop: "2px" }}>
              Keep checking in daily to maintain your streak and earn bonus XP!
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
            Follow GoFit
          </h3>
          <div className="flex gap-3">
            {[
              { name: "Instagram", icon: "📸", color: "#E1306C", handle: "@gofit_indonesia" },
              { name: "Facebook", icon: "📘", color: "#1877F2", handle: "GoFit Indonesia" },
              { name: "TikTok", icon: "🎵", color: "#111", handle: "@gofitid" },
            ].map((s) => (
              <button
                key={s.name}
                className="flex-1 flex flex-col items-center gap-1.5 rounded-xl py-3"
                style={{ background: "#F5F5F5" }}
              >
                <span style={{ fontSize: "22px" }}>{s.icon}</span>
                <span style={{ fontFamily: "Poppins", fontSize: "10px", fontWeight: 600, color: "#111" }}>{s.name}</span>
                <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#757575" }}>{s.handle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings Sections */}
        {[
          {
            section: "Account",
            items: [
              { icon: "👤", label: "Edit Profile", desc: "Update personal information", path: "/profile" },
              { icon: "💳", label: "My Membership", desc: "View membership details", path: "/membership" },
              { icon: "🧾", label: "Billing History", desc: "View payment history", path: "/membership" },
            ],
          },
          {
            section: "App Settings",
            items: [
              { icon: "❤️", label: "Health App", desc: "Sync with health data", toggle: healthApp, setToggle: setHealthApp },
              { icon: "🔔", label: "Push Notifications", desc: "Manage your alerts", toggle: notif, setToggle: setNotif },
            ],
          },
          {
            section: "GoFit",
            items: [
              { icon: "📍", label: "Club Finder", desc: "Find GoFit locations", path: "/clubs" },
              { icon: "📰", label: "Blog & News", desc: "Stay updated", path: "/blog" },
              { icon: "🎁", label: "Promotions", desc: "Offers & referrals", path: "/promotions" },
              { icon: "📞", label: "Contact Support", desc: "Get help", path: "/profile" },
              { icon: "🔒", label: "Privacy Policy", desc: "Legal information", path: "/profile" },
            ],
          },
        ].map((section) => (
          <div key={section.section} className="rounded-2xl overflow-hidden mb-3" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div className="px-4 py-2.5 border-b" style={{ borderColor: "#F5F5F5" }}>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#757575" }}>
                {section.section.toUpperCase()}
              </p>
            </div>
            {section.items.map((item: any, i: number) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className="w-full flex items-center gap-3 px-4 py-3 border-b last:border-0"
                style={{ borderColor: "#F5F5F5" }}
              >
                <div
                  className="flex items-center justify-center rounded-xl shrink-0"
                  style={{ width: "36px", height: "36px", background: "#F5F5F5", fontSize: "18px" }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>{item.label}</p>
                  <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>{item.desc}</p>
                </div>
                {item.toggle !== undefined ? (
                  <button
                    onClick={(e) => { e.stopPropagation(); item.setToggle(!item.toggle); }}
                    className="rounded-full transition-all"
                    style={{
                      width: "44px",
                      height: "24px",
                      background: item.toggle ? "#2ED4C5" : "#E0E0E0",
                      position: "relative",
                    }}
                  >
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#fff",
                        top: "2px",
                        left: item.toggle ? "22px" : "2px",
                        transition: "left 0.2s",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                      }}
                    />
                  </button>
                ) : (
                  <ChevronRight size={16} color="#BDBDBD" />
                )}
              </button>
            ))}
          </div>
        ))}

        {/* Version info */}
        <div className="text-center py-4 mb-2">
          <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#BDBDBD" }}>
            GoFit Indonesia v1.09.831 (850001)
          </p>
        </div>

        {/* Logout */}
        <button
          className="w-full py-3 rounded-2xl flex items-center justify-center gap-2 mb-4"
          style={{ background: "#FFF0F0", border: "1px solid #FFCDD2" }}
        >
          <LogOut size={16} color="#FF4D7D" />
          <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 600, color: "#FF4D7D" }}>
            Sign Out
          </span>
        </button>
      </div>
    </div>
  );
}

// These are placeholder icon components to avoid import confusion
function CreditCard2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>; }
function Receipt2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>; }
function MapPin2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function FileText2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>; }
function Gift2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>; }
function Info2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>; }
