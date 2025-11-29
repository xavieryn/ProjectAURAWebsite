"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn direction="up" delay={0.2}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Project AURA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8"
          >
            Autonomous Robot Assistant
          </motion.p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            AURA is a smart, autonomous cart that carries your heavy stuff and follows you so you never have to haul it yourself.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            AURA is a 200-lb-capacity autonomous robot cart built to spare you from the grunt work of carrying heavy loads. It uses computer vision and UWB tracking to follow you through crowded or cluttered spaces, avoiding obstacles along the way. Whether you're moving out, navigating an airport, or just juggling too much at once, AURA lets you focus on where you're going while it handles the weight.
          </motion.p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/overview">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
