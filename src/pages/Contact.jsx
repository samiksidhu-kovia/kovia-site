import { useEffect } from 'react';
import Navbar from '../components/kovia/Navbar';
import FinalCTA from '../components/kovia/FinalCTA';
import Footer from '../components/kovia/Footer';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      <Navbar activePage="Contact" />

      {/* Headline */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-medium text-white leading-tight max-w-3xl mx-auto">
          Want to book a time to talk?
        </h1>
      </section>

      {/* Calendly Embed */}
      <section className="pb-20 px-6">
        <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
          <div
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/samiksidhu/30min?hide_gdpr_banner=1&text_color=0b0b0b"
            style={{ minWidth: '320px', height: '820px' }}
          />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}