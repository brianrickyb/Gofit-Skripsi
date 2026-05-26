import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  CreditCard, CheckCircle, ChevronRight, Package, Calendar,
  Clock, User, Receipt, Zap, Star, TrendingUp, Shield
} from "lucide-react";
import {
  currentUser, membership, billingHistory, mySessions, packages
} from "../data/mockData";
import { XPBar } from "../components/gamification/XPBar";

const tabs = ["Overview", "Billing", "Sessions", "Packages"];

export function MembershipScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Hero Card */}
      <div className="px-4 pt-4 pb-2">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="rounded-3xl p-5 relative overflow-hidden mb-4"
          style={{ background: "linear-gradient(135deg, #111111 0%, #1C1C2E 100%)", minHeight: "180px" }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 rounded-full opacity-10" style={{ width: "140px", height: "140px", background: "#FFD600" }} />
          <div className="absolute -right-5 -bottom-8 rounded-full opacity-10" style={{ width: "100px", height: "100px", background: "#2ED4C5" }} />

          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded-full" style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#111" }}>
                  PREMIUM
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2ED4C5" }} />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#2ED4C5" }}>Active</span>
                </span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Member since</p>
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#FFFFFF" }}>
                {currentUser.memberSince}
              </p>
            </div>
            <div
              className="flex items-center justify-center rounded-2xl"
              style={{ width: "48px", height: "48px", background: "#FFD600" }}
            >
              <span style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 800, color: "#111" }}>G</span>
            </div>
          </div>

          <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>
            {currentUser.name}
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF70", marginBottom: "16px" }}>
            GoFit Premium • {currentUser.homeClub}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF70" }}>Expires</p>
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#FFD600" }}>
                {membership.expiryDate}
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF70" }}>Sessions left</p>
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#2ED4C5" }}>
                {membership.sessionsTotal - membership.sessionsUsed} / {membership.sessionsTotal}
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF70" }}>Days left</p>
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#FFFFFF" }}>
                {membership.daysLeft}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Level + XP Section */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: "#111111" }}>
          <XPBar
            level={currentUser.level}
            xp={currentUser.xp}
            xpToNext={currentUser.xpToNext}
          />
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { label: "Total XP", value: currentUser.totalXP.toLocaleString(), color: "#FFD600", icon: "⚡" },
              { label: "Points", value: currentUser.points.toLocaleString(), color: "#2ED4C5", icon: "⭐" },
              { label: "Badges", value: currentUser.badges, color: "#FF4D7D", icon: "🏆" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center rounded-xl p-2.5"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <span style={{ fontSize: "16px" }}>{s.icon}</span>
                <span style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: s.color }}>{s.value}</span>
                <span style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-1">
        <div className="flex gap-1 p-1 rounded-2xl" style={{ background: "#EBEBEB" }}>
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
      </div>

      <div className="px-4 pt-3 pb-6">
        {/* Overview Tab */}
        {activeTab === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl p-4 mb-3" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
                Membership Benefits
              </h3>
              {membership.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <CheckCircle size={16} color="#2ED4C5" />
                  <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#444" }}>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-4 mb-3" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
                Quick Access
              </h3>
              {[
                { icon: User, label: "My Profile", desc: "Edit personal info", path: "/profile" },
                { icon: CreditCard, label: "My Billing", desc: "View invoices & payments", path: "/membership" },
                { icon: Calendar, label: "My Sessions", desc: "Book & manage classes", path: "/booking" },
                { icon: Star, label: "Achievements", desc: "View your badges", path: "/achievements" },
                { icon: TrendingUp, label: "My Progress", desc: "Workout analytics", path: "/progress" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    className="w-full flex items-center gap-3 py-3 border-b last:border-0"
                    style={{ borderColor: "#F5F5F5" }}
                  >
                    <div className="rounded-xl flex items-center justify-center" style={{ width: "38px", height: "38px", background: "#F5F5F5" }}>
                      <Icon size={18} color="#111" />
                    </div>
                    <div className="flex-1 text-left">
                      <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>{item.label}</p>
                      <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>{item.desc}</p>
                    </div>
                    <ChevronRight size={16} color="#BDBDBD" />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Billing Tab */}
        {activeTab === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl p-4 mb-3" style={{ background: "#111111" }}>
              <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF80" }}>Current Plan</p>
              <p style={{ fontFamily: "Poppins", fontSize: "20px", fontWeight: 700, color: "#FFD600" }}>
                {membership.price}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Shield size={14} color="#2ED4C5" />
                <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#2ED4C5" }}>
                  Auto-renew {membership.autoRenew ? "enabled" : "disabled"}
                </span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: "#F5F5F5" }}>
                <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
                  Transaction History
                </h3>
              </div>
              {billingHistory.map((bill) => (
                <div key={bill.id} className="flex items-center gap-3 px-4 py-3 border-b last:border-0" style={{ borderColor: "#F5F5F5" }}>
                  <div className="rounded-xl flex items-center justify-center" style={{ width: "38px", height: "38px", background: "#F5F5F5" }}>
                    <Receipt size={18} color="#111" />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#111" }}>{bill.type}</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>{bill.date}</p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}>{bill.amount}</p>
                    <span className="px-2 py-0.5 rounded-full" style={{ background: "#2ED4C520", fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#2ED4C5" }}>
                      {bill.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Sessions Tab */}
        {activeTab === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl p-4 mb-3 flex items-center gap-4" style={{ background: "#111111" }}>
              <div>
                <p style={{ fontFamily: "Poppins", fontSize: "28px", fontWeight: 800, color: "#FFD600" }}>
                  {membership.sessionsTotal - membership.sessionsUsed}
                </p>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Sessions remaining</p>
              </div>
              <div className="flex-1">
                <div className="w-full rounded-full overflow-hidden" style={{ height: "8px", background: "rgba(255,255,255,0.2)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${(membership.sessionsUsed / membership.sessionsTotal) * 100}%`,
                      background: "#FFD600",
                      borderRadius: "99px",
                    }}
                  />
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF70", marginTop: "4px" }}>
                  {membership.sessionsUsed} used of {membership.sessionsTotal}
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              {mySessions.map((session) => (
                <div key={session.id} className="flex items-start gap-3 px-4 py-3 border-b last:border-0" style={{ borderColor: "#F5F5F5" }}>
                  <div className="rounded-xl flex flex-col items-center justify-center shrink-0" style={{ width: "44px", height: "44px", background: "#FFD60018" }}>
                    <Clock size={18} color="#FFD600" />
                  </div>
                  <div className="flex-1">
                    <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>{session.type}</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>{session.trainer}</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#BDBDBD" }}>{session.date} · {session.time}</p>
                  </div>
                  <span className="px-2 py-1 rounded-xl" style={{ background: "#F5F5F5", fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>
                    {session.location}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Packages Tab */}
        {activeTab === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl p-4 mb-3 cursor-pointer relative overflow-hidden"
                style={{
                  background: pkg.popular ? "linear-gradient(135deg, #111 0%, #1C1C2E 100%)" : "#FFFFFF",
                  boxShadow: pkg.popular ? "0 8px 24px rgba(0,0,0,0.2)" : "0 2px 12px rgba(0,0,0,0.06)",
                  border: pkg.popular ? `2px solid ${pkg.color}` : "2px solid transparent",
                }}
              >
                {pkg.popular && (
                  <span
                    className="absolute top-3 right-3 px-2 py-0.5 rounded-full"
                    style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#111" }}
                  >
                    CURRENT PLAN
                  </span>
                )}
                <div className="flex items-end gap-1 mb-1">
                  <span style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 800, color: pkg.popular ? pkg.color : "#111" }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontFamily: "Poppins", fontSize: "12px", color: pkg.popular ? "#FFFFFF70" : "#757575", marginBottom: "3px" }}>
                    {pkg.period}
                  </span>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: pkg.popular ? "#fff" : "#111", marginBottom: "12px" }}>
                  {pkg.name}
                </p>
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1.5">
                    <CheckCircle size={14} color={pkg.color} />
                    <span style={{ fontFamily: "Poppins", fontSize: "11px", color: pkg.popular ? "#FFFFFF90" : "#444" }}>{f}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1 mt-3">
                  <Zap size={12} color={pkg.color} />
                  <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: pkg.color }}>
                    {pkg.xpBonus} Multiplier
                  </span>
                </div>
                {!pkg.popular && (
                  <button
                    className="w-full mt-3 py-2 rounded-xl"
                    style={{ background: pkg.color, fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}
                  >
                    Choose Plan
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
