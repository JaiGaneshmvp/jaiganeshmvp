import { motion } from "framer-motion";
import { FiTrendingUp, FiZap, FiTarget, FiStar } from "react-icons/fi";
import { SectionTitle } from "./About";

const items = [
  { icon: FiTrendingUp, title: "650+ DSA problems solved", note: "LeetCode, GFG, HackerRank" },
  { icon: FiZap, title: "Top 5% — National Hackathon", note: "Built a healthcare AI assistant in 36h" },
  { icon: FiTarget, title: "5-star problem solver on HackerRank", note: "Java & Problem Solving" },
  { icon: FiStar, title: "Open-source contributor", note: "Merged PRs in 8+ public repos" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Highlights" title="Achievements" />
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                <it.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
