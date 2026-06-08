import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { SectionTitle } from "./About";

const certs = [
  { name: "Oracle Certified Java Programmer", issuer: "Oracle", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Meta Front-End Developer", issuer: "Meta / Coursera", year: "2023" },
  { name: "Full Stack Web Development", issuer: "Udemy", year: "2023" },
  { name: "MongoDB Developer Path", issuer: "MongoDB University", year: "2024" },
  { name: "Problem Solving (Intermediate)", issuer: "HackerRank", year: "2023" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-all group-hover:bg-accent/30" />
              <FiAward className="text-3xl text-primary" />
              <h3 className="mt-4 font-semibold">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer} · {c.year}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-xs text-gradient-accent hover:underline"
              >
                View certificate <FiExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
