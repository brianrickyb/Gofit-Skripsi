import React from "react";
import { motion } from "motion/react";
import { Lock, Zap } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  xpReward: number;
  isUnlocked: boolean;
  date: string | null;
}

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: "sm" | "md" | "lg";
}

export function AchievementBadge({ achievement, size = "md" }: AchievementBadgeProps) {
  const sizes = {
    sm: { outer: 56, inner: 40, emoji: "18px", font: "9px" },
    md: { outer: 72, inner: 52, emoji: "24px", font: "10px" },
    lg: { outer: 88, inner: 64, emoji: "30px", font: "11px" },
  };
  const s = sizes[size];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-1 cursor-pointer"
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: s.outer,
          height: s.outer,
          background: achievement.isUnlocked
            ? `radial-gradient(circle, ${achievement.color}30, ${achievement.color}10)`
            : "#F0F0F0",
          borderRadius: "20px",
          border: achievement.isUnlocked ? `2px solid ${achievement.color}50` : "2px solid #E0E0E0",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            width: s.inner,
            height: s.inner,
            background: achievement.isUnlocked ? achievement.color : "#E0E0E0",
            borderRadius: "14px",
          }}
        >
          {achievement.isUnlocked ? (
            <span style={{ fontSize: s.emoji }}>{achievement.icon}</span>
          ) : (
            <Lock size={16} color="#BDBDBD" />
          )}
        </div>
        {achievement.isUnlocked && (
          <div
            className="absolute -top-1 -right-1 rounded-full flex items-center justify-center"
            style={{ width: "18px", height: "18px", background: "#FFD600" }}
          >
            <span style={{ fontSize: "10px" }}>✓</span>
          </div>
        )}
      </div>
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: s.font,
          fontWeight: 600,
          color: achievement.isUnlocked ? "#111" : "#BDBDBD",
          textAlign: "center",
          maxWidth: s.outer,
          lineHeight: 1.2,
        }}
      >
        {achievement.title}
      </p>
    </motion.div>
  );
}

interface AchievementDetailCardProps {
  achievement: Achievement;
}

export function AchievementDetailCard({ achievement }: AchievementDetailCardProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-3 rounded-2xl p-3 mb-2"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        opacity: achievement.isUnlocked ? 1 : 0.5,
      }}
    >
      <div
        className="flex items-center justify-center rounded-xl shrink-0"
        style={{
          width: "52px",
          height: "52px",
          background: achievement.isUnlocked ? achievement.color : "#E0E0E0",
          borderRadius: "14px",
        }}
      >
        {achievement.isUnlocked ? (
          <span style={{ fontSize: "24px" }}>{achievement.icon}</span>
        ) : (
          <Lock size={20} color="#BDBDBD" />
        )}
      </div>
      <div className="flex-1">
        <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>
          {achievement.title}
        </p>
        <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
          {achievement.description}
        </p>
        {achievement.isUnlocked && achievement.date && (
          <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#2ED4C5", marginTop: "2px" }}>
            Unlocked: {achievement.date}
          </p>
        )}
      </div>
      <div className="flex items-center gap-1">
        <Zap size={12} color="#FFD600" />
        <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#FFD600" }}>
          +{achievement.xpReward}
        </span>
      </div>
    </motion.div>
  );
}
