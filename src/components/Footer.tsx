"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Project AURA</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            A smart, autonomous cart that carries your heavy stuff and follows
            you so you never have to haul it yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToTop}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
            >
              Back to Top
            </Button>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2025 Project AURA. Principles of Integrated Engineering.
                </p>
              </div>

              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Zaraius/AURA.git"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Zaraius/AURA.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                ></motion.a>
              </div>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
