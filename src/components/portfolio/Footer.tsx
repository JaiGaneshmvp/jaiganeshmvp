import { useEffect, useState } from "react";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <footer className="relative border-t border-border/50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <div className="font-mono text-lg font-bold text-gradient">{"<dev/>"}</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Designing and shipping delightful software, one commit at a time.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow</h4>
          <div className="mt-3 flex gap-3 text-lg text-muted-foreground">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-primary"><FiGithub /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary"><FiLinkedin /></a>
            <a href="https://leetcode.com" aria-label="LeetCode" className="hover:text-primary"><SiLeetcode /></a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-primary"><FiMail /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Alex Carter. Built with React, TypeScript & Framer Motion.
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.18_200/50%)] transition-transform hover:scale-110"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
