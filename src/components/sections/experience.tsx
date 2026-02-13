"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
  Hotel,
  UtensilsCrossed,
  Users,
  HeartPulse,
} from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: React.ElementType;
  highlights: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    title: "Admin, Secretary & Sales Executive",
    company: "Wellmedik Sdn Bhd",
    location: "Kuala Lumpur",
    period: "2025",
    type: "Healthcare Industry",
    icon: HeartPulse,
    highlights: [
      "Drove sales pipeline through proactive client engagement and strategic follow-ups",
      "Managed executive-level documentation, correspondence, and scheduling",
      "Served as primary liaison between management, clients, and internal teams",
      "Coordinated multi-stakeholder appointments and maintained CRM records",
    ],
    tags: ["Sales", "Administration", "Client Relations", "Healthcare"],
  },
  {
    title: "Receptionist & Administrative Officer",
    company: "JSK Borneo Reef",
    location: "Kota Kinabalu, Sabah",
    period: "2023 - 2024",
    type: "Tourism & Hospitality",
    icon: Building2,
    highlights: [
      "Managed all front-desk operations, serving as the first point of contact for guests and partners",
      "Processed bookings, handled inquiries, and resolved customer concerns with professionalism",
      "Maintained accurate records and streamlined office administration processes",
      "Delivered consistently excellent service in a high-volume tourism environment",
    ],
    tags: ["Front Desk", "Bookings", "Customer Service", "Tourism"],
  },
  {
    title: "Service Team Member",
    company: "1957 Kopi + Makan",
    location: "De Centrum Mall, KL",
    period: "2019 - 2021",
    type: "Food & Beverage",
    icon: UtensilsCrossed,
    highlights: [
      "Delivered attentive, warm service in a popular fast-paced dining establishment",
      "Managed cash handling, POS transactions, and daily reconciliation with accuracy",
      "Coordinated table flow and service during high-traffic peak hours",
    ],
    tags: ["F&B Service", "Cash Handling", "Fast-Paced Operations"],
  },
  {
    title: "Human Resource Coordinator",
    company: "The Gardens Hotel",
    location: "Mid Valley, Kuala Lumpur",
    period: "2018 - 2019",
    type: "Luxury Hospitality",
    icon: Users,
    highlights: [
      "Orchestrated end-to-end recruitment processes: candidate sourcing, interview scheduling, and onboarding",
      "Maintained comprehensive employee records, attendance, and leave management systems",
      "Coordinated staff orientation, training programs, and professional development sessions",
      "Acted as a trusted HR liaison between management and employees across departments",
      "Ensured compliance with company policies, labor regulations, and HR best practices",
    ],
    tags: ["HR Operations", "Recruitment", "Onboarding", "Compliance", "Employee Relations"],
  },
  {
    title: "Cashier & Service Team",
    company: "Poke Bear",
    location: "Sunway Pyramid, KL",
    period: "2016",
    type: "Food & Beverage",
    icon: UtensilsCrossed,
    highlights: [
      "Handled high-volume POS transactions and cash management with precision",
      "Contributed to store opening/closing procedures and inventory checks",
    ],
    tags: ["POS Systems", "Cash Management", "F&B"],
  },
  {
    title: "Banquet & Restaurant Waitress",
    company: "Le Meridien Hotel",
    location: "Kota Kinabalu, Sabah",
    period: "2012 & 2016",
    type: "International Luxury Hotel",
    icon: Hotel,
    highlights: [
      "Upheld 5-star service standards for banquet events and fine dining operations",
      "Delivered seamless guest experiences in both à la carte and large-scale event settings",
      "Built foundational hospitality skills at an internationally recognised luxury brand",
    ],
    tags: ["5-Star Service", "Banquets", "Fine Dining", "International Standards"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative px-6 py-32" ref={ref}>
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-1/3 h-[600px] w-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "oklch(0.72 0.18 330)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">
            Career Journey
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} experience={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  experience: exp,
  index,
  isInView,
}: {
  experience: Experience;
  index: number;
  isInView: boolean;
}) {
  const Icon = exp.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group relative pl-16"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex h-[47px] w-[47px] items-center justify-center">
        <motion.div
          className="flex h-[47px] w-[47px] items-center justify-center rounded-full border-2 border-primary/30 bg-card text-primary transition-all group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10"
          whileHover={{ scale: 1.1 }}
        >
          <Icon size={18} />
        </motion.div>
      </div>

      {/* Content card */}
      <div className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-primary">{exp.company}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {exp.location} &middot; {exp.type}
            </p>
          </div>
          <Badge
            variant="outline"
            className="shrink-0 border-primary/20 bg-primary/5 text-xs text-primary"
          >
            {exp.period}
          </Badge>
        </div>

        <ul className="mb-4 space-y-2">
          {exp.highlights.map((h, j) => (
            <li
              key={j}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
