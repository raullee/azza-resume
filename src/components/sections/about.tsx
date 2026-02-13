"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Globe, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    label: "Multilingual",
    description: "Fluent in Malay & English, basic Japanese (JLPT N5)",
  },
  {
    icon: Users,
    label: "People-First",
    description: "Natural rapport builder across diverse teams & clients",
  },
  {
    icon: Zap,
    label: "Adaptable",
    description: "Thrives in fast-paced, dynamic environments",
  },
  {
    icon: Sparkles,
    label: "Detail-Oriented",
    description: "Meticulous in documentation & record management",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </span>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Bringing warmth, precision,
            <br />
            and reliability to every role.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A versatile professional with over a decade of experience spanning
            hospitality, administration, human resources, and customer service.
            Known for building genuine connections, maintaining impeccable
            records, and bringing positive energy to every team. Equally
            comfortable managing a busy front desk, coordinating HR operations,
            or ensuring every guest leaves with a smile.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-transform group-hover:scale-110">
                <item.icon size={22} />
              </div>
              <h3 className="mb-2 font-semibold">{item.label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 rounded-2xl border border-border/50 bg-card/30 p-8 sm:grid-cols-4"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "6+", label: "Industries" },
            { value: "3", label: "Languages" },
            { value: "5-Star", label: "Service Standards" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-1 text-2xl font-bold gradient-text sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
