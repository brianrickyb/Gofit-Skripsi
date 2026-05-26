import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Copy, CheckCircle, Clock } from "lucide-react";
import { promotions } from "../data/mockData";

export function PromotionsScreen() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#FF4D7D" }}>
            <Gift size={22} color="#fff" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>GoFit Rewards</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Promotions & Offers
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6">
        {/* Refer a friend special card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-3xl p-5 mb-4 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #FFD600 0%, #FFA000 100%)" }}
        >
          <div className="absolute -right-8 -top-8 rounded-full opacity-20" style={{ width: "120px", height: "120px", background: "#111" }} />
          <div className="absolute -right-4 bottom-0 rounded-full opacity-15" style={{ width: "80px", height: "80px", background: "#111" }} />
          <div className="flex items-start justify-between mb-4">
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 800, color: "#111" }}>
                Refer a Friend 👥
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#11111180", marginTop: "4px" }}>
                Both of you get 500 Bonus Points instantly when your friend joins GoFit!
              </p>
            </div>
          </div>
          {/* Code */}
          <div
            className="flex items-center justify-between rounded-2xl p-3"
            style={{ background: "rgba(0,0,0,0.12)" }}
          >
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#11111180" }}>Your referral code</p>
              <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 800, color: "#111", letterSpacing: "2px" }}>
                BRICKY2025
              </p>
            </div>
            <button
              onClick={() => handleCopy("BRICKY2025")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl"
              style={{ background: "#111" }}
            >
              {copied === "BRICKY2025" ? (
                <CheckCircle size={14} color="#2ED4C5" />
              ) : (
                <Copy size={14} color="#FFD600" />
              )}
              <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: copied === "BRICKY2025" ? "#2ED4C5" : "#FFD600" }}>
                {copied === "BRICKY2025" ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Other promotions */}
        {promotions.slice(1).map((promo, i) => (
          <motion.div
            key={promo.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.1 }}
            className="rounded-2xl p-4 mb-4"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              borderLeft: `4px solid ${promo.color}`,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontSize: "18px" }}>{promo.icon}</span>
                  <p style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>
                    {promo.title}
                  </p>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: promo.color }}>
                  {promo.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={11} color="#BDBDBD" />
                <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#BDBDBD" }}>
                  Until {promo.expiry}
                </span>
              </div>
            </div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575", marginBottom: "12px" }}>
              {promo.description}
            </p>
            <div className="flex items-center justify-between rounded-xl p-2.5" style={{ background: "#F5F5F5" }}>
              <div>
                <p style={{ fontFamily: "Poppins", fontSize: "9px", color: "#BDBDBD" }}>Promo code</p>
                <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", letterSpacing: "1px" }}>
                  {promo.code}
                </p>
              </div>
              <button
                onClick={() => handleCopy(promo.code)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                style={{ background: promo.color }}
              >
                {copied === promo.code ? (
                  <CheckCircle size={13} color="#fff" />
                ) : (
                  <Copy size={13} color="#fff" />
                )}
                <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#fff" }}>
                  {copied === promo.code ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>
          </motion.div>
        ))}

        {/* Reward Points info */}
        <div className="rounded-2xl p-4 mb-6" style={{ background: "#111111" }}>
          <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFD600", marginBottom: "8px" }}>
            🎯 Your Reward Points
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "32px", fontWeight: 800, color: "#FFFFFF" }}>
            2,450
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80", marginBottom: "12px" }}>
            Points available to redeem
          </p>
          <div className="flex gap-3">
            <button
              className="flex-1 py-2.5 rounded-xl"
              style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#111" }}
            >
              Redeem Points
            </button>
            <button
              className="flex-1 py-2.5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.1)", fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#FFFFFF80" }}
            >
              How it Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
