import HeroSection from "./_components/HeroSection";
import WhyPhysioPeak from "./_pages/WhyPhysioPeak";
import ServicesSection from "./_pages/ServicesSection";
import CoverageSection from "./_pages/CoverageSection";
import Testimonials from "./_pages/aboutSections/Testimonials";

export default function Page() {
  return (
    <div>
      <HeroSection
        src="/bg-video-1.mp4"
        headerText="Illawarra Physio Care"
        textOne="Your Health, Our Care."
        text="Our mission is to provide personalised, high-quality physiotherapy care that supports recovery, improves physical wellbeing and empowers individuals to move better, live healthier and enjoy a better quality of life"
        buttonDisplay={true}
      />
      <main className="mx-auto max-w-7xl px-4 py-10 md:px-10 md:py-20">
        <WhyPhysioPeak />
        <ServicesSection />
        <CoverageSection />
        <Testimonials />
      </main>
    </div>
  );
}
