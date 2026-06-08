import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-24 w-24 rounded-full border-2 border-transparent border-t-primary border-r-accent"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-[oklch(0.72_0.27_350)]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-sm text-gradient">{"</>"}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
