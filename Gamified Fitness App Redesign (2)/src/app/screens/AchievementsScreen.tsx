import React, { useState } from "react";
import { motion } from "motion/react";
import { Trophy, Lock, Zap, Star, TrendingUp } from "lucide-react";
import { achievements, currentUser } from "../data/mockData";
import { AchievementBadge, AchievementDetailCard } from "../components/gamification/AchievementBadge";

const tabs = ["All", "Unlocked", "Locked"];

export function AchievementsScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const unlockedCount = achievements.filter((a) => a.isUnlocked).length;
  const totalXPFromBadges = achievements.filter((a) => a.isUnlocked).reduce((s, a) => s + a.xpReward, 0);

  const displayed =
    activeTab === 0
      ? achievements
      : activeTab === 1
      ? achievements.filter((a) => a.isUnlocked)
      : achievements.filter((a) => !a.isUnlocked);

  const selectedAchievement = selectedBadge ? achievements.find((a) => a.id === selectedBadge) : null;

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#FFD600" }}>
            <Trophy size={22} color="#111" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Your Collection</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Achievements
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Unlocked", value: unlockedCount, total: achievements.length, color: "#FFD600", icon: "🏆" },
            { label: "Total XP", value: totalXPFromBadges.toLocaleString(), color: "#2ED4C5", icon: "⚡" },
            { label: "My Level", value: `Lvl ${currentUser.level}`, color: "#FF4D7D", icon: "⭐" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-3 flex flex-col items-center"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "18px" }}>{s.icon}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color: s.color }}>
                {s.value}
              </span>
              {s.total && (
                <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>
                  of {s.total} total
                </span>
              )}
              <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Progress bar */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div className="flex items-center justify-between mb-2">
            <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>
              Achievement Progress
            </span>
            <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#FFD600" }}>
              {unlockedCount}/{achievements.length}
            </span>
          </div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: "10px", background: "#F0F0F0" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
              transition={{ duration: 1.2 }}
              style={{ height: "100%", background: "linear-gradient(90deg, #FFD600, #2ED4C5)", borderRadius: "99px" }}
            />
          </div>
          <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575", marginTop: "6px" }}>
            {achievements.length - unlockedCount} more badges to unlock — keep going!
          </p>
        </div>

        {/* Badge Grid */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div className="flex p-1 rounded-2xl mb-4" style={{ background: "#F0F0F0" }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="flex-1 rounded-xl py-1.5"
                style={{
                  background: activeTab === i ? "#111" : "transparent",
                  fontFamily: "Poppins",
                  fontSize: "11px",
                  fontWeight: activeTab === i ? 700 : 400,
                  color: activeTab === i ? "#FFD600" : "#757575",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {displayed.map((ach) => (
              <div key={ach.id} onClick={() => setSelectedBadge(ach.id === selectedBadge ? null : ach.id)}>
                <AchievementBadge achievement={ach} size="md" />
              </div>
            ))}
          </div>
        </div>

        {/* Selected Badge Detail */}
        {selectedAchievement && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="rounded-2xl p-4 mb-4"
            style={{
              background: "#111111",
              border: `2px solid ${selectedAchievement.color}40`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{ width: "56px", height: "56px", background: selectedAchievement.color }}
              >
                <span style={{ fontSize: "28px" }}>
                  {selectedAchievement.isUnlocked ? selectedAchievement.icon : "🔒"}
                </span>
              </div>
              <div className="flex-1">
                <p style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>
                  {selectedAchievement.title}
                </p>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
                  {selectedAchievement.description}
                </p>
                {selectedAchievement.isUnlocked && selectedAchievement.date && (
                  <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#2ED4C5", marginTop: "2px" }}>
                    Unlocked: {selectedAchievement.date}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Zap size={14} color="#FFD600" />
                <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFD600" }}>
                  +{selectedAchievement.xpReward}
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Milestones */}
        <div className="rounded-2xl p-4 mb-6" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
            Achievement Milestones
          </h3>
          {[
            { label: "Collect 5 Badges", target: 5, current: unlockedCount, reward: "200 XP", color: "#FFD600" },
            { label: "Collect 10 Badges", target: 10, current: unlockedCount, reward: "500 XP", color: "#2ED4C5" },
            { label: "Collect All Badges", target: achievements.length, current: unlockedCount, reward: "2000 XP", color: "#FF4D7D" },
          ].map((milestone) => {
            const pct = Math.min((milestone.current / milestone.target) * 100, 100);
            const done = milestone.current >= milestone.target;
            return (
              <div key={milestone.label} className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {done ? <Star size={14} color="#FFD600" /> : <Lock size={14} color="#BDBDBD" />}
                    <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: done ? "#111" : "#757575" }}>
                      {milestone.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap size={11} color={milestone.color} />
                    <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: milestone.color }}>
                      {milestone.reward}
                    </span>
                  </div>
                </div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", background: "#F0F0F0" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: done ? milestone.color : "#E0E0E0",
                      borderRadius: "99px",
                      transition: "width 1s ease",
                    }}
                  />
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#BDBDBD", marginTop: "2px" }}>
                  {milestone.current}/{milestone.target}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
