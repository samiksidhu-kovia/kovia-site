import { Smile, DollarSign, FileX, Shield, RefreshCw } from 'lucide-react';

const cards = [
  {
    icon: Smile,
    title: 'Simple To Use',
    description: 'We built KOVIA with the core concept of being simple to use, so everything is made to be exactly that.',
  },
  {
    icon: DollarSign,
    title: 'Affordable',
    description: "Our prices are designed to keep you for 10 years, not 10 weeks. We're in it for the long haul.",
  },
  {
    icon: FileX,
    title: 'No Contracts',
    description: "If it's affordable and awesome, why would we need a contract? If you're happy, you'll stay.",
  },
  {
    icon: Shield,
    title: 'No BS',
    description: "We don't believe in the fluff. We just tell you exactly what we're going to do and we do it. Period.",
  },
  {
    icon: RefreshCw,
    title: 'Constant Improvements',
    description: 'We regularly make improvements and updates to our systems to make sure you get the best value for your money.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white text-center max-w-2xl mx-auto">
          Why we're 'totally unique'...<br />
          just like everyone else, right?
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-kovia-card rounded-xl p-6 border border-white/[0.04]"
              >
                <div className="w-10 h-10 rounded-lg bg-kovia-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-kovia-gold" />
                </div>
                <h3 className="text-white font-medium mb-2">{card.title}</h3>
                <p className="text-kovia-text-gray text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}