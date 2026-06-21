"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-8 rounded-full bg-secondary" />;
  }

  const isDark = theme === "dark";
  console.log(theme);

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full bg-secondary border border-border p-1 transition-colors hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? <Moon className="w-3.5 h-3.5 text-primary-foreground" /> : <Sun className="w-3.5 h-3.5 text-primary-foreground" />}
      </motion.div>
    </motion.button>
  );
}
