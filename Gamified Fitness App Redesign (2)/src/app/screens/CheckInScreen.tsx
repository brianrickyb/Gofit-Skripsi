import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, ChevronLeft, Zap, Flame, CheckCircle, MapPin, X } from "lucide-react";
import { currentUser } from "../data/mockData";

type CheckInState = "scan" | "success" | "manual";

export function CheckInScreen() {
  const navigate = useNavigate();
  const [state, setState] = useState<CheckInState>("scan");
  const [scanProgress, setScanProgress] = useState(0);
  const [manualCode, setManualCode] = useState("");
  const [showXPPopup, setShowXPPopup] = useState(false);

  useEffect(() => {
    if (state === "scan") {
      const timer = setInterval(() => {
        setScanProgress((p) => {
          if (p >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setState("success");
              setShowXPPopup(true);
              setTimeout(() => setShowXPPopup(false), 3000);
            }, 200);
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [state]);

  return (
    <div className="flex flex-col" style={{ background: "#111111", minHeight: "100%", position: "relative" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1"
          style={{ background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "8px 12px" }}
        >
          <ChevronLeft size={18} color="#FFFFFF" />
          <span style={{ fontFamily: "Poppins", fontSize: "13px", color: "#FFFFFF" }}>Back</span>
        </button>
        <div className="flex items-center gap-1">
          <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFD600" }}>Go</span>
          <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>Fit</span>
        </div>
        <div style={{ width: "80px" }} />
      </div>

      {state === "scan" && (
        <>
          {/* Streak info */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-3 rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.08)" }}>
              <Flame size={22} color="#FF4D7D" />
              <div className="flex-1">
                <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
                  {currentUser.streak} Day Streak! 🔥
                </p>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>
                  Check in today to keep your streak alive
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-0.5">
                  <Zap size={12} color="#FFD600" />
                  <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#FFD600" }}>+50 XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* QR Scanner */}
          <div className="flex-1 flex flex-col items-center justify-center px-5">
            <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", textAlign: "center", marginBottom: "8px" }}>
              Scan QR Code at
            </p>
            <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 700, color: "#FFD600", textAlign: "center", marginBottom: "32px" }}>
              GoFit location
            </p>

            {/* QR Frame */}
            <div className="relative mb-8">
              <div
                className="rounded-3xl overflow-hidden flex items-center justify-center"
                style={{
                  width: "240px",
                  height: "240px",
                  background: "#FFFFFF",
                  padding: "16px",
                }}
              >
                {/* Mock QR Code */}
                <div className="relative w-full h-full">
                  <div className="grid grid-cols-8 gap-0.5 w-full h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          background: Math.random() > 0.5 ? "#111111" : "transparent",
                          borderRadius: "2px",
                        }}
                      />
                    ))}
                  </div>
                  {/* GoFit center mark */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{ width: "48px", height: "48px", background: "#FFD600" }}
                    >
                      <span style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 800, color: "#111" }}>G</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scan corners */}
              {[
                { top: -4, left: -4, borderTop: "3px solid #FFD600", borderLeft: "3px solid #FFD600" },
                { top: -4, right: -4, borderTop: "3px solid #FFD600", borderRight: "3px solid #FFD600" },
                { bottom: -4, left: -4, borderBottom: "3px solid #FFD600", borderLeft: "3px solid #FFD600" },
                { bottom: -4, right: -4, borderBottom: "3px solid #FFD600", borderRight: "3px solid #FFD600" },
              ].map((style, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ ...style, width: "24px", height: "24px", borderRadius: "2px" }}
                />
              ))}

              {/* Scan line */}
              <motion.div
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0"
                style={{ height: "2px", background: "linear-gradient(90deg, transparent, #FFD600, transparent)" }}
              />
            </div>

            {/* Scan progress */}
            <div className="w-full max-w-[240px] mb-6">
              <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", background: "rgba(255,255,255,0.15)" }}>
                <motion.div
                  style={{ height: "100%", width: `${scanProgress}%`, background: "#FFD600", borderRadius: "99px" }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70", textAlign: "center", marginTop: "8px" }}>
                {scanProgress < 100 ? "Scanning…" : "Processing…"}
              </p>
            </div>

            <div className="flex items-center gap-1 mb-2">
              <MapPin size={14} color="#2ED4C5" />
              <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#2ED4C5" }}>
                {currentUser.homeClub}
              </span>
            </div>
          </div>

          {/* Manual entry button */}
          <div className="px-5 pb-8">
            <button
              onClick={() => setState("manual")}
              className="w-full py-4 rounded-2xl"
              style={{
                background: "#FFFFFF",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 700,
                color: "#111111",
              }}
            >
              Enter Code Manually
            </button>
          </div>
        </>
      )}

      {state === "manual" && (
        <div className="flex-1 flex flex-col px-5">
          <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
            Enter your
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 700, color: "#FFD600", marginBottom: "32px" }}>
            Check-in Code
          </p>
          <input
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value.toUpperCase())}
            placeholder="e.g. GOFIT-2025"
            className="w-full rounded-2xl px-4 py-4 mb-4 text-center"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.2)",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFFFFF",
              outline: "none",
              letterSpacing: "3px",
            }}
          />
          <button
            onClick={() => {
              setState("success");
              setShowXPPopup(true);
              setTimeout(() => setShowXPPopup(false), 3000);
            }}
            className="w-full py-4 rounded-2xl mb-3"
            style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}
          >
            Check In Now
          </button>
          <button
            onClick={() => setState("scan")}
            className="w-full py-3 rounded-2xl"
            style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.2)", fontFamily: "Poppins", fontSize: "14px", color: "#FFFFFF90" }}
          >
            ← Back to Scanner
          </button>
        </div>
      )}

      {state === "success" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 flex flex-col items-center justify-center px-5 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-center rounded-full mb-6"
            style={{ width: "100px", height: "100px", background: "#2ED4C5" }}
          >
            <CheckCircle size={52} color="#FFFFFF" strokeWidth={2.5} />
          </motion.div>

          <p style={{ fontFamily: "Poppins", fontSize: "26px", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>
            Checked In! 🎉
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "14px", color: "#FFFFFF80", marginBottom: "24px" }}>
            {currentUser.homeClub}
          </p>

          {/* Streak */}
          <div
            className="flex items-center gap-3 rounded-2xl px-6 py-4 mb-4 w-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <Flame size={28} color="#FF4D7D" />
            <div className="text-left">
              <p style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 800, color: "#FF4D7D" }}>
                {currentUser.streak + 1} Day Streak!
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF70" }}>
                Amazing! Keep going 💪
              </p>
            </div>
          </div>

          {/* XP earned */}
          <div
            className="flex items-center gap-3 rounded-2xl px-6 py-4 mb-8 w-full"
            style={{ background: "rgba(255,214,0,0.12)", border: "1px solid rgba(255,214,0,0.3)" }}
          >
            <Zap size={24} color="#FFD600" />
            <div className="text-left">
              <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 800, color: "#FFD600" }}>
                +50 XP Earned!
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF70" }}>
                {currentUser.xp + 50}/{currentUser.xpToNext} XP to Level {currentUser.level + 1}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full py-4 rounded-2xl"
            style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color: "#111" }}
          >
            Back to Home
          </button>
        </motion.div>
      )}

      {/* XP Popup */}
      <AnimatePresence>
        {showXPPopup && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            className="absolute top-20 left-4 right-4 rounded-2xl p-3 flex items-center gap-3"
            style={{ background: "#FFD600", zIndex: 100 }}
          >
            <Zap size={22} color="#111" />
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}>+50 XP Earned!</p>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#11111180" }}>Check-in streak bonus</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
