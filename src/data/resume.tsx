import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { ReactNode } from "react";

export const DATA = {
  name: "Sudeep Gautam",
  initials: "SG",
  url: "https://github.com/sudeepgtm777",
  location: "",
  locationLink: "",
  description:
    "Builder of things on the web. Learning, shipping, and improving every day.",
  summary:
    "I'm Sudeep Gautam — focused on full-stack engineering and building useful products. This portfolio will grow as I add experience, projects, and skills.",
  avatarUrl: "https://github.com/sudeepgtm777.png",
  favIcon: "/favicon.png",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sudeepgtm777",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sudeepgtm777",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sudeepgtm777",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [] as {
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[],
  communityWork: [] as {
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[],
  education: [] as {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[],
  projects: [] as {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: readonly string[];
    links: readonly {
      type: string;
      href: string;
      icon: ReactNode;
    }[];
    image: string;
    video: string;
  }[],
  hackathons: [] as {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    mlh?: string;
    links: readonly unknown[];
  }[],
};
