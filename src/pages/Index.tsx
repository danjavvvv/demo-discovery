
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
