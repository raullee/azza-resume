"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "SPM (Sijil Pelajaran Malaysia)",
    school: "SMK Tebobon",
    location: "Kota Kinabalu, Sabah",
    year: "2014",
    note: "Private Candidate",
    icon: Award,
  },
  {
    degree: "Secondary Education",
    school: "SM All Saints",
    location: "Likas, Kota Kinabalu, Sabah",
    year: "2009 - 2013",
    note: "Full secondary schooling",
    icon: GraduationCap,
  },
];

const continuousLearning = [
  "Japanese Language (JLPT N5 Level)",
  "Microsoft Office Suite Proficiency",
  "Customer Service Excellence Training",
  "HR Operations & Compliance Fundamentals",
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-transform group-hover:scale-110">
                <edu.icon size={24} />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{edu.degree}</h3>
              <p className="text-primary">{edu.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {edu.location}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {edu.year}
                </span>
                {edu.note && (
                  <span className="text-xs text-muted-foreground">
                    {edu.note}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 rounded-2xl border border-border/50 bg-card/30 p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent">
              <BookOpen size={20} />
            </div>
            <h3 className="font-semibold">Professional Development</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {continuousLearning.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
