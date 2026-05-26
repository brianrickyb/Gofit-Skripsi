import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, ChevronRight, Navigation, Star, Wifi } from "lucide-react";
import { clubs } from "../data/mockData";

export function ClubScreen() {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#FFD600" }}>
            <MapPin size={22} color="#111" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Find Your Gym</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Club Finder
            </p>
          </div>
        </div>
        {/* Search bar */}
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <Navigation size={16} color="#FFFFFF80" />
          <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF70" }}>
            Jakarta, Indonesia · Near you
          </span>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6">
        {clubs.map((club) => (
          <motion.div
            key={club.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedClub(selectedClub === club.id ? null : club.id)}
            className="rounded-2xl overflow-hidden mb-4 cursor-pointer"
            style={{
              background: "#FFFFFF",
              boxShadow: selectedClub === club.id ? "0 4px 20px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.06)",
              border: club.isHomeClub ? "2px solid #FFD600" : "2px solid transparent",
            }}
          >
            <div className="relative">
              <img
                src={club.image}
                alt={club.name}
                className="w-full"
                style={{ height: "130px", objectFit: "cover" }}
              />
              {club.isHomeClub && (
                <span
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full"
                  style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#111" }}
                >
                  ⭐ HOME CLUB
                </span>
              )}
              <span
                className="absolute top-2 right-2 px-2 py-0.5 rounded-full"
                style={{
                  background: club.status === "Open" ? "#2ED4C5" : "#FF4D7D",
                  fontFamily: "Poppins",
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {club.status}
              </span>
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between mb-1">
                <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
                  {club.name}
                </p>
                <div className="flex items-center gap-1">
                  <Navigation size={12} color="#757575" />
                  <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>{club.distance}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <MapPin size={12} color="#BDBDBD" />
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
                  {club.address}
                </p>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <Clock size={12} color="#2ED4C5" />
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#2ED4C5", fontWeight: 600 }}>
                  {club.hours}
                </p>
              </div>
              {/* Facilities */}
              <div className="flex flex-wrap gap-1.5">
                {club.facilities.map((f) => (
                  <span
                    key={f}
                    className="px-2 py-0.5 rounded-full"
                    style={{ background: "#F5F5F5", fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#757575" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              {selectedClub === club.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-3 pt-3 border-t"
                  style={{ borderColor: "#F5F5F5" }}
                >
                  <button
                    className="w-full py-2.5 rounded-xl mb-2"
                    style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}
                  >
                    Get Directions
                  </button>
                  <button
                    className="w-full py-2.5 rounded-xl"
                    style={{ background: "#F5F5F5", fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}
                  >
                    View Club Details
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
