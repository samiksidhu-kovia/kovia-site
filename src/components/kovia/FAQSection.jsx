import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: 'When am I going to start seeing results?',
    a: "Honestly? It depends. If you're already doing some advertising and have a decent reputation, you'll see leads coming in within the first few weeks. If you're brand new with zero reviews and no other marketing, it's going to take longer. We're not here to promise miracles - we build you a system that works, but you still have to answer the phone and close the deal. That part's on you.",
  },
  {
    q: 'How long does setup take?',
    a: "2-3 days from the time you fill out the onboarding form. We handle everything.",
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes. No contracts, no cancellation fees. If we're not delivering value, you should leave. We'd rather earn your business every month than trap you into staying.",
  },
  {
    q: 'Do I own my website?',
    a: "Yes. Your website, your domain, your leads. We build it, you own it. If you ever leave, it's yours to take.",
  },
  {
    q: 'Why should I spend on a website when word of mouth is already pulling in business?',
    a: "Word of mouth is great until it slows down. And here's the thing - when someone hears about you, the first thing they do is Google you. If you don't show up or your site looks like it was built in 2008, they move on to the next guy. A website makes your referrals more powerful, not less.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 px-6" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-[#111] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-xl border border-gray-200 px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left text-[#111] font-medium text-sm sm:text-base py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#666] text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}