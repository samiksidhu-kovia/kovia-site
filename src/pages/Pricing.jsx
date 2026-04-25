import Navbar from '../components/kovia/Navbar';
import AngleDivider from '../components/kovia/AngleDivider';
import PricingCard from '../components/kovia/PricingCard';
import Footer from '../components/kovia/Footer';
import { Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const trustBadges = ['No Contracts', 'Cancel Anytime', '14-Day Free Trial'];

const pricingFaqs = [
  {
    q: 'Is there a setup fee?',
    a: 'No. Zero. Just the monthly.',
  },
  {
    q: 'How long does setup take?',
    a: '7-10 days. We handle everything.',
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes. No contracts, no cancellation fees. You stay because it's working, not because you're stuck.",
  },
  {
    q: 'What if I need help?',
    a: "Email or text us. We get back to you within 24 hours. We're not going to ghost you after you sign up.",
  },
  {
    q: 'Do I own my website?',
    a: "Yes. Your website, your domain, your leads. We build it, you own it.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#0D0D0D' }}>
      <Navbar activePage="Pricing" />

      {/* Hero */}
      <section id="top" className="pt-40 pb-20 px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-medium text-white leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 text-lg" style={{ color: '#888' }}>
            Cancel anytime. No contracts. No setup fees.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-medium"
                style={{ borderColor: '#B38966', backgroundColor: 'rgba(179,137,102,0.12)', color: '#fff' }}
              >
                <Check className="w-4 h-4" style={{ color: '#B38966' }} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-24 px-6" style={{ backgroundColor: '#0D0D0D' }}>
        <PricingCard />
      </section>

      <AngleDivider fromColor="#0D0D0D" toColor="#0a0a0a" direction="left" />

      {/* Pricing FAQs */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-white text-center mb-12">
            Pricing FAQs
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border px-6"
                style={{ backgroundColor: '#1a1a1a', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <AccordionTrigger className="text-left text-white font-medium text-sm sm:text-base py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed pb-5" style={{ color: '#888' }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <AngleDivider fromColor="#0a0a0a" toColor="#0D0D0D" direction="right" />

      {/* Final CTA */}
      <section id="pricing-cta" className="py-20 md:py-28 px-6" style={{ backgroundColor: '#0D0D0D' }}>
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
              className="mt-12 inline-block px-9 py-4 rounded-full bg-kovia-gold text-white font-semibold text-base hover:brightness-110 transition"
            >
              Book A Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}