"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./FadeIn";

export default function About() {
  const highlights = [
    { label: "Why", value: "Demonstrate a cart concept in motion" },
    { label: "How", value: "Framer Motion + React state to animate items" },
    { label: "Scope", value: "Visual demo only, no backend or checkout" },
    { label: "Tech", value: "Next.js, TypeScript, TailwindCSS" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About This Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The goal of this site is simple: visually show items moving into a
              shopping cart. It is a focused showcase rather than a full app.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <FadeIn direction="right" delay={0.2}>
            <Card className="p-8 bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Highlights
                </h3>
                <div className="space-y-6">
                  {highlights.map((h, index) => (
                    <motion.div
                      key={h.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {h.label}
                        </span>
                        <span className="text-gray-500 text-sm">{h.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gray-900 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What you are seeing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The animation in the Demo section periodically moves an item
                  from a shelf into a cart icon, simulating an automated
                  add-to-cart action. It’s designed to be visually clear and
                  easy to follow.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  There’s intentionally no login, product catalog, or checkout
                  flow. This keeps the scope tight and focused on the cart
                  animation itself.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    60s
                  </div>
                  <div className="text-gray-600 text-sm">
                    Time to grok concept
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
                  <div className="text-gray-600 text-sm">
                    Dependencies required to try
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              FAQ
            </h3>
            <div className="space-y-6">
              {[
                {
                  q: "Is this production-ready?",
                  a: "No. It’s a visual demo only.",
                },
                {
                  q: "Can I integrate a real backend?",
                  a: "Yes, but out of scope here.",
                },
                {
                  q: "Where is the animation?",
                  a: "See the Demo section above.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <p className="text-gray-900 font-semibold mb-1">{item.q}</p>
                  <p className="text-gray-600">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
