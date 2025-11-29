"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Sections() {
  const sections = [
    {
      title: "Mechanical",
      description: "How we made the frame, mounts, and more!",
      link: "/mechanical",
    },
    {
      title: "Electrical",
      description: "The circuits that connect it all together!",
      link: "/electrical",
    },
    {
      title: "Software",
      description: "The brains of the project",
      link: "/software",
    },
  ];

  return (
    <section id="sections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <FadeIn key={section.title} direction="up" delay={index * 0.1}>
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {section.description}
                  </p>
                  <Link href={section.link}>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

