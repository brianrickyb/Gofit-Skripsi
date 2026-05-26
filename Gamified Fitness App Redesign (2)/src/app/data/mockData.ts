// ─── User Profile ─────────────────────────────────────────────────────────────
export const currentUser = {
  id: "u1",
  name: "Brian Ricky Budiman",
  shortName: "Brian Ricky",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  level: 12,
  xp: 650,
  xpToNext: 1000,
  totalXP: 12650,
  streak: 12,
  points: 2450,
  badges: 18,
  membershipType: "Premium",
  membershipExpiry: "31 Dec 2025",
  memberSince: "Jan 2023",
  homeClub: "Music Tower, Sudirman – Jakarta",
  phone: "+62 812-3456-7890",
  email: "brian.ricky@email.com",
};

// ─── Membership ───────────────────────────────────────────────────────────────
export const membership = {
  type: "GoFit Premium",
  status: "Active",
  startDate: "1 Jan 2025",
  expiryDate: "31 Dec 2025",
  sessionsUsed: 24,
  sessionsTotal: 36,
  daysLeft: 234,
  autoRenew: true,
  price: "Rp 599.000 / month",
  benefits: [
    "Unlimited Access to All Clubs",
    "2 Personal Training Sessions / Month",
    "Group Classes Included",
    "Health App Integration",
    "Guest Pass (2x / month)",
  ],
};

// ─── Bills / Purchases ────────────────────────────────────────────────────────
export const billingHistory = [
  { id: "b1", date: "1 May 2025", amount: "Rp 599.000", type: "Monthly Membership", status: "Paid" },
  { id: "b2", date: "1 Apr 2025", amount: "Rp 599.000", type: "Monthly Membership", status: "Paid" },
  { id: "b3", date: "15 Mar 2025", amount: "Rp 250.000", type: "Personal Training x2", status: "Paid" },
  { id: "b4", date: "1 Mar 2025", amount: "Rp 599.000", type: "Monthly Membership", status: "Paid" },
  { id: "b5", date: "10 Feb 2025", amount: "Rp 150.000", type: "Day Pass Guest", status: "Paid" },
];

// ─── Sessions ─────────────────────────────────────────────────────────────────
export const mySessions = [
  { id: "s1", date: "Mon, 11 May 2025", time: "07:00 – 08:00", type: "Personal Training", trainer: "Coach Andi", location: "Music Tower" },
  { id: "s2", date: "Wed, 13 May 2025", time: "18:00 – 19:00", type: "HIIT Class", trainer: "Coach Dewi", location: "Music Tower" },
  { id: "s3", date: "Fri, 15 May 2025", time: "06:30 – 07:30", type: "Strength Training", trainer: "Self", location: "Kuningan" },
  { id: "s4", date: "Mon, 5 May 2025", time: "07:00 – 08:00", type: "Personal Training", trainer: "Coach Andi", location: "Music Tower" },
  { id: "s5", date: "Thu, 1 May 2025", time: "10:00 – 11:00", type: "Yoga Flow", trainer: "Coach Sinta", location: "SCBD" },
];

// ─── Classes / Bookings ───────────────────────────────────────────────────────
export const availableClasses = [
  {
    id: "c1",
    name: "HIIT Blast",
    trainer: "Coach Dewi",
    time: "18:00 – 19:00",
    date: "Wed, 13 May",
    location: "Studio A",
    spots: 4,
    totalSpots: 20,
    difficulty: "Hard",
    xpReward: 150,
    image: "https://images.unsplash.com/photo-1758875569118-ca98d110a1fa?w=300&h=200&fit=crop",
    tags: ["Cardio", "Challenge"],
    isBooked: false,
  },
  {
    id: "c2",
    name: "Power Strength",
    trainer: "Coach Andi",
    time: "07:00 – 08:30",
    date: "Thu, 14 May",
    location: "Weight Room",
    spots: 8,
    totalSpots: 15,
    difficulty: "Medium",
    xpReward: 120,
    image: "https://images.unsplash.com/photo-1772450014622-1c209d012c2e?w=300&h=200&fit=crop",
    tags: ["Strength", "Mission"],
    isBooked: true,
  },
  {
    id: "c3",
    name: "Yoga Flow",
    trainer: "Coach Sinta",
    time: "10:00 – 11:00",
    date: "Fri, 15 May",
    location: "Studio B",
    spots: 12,
    totalSpots: 20,
    difficulty: "Easy",
    xpReward: 80,
    image: "https://images.unsplash.com/photo-1763403921315-f2ef8697199f?w=300&h=200&fit=crop",
    tags: ["Flexibility", "Wellness"],
    isBooked: false,
  },
  {
    id: "c4",
    name: "Aqua Aerobics",
    trainer: "Coach Budi",
    time: "08:00 – 09:00",
    date: "Sat, 16 May",
    location: "Pool",
    spots: 6,
    totalSpots: 18,
    difficulty: "Medium",
    xpReward: 100,
    image: "https://images.unsplash.com/photo-1542029401157-d21e500b1385?w=300&h=200&fit=crop",
    tags: ["Cardio"],
    isBooked: false,
  },
];

