import React, { useState } from "react";
import { motion } from "motion/react";
import { Trophy, Crown, Zap, Users, TrendingUp } from "lucide-react";
import { leaderboard, currentUser } from "../data/mockData";

const timeTabs = ["This Week", "This Month", "All Time"];

export function LeaderboardScreen() {
  const [activeTime, setActiveTime] = useState(0);
  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div
        className="px-4 pt-4 pb-16"
        style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#FFD600" }}>
            <Trophy size={22} color="#111" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>GoFit Community</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Leaderboard
            </p>
          </div>
        </div>

        {/* Time filter */}
        <div className="flex gap-2">
          {timeTabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTime(i)}
              className="px-3 py-1.5 rounded-full"
              style={{
                background: activeTime === i ? "#FFD600" : "rgba(255,255,255,0.12)",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontWeight: activeTime === i ? 700 : 400,
                color: activeTime === i ? "#111" : "#FFFFFF90",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Podium */}
      <div className="relative -mt-12 px-4 mb-4">
        <div className="rounded-3xl p-4 pt-6" style={{ background: "#FFFFFF", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
          {/* Crown icon */}
          <div className="flex justify-center mb-4">
            <Crown size={28} color="#FFD600" />
          </div>

          {/* Top 3 Podium */}
          <div className="flex items-end justify-center gap-3 mb-4">
            {/* 2nd place */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="relative">
                <img
                  src={top3[1].avatar}
                  alt={top3[1].name}
                  className="rounded-full border-4"
                  style={{ width: "56px", height: "56px", objectFit: "cover", borderColor: "#C0C0C0" }}
                />
                <span
                  className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full"
                  style={{ width: "20px", height: "20px", background: "#C0C0C0", fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: "#fff" }}
                >
                  2
                </span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#111", textAlign: "center" }}>
                {top3[1].name}
              </p>
              <div
                className="w-full flex items-center justify-center rounded-xl"
                style={{ height: "56px", background: "#E8E8E8", minWidth: "72px" }}
              >
                <div className="flex items-center gap-0.5">
                  <Zap size={11} color="#757575" />
                  <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#757575" }}>
                    {(top3[1].xp / 1000).toFixed(1)}k
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 1st place */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0 }}
              className="flex flex-col items-center gap-1"
            >
              <Crown size={20} color="#FFD600" />
              <div className="relative">
                <img
                  src={top3[0].avatar}
                  alt={top3[0].name}
                  className="rounded-full border-4"
                  style={{ width: "72px", height: "72px", objectFit: "cover", borderColor: "#FFD600" }}
                />
                <span
                  className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full"
                  style={{ width: "22px", height: "22px", background: "#FFD600", fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#111" }}
                >
                  1
                </span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: "#111", textAlign: "center" }}>
                {top3[0].name}
              </p>
              <div
                className="w-full flex items-center justify-center rounded-xl"
                style={{ height: "80px", background: "linear-gradient(160deg, #111 0%, #1C1C2E 100%)", minWidth: "80px" }}
              >
                <div className="flex flex-col items-center">
                  <Zap size={14} color="#FFD600" />
                  <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFD600" }}>
                    {(top3[0].xp / 1000).toFixed(1)}k
                  </span>
                  <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>XP</span>
                </div>
              </div>
            </motion.div>

            {/* 3rd place */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="relative">
                <img
                  src={top3[2].avatar}
                  alt={top3[2].name}
                  className="rounded-full border-4"
                  style={{ width: "56px", height: "56px", objectFit: "cover", borderColor: "#CD7F32" }}
                />
                <span
                  className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full"
                  style={{ width: "20px", height: "20px", background: "#CD7F32", fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: "#fff" }}
                >
                  3
                </span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#111", textAlign: "center" }}>
                {top3[2].name}
              </p>
              <div
                className="w-full flex items-center justify-center rounded-xl"
                style={{ height: "44px", background: "#F5ECE0", minWidth: "72px" }}
              >
                <div className="flex items-center gap-0.5">
                  <Zap size={11} color="#CD7F32" />
                  <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#CD7F32" }}>
                    {(top3[2].xp / 1000).toFixed(1)}k
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-6">
        {/* Your Rank */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="rounded-2xl p-3 mb-3 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #FFD600 0%, #FFA000 100%)" }}
        >
          <div
            className="rounded-xl flex items-center justify-center"
            style={{ width: "36px", height: "36px", background: "#111" }}
          >
            <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 800, color: "#FFD600" }}>
              {leaderboard.find((l) => l.isCurrentUser)?.rank || "?"}
            </span>
          </div>
          <div className="flex-1">
            <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}>
              You · {currentUser.shortName}
            </p>
            <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#11111180" }}>
              Level {currentUser.level} · Keep climbing!
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Zap size={14} color="#111" />
            <span style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>
              {currentUser.totalXP.toLocaleString()} XP
            </span>
          </div>
        </motion.div>

        {/* Rest of leaderboard */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {leaderboard.map((member, i) => (
            <motion.div
              key={member.rank}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 px-4 py-3 border-b last:border-0"
              style={{
                borderColor: "#F5F5F5",
                background: member.isCurrentUser ? "#FFF9E6" : "#FFFFFF",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl shrink-0"
                style={{
                  width: "32px",
                  height: "32px",
                  background: member.rank <= 3 ? ["#FFD600", "#C0C0C0", "#CD7F32"][member.rank - 1] : "#F5F5F5",
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: member.rank <= 3 ? (member.rank === 1 ? "#111" : "#fff") : "#757575",
                }}
              >
                {member.rank <= 3 ? member.badge || member.rank : member.rank}
              </div>
              <img
                src={member.avatar}
                alt={member.name}
                className="rounded-full shrink-0"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: member.isCurrentUser ? "#FFD600" : "#111" }}>
                    {member.name} {member.isCurrentUser && "(You)"}
                  </p>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>
                  Level {member.level}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Zap size={12} color="#FFD600" />
                <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}>
                  {member.xp.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivation */}
        <div className="rounded-2xl p-4 mt-3 mb-6" style={{ background: "#111111" }}>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={16} color="#2ED4C5" />
            <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
              You're #{leaderboard.find((l) => l.isCurrentUser)?.rank} this week!
            </span>
          </div>
          <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
            Complete 2 more challenges to move up to #5. You need{" "}
            <span style={{ color: "#FFD600", fontWeight: 600 }}>640 more XP</span> to surpass YogaP!
          </p>
        </div>
      </div>
    </div>
  );
}
