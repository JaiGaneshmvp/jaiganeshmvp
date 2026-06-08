import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import avatar from "@/assets/avatar.png";

const titles = [
  "Full Stack Developer",
  "Java Developer",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => (p + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient-accent">
      {text}
      <span className="animate-blink ml-0.5">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* floating orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </motion.span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-gradient">Jai Ganesh</span>
          </h1>
          <p className="mt-4 text-xl font-medium md:text-2xl">
            <Typewriter />
          </p>
          <p className="mt-5 max-w-lg text-muted-foreground">
            I craft scalable, performant web experiences with React, Node, Spring Boot and modern
            cloud tooling — turning complex problems into clean, delightful products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.18_200/50%)] transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <FiMail /> Contact
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xl text-muted-foreground">
            <a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-primary">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="transition-colors hover:text-primary">
              <FiLinkedin />
            </a>
            <a href="https://leetcode.com" aria-label="LeetCode" className="transition-colors hover:text-primary">
              <SiLeetcode />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-3xl" />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl glass p-3 glow">
              <img
                src={avatar}
                alt="Alex Carter avatar"
                width={420}
                height={420}
                className="h-72 w-72 rounded-2xl object-cover sm:h-96 sm:w-96"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -right-4 -top-4 rounded-2xl glass px-3 py-2 font-mono text-xs text-primary"
            >
              {"</>"}
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-2xl glass px-3 py-2 text-xs"
            >
              <span className="text-gradient-accent font-semibold">Fresher</span>{" "}
              <span className="text-muted-foreground">coding</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
