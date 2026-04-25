import Navbar from '../components/kovia/Navbar';
import Hero from '../components/kovia/Hero';
import AngleDivider from '../components/kovia/AngleDivider';
import FeaturesIntro from '../components/kovia/FeaturesIntro';
import FeatureWebsite from '../components/kovia/FeatureWebsite';
import FeatureLeadResponse from '../components/kovia/FeatureLeadResponse';
import FeatureReviewFunnel from '../components/kovia/FeatureReviewFunnel';
import FeatureFollowUp from '../components/kovia/FeatureFollowUp';
import TradesGrid from '../components/kovia/TradesGrid.jsx';
import ProcessSection from '../components/kovia/ProcessSection';
import WhyUsSection from '../components/kovia/WhyUsSection';
import PartnersSection from '../components/kovia/PartnersSection';
import FAQSection from '../components/kovia/FAQSection';
import FinalCTA from '../components/kovia/FinalCTA';
import Footer from '../components/kovia/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Features Intro */}
      <FeaturesIntro />
      <AngleDivider fromColor="#0a0a0a" toColor="#fafafa" direction="right" />

      {/* Functional Website */}
      <section id="functional-website" className="sm-tablet:scroll-mt-[20vh] scroll-mt-[8vh]">
        <FeatureWebsite />
      </section>

      {/* Instant Lead Response */}
      <section id="lead-response" className="sm-tablet:scroll-mt-[20vh] scroll-mt-[8vh]">
        <FeatureLeadResponse />
      </section>

      {/* 5-Star Review Funnel */}
      <section id="review-funnel" className="sm-tablet:scroll-mt-[20vh] scroll-mt-[8vh]">
        <FeatureReviewFunnel />
      </section>

      {/* Automated Lead Follow-Up */}
      <section id="follow-up" className="sm-tablet:scroll-mt-[20vh] scroll-mt-[8vh]">
        <FeatureFollowUp />
      </section>
      <AngleDivider fromColor="#fafafa" toColor="#0D0D0D" direction="right" />

      {/* Trades Grid */}
      <TradesGrid />
      <AngleDivider fromColor="#0D0D0D" toColor="#fafafa" direction="left" />

      {/* Process */}
      <ProcessSection />
      <AngleDivider fromColor="#fafafa" toColor="#0D0D0D" direction="right" />

      {/* Why Us */}
      <WhyUsSection />

      {/* Partners */}
      <PartnersSection />
      <AngleDivider fromColor="#0D0D0D" toColor="#fafafa" direction="left" />

      {/* FAQs */}
      <FAQSection />
      <AngleDivider fromColor="#fafafa" toColor="#0D0D0D" direction="right" />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}