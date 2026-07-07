import {
  BookOpen,
  Bot,
  Brain,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageSquareText,
  NotebookPen,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/yearly-past-paper", label: "Yearly Past Papers" },
  { href: "/topics-past-paper", label: "Topical Past Papers" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/ai-chat", label: "AI Chat" },
  { href: "/profile", label: "Profile" },
];

export const quickLinks = [
  {
    href: "/courses",
    label: "Courses",
    description: "Featured study tracks and subject-wise paths.",
    icon: BookOpen,
  },
  {
    href: "/ai-chat",
    label: "AI Chat",
    description: "Quick prompts, planning help, and topic explanations.",
    icon: Bot,
  },
  {
    href: "/profile",
    label: "Profile",
    description: "Goals, role, preferences, and study identity.",
    icon: ShieldCheck,
  },
];

export const stats = [
  { value: "2", label: "Day Streak", icon: Sparkles },
  { value: "78%", label: "Weekly Progress", icon: ChartNoAxesCombined },
  { value: "Top 5%", label: "Global Rank", icon: Trophy },
  { value: "351", label: "Days To Exam", icon: CalendarDays },
];

export const founderFeatures = [
  { title: "Expert Faculty", subtitle: "10-30+ Years", icon: GraduationCap },
  { title: "AI Powered", subtitle: "Study Tools", icon: Brain },
  { title: "40,000+", subtitle: "Past Papers", icon: FileText },
  { title: "100,000+", subtitle: "Topic Questions", icon: ScanSearch },
  { title: "20,000+", subtitle: "Revision Notes", icon: NotebookPen },
];

export const dashboardCards = [
  {
    title: "Today's Focus",
    description: "Chemistry revision, math worksheet, and one timed MCQ sprint.",
    icon: Target,
  },
  {
    title: "Practice Hub",
    description: "Topic questions, yearly papers, and instant feedback in one place.",
    icon: ClipboardList,
  },
  {
    title: "Mentor Notes",
    description: "Short reminders from faculty and AI-generated planning support.",
    icon: MessageSquareText,
  },
];

export const pricingPlans = [
  {
    name: "Starter Plan",
    price: "PKR 2,999",
    badge: "For daily flow",
    features: ["Core dashboard access", "Basic notes and course content", "Calendar and task planning"],
  },
  {
    name: "Premium Access",
    price: "PKR 6,999",
    badge: "Most popular",
    features: ["AI chat and assistant tools", "Mock builder and advanced practice", "Priority updates and premium papers"],
  },
];

export const courses = [
  {
    slug: "math-foundation",
    title: "Cambridge Math Accelerator",
    level: "Foundation",
    duration: "8 Weeks",
    description: "Concept-first math lessons with revision drills and quick tests.",
    syllabus: ["Algebra refresh", "Functions and graphs", "Exam tactics"],
  },
  {
    slug: "physics-core",
    title: "Physics Problem Solving Lab",
    level: "Intermediate",
    duration: "10 Weeks",
    description: "Build speed, reasoning, and structured answers for physics papers.",
    syllabus: ["Mechanics", "Electricity", "Waves and optics"],
  },
  {
    slug: "biology-mastery",
    title: "Biology Mastery Track",
    level: "Advanced",
    duration: "6 Weeks",
    description: "Memorisation support plus diagram practice and topical quizzes.",
    syllabus: ["Cells and genetics", "Human systems", "Exam revision"],
  },
];

export const toolPages = [
  {
    href: "/topics-past-paper",
    title: "Topics Past Papers",
    description: "Topic wise practice collections for targeted revision.",
    icon: FileText,
  },
  {
    href: "/yearly-past-paper",
    title: "Yearly Past Papers",
    description: "Session-wise papers for full exam simulation.",
    icon: ScanSearch,
  },
  {
    href: "/test-mock-builder",
    title: "Test Mock Builder",
    description: "Assemble timed practice sets from your chosen subjects.",
    icon: ClipboardList,
  },
  {
    href: "/referral-code",
    title: "Referral Code",
    description: "Share access, rewards, and community invites.",
    icon: Users,
  },
  {
    href: "/teacher-dashboard",
    title: "Teacher Dashboard",
    description: "Faculty insights, class summaries, and review shortcuts.",
    icon: GraduationCap,
  },
  {
    href: "/admin-panel",
    title: "Admin Panel",
    description: "System-level controls for content and account management.",
    icon: ShieldCheck,
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}

