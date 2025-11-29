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

          <FadeIn direction="up" delay={0.1}>
            <Card className="p-8 bg-gray-50 border-0 shadow-lg mb-12">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Electrical Diagram
                </h2>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-4xl bg-gray-200 rounded-lg flex items-center justify-center min-h-[400px]">
                    <p className="text-gray-500 text-lg">
                      [Placeholder for Electrical Diagram]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <Card className="p-8 bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    The electrical system originally began with three voltages: 24V, 12V, and 5V. We later simplified the design after realizing the 12V rail was unnecessary because we were no longer using the 12V lidar. All high-power components could run directly from the 24V battery, and the low-power devices did not require a dedicated 5V supply. Instead, we used a high-wattage power bank, which provided an integrated BMS and safely powered the Raspberry Pi, USB camera, and UWB modules. This reduced complexity and increased system safety.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>24V system:</strong> Breakers were sized slightly above the continuous current draw of each motor.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>5V system:</strong> All 5V devices were powered through the Raspberry Pi, which was connected to a high-wattage power bank.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Mounting:</strong> 3D printed C-clamps secured the electrical system to the underside of the cart.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Power distribution:</strong> Wago connectors were used on power lines to make it easy to isolate and test individual components.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Communication lines:</strong> Soldered connections were used because communication signals are more sensitive and require reliable joints.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Prototyping:</strong> We transitioned from solderless breadboards to soldered boards to improve robustness during testing.
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-3 text-gray-900 font-semibold">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        <strong>Cable management:</strong> Velcro zip ties were used to organize and bundle wiring.
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}

