import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  QrCode, ShoppingBag, Calendar, CreditCard, Clock, ChevronRight,
  Zap, Flame, Trophy, Star, MapPin, Gift, ArrowRight
} from "lucide-react";
import { currentUser, weeklyChallenges, availableClasses, blogPosts, dailyGoals } from "../data/mockData";
import { XPBar } from "../components/gamification/XPBar";

export function HomeScreen() {
  const navigate = useNavigate();
  const [checkedGoals, setCheckedGoals] = useState<string[]>(
    dailyGoals.filter((g) => g.isCompleted).map((g) => g.id)
  );
  const activeChallenge = weeklyChallenges[0];
  const completedGoals = checkedGoals.length;
  const totalGoals = dailyGoals.length;
  const progressPercent = (completedGoals / totalGoals) * 100;

  const quickActions = [
    { icon: ShoppingBag, label: "Buy a Pack", path: "/membership", color: "#FFD600" },
    { icon: Calendar, label: "My Bookings", path: "/booking", color: "#2ED4C5" },
    { icon: CreditCard, label: "Membership", path: "/membership", color: "#FF4D7D" },
    { icon: Clock, label: "Hours", path: "/clubs", color: "#9C27B0" },
  ];

  const greetingHour = new Date().getHours();
  const greeting =
    greetingHour < 12 ? "Good morning" : greetingHour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header Hero */}
      <div
        className="px-5 pt-3 pb-6"
        style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}
      >
        {/* Greeting */}
        <div className="mb-4">
          <p style={{ fontFamily: "Poppins", fontSize: "13px", color: "#FFFFFF80" }}>
            {greeting},
          </p>
          <h1 style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
            {currentUser.shortName} 👋
          </h1>
        </div>

        {/* XP Bar */}
        <XPBar
          level={currentUser.level}
          xp={currentUser.xp}
          xpToNext={currentUser.xpToNext}
          compact
        />

        {/* Stats Row */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 flex items-center gap-2 rounded-xl p-2.5" style={{ background: "rgba(255,255,255,0.08)" }}>
            <Flame size={18} color="#FF4D7D" />
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{currentUser.streak}</p>
              <p style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>Day Streak</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2 rounded-xl p-2.5" style={{ background: "rgba(255,255,255,0.08)" }}>
            <Star size={18} color="#FFD600" />
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{currentUser.points.toLocaleString()}</p>
              <p style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>Points</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2 rounded-xl p-2.5" style={{ background: "rgba(255,255,255,0.08)" }}>
            <Trophy size={18} color="#2ED4C5" />
            <div>
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color: "#FFFFFF" }}>{currentUser.badges}</p>
              <p style={{ fontFamily: "Poppins", fontSize: "9px", color: "#FFFFFF70" }}>Badges</p>
            </div>
          </div>
        </div>

        {/* Check-in CTA */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/checkin")}
          className="w-full mt-4 flex items-center justify-between rounded-2xl px-4 py-3"
          style={{ background: "#FFD600" }}
        >
          <div className="flex items-center gap-3">
            <QrCode size={24} color="#111" />
            <div className="text-left">
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}>
                Check In to GoFit
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#11111180" }}>
                +50 XP on check-in • {currentUser.streak} day streak 🔥
              </p>
            </div>
          </div>
          <ArrowRight size={20} color="#111" />
        </motion.button>
      </div>

      <div className="px-4 py-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(action.path)}
                className="flex flex-col items-center gap-1.5 rounded-2xl py-3"
                style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{ width: "38px", height: "38px", background: action.color + "18" }}
                >
                  <Icon size={18} color={action.color} />
                </div>
                <span style={{ fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#111", textAlign: "center" }}>
                  {action.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Challenge */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>Active Challenge</h2>
            <button onClick={() => navigate("/challenges")} className="flex items-center gap-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#2ED4C5" }}>View all</span>
              <ChevronRight size={14} color="#2ED4C5" />
            </button>
          </div>
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/challenges")}
            className="rounded-2xl p-4 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #111111 0%, #1C1C2E 100%)", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontSize: "20px" }}>{activeChallenge.icon}</span>
                  <span className="px-2 py-0.5 rounded-full" style={{ background: "#FF4D7D20", fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#FF4D7D" }}>
                    ACTIVE
                  </span>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#FFFFFF" }}>{activeChallenge.title}</p>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>{activeChallenge.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <Zap size={13} color="#FFD600" />
                  <span style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#FFD600" }}>+{activeChallenge.xpReward} XP</span>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF60" }}>{activeChallenge.daysLeft}d left</p>
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF80" }}>{activeChallenge.progress} / {activeChallenge.total}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#FF4D7D" }}>
                {Math.round((activeChallenge.progress / activeChallenge.total) * 100)}%
              </span>
            </div>
            <div className="w-full rounded-full overflow-hidden" style={{ height: "8px", background: "rgba(255,255,255,0.15)" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(activeChallenge.progress / activeChallenge.total) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ height: "100%", background: "#FF4D7D", borderRadius: "99px" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Daily Goals */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>Today's Goals</h2>
            <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#757575" }}>{completedGoals}/{totalGoals}</span>
          </div>
          <div className="rounded-2xl p-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 rounded-full overflow-hidden" style={{ height: "8px", background: "#F0F0F0" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1 }}
                  style={{ height: "100%", background: "#2ED4C5", borderRadius: "99px" }}
                />
              </div>
              <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#2ED4C5" }}>
                {Math.round(progressPercent)}%
              </span>
            </div>
            {dailyGoals.map((goal) => (
              <div key={goal.id} className="flex items-center gap-3 py-2 border-b last:border-0" style={{ borderColor: "#F5F5F5" }}>
                <button
                  onClick={() =>
                    setCheckedGoals((prev) =>
                      prev.includes(goal.id) ? prev.filter((id) => id !== goal.id) : [...prev, goal.id]
                    )
                  }
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "22px",
                    height: "22px",
                    background: checkedGoals.includes(goal.id) ? "#2ED4C5" : "transparent",
                    border: checkedGoals.includes(goal.id) ? "none" : "2px solid #E0E0E0",
                  }}
                >
                  {checkedGoals.includes(goal.id) && <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>}
                </button>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    color: checkedGoals.includes(goal.id) ? "#BDBDBD" : "#111",
                    textDecoration: checkedGoals.includes(goal.id) ? "line-through" : "none",
                    flex: 1,
                  }}
                >
                  {goal.title}
                </p>
                <div className="flex items-center gap-0.5">
                  <Zap size={11} color="#FFD600" />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", fontWeight: 600, color: "#FFD600" }}>+{goal.xp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's On */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>What's On</h2>
            <button onClick={() => navigate("/booking")} className="flex items-center gap-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#2ED4C5" }}>All classes</span>
              <ChevronRight size={14} color="#2ED4C5" />
            </button>
          </div>

          <motion.div
            whileTap={{ scale: 0.98 }}
            className="rounded-2xl overflow-hidden mb-3 cursor-pointer"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
            onClick={() => navigate("/booking")}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758875569118-ca98d110a1fa?w=600&h=200&fit=crop"
                alt="Small Group Training"
                className="w-full"
                style={{ height: "120px", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full" style={{ background: "#FF4D7D", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#fff" }}>POPULAR</span>
                  <span className="px-2 py-0.5 rounded-full" style={{ background: "#2ED4C540", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#2ED4C5" }}>+150 XP</span>
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#fff" }}>Small Group Training</p>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#ffffff99" }}>Power · Strength · Endurance</p>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {availableClasses.slice(0, 3).map((cls) => (
              <motion.div
                key={cls.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/booking")}
                className="rounded-xl overflow-hidden cursor-pointer shrink-0"
                style={{ width: "140px", background: "#FFFFFF", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}
              >
                <img src={cls.image} alt={cls.name} className="w-full" style={{ height: "75px", objectFit: "cover" }} />
                <div className="p-2">
                  <p style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#111" }}>{cls.name}</p>
                  <p style={{ fontFamily: "Poppins", fontSize: "9px", color: "#757575" }}>{cls.time}</p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-0.5">
                      <Zap size={10} color="#FFD600" />
                      <span style={{ fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#FFD600" }}>+{cls.xpReward}</span>
                    </div>
                    <span style={{ fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: cls.spots <= 5 ? "#FF4D7D" : "#2ED4C5" }}>
                      {cls.spots} spots
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Club Banner */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/clubs")}
          className="rounded-2xl p-4 mb-5 cursor-pointer"
          style={{ background: "linear-gradient(135deg, #111 0%, #1C1C2E 100%)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "#FFD600" }}>
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", fontWeight: 800, color: "#111" }}>G</span>
                </div>
                <span style={{ fontFamily: "Poppins", fontSize: "11px", fontWeight: 600, color: "#FFD600" }}>GoFit Indonesia</span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1 }}>
                SWEAT<br />SMILE<br />REPEAT
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 mb-2">
                <MapPin size={12} color="#FFFFFF80" />
                <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF80" }}>Music Tower</span>
              </div>
              <button
                className="px-3 py-1.5 rounded-xl"
                style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "11px", fontWeight: 700, color: "#111" }}
              >
                Find Club →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Membership Shortcut */}
        <div className="mb-5">
          <h2 style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>My Membership</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "👤", label: "My Profile", path: "/profile", color: "#FFD600" },
              { icon: "💳", label: "My Membership", path: "/membership", color: "#2ED4C5" },
              { icon: "🧾", label: "My Billing", path: "/membership", color: "#FF4D7D" },
              { icon: "📋", label: "My Sessions", path: "/membership", color: "#9C27B0" },
            ].map((item) => (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-3 rounded-2xl p-3"
                style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center justify-center rounded-xl" style={{ width: "38px", height: "38px", background: item.color + "18" }}>
                  <span style={{ fontSize: "18px" }}>{item.icon}</span>
                </div>
                <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#111" }}>{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Promotions */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>Promotions</h2>
            <button onClick={() => navigate("/promotions")} className="flex items-center gap-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#2ED4C5" }}>See all</span>
              <ChevronRight size={14} color="#2ED4C5" />
            </button>
          </div>
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/promotions")}
            className="rounded-2xl p-4 cursor-pointer"
            style={{ background: "linear-gradient(135deg, #FFD600 0%, #FFA000 100%)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 700, color: "#111" }}>Refer a Friend 👥</p>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#11111180" }}>Both get 500 Bonus Points instantly</p>
                <p style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 700, color: "#111", marginTop: "6px" }}>Code: BRICKY2025</p>
              </div>
              <Gift size={36} color="#111" />
            </div>
          </motion.div>
        </div>

        {/* Blog */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h2 style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#111" }}>Blog & News</h2>
            <button onClick={() => navigate("/blog")} className="flex items-center gap-0.5">
              <span style={{ fontFamily: "Poppins", fontSize: "12px", color: "#2ED4C5" }}>More</span>
              <ChevronRight size={14} color="#2ED4C5" />
            </button>
          </div>
          {blogPosts.slice(0, 2).map((post) => (
            <motion.div
              key={post.id}
              whileTap={{ scale: 0.98 }}
              className="flex gap-3 rounded-2xl overflow-hidden mb-3 cursor-pointer"
              style={{ background: "#FFFFFF", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
              onClick={() => navigate("/blog")}
            >
              <img src={post.image} alt={post.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
              <div className="flex-1 p-3">
                <span className="px-2 py-0.5 rounded-full" style={{ background: "#2ED4C520", fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#2ED4C5" }}>
                  {post.category}
                </span>
                <p style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#111", marginTop: "4px" }}>{post.title}</p>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>{post.date} · {post.readTime}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not a Member CTA */}
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/membership")}
          className="rounded-2xl p-4 mb-6 cursor-pointer"
          style={{ background: "#111111" }}
        >
          <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF80", marginBottom: "2px" }}>
            Not a GoFit member yet?
          </p>
          <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#FFD600" }}>
            Join online today →
          </p>
        </motion.div>
      </div>
    </div>
  );
}
