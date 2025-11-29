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
        </div>
      </section>
      <Footer />
    </main>
  );
}
