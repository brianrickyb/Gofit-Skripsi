import { createBrowserRouter } from "react-router";
import { MobileShell } from "./components/layout/MobileShell";
import { HomeScreen } from "./screens/HomeScreen";
import { MembershipScreen } from "./screens/MembershipScreen";
import { ChallengesScreen } from "./screens/ChallengesScreen";
import { AchievementsScreen } from "./screens/AchievementsScreen";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";
import { CheckInScreen } from "./screens/CheckInScreen";
import { ProgressScreen } from "./screens/ProgressScreen";
import { BookingScreen } from "./screens/BookingScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { ClubScreen } from "./screens/ClubScreen";
import { BlogScreen } from "./screens/BlogScreen";
import { PromotionsScreen } from "./screens/PromotionsScreen";
import { MenuScreen } from "./screens/MenuScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MobileShell,
    children: [
      { index: true, Component: HomeScreen },
      { path: "membership", Component: MembershipScreen },
      { path: "challenges", Component: ChallengesScreen },
      { path: "achievements", Component: AchievementsScreen },
      { path: "leaderboard", Component: LeaderboardScreen },
      { path: "checkin", Component: CheckInScreen },
      { path: "progress", Component: ProgressScreen },
      { path: "booking", Component: BookingScreen },
      { path: "profile", Component: ProfileScreen },
      { path: "notifications", Component: NotificationsScreen },
      { path: "clubs", Component: ClubScreen },
      { path: "blog", Component: BlogScreen },
      { path: "promotions", Component: PromotionsScreen },
      { path: "menu", Component: MenuScreen },
    ],
  },
]);
