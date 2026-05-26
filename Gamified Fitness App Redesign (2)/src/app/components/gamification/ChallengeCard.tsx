import React from "react";
import { motion } from "motion/react";
import { Clock, Zap, CheckCircle } from "lucide-react";

interface Challenge {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  xpReward: number;
  daysLeft: number;
  category: string;
  icon: string;
  color: string;
  isCompleted: boolean;
}

interface ChallengeCardProps {
  challenge: Challenge;
  onPress?: () => void;
}

export function ChallengeCard({ challenge, onPress }: ChallengeCardProps) {
  const percent = Math.min((challenge.progress / challenge.total) * 100, 100);

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onPress}
      className="rounded-2xl p-4 mb-3 cursor-pointer"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        border: challenge.isCompleted ? "1.5px solid #2ED4C5" : "1.5px solid transparent",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-xl shrink-0"
            style={{ width: "44px", height: "44px", background: challenge.color + "20" }}
          >
            <span style={{ fontSize: "22px" }}>{challenge.icon}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 600, color: "#111" }}>
                {challenge.title}
              </p>
              {challenge.isCompleted && <CheckCircle size={14} color="#2ED4C5" />}
            </div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
              {challenge.description}
            </p>
          </div>
        </div>
        <div className="text-right shrink-0 ml-2">
          <div className="flex items-center gap-1 justify-end">
            <Zap size={12} color="#FFD600" />
            <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#FFD600" }}>
              +{challenge.xpReward} XP
            </span>
          </div>
          {!challenge.isCompleted && (
            <div className="flex items-center gap-1 justify-end mt-0.5">
              <Clock size={10} color="#757575" />
              <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>
                {challenge.daysLeft}d left
              </span>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
            {challenge.isCompleted ? "Completed!" : `${challenge.progress} / ${challenge.total}`}
          </span>
          <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: challenge.color }}>
            {Math.round(percent)}%
          </span>
        </div>
        <div className="w-full rounded-full overflow-hidden" style={{ height: "7px", background: "#F0F0F0" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              height: "100%",
              background: challenge.isCompleted ? "#2ED4C5" : challenge.color,
              borderRadius: "99px",
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span
          className="px-2 py-0.5 rounded-full"
          style={{
            background: challenge.color + "18",
            fontFamily: "Poppins",
            fontSize: "10px",
            fontWeight: 600,
            color: challenge.color,
          }}
        >
          {challenge.category}
        </span>
      </div>
    </motion.div>
  );
}
