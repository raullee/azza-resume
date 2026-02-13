"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Languages,
  MessageSquare,
  ClipboardList,
  HeadphonesIcon,
  Monitor,
  RefreshCw,
  FileSpreadsheet,
  Presentation,
  FileText,
  Phone,
  Calendar,
  FolderOpen,
} from "lucide-react";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ElementType; level?: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Bahasa Melayu", icon: Languages, level: 100 },
      { name: "English", icon: Languages, level: 95 },
      { name: "Japanese (N5)", icon: Languages, level: 25 },
    ],
  },
  {
    title: "Administration",
    skills: [
      { name: "Scheduling & Calendar Management", icon: Calendar },
      { name: "Filing & Document Control", icon: FolderOpen },
      { name: "Office Coordination", icon: ClipboardList },
      { name: "Record Keeping", icon: FileText },
    ],
  },
  {
    title: "Communication",
    skills: [
      { name: "Interpersonal Skills", icon: MessageSquare },
      { name: "Phone & Email Handling", icon: Phone },
      { name: "Client Relations", icon: HeadphonesIcon },
      { name: "Cross-Cultural Communication", icon: Languages },
    ],
  },
  {
    title: "Software & Tools",
    skills: [
      { name: "Microsoft Word", icon: FileText },
      { name: "Microsoft Excel", icon: FileSpreadsheet },
      { name: "Microsoft PowerPoint", icon: Presentation },
      { name: "POS Systems", icon: Monitor },
    ],
  },
];

const softSkills = [
  "Team Player",
  "Problem Solving",
  "Time Management",
  "Multitasking",
  "Attention to Detail",
  "Work Ethic",
  "Positive Attitude",
  "Quick Learner",
  "Reliability",
  "Initiative",
  "Flexibility",
  "Professionalism",
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative px-6 py-32" ref={ref}>
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "oklch(0.75 0.15 280)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">
            Expertise
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Competencies
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card/50 p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <skill.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{skill.name}</span>
                      </div>
                      {skill.level !== undefined && (
                        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, oklch(0.75 0.15 280), oklch(0.72 0.18 330))",
                            }}
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.level}%` }
                                : { width: 0 }
                            }
                            transition={{
                              duration: 1.2,
                              delay: 0.5 + i * 0.1,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-primary">
            Core Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.05 }}
                className="rounded-full border border-border/50 bg-card/50 px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-lg hover:shadow-primary/5"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
