import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiGithub, FiExternalLink, FiSearch, FiX } from "react-icons/fi";
import { SectionTitle } from "./About";
import ems from "@/assets/project-ems.jpg";
import ecom from "@/assets/project-ecom.jpg";
import task from "@/assets/project-task.jpg";
import student from "@/assets/project-student.jpg";
import portfolio from "@/assets/project-portfolio.jpg";

type Project = {
  title: string;
  description: string;
  long: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  status: "Live" | "In Progress";
  category: "Full Stack" | "Frontend" | "Backend";
};

const projects: Project[] = [
  {
    title: "Employee Management System",
    description: "CRUD app with role-based access and analytics dashboard.",
    long: "A full-featured EMS built with Spring Boot, MySQL and React. Features JWT auth, role-based dashboards, payroll, leave management and rich analytics with Recharts.",
    image: ems,
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
    category: "Full Stack",
  },
  {
    title: "E-Commerce Website",
    description: "Modern storefront with Stripe, cart and admin panel.",
    long: "MERN stack e-commerce with Redux Toolkit, Stripe checkout, product reviews, wishlists and a complete admin console.",
    image: ecom,
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description: "Realtime kanban with drag & drop and team workspaces.",
    long: "Trello-style productivity app with realtime sync via Socket.io, drag-and-drop boards, comments and notifications.",
    image: task,
    tech: ["React", "Node", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
    category: "Full Stack",
  },
  {
    title: "Student Result Management",
    description: "Result portal with PDF reports and analytics.",
    long: "Java + Spring Boot backend serving a React dashboard for managing student results, generating PDF mark sheets and visualizing trends.",
    image: student,
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
    category: "Backend",
  },
  {
    title: "Portfolio Website",
    description: "This very site — animated, accessible and blazing fast.",
    long: "Built with React, TypeScript, Tailwind and Framer Motion. Includes custom cursor, particle background, glassmorphism design system and 95+ Lighthouse score.",
    image: portfolio,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
    status: "Live",
    category: "Frontend",
  },
];

const cats = ["All", "Full Stack", "Frontend", "Backend"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(
    () =>
      projects.filter(
        (p) =>
          (filter === "All" || p.category === filter) &&
          (p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.tech.join(" ").toLowerCase().includes(query.toLowerCase())),
      ),
    [filter, query],
  );

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Work" title="Featured projects" />

        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                  filter === c
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full glass py-2 pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.button
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(p)}
                className="group overflow-hidden rounded-2xl glass text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  <span className="absolute right-3 top-3 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-300 backdrop-blur">
                    {p.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        {list.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">No projects match your search.</p>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl glass"
            >
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-background/60 p-2 text-foreground hover:bg-background"
              >
                <FiX />
              </button>
              <img src={active.image} alt={active.title} className="aspect-video w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gradient">{active.title}</h3>
                <p className="mt-3 text-muted-foreground">{active.long}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-full glass px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={active.github}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-white/10"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={active.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-semibold text-primary-foreground"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
