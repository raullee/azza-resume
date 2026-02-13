"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send, Clock, Heart } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "shaninaazman@gmail.com",
    href: "mailto:shaninaazman@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+60 11-1665 2707",
    href: "tel:+60111652707",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cheras, Kuala Lumpur",
    href: null,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative px-6 py-32" ref={ref}>
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "oklch(0.75 0.15 280)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-primary">
            Let&apos;s Connect
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Contribute
          </h2>
          <p className="mx-auto mb-4 max-w-lg text-muted-foreground">
            Seeking part-time opportunities where I can bring my administrative
            expertise, warm hospitality spirit, and multilingual skills to your
            team.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent"
          >
            <Clock size={14} />
            Available for part-time &amp; flexible arrangements
          </motion.div>
        </motion.div>

        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-3">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              {method.href ? (
                <motion.a
                  href={method.href}
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  whileHover={{ y: -4 }}
                >
                  <div className="inline-flex rounded-xl bg-primary/10 p-4 text-primary transition-transform group-hover:scale-110">
                    <method.icon size={22} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium">{method.value}</p>
                  </div>
                </motion.a>
              ) : (
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-8">
                  <div className="inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                    <method.icon size={22} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium">{method.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <motion.a
            href="mailto:shaninaazman@gmail.com?subject=Part-Time Opportunity"
            className="animated-border inline-flex rounded-full p-[1px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-3 text-sm font-medium">
              <Send size={16} />
              Send a Message
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Azza Shanina. All rights reserved.
        </p>
        <p className="flex items-center gap-1 text-xs text-muted-foreground">
          Crafted with <Heart size={12} className="text-accent" /> in Kuala Lumpur
        </p>
      </div>
    </footer>
  );
}
