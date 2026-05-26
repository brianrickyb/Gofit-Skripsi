import React from "react";
import { motion } from "motion/react";

interface XPBarProps {
  level: number;
  xp: number;
  xpToNext: number;
  compact?: boolean;
}

export function XPBar({ level, xp, xpToNext, compact = false }: XPBarProps) {
  const percent = Math.min((xp / xpToNext) * 100, 100);

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: "32px",
            height: "32px",
            background: "#FFD600",
            borderRadius: "8px",
            fontFamily: "Poppins",
            fontSize: "13px",
            fontWeight: 700,
            color: "#111",
          }}
        >
          {level}
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-0.5">
            <span style={{ fontFamily: "Poppins", fontSize: "10px", fontWeight: 600, color: "#FFD600" }}>
              Lvl {level}
            </span>
            <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF99" }}>
              {xp}/{xpToNext} XP
            </span>
          </div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", background: "rgba(255,255,255,0.2)" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ height: "100%", background: "#FFD600", borderRadius: "99px" }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-3">
        <div
          className="flex items-center justify-center"
          style={{
            width: "48px",
            height: "48px",
            background: "#FFD600",
            borderRadius: "12px",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: 800,
            color: "#111",
          }}
        >
          {level}
        </div>
        <div>
          <p style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 500, color: "#FFFFFF99" }}>
            Current Level
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
            Level {level} — Elite
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-1.5">
        <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#FFD600" }}>
          {xp} XP
        </span>
        <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF80" }}>
          {xpToNext - xp} XP to Level {level + 1}
        </span>
      </div>
      <div className="w-full rounded-full overflow-hidden" style={{ height: "10px", background: "rgba(255,255,255,0.15)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
          style={{ height: "100%", background: "linear-gradient(90deg, #FFD600, #FFA000)", borderRadius: "99px" }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2"
            style={{ width: "14px", height: "14px", background: "#fff", borderRadius: "50%", border: "3px solid #FFD600" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
