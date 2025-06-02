'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <section className="text-center space-y-4">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>Abhinav Sethi</motion.h1>
        <motion.p className="text-xl text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.2 }}>Mentor • Software Engineer • AI/ML Explorer • EBC Trekker</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.4 }}>
          <Button className="mt-4">Book a Free Consultation</Button>
        </motion.div>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What I Offer</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Software Project Management Coaching</li>
              <li>Software Testing & Pipeline Workshops</li>
              <li>AI/ML Career Mentorship</li>
              <li>Product Management Guidance</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Personal Achievements</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Completed the Everest Base Camp (EBC) Trek</li>
              <li>PGP in AI & ML | MBA from IIM Lucknow</li>
              <li>Senior Lead Engineer @ Adobe</li>
              <li>Public Speaker & Workshop Host</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-12 text-center">
        <p className="text-gray-500">Want to learn more or work together?</p>
        <Button variant="outline" className="mt-2">Connect with Me</Button>
      </section>
    </main>
  );
} 