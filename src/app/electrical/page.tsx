import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";

export default function Electrical() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Electrical Overview
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The circuits that connect it all together!
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="right" delay={0.2}>
              <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Power Systems
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Information about battery systems, power distribution, voltage
                      regulation, and energy management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Control Circuits
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Details about motor controllers, sensor interfaces, communication
                      modules, and control electronics.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4}>
            <Card className="p-8 bg-gray-50 border-0 shadow-lg mt-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Circuit Design and Integration
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Add circuit schematics, PCB layouts, wiring diagrams, or any other
                  electrical engineering details here.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}

