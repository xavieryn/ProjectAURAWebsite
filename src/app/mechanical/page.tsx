import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";

export default function Mechanical() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Mechanical Overview
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we made the frame, mounts, and more!
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="right" delay={0.2}>
              <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Frame Design
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Insert information about the frame design, materials used, and
                      structural considerations here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Mounts and Assembly
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Details about mounting systems, assembly process, and mechanical
                      integration components.
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
                  Additional Mechanical Components
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Add more mechanical details, CAD drawings, manufacturing processes, or
                  any other relevant mechanical engineering information here.
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

