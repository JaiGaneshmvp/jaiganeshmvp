import { motion } from "framer-motion";
import { SectionTitle } from "./About";

const items = [
  {
    role: "Full Stack Developer Intern",
    company: "TechNova Labs",
    period: "Jun 2024 – Dec 2024",
    points: [
      "Shipped 3 production features for a SaaS analytics product used by 10k+ users.",
      "Reduced API response time by 38% via query optimization and caching.",
      "Mentored 2 junior interns on React + TypeScript best practices.",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "InnovateX Solutions",
    period: "Jan 2024 – May 2024",
    points: [
      "Built Spring Boot microservices integrated with MySQL and Kafka.",
      "Wrote 120+ unit tests, raising coverage from 54% to 88%.",
      "Migrated legacy monolith endpoints to a clean REST architecture.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2023 – Present",
    points: [
      "Delivered 8+ websites for local businesses and creators.",
      "Built reusable React component libraries used across client projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Journey" title="Experience" />
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="absolute left-3 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary animate-pulse-glow md:left-1/2" />
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="glass rounded-2xl p-5">
                    <span className="font-mono text-xs text-primary">{it.period}</span>
                    <h3 className="mt-1 text-lg font-semibold">{it.role}</h3>
                    <p className="text-sm text-gradient-accent">{it.company}</p>
                    <ul className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {it.points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
