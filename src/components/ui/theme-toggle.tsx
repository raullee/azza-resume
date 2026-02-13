"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export function ThemeToggle({ className = "", size = 18 }: { className?: string; size?: number }) {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a placeholder during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`rounded-full p-2 opacity-0 ${className}`}
        style={{ width: `${size + 16}px`, height: `${size + 16}px` }}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-primary/10 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
      >
        {theme === "dark" ? <Sun size={size} /> : <Moon size={size} />}
      </motion.div>
    </motion.button>
  );
}