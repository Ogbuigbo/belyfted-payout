import Footer from "../_partials/Footer";
import Header from "../_partials/Header";
import Hero from "../_partials/Hero";
import Head from "next/head";
import OurPartners from "../_partials/OurPartners";
import BestPayment from "../_partials/BestPayment";
import Features from "../_partials/Features";
import Values from "../_partials/Values";
import CTASection from "../_partials/CTASection";
import EffortlessPayout from "../_partials/EffortlessPayout";
import WhyYode from "../_partials/WhyYode";
import DashboardSection from "../_partials/DashboardSection";
import TestimonialsSection from "../_partials/Testimonial";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <OurPartners />
      <BestPayment />
      <Features />
      <Values />
      <EffortlessPayout />
      <WhyYode />
      <DashboardSection />
      <TestimonialsSection />
      <CTASection />
      <Head>
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dpkn1ppzj/image/upload/q_auto,f_auto,w_1920/Bg_mlwpjf.png"
        />
      </Head>
    </div>
  );
}
