import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 md:py-28 px-6" style={{ backgroundColor: '#0D0D0D' }}>
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
            Want to schedule a time to talk?
          </h2>

          {/* Subhead */}
          <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: '#888' }}>
            See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
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
  );
}