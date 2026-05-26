import React from "react";
import { motion } from "motion/react";

interface StatCardProps {
  icon: string;
  value: string | number;
  label: string;
  color?: string;
  bgColor?: string;
}

export function StatCard({ icon, value, label, color = "#FFD600", bgColor = "#1A1A1A" }: StatCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center justify-center rounded-2xl p-3 gap-0.5"
      style={{ background: bgColor, minWidth: "70px" }}
    >
      <span style={{ fontSize: "20px" }}>{icon}</span>
      <span style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color }}>
        {value}
      </span>
      <span style={{ fontFamily: "Poppins", fontSize: "9px", fontWeight: 500, color: "#FFFFFF70", textAlign: "center" }}>
        {label}
      </span>
    </motion.div>
  );
}
