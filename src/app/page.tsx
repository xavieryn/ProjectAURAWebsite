import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Video from "@/components/Video";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <Video />
      <Sections />
      <Footer />
    </main>
  );
}
