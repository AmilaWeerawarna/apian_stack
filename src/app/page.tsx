import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}