import Navbar from '../components/kovia/Navbar';
import Footer from '../components/kovia/Footer';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  { src: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/de8675cd4_CleanslateDemoMockup.png', alt: 'Cleanslate Pressure Washing' },
  { src: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/2ca1c67c6_SummitRoofingCoDemoMockup.png', alt: 'Summit Roofing Co' },
  { src: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/c27a37d27_SpotlessDemoMockup.png', alt: 'Spotless Cleaning' },
  { src: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/ee4c88d09_ClearViewGlassRepairDemoMockup.png', alt: 'ClearView Glass Repair' },
  { src: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/9607e42c4_GreenscapeLandscapingDemoMockup.png', alt: 'Greenscape Landscaping' },
  { src: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/4bf7f7783_AzureDemoMockup.png', alt: 'Azure Pool Design' },
];

function PortfolioCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <img src={item.src} alt={item.alt} className="w-full h-auto object-cover" />
    </div>
  );
}

export default function OurWork() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      <Navbar activePage="Our Work" />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-medium text-white leading-tight max-w-3xl mx-auto">
          Look at what we've done for other businesses
        </h1>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item, i) => (
            <PortfolioCard key={i} item={item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-16 md:p-24 flex flex-col items-center text-center"
            style={{
              backgroundColor: '#1a1a1a',
              border: '1.5px solid rgba(179, 137, 102, 0.6)',
            }}
          >
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-medium text-white leading-tight max-w-2xl">
              Want a site like these?
            </h2>

            {/* Subhead */}
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: '#888' }}>
              Book a call and we'll build one for your business.
            </p>

            {/* CTA Button */}
            <a
              href="/contact"
              className="mt-12 inline-flex items-center gap-2 px-9 py-4 rounded-full bg-kovia-gold text-white font-semibold text-base hover:brightness-110 transition"
            >
              Book A Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}