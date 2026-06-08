import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  useEffect(() => rounded.on("change", (v) => { if (ref.current) ref.current.textContent = v; }), [rounded]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { label: "Projects Completed", value: 4, suffix: "+" },
  { label: "Technologies Learned", value: 9, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Problems Solved", value: 150, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="About" title="A bit about me" />
        <div className="grid items-start gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-4 text-muted-foreground"
          >
            <p>
              I'm a passionate Full Stack Developer who loves building things people actually enjoy
              using. From Java/Spring Boot backends to React frontends, I care about clean
              architecture, performance and pixel-perfect interactions.
            </p>
            <p>
              My goal is to join a forward-thinking team where I can ship impactful products,
              continue learning and contribute to open source along the way.
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <Info label="Education" value="B.E, Computer Science And Engineering" />
              <Info label="Location" value="Remote, Chennai, Coimbatore, Bangalore" />
              <Info label="Experience" value="Fresher" />
              <Info label="Languages" value="English, Tamil" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl px-4 py-3">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-sm font-medium text-foreground">{value}</div>
    </div>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </motion.div>
  );
}
