import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { BottomNav } from "./BottomNav";
import { TopBar } from "./TopBar";

export function MobileShell() {
  const location = useLocation();
  const hideTopBar = ["/checkin"].includes(location.pathname);
  const hideBottomNav = ["/checkin"].includes(location.pathname);

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a2e 100%)" }}
    >
      <div
        className="relative flex flex-col overflow-hidden shadow-2xl"
        style={{
          width: "390px",
          height: "844px",
          background: "#F5F5F5",
          borderRadius: "44px",
          border: "8px solid #222",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
          style={{
            width: "120px",
            height: "30px",
            background: "#111",
            borderRadius: "0 0 20px 20px",
          }}
        />

        {/* Content area */}
        <div className="flex flex-col flex-1 overflow-hidden" style={{ paddingTop: "30px" }}>
          {!hideTopBar && <TopBar />}
          <div className="flex-1 overflow-y-auto scroll-smooth" style={{ scrollbarWidth: "none" }}>
            <Outlet />
          </div>
          {!hideBottomNav && <BottomNav />}
        </div>
      </div>
    </div>
  );
}