// ─── Personal Trainers ────────────────────────────────────────────────────────
export const trainers = [
  {
    id: "t1",
    name: "Coach Andi",
    specialty: "Strength & Conditioning",
    rating: 4.9,
    sessions: 312,
    image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?w=150&h=150&fit=crop&crop=face",
    available: true,
    price: "Rp 125.000 / session",
  },
  {
    id: "t2",
    name: "Coach Dewi",
    specialty: "HIIT & Cardio",
    rating: 4.8,
    sessions: 278,
    image: "https://images.unsplash.com/photo-1770177298664-d12f940f9df3?w=150&h=150&fit=crop&crop=face",
    available: true,
    price: "Rp 125.000 / session",
  },
  {
    id: "t3",
    name: "Coach Sinta",
    specialty: "Yoga & Mindfulness",
    rating: 5.0,
    sessions: 195,
    image: "https://images.unsplash.com/photo-1763403921315-f2ef8697199f?w=150&h=150&fit=crop&crop=face",
    available: false,
    price: "Rp 110.000 / session",
  },
];

// ─── Challenges ───────────────────────────────────────────────────────────────
export const weeklyChallenges = [
  {
    id: "ch1",
    title: "Weekly Check-in",
    description: "Check in at GoFit 5x this week",
    progress: 3,
    total: 5,
    xpReward: 500,
    daysLeft: 2,
    category: "Consistency",
    icon: "🔥",
    color: "#FF4D7D",
    isCompleted: false,
  },
  {
    id: "ch2",
    title: "Strength Master",
    description: "Complete 3 strength workouts",
    progress: 1,
    total: 3,
    xpReward: 350,
    daysLeft: 5,
    category: "Strength",
    icon: "💪",
    color: "#2ED4C5",
    isCompleted: false,
  },
  {
    id: "ch3",
    title: "Cardio Booster",
    description: "Do 150 mins cardio this week",
    progress: 90,
    total: 150,
    xpReward: 300,
    daysLeft: 4,
    category: "Cardio",
    icon: "🏃",
    color: "#FFD600",
    isCompleted: false,
  },
  {
    id: "ch4",
    title: "Early Bird",
    description: "Attend 2 morning sessions before 8am",
    progress: 2,
    total: 2,
    xpReward: 200,
    daysLeft: 0,
    category: "Consistency",
    icon: "🌅",
    color: "#FFD600",
    isCompleted: true,
  },
  {
    id: "ch5",
    title: "Group Class Hero",
    description: "Join 3 group classes",
    progress: 3,
    total: 3,
    xpReward: 250,
    daysLeft: 0,
    category: "Engagement",
    icon: "⭐",
    color: "#2ED4C5",
    isCompleted: true,
  },
];

// ─── Missions ─────────────────────────────────────────────────────────────────
export const dailyGoals = [
  { id: "g1", title: "Check in at the gym", isCompleted: true, xp: 50 },
  { id: "g2", title: "Log 1 workout session", isCompleted: true, xp: 30 },
  { id: "g3", title: "Complete daily stretching", isCompleted: false, xp: 20 },
  { id: "g4", title: "Drink 8 glasses of water", isCompleted: false, xp: 20 },
  { id: "g5", title: "Share progress to feed", isCompleted: false, xp: 30 },
];

