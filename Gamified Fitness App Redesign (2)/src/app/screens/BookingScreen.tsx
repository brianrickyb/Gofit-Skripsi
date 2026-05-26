import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar, Clock, Users, Star, Zap, ChevronRight, Filter,
  MapPin, CheckCircle, UserCheck
} from "lucide-react";
import { availableClasses, trainers, operatingHours } from "../data/mockData";

const tabs = ["Classes", "Personal Training", "Hours"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

export function BookingScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDiff, setActiveDiff] = useState("All");
  const [bookedClasses, setBookedClasses] = useState<string[]>(
    availableClasses.filter((c) => c.isBooked).map((c) => c.id)
  );
  const [showXP, setShowXP] = useState<string | null>(null);

  const handleBook = (classId: string, xpReward: number) => {
    setBookedClasses((prev) =>
      prev.includes(classId) ? prev.filter((id) => id !== classId) : [...prev, classId]
    );
    if (!bookedClasses.includes(classId)) {
      setShowXP(classId);
      setTimeout(() => setShowXP(null), 2000);
    }
  };

  const filtered =
    activeDiff === "All" ? availableClasses : availableClasses.filter((c) => c.difficulty === activeDiff);

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#FF4D7D" }}>
            <Calendar size={22} color="#fff" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>GoFit Indonesia</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Book & Train
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Tabs */}
        <div className="flex p-1 rounded-2xl mb-4" style={{ background: "#EBEBEB" }}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="flex-1 rounded-xl py-2"
              style={{
                background: activeTab === i ? "#111111" : "transparent",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontWeight: activeTab === i ? 700 : 400,
                color: activeTab === i ? "#FFD600" : "#757575",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Classes Tab */}
        {activeTab === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Filter */}
            <div className="flex gap-2 mb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {difficulties.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDiff(d)}
                  className="px-3 py-1.5 rounded-full shrink-0"
                  style={{
                    background: activeDiff === d ? "#FFD600" : "#FFFFFF",
                    border: activeDiff === d ? "none" : "1px solid #E0E0E0",
                    fontFamily: "Poppins",
                    fontSize: "11px",
                    fontWeight: activeDiff === d ? 700 : 400,
                    color: activeDiff === d ? "#111" : "#757575",
                  }}
                >
                  {d}
                </button>
              ))}
            </div>

            {filtered.map((cls) => {
              const isBooked = bookedClasses.includes(cls.id);
              const spotsLeft = cls.spots - (isBooked && !cls.isBooked ? -1 : 0);
              return (
                <motion.div
                  key={cls.id}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="rounded-2xl overflow-hidden mb-4 relative"
                  style={{ background: "#FFFFFF", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
                >
                  {showXP === cls.id && (
                    <motion.div
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: -30, opacity: 0 }}
                      transition={{ duration: 1.5 }}
                      className="absolute top-2 right-2 z-10 flex items-center gap-1 px-2 py-1 rounded-full"
                      style={{ background: "#FFD600" }}
                    >
                      <Zap size={11} color="#111" />
                      <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: "#111" }}>
                        +{cls.xpReward} XP
                      </span>
                    </motion.div>
                  )}
                  <div className="relative">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="w-full"
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
                    />
                    <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
                      {cls.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full"
                          style={{
                            background: tag === "Challenge" ? "#FF4D7D" : tag === "Mission" ? "#2ED4C5" : "rgba(255,255,255,0.3)",
                            fontFamily: "Poppins",
                            fontSize: "9px",
                            fontWeight: 700,
                            color: "#fff",
                          }}
                        >
                          {tag === "Challenge" ? "🔥 Challenge" : tag === "Mission" ? "⚡ Mission" : tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-0.5 px-2 py-0.5 rounded-full" style={{ background: "rgba(0,0,0,0.5)" }}>
                      <Zap size={11} color="#FFD600" />
                      <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: "#FFD600" }}>
                        +{cls.xpReward} XP
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>
                          {cls.name}
                        </p>
                        <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
                          {cls.trainer}
                        </p>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full shrink-0"
                        style={{
                          background:
                            cls.difficulty === "Hard" ? "#FF4D7D20" :
                            cls.difficulty === "Medium" ? "#FFD60020" : "#2ED4C520",
                          fontFamily: "Poppins",
                          fontSize: "10px",
                          fontWeight: 600,
                          color:
                            cls.difficulty === "Hard" ? "#FF4D7D" :
                            cls.difficulty === "Medium" ? "#FFA000" : "#2ED4C5",
                        }}
                      >
                        {cls.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} color="#757575" />
                        <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>{cls.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} color="#757575" />
                        <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>{cls.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} color={spotsLeft <= 5 ? "#FF4D7D" : "#757575"} />
                        <span style={{ fontFamily: "Poppins", fontSize: "11px", color: spotsLeft <= 5 ? "#FF4D7D" : "#757575" }}>
                          {spotsLeft} spots
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBook(cls.id, cls.xpReward)}
                      className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2"
                      style={{
                        background: isBooked ? "#2ED4C5" : "#FFD600",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#111",
                      }}
                    >
                      {isBooked ? (
                        <>
                          <CheckCircle size={16} color="#111" />
                          Booked
                        </>
                      ) : (
                        "Book Now"
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Personal Training Tab */}
        {activeTab === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1536922246289-88c42f957773?w=600&h=180&fit=crop"
                alt="Personal Training"
                className="w-full"
                style={{ height: "140px", objectFit: "cover" }}
              />
              <div className="p-3 rounded-b-2xl" style={{ background: "#111" }}>
                <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFD600" }}>
                  Personal Training
                </p>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
                  Train smart with purpose. 1-on-1 sessions tailored to your goals.
                </p>
              </div>
            </div>

            {trainers.map((trainer) => (
              <motion.div
                key={trainer.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="rounded-2xl p-4 mb-3"
                style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="rounded-2xl"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div className="flex-1">
                    <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
                      {trainer.name}
                    </p>
                    <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
                      {trainer.specialty}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        <Star size={12} color="#FFD600" />
                        <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#111" }}>
                          {trainer.rating}
                        </span>
                      </div>
                      <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>
                        · {trainer.sessions} sessions
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-full shrink-0"
                    style={{ background: trainer.available ? "#2ED4C520" : "#F5F5F5" }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: trainer.available ? "#2ED4C5" : "#BDBDBD" }}
                    />
                    <span style={{ fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: trainer.available ? "#2ED4C5" : "#BDBDBD" }}>
                      {trainer.available ? "Available" : "Busy"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
                    {trainer.price}
                  </span>
                  <button
                    className="px-4 py-2 rounded-xl"
                    style={{
                      background: trainer.available ? "#FFD600" : "#F5F5F5",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: trainer.available ? "#111" : "#BDBDBD",
                    }}
                    disabled={!trainer.available}
                  >
                    {trainer.available ? "Book Session" : "Unavailable"}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Hours Tab */}
        {activeTab === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-6">
            <div className="rounded-2xl overflow-hidden mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              {operatingHours.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-4 border-b last:border-0"
                  style={{ borderColor: "#F5F5F5" }}
                >
                  <div className="flex items-center gap-2">
                    <Clock size={16} color="#757575" />
                    <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>
                      {h.day}
                    </span>
                  </div>
                  <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#2ED4C5" }}>
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-4 mb-4" style={{ background: "#111111" }}>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} color="#FFD600" />
                <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#FFD600" }}>
                  GoFit Music Tower
                </span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>
                Jl. Jend. Sudirman Kav. 36, Jakarta
              </p>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "#2ED4C5" }} />
                <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#2ED4C5" }}>Open now · Until 23:00</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
