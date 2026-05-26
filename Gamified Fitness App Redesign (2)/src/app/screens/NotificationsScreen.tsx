import React, { useState } from "react";
import { motion } from "motion/react";
import { Bell, Target, Calendar, Trophy, Zap, Gift, Flame, CreditCard } from "lucide-react";
import { notifications } from "../data/mockData";

const typeIcons: Record<string, any> = {
  challenge: Target,
  booking: Calendar,
  achievement: Trophy,
  xp: Zap,
  promo: Gift,
  streak: Flame,
  billing: CreditCard,
};

const typeColors: Record<string, string> = {
  challenge: "#FF4D7D",
  booking: "#2ED4C5",
  achievement: "#FFD600",
  xp: "#9C27B0",
  promo: "#FF4D7D",
  streak: "#FF4D7D",
  billing: "#2ED4C5",
};

export function NotificationsScreen() {
  const [readItems, setReadItems] = useState<string[]>(
    notifications.filter((n) => n.isRead).map((n) => n.id)
  );

  const markAllRead = () => setReadItems(notifications.map((n) => n.id));

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bell size={18} color="#111" />
            <span style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575" }}>
              {notifications.filter((n) => !readItems.includes(n.id)).length} unread
            </span>
          </div>
          <button onClick={markAllRead}>
            <span style={{ fontFamily: "Poppins", fontSize: "12px", fontWeight: 600, color: "#2ED4C5" }}>
              Mark all read
            </span>
          </button>
        </div>

        {notifications.map((notif, i) => {
          const Icon = typeIcons[notif.type] || Bell;
          const color = typeColors[notif.type] || "#757575";
          const isRead = readItems.includes(notif.id);

          return (
            <motion.div
              key={notif.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setReadItems((prev) => [...prev, notif.id])}
              className="flex items-start gap-3 rounded-2xl p-3 mb-2 cursor-pointer"
              style={{
                background: isRead ? "#FFFFFF" : "#FFF9E6",
                boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
                border: isRead ? "1px solid transparent" : "1px solid #FFD60030",
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl shrink-0 mt-0.5"
                style={{ width: "38px", height: "38px", background: color + "18" }}
              >
                <Icon size={18} color={color} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: isRead ? 500 : 700, color: "#111" }}>
                    {notif.title}
                  </p>
                  {!isRead && (
                    <div
                      className="rounded-full shrink-0 ml-2 mt-1"
                      style={{ width: "8px", height: "8px", background: "#FF4D7D" }}
                    />
                  )}
                </div>
                <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#757575", marginTop: "2px" }}>
                  {notif.message}
                </p>
                <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#BDBDBD", marginTop: "4px" }}>
                  {notif.time}
                </p>
              </div>
            </motion.div>
          );
        })}

        <div className="py-6 text-center">
          <p style={{ fontFamily: "Poppins", fontSize: "12px", color: "#BDBDBD" }}>
            You're all caught up!
          </p>
        </div>
      </div>
    </div>
  );
}
