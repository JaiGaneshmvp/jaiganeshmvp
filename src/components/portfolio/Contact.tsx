import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend, FiCheck, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { SectionTitle } from "./About";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.length > 100) e.name = "Too long";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.length > 1000) e.message = "Max 1000 characters";
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    // Simulate EmailJS send
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1100);
  };

  const socials = [
    { icon: FiGithub, href: "https://github.com/JaiGaneshmvp", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/jai-ganesh-0242582a5/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/JAIGANESH8933/", label: "LeetCode" },
    { icon: SiHackerrank, href: "https://hackerrank.com", label: "HackerRank" },
    { icon: FiMail, href: "mailto:jaiganeshmvp@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Connect" title="Let's build something" />
        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            <p className="text-muted-foreground">
              Have an opportunity, idea, or just want to say hi? My inbox is always open and I'll
              get back within a day.
            </p>
            <a
              href="mailto:jaiganeshmvp@gmail.com"
              className="block glass rounded-2xl p-4 transition-colors hover:bg-white/10"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="text-gradient font-medium">jaiganeshmvp@gmail.com</div>
            </a>
            <div>
              <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                Find me on
              </div>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl glass text-lg text-muted-foreground transition-all hover:scale-110 hover:text-primary"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={submit}
            noValidate
            className="md:col-span-3 glass rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="field"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="field"
                  placeholder="jane@company.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject" error={errors.subject}>
                <input
                  type="text"
                  value={form.subject}
                  maxLength={150}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="field"
                  placeholder="Project inquiry"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" error={errors.message}>
                <textarea
                  rows={5}
                  value={form.message}
                  maxLength={1000}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="field resize-none"
                  placeholder="Tell me about your idea..."
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={sending || sent}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_25px_oklch(0.78_0.18_200/40%)] transition-transform hover:scale-105 disabled:opacity-70"
            >
              {sent ? (
                <>
                  <FiCheck /> Message sent!
                </>
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <FiSend /> Send message
                </>
              )}
            </button>
            <style>{`
              .field {
                width: 100%;
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.1);
                border-radius: 0.75rem;
                padding: 0.65rem 0.9rem;
                font-size: 0.875rem;
                color: var(--color-foreground);
                outline: none;
                transition: all 0.2s;
              }
              .field::placeholder { color: var(--color-muted-foreground); }
              .field:focus {
                border-color: var(--color-primary);
                box-shadow: 0 0 0 3px oklch(0.78 0.18 200 / 20%);
              }
            `}</style>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
