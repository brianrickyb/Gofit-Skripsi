import React, { useState } from "react";
import { motion } from "motion/react";
import { Zap, Target, CheckCircle, TrendingUp } from "lucide-react";
import { weeklyChallenges, currentUser, monthlyStats } from "../data/mockData";
import { ChallengeCard } from "../components/gamification/ChallengeCard";

const tabs = ["Active", "Completed"];
const categories = ["All", "Consistency", "Strength", "Cardio", "Engagement"];

export function ChallengesScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const activeChallenges = weeklyChallenges.filter((c) => !c.isCompleted);
  const completedChallenges = weeklyChallenges.filter((c) => c.isCompleted);

  const filterChallenges = (challenges: typeof weeklyChallenges) =>
    activeCategory === "All" ? challenges : challenges.filter((c) => c.category === activeCategory);

  const displayed = activeTab === 0 ? filterChallenges(activeChallenges) : filterChallenges(completedChallenges);

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#FFD600" }}>
            <Target size={22} color="#111" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Your Progress</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Weekly Challenges
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Points", value: currentUser.points.toLocaleString(), icon: "⭐", color: "#FFD600" },
            { label: "Day Streak", value: currentUser.streak, icon: "🔥", color: "#FF4D7D" },
            { label: "Badges", value: currentUser.badges, icon: "🏆", color: "#2ED4C5" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-3 flex flex-col items-center"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "18px" }}>{s.icon}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: s.color }}>{s.value}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Workout summary */}
        <div className="rounded-2xl p-4 mb-4 flex items-center gap-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#757575" }}>Weekly Progress</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 700, color: "#111" }}>
                {activeChallenges.filter((c) => c.progress > 0).length + completedChallenges.length}
              </span>
              <span style={{ fontFamily: "Poppins", fontSize: "13px", color: "#757575" }}>/ {weeklyChallenges.length} started</span>
            </div>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#757575" }}>Workouts</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 700, color: "#111" }}>
                {monthlyStats.totalWorkouts}
              </span>
              <span style={{ fontFamily: "Poppins", fontSize: "13px", color: "#757575" }}>total</span>
            </div>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#757575" }}>Challenges</p>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 700, color: "#111" }}>
                {completedChallenges.length}
              </span>
              <span style={{ fontFamily: "Poppins", fontSize: "13px", color: "#757575" }}>/ {weeklyChallenges.length}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex p-1 rounded-2xl mb-4" style={{ background: "#EBEBEB" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="flex-1 rounded-xl py-2 relative"
              style={{
                background: activeTab === i ? "#111111" : "transparent",
                fontFamily: "Poppins",
                fontSize: "12px",
                fontWeight: activeTab === i ? 700 : 400,
                color: activeTab === i ? "#FFD600" : "#757575",
                transition: "all 0.2s",
              }}
            >
              {tab}
              {tab === "Active" && activeChallenges.length > 0 && (
                <span
                  className="absolute top-1 right-3 rounded-full flex items-center justify-center"
                  style={{ width: "16px", height: "16px", background: "#FF4D7D", fontFamily: "Poppins", fontSize: "9px", color: "#fff" }}
                >
                  {activeChallenges.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full shrink-0"
              style={{
                background: activeCategory === cat ? "#FFD600" : "#FFFFFF",
                border: activeCategory === cat ? "none" : "1px solid #E0E0E0",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontWeight: activeCategory === cat ? 700 : 400,
                color: activeCategory === cat ? "#111" : "#757575",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Challenge List */}
        {displayed.length > 0 ? (
          displayed.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))
        ) : (
          <div className="flex flex-col items-center py-12">
            <Target size={48} color="#E0E0E0" />
            <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 600, color: "#BDBDBD", marginTop: "12px" }}>
              No challenges here yet
            </p>
          </div>
        )}

        {/* XP Reward Info */}
        {activeTab === 0 && (
          <div className="rounded-2xl p-4 mt-2 mb-6" style={{ background: "#111111" }}>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={16} color="#FFD600" />
              <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#FFD600" }}>
                Challenge Rewards
              </span>
            </div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
              Complete all weekly challenges to earn up to{" "}
              <span style={{ color: "#FFD600", fontWeight: 700 }}>
                +{weeklyChallenges.reduce((sum, c) => sum + c.xpReward, 0)} XP
              </span>{" "}
              and unlock exclusive achievement badges!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
