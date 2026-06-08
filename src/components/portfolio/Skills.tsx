import { motion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "./About";

type Skill = { name: string; level: number; category: "Frontend" | "Backend" | "Database" | "Tools" };

const skills: Skill[] = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS / Tailwind", level: 92, category: "Frontend" },
  { name: "JavaScript", level: 93, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "React", level: 92, category: "Frontend" },
  { name: "Java", level: 90, category: "Backend" },
  { name: "Spring Boot", level: 85, category: "Backend" },
  { name: "Node.js", level: 87, category: "Backend" },
  { name: "Express.js", level: 84, category: "Backend" },
  { name: "MySQL", level: 86, category: "Database" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "Git / GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Postman", level: 88, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;

export default function Skills() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Toolkit" title="Skills & technologies" />
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                filter === c
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_oklch(0.78_0.18_200/40%)]"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <motion.div
              key={s.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group glass rounded-2xl p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-semibold text-foreground">{s.name}</span>
                <span className="font-mono text-xs text-primary">{s.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-[oklch(0.72_0.27_350)]"
                />
              </div>
              <span className="mt-3 inline-block text-[10px] uppercase tracking-wider text-muted-foreground">
                {s.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
