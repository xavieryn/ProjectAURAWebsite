import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/FadeIn";

export default function DesignProcess() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-24 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Design Process
              </h1>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Overview
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our design process felt like a sprint up a steep hill. We knew
                  from the start that even our MVP was pushing it, so the only
                  way to make progress was to move quickly, test ideas often,
                  and follow whatever paths created the least friction. We got
                  each subsystem working on its own first, almost like scattered
                  puzzle pieces, and then slowly brought them together into a
                  single system. There were plenty of moments when we disagreed
                  about the final design and couldn&apos;t settle on one
                  direction, but each time we returned to the MVP to figure out
                  what was truly necessary. If something didn&apos;t help us
                  reach that minimal goal, we let it go.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Money pushed us to be creative too. Even after adding some of
                  our own funds, we still couldn&apos;t afford certain parts
                  like a lidar. We borrowed one, struggled with its integration
                  with our cart, and was eventually lucky enough to borrow a
                  depth camera from another team that better suited our needs.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Biggest Design Decisions
              </h2>

              <div className="space-y-8">
                {/* Why ROS? */}
                <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Why ROS?
                      </h3>
                      <span className="text-gray-600 text-sm font-medium">
                        Zaraius
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      [Placeholder - Zaraius will add content here]
                    </p>
                  </CardContent>
                </Card>

                {/* Why Swerve? */}
                <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Why Swerve?
                      </h3>
                      <span className="text-gray-600 text-sm font-medium">
                        Addison and Kefan
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      [Placeholder - Addison and Kefan will add content here]
                    </p>
                  </CardContent>
                </Card>

                {/* Why Depth Camera? */}
                <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Why Depth Camera?
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We chose a depth camera over a 360-degree lidar because we
                      couldn&apos;t find a good way to mount the lidar where it
                      could actually see everything around the cart. The best we
                      could do was place it in the front, which would have
                      limited it to about 180 degrees of coverage. On top of
                      that, the lidar we had access to was older and much harder
                      to work with. It needed PoE and a more complicated setup,
                      while the depth camera (a RealSense) connected cleanly
                      over USB-C and already had a ROS2 integration we could use
                      right away. The existing ROS2 publisher made it simple to
                      get depth data streaming, so the depth camera ended up
                      being the most practical choice for our system.
                    </p>
                  </CardContent>
                </Card>

                {/* Why UWB? */}
                <Card className="p-8 bg-gray-50 border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Why UWB?
                      </h3>
                      <span className="text-gray-600 text-sm font-medium">
                        Jack
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      [Placeholder - Jack will add content here]
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  );
}