// ─── Achievements / Badges ────────────────────────────────────────────────────
export const achievements = [
  { id: "a1", title: "First Step", description: "Complete your first check-in", icon: "👟", color: "#FFD600", xpReward: 100, isUnlocked: true, date: "Jan 15, 2023" },
  { id: "a2", title: "Consistent", description: "Check in 10 workouts", icon: "🔥", color: "#FF4D7D", xpReward: 200, isUnlocked: true, date: "Feb 3, 2023" },
  { id: "a3", title: "Iron Will", description: "Complete 30 workouts", icon: "💪", color: "#2ED4C5", xpReward: 500, isUnlocked: true, date: "Apr 10, 2023" },
  { id: "a4", title: "Cardio King", description: "Run 50km total", icon: "🏃", color: "#FF4D7D", xpReward: 400, isUnlocked: true, date: "May 22, 2023" },
  { id: "a5", title: "Early Riser", description: "Attend 10 early morning sessions", icon: "🌅", color: "#FFD600", xpReward: 300, isUnlocked: true, date: "Jun 8, 2023" },
  { id: "a6", title: "Social Butterfly", description: "Join 20 group classes", icon: "🦋", color: "#2ED4C5", xpReward: 350, isUnlocked: true, date: "Jul 14, 2023" },
  { id: "a7", title: "Challenger", description: "Complete 10 challenges", icon: "🏆", color: "#FFD600", xpReward: 600, isUnlocked: true, date: "Aug 30, 2023" },
  { id: "a8", title: "Month Streak", description: "Check in 30 days in a row", icon: "📅", color: "#FF4D7D", xpReward: 1000, isUnlocked: true, date: "Sep 15, 2023" },
  { id: "a9", title: "Strength God", description: "Lift 100kg+ in any exercise", icon: "🏋️", color: "#2ED4C5", xpReward: 500, isUnlocked: false, date: null },
  { id: "a10", title: "Marathon", description: "Run 100km total", icon: "🎖️", color: "#FF4D7D", xpReward: 800, isUnlocked: false, date: null },
  { id: "a11", title: "Master Trainer", description: "Complete 20 personal training sessions", icon: "⭐", color: "#FFD600", xpReward: 700, isUnlocked: false, date: null },
  { id: "a12", title: "Legend", description: "Reach Level 20", icon: "👑", color: "#FFD600", xpReward: 2000, isUnlocked: false, date: null },
];

