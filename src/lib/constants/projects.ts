import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online marketplace with real-time inventory, payment processing, and admin dashboard.",
    category: "web",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "health-app",
    title: "Health Tracking App",
    description:
      "Cross-platform mobile application for health monitoring with AI-powered insights and recommendations.",
    category: "mobile",
    image: "/projects/health.jpg",
    tags: ["React Native", "TensorFlow", "Firebase"],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Real-time business intelligence dashboard with interactive charts, data visualization, and export features.",
    category: "web",
    image: "/projects/analytics.jpg",
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    id: "saas-platform",
    title: "SaaS Management Tool",
    description:
      "Cloud-based project management platform with team collaboration, task tracking, and workflow automation.",
    category: "web",
    image: "/projects/saas.jpg",
    tags: ["Vue.js", "GraphQL", "AWS"],
  },
];
