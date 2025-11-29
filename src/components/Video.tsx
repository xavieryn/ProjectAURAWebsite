"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./FadeIn";

export default function Video() {
  return (
    <section id="video" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              View Our Machine in Action!
            </h2>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-gray-600 text-lg">
                    Video placeholder - Insert your video here
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Your browser does not support HTML5 video.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

