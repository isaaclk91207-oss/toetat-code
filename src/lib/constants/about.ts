import type { TeamMember, Stat, CompanyValue } from "@/types";

export const stats: Stat[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "6+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

export const values: CompanyValue[] = [
  {
    id: "quality",
    title: "Quality First",
    description:
      "We never compromise on code quality. Every project undergoes rigorous testing and code review before delivery.",
    icon: "shield",
  },
  {
    id: "transparency",
    title: "Transparency",
    description:
      "Clear communication and regular updates keep you informed at every stage of development.",
    icon: "eye",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver modern, future-proof solutions.",
    icon: "lightbulb",
  },
  {
    id: "partnership",
    title: "Partnership",
    description:
      "We don't just build software — we build long-term relationships with our clients.",
    icon: "handshake",
  },
];

export const team: TeamMember[] = [
  {
    id: "alex",
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    bio: "Full-stack engineer with 10+ years of experience building scalable web applications.",
    image: "/team/alex.jpg",
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Passionate about creating intuitive interfaces that users love.",
    image: "/team/sarah.jpg",
  },
  {
    id: "marcus",
    name: "Marcus Williams",
    role: "Backend Engineer",
    bio: "Specializes in cloud infrastructure and distributed systems.",
    image: "/team/marcus.jpg",
  },
  {
    id: "emily",
    name: "Emily Liu",
    role: "Project Manager",
    bio: "Ensures every project stays on track, on budget, and exceeds expectations.",
    image: "/team/emily.jpg",
  },
];
