import Image from "next/image";
import Hero from "../components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import HowItWorks from "@/components/HowItWorks";
import MoreFeatures from "@/components/MoreFeatures";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BlogPage from "@/components/BlogPage";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <KeyFeatures />
        <HowItWorks />
        <MoreFeatures />
        <Security />
        <Testimonials />
        <Pricing />
        <BlogPage />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
