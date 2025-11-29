import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";

export default function Software() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Software/Firmware Overview
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brains of the project
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="right" delay={0.2}>
              <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Computer Vision
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Details about object detection, tracking algorithms,
                      obstacle avoidance, and vision processing systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    UWB Tracking
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Information about Ultra-Wideband tracking implementation,
                      position calculation, and following algorithms.
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
                  System Integration and Control
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Add information about firmware architecture, state machines,
                  sensor fusion, motor control algorithms, or any other
                  software-related details here.
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
