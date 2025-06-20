import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Courses from "@/Components/Courses";
import Features from "@/Components/Features";
import CallToAction from "@/Components/CallToAction";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
