import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  [
    { name: 'Roofing', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/ab2b517a0_image.png' },
    { name: 'Plumbing', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/d41b82dae_image.png' },
    { name: 'HVAC', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/e205b44ed_image.png' },
    { name: 'Electricians', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/4e50c3791_image.png' },
    { name: 'Painters', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/236a24a9e_image.png' },
    { name: 'Landscapers', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/356e606bc_image.png' },
  ],
  [
    { name: 'Windows & Doors', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/f52a82f7a_image.png' },
    { name: 'Remodelers', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/04d9332ae_image.png' },
    { name: 'Pressure Washing', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/5b16aae39_image.png' },
    { name: 'Carpet & Floor Cleaning', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/dbcb83439_image.png' },
    { name: 'Pet Grooming', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/b46f148e8_image.png' },
    { name: 'Moving', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/47e1602b1_image.png' },
  ],
  [
    { name: 'Handyman', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/6f1ff20e2_image.png' },
    { name: 'Patios & Decks', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/ed2993c59_image.png' },
    { name: 'Siding', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/5a81c56ef_image.png' },
    { name: 'Pool Construction', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/feddc87a3_image.png' },
    { name: 'Hardscaping', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/aeacd4153_image.png' },
    { name: 'General Contractors', image: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/30a600439_image.png' },
  ],
];

export default function TradesGrid() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="trades" className="py-20 md:py-28 px-6" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white text-center">
          Serving all these industries and more...
        </h2>

        <div className="mt-14 relative">
          {/* Arrow Left */}
          <button
            onClick={prev}
            className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-black/60 hover:bg-kovia-gold/20 hover:border-kovia-gold/40 transition"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, si) => (
                <div key={si} className="w-full shrink-0 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {slide.map((trade) => (
                    <div
                      key={trade.name}
                      className="relative rounded-xl overflow-hidden border border-white/[0.04] hover:border-kovia-gold/20 transition-colors"
                      style={{ height: '200px' }}
                    >
                      <img src={trade.image} alt={trade.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-white font-medium text-center">{trade.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          <button
            onClick={next}
            className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-black/60 hover:bg-kovia-gold/20 hover:border-kovia-gold/40 transition"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ backgroundColor: i === current ? '#B38966' : 'rgba(255,255,255,0.2)' }}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#cta"
            className="inline-block px-8 py-3.5 rounded-lg bg-kovia-gold text-white font-medium text-sm hover:brightness-110 transition"
          >
            See All Industries We Work With
          </a>
        </div>
      </div>
    </section>
  );
}