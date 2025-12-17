import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CodeInput from "@/components/CodeInput";
import Features from "@/components/Features";
import Languages from "@/components/Languages";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CodeInput />
        <Features />
        <Languages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
