"use client";

import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Contact, Footer } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Separator className="mx-auto max-w-6xl opacity-30" />
      <About />
      <Separator className="mx-auto max-w-6xl opacity-30" />
      <Experience />
      <Separator className="mx-auto max-w-6xl opacity-30" />
      <Skills />
      <Separator className="mx-auto max-w-6xl opacity-30" />
      <Education />
      <Separator className="mx-auto max-w-6xl opacity-30" />
      <Contact />
      <Footer />
    </div>
  );
}
