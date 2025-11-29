import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";
import FinancialBreakdown from "@/components/FinancialBreakdown";
import Image from "next/image";

export default function Overview() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                PROJECT OBJECTIVES
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                OVERVIEW
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="mb-12 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our design process felt like a sprint up a steep hill. We knew
                from the start that even our MVP was pushing it, so the only way
                to make progress was to move quickly, test ideas often, and
                follow whatever paths created the least friction. We got each
                subsystem working on its own first, almost like scattered puzzle
                pieces, and then slowly brought them together into a single
                system. There were plenty of moments when we disagreed about the
                final design and couldn&apos;t settle on one direction, but each
                time we returned to the MVP to figure out what was truly
                necessary. If something didn&apos;t help us reach that minimal
                goal, we let it go.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Money pushed us to be creative too. Even after adding some of
                our own funds, we still couldn&apos;t afford certain parts like
                a lidar. We borrowed one, struggled with its integration with
                our cart, and was eventually lucky enough to borrow a depth
                camera from another team that better suited our needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn direction="up" delay={0.2}>
              <Card className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl shadow-md h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mechanical
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>[Mechanical objective placeholder 1]</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>[Mechanical objective placeholder 2]</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>[Mechanical objective placeholder 3]</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl shadow-md h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Electrical
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Robust wiring and soldering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Easily able to test parts individually for debugging
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Clear electrical diagrams, so it can be easily
                        understood by others
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <Card className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl shadow-md h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Software
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>[Software objective placeholder 1]</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>[Software objective placeholder 2]</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>[Software objective placeholder 3]</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <Card className="p-8 bg-gray-50 border-0 shadow-lg mt-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  System Overview
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      System Diagram
                    </h3>
                    <div className="flex justify-center">
                      <div className="relative w-full">
                        <Image
                          src="/system-diagram.jpg"
                          alt="System Diagram showing the flow from Raspberry Pi through Depth Camera, UWB Modules, to Front Wheel Drive Modules"
                          width={600}
                          height={450}
                          className="rounded-lg shadow-md"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Data Flow & Energy Diagram
                    </h3>
                    <div className="flex justify-center">
                      <div className="relative w-full">
                        <Image
                          src="/data-flow-energy-diagram.jpg"
                          alt="Data Flow and Energy Diagram showing power distribution (black lines) and communication pathways (purple lines) between Raspberry Pi, sensors, motor controllers, and power systems"
                          width={800}
                          height={600}
                          className="rounded-lg shadow-md"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <Card className="p-8 bg-gray-50 border-0 shadow-lg mt-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Financial Breakdown
                </h2>
                <FinancialBreakdown />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