// ─── Leaderboard ──────────────────────────────────────────────────────────────
export const leaderboard = [
  { rank: 1, name: "Ricky S.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face", xp: 4100, level: 15, badge: "🥇" },
  { rank: 2, name: "Doni P.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", xp: 4100, level: 14, badge: "🥈" },
  { rank: 3, name: "Dewi A.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", xp: 3420, level: 13, badge: "🥉" },
  { rank: 4, name: "YogaP", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face", xp: 3100, level: 12 },
  { rank: 5, name: "Andi K.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", xp: 2890, level: 12 },
  { rank: 6, name: "Sinta R.", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face", xp: 2450, level: 12 },
  { rank: 7, name: "Budi W.", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face", xp: 2120, level: 11 },
  { rank: 8, name: "Brian R.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", xp: 2050, level: 11, isCurrentUser: true },
];

// ─── Clubs ────────────────────────────────────────────────────────────────────
export const clubs = [
  {
    id: "cl1",
    name: "GoFit Music Tower",
    address: "Music Tower, Jl. Jend. Sudirman Kav. 36, Jakarta",
    distance: "0.8 km",
    status: "Open",
    hours: "05:00 – 23:00",
    image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?w=400&h=200&fit=crop",
    facilities: ["Pool", "Sauna", "Group Classes", "PT", "Locker"],
    isHomeClub: true,
  },
  {
    id: "cl2",
    name: "GoFit Kuningan",
    address: "Kuningan City Mall, Lt. 3, Jakarta",
    distance: "2.1 km",
    status: "Open",
    hours: "06:00 – 22:00",
    image: "https://images.unsplash.com/photo-1771586791190-97ed536c54af?w=400&h=200&fit=crop",
    facilities: ["Group Classes", "PT", "Locker"],
    isHomeClub: false,
  },
  {
    id: "cl3",
    name: "GoFit SCBD",
    address: "Pacific Place, SCBD, Jakarta",
    distance: "3.5 km",
    status: "Open",
    hours: "06:00 – 23:00",
    image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?w=400&h=200&fit=crop",
    facilities: ["Pool", "Group Classes", "PT", "Sauna", "Locker"],
    isHomeClub: false,
  },
];

// ─── Notifications ────────────────────────────────────────────────────────────
export const notifications = [
  { id: "n1", type: "challenge", title: "Challenge Almost Done! 🔥", message: "You're 2 check-ins away from completing Weekly Check-in challenge.", time: "2h ago", isRead: false },
  { id: "n2", type: "booking", title: "Session Reminder 📅", message: "Your Personal Training with Coach Andi is tomorrow at 07:00.", time: "4h ago", isRead: false },
  { id: "n3", type: "achievement", title: "Achievement Unlocked! 🏆", message: "You earned the 'Early Riser' badge for attending 10 morning sessions.", time: "1d ago", isRead: true },
  { id: "n4", type: "xp", title: "XP Earned! ⚡", message: "You earned 150 XP for completing the HIIT Blast class.", time: "2d ago", isRead: true },
  { id: "n5", type: "promo", title: "Exclusive Offer 🎁", message: "Refer a friend and both get 500 Bonus Points! Limited time only.", time: "3d ago", isRead: true },
  { id: "n6", type: "streak", title: "Streak Milestone! 🔥", message: "12-day streak! Keep it up to unlock the 'Two Weeks Strong' badge.", time: "5d ago", isRead: true },
  { id: "n7", type: "billing", title: "Invoice Paid ✅", message: "Your May 2025 membership of Rp 599.000 has been paid successfully.", time: "1w ago", isRead: true },
];

// ─── Blog / News ──────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: "bp1",
    title: "5 Tips to Maximize Your Workout Performance",
    category: "Tips",
    date: "10 May 2025",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1771586791190-97ed536c54af?w=400&h=200&fit=crop",
    excerpt: "Maximize your gym sessions with these expert-backed strategies for strength and endurance.",
  },
  {
    id: "bp2",
    title: "GoFit Opens New Branch at SCBD!",
    category: "News",
    date: "8 May 2025",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?w=400&h=200&fit=crop",
    excerpt: "We're excited to announce our newest location at Pacific Place, SCBD, Jakarta.",
  },
  {
    id: "bp3",
    title: "The Benefits of Group Training Classes",
    category: "Wellness",
    date: "5 May 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1758875569118-ca98d110a1fa?w=400&h=200&fit=crop",
    excerpt: "Discover why working out with others can boost your motivation and results.",
  },
];

// ─── Promotions ───────────────────────────────────────────────────────────────
export const promotions = [
  {
    id: "p1",
    title: "Refer a Friend",
    subtitle: "Both get 500 Bonus Points",
    description: "Share your referral code with friends. When they join GoFit, both of you receive 500 Bonus Points instantly!",
    code: "BRICKY2025",
    color: "#FFD600",
    icon: "👥",
    expiry: "30 Jun 2025",
  },
  {
    id: "p2",
    title: "Upgrade to Gold",
    subtitle: "Save Rp 200.000 / month",
    description: "Upgrade your membership to GoFit Gold and unlock premium amenities including unlimited guest passes and spa access.",
    code: "GOLDUPGRADE",
    color: "#2ED4C5",
    icon: "⭐",
    expiry: "31 May 2025",
  },
  {
    id: "p3",
    title: "Small Group Training",
    subtitle: "Special Rate: Rp 85.000 / session",
    description: "Train in a small group of 4-6 with a dedicated coach. Best of both worlds – personal attention at class prices.",
    code: "SGT85",
    color: "#FF4D7D",
    icon: "🏋️",
    expiry: "15 Jun 2025",
  },
];

// ─── Packages / Plans ─────────────────────────────────────────────────────────
export const packages = [
  {
    id: "pk1",
    name: "GoFit Basic",
    price: "Rp 299.000",
    period: "/ month",
    features: ["Access to 1 Club", "Standard Equipment", "Locker"],
    xpBonus: "1x XP",
    color: "#757575",
    popular: false,
  },
  {
    id: "pk2",
    name: "GoFit Premium",
    price: "Rp 599.000",
    period: "/ month",
    features: ["Access to All Clubs", "2 PT Sessions / Month", "Group Classes", "Health App Integration", "Guest Pass (2x)"],
    xpBonus: "1.5x XP",
    color: "#FFD600",
    popular: true,
  },
  {
    id: "pk3",
    name: "GoFit Gold",
    price: "Rp 999.000",
    period: "/ month",
    features: ["All Premium Features", "Unlimited PT Sessions", "Spa & Sauna Access", "Nutrition Consultation", "Priority Booking"],
    xpBonus: "2x XP",
    color: "#2ED4C5",
    popular: false,
  },
];

// ─── Workout History ──────────────────────────────────────────────────────────
export const workoutHistory = [
  { week: "Week 1 May", sessions: 4, target: 5 },
  { week: "Week 4 Apr", sessions: 5, target: 5 },
  { week: "Week 3 Apr", sessions: 3, target: 5 },
  { week: "Week 2 Apr", sessions: 5, target: 5 },
  { week: "Week 1 Apr", sessions: 4, target: 5 },
  { week: "Week 4 Mar", sessions: 2, target: 5 },
];

export const monthlyStats = {
  totalWorkouts: 24,
  totalMinutes: 1440,
  totalCalories: 12800,
  challengesCompleted: 8,
  bestStreak: 14,
  avgSessionDuration: 60,
};

// ─── Operating Hours ──────────────────────────────────────────────────────────
export const operatingHours = [
  { day: "Monday – Friday", hours: "05:00 – 23:00" },
  { day: "Saturday", hours: "06:00 – 22:00" },
  { day: "Sunday", hours: "07:00 – 21:00" },
  { day: "Public Holiday", hours: "08:00 – 20:00" },
];
