"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold text-gray-900 cursor-pointer"
            >
              Project AURA
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-200 font-medium ${
                pathname === "/"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              href="/overview"
              className={`transition-colors duration-200 font-medium ${
                pathname === "/overview"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Overview
            </Link>
            <Link
              href="/design-process"
              className={`transition-colors duration-200 font-medium ${
                pathname === "/design-process"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Design Process
            </Link>
            <Link
              href="/mechanical"
              className={`transition-colors duration-200 font-medium ${
                pathname === "/mechanical"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Mechanical
            </Link>
            <Link
              href="/electrical"
              className={`transition-colors duration-200 font-medium ${
                pathname === "/electrical"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Electrical
            </Link>
            <Link
              href="/software"
              className={`transition-colors duration-200 font-medium ${
                pathname === "/software"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Software
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">Menu</button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
