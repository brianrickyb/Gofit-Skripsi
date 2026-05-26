import React, { useState } from "react";
import { motion } from "motion/react";
import { BarChart2, Flame, Target, Clock, TrendingUp, Zap, Calendar, Award } from "lucide-react";
import { workoutHistory, monthlyStats, currentUser, weeklyChallenges } from "../data/mockData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

const tabs = ["This Month", "Challenges", "Streak"];

export function ProgressScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const completedChallenges = weeklyChallenges.filter((c) => c.isCompleted).length;

  const barData = workoutHistory.map((w) => ({
    name: w.week.replace("Week ", "W").split(" ")[0],
    sessions: w.sessions,
    target: w.target,
  }));

  // Streak calendar (last 30 days mock)
  const today = new Date();
  const streakDays = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (29 - i));
    const hasWorkout = i < 12 ? Math.random() > 0.3 : Math.random() > 0.7;
    return { date: d, hasWorkout, isToday: i === 29 };
  });

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#2ED4C5" }}>
            <BarChart2 size={22} color="#111" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Your Analytics</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Workout Progress
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Workouts", value: monthlyStats.totalWorkouts, icon: "💪", color: "#FFD600" },
            { label: "Minutes", value: monthlyStats.totalMinutes, icon: "⏱", color: "#2ED4C5" },
            { label: "Streak", value: currentUser.streak, icon: "🔥", color: "#FF4D7D" },
            { label: "Challenges", value: monthlyStats.challengesCompleted, icon: "🏆", color: "#9C27B0" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-2 flex flex-col items-center"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "14px" }}>{s.icon}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 700, color: s.color }}>{s.value}</span>
              <span style={{ fontFamily: "Poppins", fontSize: "8px", color: "#FFFFFF70" }}>{s.label}</span>
            </div>
          ))}
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

        {/* This Month */}
        {activeTab === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Bar chart */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-3">
                <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
                  Workout Frequency
                </h3>
                <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>Weekly</span>
              </div>
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={barData} barGap={4}>
                  <XAxis
                    dataKey="name"
                    tick={{ fontFamily: "Poppins", fontSize: 10, fill: "#757575" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ fontFamily: "Poppins", fontSize: "12px", borderRadius: "12px", border: "none", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
                    formatter={(v) => [`${v} sessions`]}
                  />
                  <Bar dataKey="sessions" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, i) => (
                      <Cell key={i} fill={entry.sessions >= entry.target ? "#FFD600" : "#2ED4C5"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded" style={{ background: "#FFD600" }} />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>Target met</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded" style={{ background: "#2ED4C5" }} />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>In progress</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Total Workouts", value: monthlyStats.totalWorkouts, sub: "This month", icon: Zap, color: "#FFD600" },
                { label: "Avg Duration", value: `${monthlyStats.avgSessionDuration}m`, sub: "Per session", icon: Clock, color: "#2ED4C5" },
                { label: "Best Streak", value: `${monthlyStats.bestStreak}d`, sub: "Consecutive days", icon: Flame, color: "#FF4D7D" },
                { label: "Calories Burned", value: `${(monthlyStats.totalCalories / 1000).toFixed(1)}k`, sub: "Total kcal", icon: TrendingUp, color: "#9C27B0" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="rounded-2xl p-4" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={16} color={s.color} />
                      <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>{s.label}</span>
                    </div>
                    <p style={{ fontFamily: "Poppins", fontSize: "22px", fontWeight: 700, color: "#111" }}>{s.value}</p>
                    <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#BDBDBD" }}>{s.sub}</p>
                  </div>
                );
              })}
            </div>

            {/* Workout history */}
            <div className="rounded-2xl overflow-hidden mb-6" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="px-4 py-3 border-b" style={{ borderColor: "#F5F5F5" }}>
                <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111" }}>
                  Weekly Breakdown
                </h3>
              </div>
              {workoutHistory.map((w) => (
                <div key={w.week} className="flex items-center gap-3 px-4 py-3 border-b last:border-0" style={{ borderColor: "#F5F5F5" }}>
                  <div className="flex-1">
                    <p style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#111" }}>{w.week}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="rounded-full overflow-hidden" style={{ flex: 1, height: "5px", background: "#F0F0F0" }}>
                        <div
                          style={{
                            height: "100%",
                            width: `${(w.sessions / w.target) * 100}%`,
                            background: w.sessions >= w.target ? "#FFD600" : "#2ED4C5",
                            borderRadius: "99px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: w.sessions >= w.target ? "#FFD600" : "#111" }}>
                      {w.sessions}
                    </span>
                    <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#BDBDBD" }}>/{w.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Challenges Tab */}
        {activeTab === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Challenge completion */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "#111111" }}>
              <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#FFFFFF80", marginBottom: "4px" }}>
                Challenges Completed
              </p>
              <div className="flex items-baseline gap-2 mb-3">
                <span style={{ fontFamily: "Poppins", fontSize: "36px", fontWeight: 800, color: "#FFD600" }}>
                  {completedChallenges}
                </span>
                <span style={{ fontFamily: "Poppins", fontSize: "18px", color: "#FFFFFF70" }}>
                  / {weeklyChallenges.length}
                </span>
              </div>
              <div className="w-full rounded-full overflow-hidden" style={{ height: "10px", background: "rgba(255,255,255,0.15)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedChallenges / weeklyChallenges.length) * 100}%` }}
                  transition={{ duration: 1.2 }}
                  style={{ height: "100%", background: "#FFD600", borderRadius: "99px" }}
                />
              </div>
            </div>

            {weeklyChallenges.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl p-4 mb-3"
                style={{ background: "#FFFFFF", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "18px" }}>{c.icon}</span>
                    <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111" }}>{c.title}</p>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      background: c.isCompleted ? "#2ED4C520" : "#F5F5F5",
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      fontWeight: 600,
                      color: c.isCompleted ? "#2ED4C5" : "#757575",
                    }}
                  >
                    {c.isCompleted ? "Done ✓" : `${c.progress}/${c.total}`}
                  </span>
                </div>
                <div className="w-full rounded-full overflow-hidden" style={{ height: "6px", background: "#F0F0F0" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${(c.progress / c.total) * 100}%`,
                      background: c.isCompleted ? "#2ED4C5" : c.color,
                      borderRadius: "99px",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Streak Tab */}
        {activeTab === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Streak showcase */}
            <div className="rounded-2xl p-5 mb-4 flex flex-col items-center" style={{ background: "linear-gradient(135deg, #111 0%, #1C1C2E 100%)" }}>
              <Flame size={40} color="#FF4D7D" />
              <p style={{ fontFamily: "Poppins", fontSize: "48px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>
                {currentUser.streak}
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 600, color: "#FFFFFF80" }}>
                Day Streak 🔥
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF60", marginTop: "4px" }}>
                Best streak: {monthlyStats.bestStreak} days
              </p>
            </div>

            {/* Calendar */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
                Last 30 Days
              </h3>
              <div className="grid grid-cols-7 gap-1.5">
                {streakDays.map((day, i) => (
                  <div
                    key={i}
                    className="rounded-lg flex items-center justify-center"
                    style={{
                      height: "32px",
                      background: day.isToday
                        ? "#FFD600"
                        : day.hasWorkout
                        ? "#2ED4C5"
                        : "#F5F5F5",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "9px",
                        fontWeight: day.isToday ? 700 : 400,
                        color: day.isToday ? "#111" : day.hasWorkout ? "#fff" : "#BDBDBD",
                      }}
                    >
                      {day.date.getDate()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded" style={{ background: "#2ED4C5" }} />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>Workout</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded" style={{ background: "#FFD600" }} />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>Today</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded" style={{ background: "#F5F5F5", border: "1px solid #E0E0E0" }} />
                  <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575" }}>Rest</span>
                </div>
              </div>
            </div>

            {/* Streak milestones */}
            <div className="rounded-2xl p-4 mb-6" style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
                Streak Milestones
              </h3>
              {[
                { label: "7-Day Streak", target: 7, reward: "100 XP + Badge" },
                { label: "14-Day Streak", target: 14, reward: "250 XP + Badge" },
                { label: "30-Day Streak", target: 30, reward: "1000 XP + Legend Badge" },
                { label: "60-Day Streak", target: 60, reward: "2500 XP + Elite Badge" },
              ].map((m) => {
                const done = currentUser.streak >= m.target;
                const pct = Math.min((currentUser.streak / m.target) * 100, 100);
                return (
                  <div key={m.label} className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: "14px" }}>{done ? "✅" : "🔒"}</span>
                        <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: done ? "#111" : "#757575" }}>
                          {m.label}
                        </span>
                      </div>
                      <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#2ED4C5" }}>{m.reward}</span>
                    </div>
                    <div className="w-full rounded-full overflow-hidden" style={{ height: "5px", background: "#F0F0F0" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: done ? "#2ED4C5" : "#FFD600",
                          borderRadius: "99px",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
