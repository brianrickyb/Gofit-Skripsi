import React, { useState } from "react";
import { motion } from "motion/react";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { blogPosts } from "../data/mockData";

const categories = ["All", "Tips", "News", "Wellness"];

export function BlogScreen() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div style={{ background: "#F5F5F5", minHeight: "100%" }}>
      {/* Header */}
      <div className="px-4 pt-4 pb-5" style={{ background: "linear-gradient(160deg, #111111 0%, #1C1C2E 100%)" }}>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl" style={{ width: "44px", height: "44px", background: "#2ED4C5" }}>
            <BookOpen size={22} color="#111" />
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: "11px", color: "#FFFFFF70" }}>Stay Informed</p>
            <p style={{ fontFamily: "Poppins", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
              Blog & News
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-6">
        {/* Featured */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="rounded-2xl overflow-hidden mb-4 cursor-pointer"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full"
              style={{ height: "160px", objectFit: "cover" }}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }}
            >
              <span
                className="px-2 py-0.5 rounded-full self-start mb-2"
                style={{ background: "#FFD600", fontFamily: "Poppins", fontSize: "9px", fontWeight: 700, color: "#111" }}
              >
                FEATURED
              </span>
              <p style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                {blogPosts[0].title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Clock size={11} color="#FFFFFF80" />
                <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#FFFFFF80" }}>
                  {blogPosts[0].readTime} read · {blogPosts[0].date}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category filter */}
        <div className="flex gap-2 mb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full shrink-0"
              style={{
                background: activeCategory === cat ? "#FFD600" : "#FFFFFF",
                border: activeCategory === cat ? "none" : "1px solid #E0E0E0",
                fontFamily: "Poppins",
                fontSize: "11px",
                fontWeight: activeCategory === cat ? 700 : 400,
                color: activeCategory === cat ? "#111" : "#757575",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            whileTap={{ scale: 0.98 }}
            className="flex gap-3 rounded-2xl overflow-hidden mb-3 cursor-pointer"
            style={{ background: "#FFFFFF", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: "96px", height: "96px", objectFit: "cover", shrink: 0 }}
            />
            <div className="flex-1 p-3">
              <span
                className="px-2 py-0.5 rounded-full"
                style={{ background: "#2ED4C520", fontFamily: "Poppins", fontSize: "9px", fontWeight: 600, color: "#2ED4C5" }}
              >
                {post.category}
              </span>
              <p style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 600, color: "#111", marginTop: "4px" }}>
                {post.title}
              </p>
              <p style={{ fontFamily: "Poppins", fontSize: "10px", color: "#757575", marginTop: "2px" }}>
                {post.excerpt.slice(0, 60)}…
              </p>
              <div className="flex items-center gap-1 mt-2">
                <Clock size={10} color="#BDBDBD" />
                <span style={{ fontFamily: "Poppins", fontSize: "10px", color: "#BDBDBD" }}>
                  {post.readTime} · {post.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
