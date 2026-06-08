import { motion } from "framer-motion";
import { FiDownload, FiPrinter, FiFileText } from "react-icons/fi";
import { SectionTitle } from "./About";

export default function Resume() {
  return (
    <section id="resume" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Profile" title="My resume" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
              <FiFileText size={26} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Jai Ganesh  — Full Stack Developer</h3>
              <p className="mt-2 text-muted-foreground">
                Results-driven developer with proven experience building production-grade web
                applications using Java/Spring Boot and modern web technologies. Strong fundamentals in DSA,
                clean architecture and product thinking. Looking for opportunities to ship meaningful
                software with thoughtful teams.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_oklch(0.78_0.18_200/40%)] transition-transform hover:scale-105"
            >
              <FiDownload /> Download Resume
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
            >
              <FiPrinter /> Print Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
