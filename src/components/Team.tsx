"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./FadeIn";

export default function Team() {
  const teamMembers = [
    { name: "Kefan Wu", role: "Mechanical" },
    { name: "Addison Fisher", role: "Mechanical" },
    { name: "Zaraius Bilamoria", role: "Software" },
    { name: "Jack Wei", role: "Software" },
    { name: "Xavier Nishikawa", role: "Electrical & Project Management" },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} direction="up" delay={index * 0.1}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-gray-400">👤</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
