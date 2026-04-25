import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0807' }}>

      {/* Canvas particle/mist background — fills entire section incl. angled area */}
      <HeroBackground />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 text-center w-[90%] max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center" style={{ paddingTop: 'clamp(6rem, 12vw, 10rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <h1
          className="font-bold text-white leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 5rem)' }}
        >
          Website Design &<br />
          Marketing Systems<br />
          For Local Businesses
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ marginTop: 'clamp(1.25rem, 2.5vw, 2rem)', fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
          Marketing doesn't have to be complicated. We build you a website with everything built in to capture leads and follow up automatically. Your job is to answer the phone and close.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3" style={{ marginTop: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <a
            href="#cta"
            className="px-8 py-3.5 rounded-full bg-kovia-gold border border-kovia-dark text-white font-semibold hover:brightness-110 transition"
            style={{ fontSize: 'clamp(0.8rem, 1vw, 0.925rem)' }}
          >
            Book A Call
          </a>
          <a
            href="#functional-website"
            className="px-8 py-3.5 rounded-full bg-kovia-dark border border-kovia-gold text-white font-semibold hover:bg-kovia-gold/10 transition"
            style={{ fontSize: 'clamp(0.8rem, 1vw, 0.925rem)' }}
          >
            See What's Included
          </a>
        </div>
      </div>


    </section>
  );
}