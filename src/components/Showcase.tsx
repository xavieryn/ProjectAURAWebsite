"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./FadeIn";

export default function Showcase() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { id: 1, name: "Laptop", color: "bg-blue-500" },
    { id: 2, name: "Phone", color: "bg-green-500" },
    { id: 3, name: "Headphones", color: "bg-purple-500" },
    { id: 4, name: "Watch", color: "bg-orange-500" },
  ];

  return (
    <section id="showcase" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automated Shopping Cart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch as items automatically find their way into the cart - a
              demonstration of intelligent automation
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animation Area */}
            <div className="relative">
              <Card className="p-8 bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                    {/* Store shelves */}
                    <div className="absolute top-4 left-4 right-4 h-32 bg-white rounded border-2 border-gray-200 shadow-sm">
                      <div className="p-4 h-full flex items-center justify-between">
                        {items.map((item, index) => (
                          <motion.div
                            key={item.id}
                            className={`w-12 h-12 ${item.color} rounded-lg shadow-md relative`}
                            animate={
                              isAnimating && index === 0
                                ? {
                                    x: [0, 200, 280],
                                    y: [0, 0, 80],
                                    scale: [1, 0.8, 0.6],
                                  }
                                : {}
                            }
                            transition={{ duration: 2, ease: "easeInOut" }}
                          >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium whitespace-nowrap">
                              {item.name}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Shopping cart */}
                    <div className="absolute bottom-8 right-8">
                      <motion.div
                        className="w-24 h-16 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center relative"
                        animate={isAnimating ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      >
                        <div className="text-white text-2xl">🛒</div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            1
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Automation indicator */}
                    <motion.div
                      className="absolute top-8 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      animate={isAnimating ? { opacity: [0.5, 1, 0.5] } : {}}
                      transition={{
                        duration: 0.5,
                        repeat: isAnimating ? Infinity : 0,
                      }}
                    >
                      AI Active
                    </motion.div>

                    {/* Path lines */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <motion.path
                        d="M 80 120 Q 160 120 240 200"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={
                          isAnimating ? { pathLength: 1 } : { pathLength: 0 }
                        }
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </motion.svg>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <FadeIn direction="left" delay={0.4}>
                <h3 className="text-2xl font-bold text-gray-900">
                  Intelligent Automation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This demo showcases an automated shopping cart system that
                  uses AI to predict and fulfill customer needs. Items are
                  intelligently selected and added to the cart based on user
                  preferences and behavior patterns.
                </p>
              </FadeIn>

              <FadeIn direction="left" delay={0.6}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Smart item detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Automated cart management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Real-time inventory updates
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Predictive recommendations
                    </span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.8}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsAnimating(true)}
                >
                  Trigger Demo
                </motion.button>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
