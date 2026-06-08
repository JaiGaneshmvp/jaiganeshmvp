import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { SectionTitle } from "./About";

const items = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "National Institute of Technology",
    period: "2021 – 2025",
    grade: "CGPA: 8.7 / 10",
  },
  {
    degree: "Higher Secondary (PCM)",
    school: "Delhi Public School",
    period: "2019 – 2021",
    grade: "92.4%",
  },
  {
    degree: "Secondary (CBSE)",
    school: "Delhi Public School",
    period: "2018 – 2019",
    grade: "94.6%",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Learning" title="Education" />
        <div className="grid gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                <FiBookOpen size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{it.degree}</h3>
                  <span className="font-mono text-xs text-primary">{it.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{it.school}</p>
                <p className="mt-1 text-sm text-gradient-accent">{it.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
