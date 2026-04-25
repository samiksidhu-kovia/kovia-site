import { useState } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';

const websiteFeaturesBasic = [
  { name: 'Custom Conversion Website (5-10 pages)', description: 'A professional website designed to turn visitors into leads. Built specifically for contractors with clear calls-to-action and mobile-friendly design.' },
  { name: 'Mobile-Responsive Design', description: 'Looks great on phones, tablets, and desktops. 87% of customers visit on mobile.' },
  { name: 'SEO-Optimized', description: 'Built to show up on Google when customers search for your services in your area.' },
  { name: 'Contact Form Integration', description: 'Forms that capture leads and send them directly to your phone.' },
  { name: 'SSL Security', description: 'Secure HTTPS connection so customers trust your site.' },
  { name: 'Hosting & Maintenance Included', description: 'We handle all the technical stuff. Updates, security, speed — all covered.' },
];

const automationFeaturesNotIncluded = [
  { name: 'Instant Lead Response' },
  { name: 'Automated Lead Follow-Up Sequences' },
  { name: '5-Star Review Funnel' },
  { name: 'Google Business Profile Optimization' },
];

const websiteFeaturesSystem = [
  { name: 'Custom Conversion Website (10-20 pages)', description: 'A professional website designed to turn visitors into leads. Built specifically for contractors with clear calls-to-action and mobile-friendly design.' },
  { name: 'Mobile-Responsive Design', description: 'Looks great on phones, tablets, and desktops. 87% of customers visit on mobile.' },
  { name: 'SEO-Optimized', description: 'Built to show up on Google when customers search for your services in your area.' },
  { name: 'Contact Form Integration', description: 'Forms that capture leads and send them directly to your phone.' },
  { name: 'SSL Security', description: 'Secure HTTPS connection so customers trust your site.' },
  { name: 'Hosting & Maintenance Included', description: 'We handle all the technical stuff. Updates, security, speed — all covered.' },
];

const automationFeaturesSystem = [
  { name: 'Instant Lead Response', description: 'When someone fills out your form, they get a personalized text back within 60 seconds. Automatically.' },
  { name: 'Automated Lead Follow-Up Sequences', description: "Leads who don't book right away get followed up over the next few days until they do." },
  { name: '5-Star Review Funnel', description: 'Send customers a link, we route happy ones to leave Google reviews and catch unhappy ones before they go public.' },
  { name: 'Google Business Profile Optimization', description: 'We optimize your Google Business listing so you show up in local searches and Google Maps.' },
];

function FeatureRow({ name, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left group"
      >
        <div className="flex items-center gap-3">
          <Check className="w-4 h-4 shrink-0" style={{ color: '#B38966' }} />
          <span className="text-white text-sm">{name}</span>
        </div>
        {description && (
          <ChevronDown
            className="w-4 h-4 shrink-0 text-white/30 transition-transform duration-200"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        )}
      </button>
      {open && description && (
        <div className="pb-3 pl-7 pr-2">
          <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{description}</p>
        </div>
      )}
    </div>
  );
}

function ExcludedFeatureRow({ name }) {
  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <div className="flex items-center gap-3 py-3">
        <X className="w-4 h-4 shrink-0" style={{ color: '#444' }} />
        <span className="text-sm line-through" style={{ color: '#444' }}>{name}</span>
      </div>
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <div className="pt-5 pb-2">
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#666' }}>{label}</span>
    </div>
  );
}

function WebsiteCard() {
  return (
    <div className="flex-1 relative">
      <div
        className="rounded-2xl overflow-hidden h-full flex flex-col"
        style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid rgba(179,137,102,0.35)',
        }}
      >
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, rgba(179,137,102,0.4), rgba(212,169,124,0.4))' }} />

        <div className="p-8 flex flex-col flex-1">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Invisible spacer matching the height of the RECOMMENDED badge on the right card */}
            <div className="invisible inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              RECOMMENDED
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'rgba(179,137,102,0.7)' }}>
              STARTER
            </div>
            <div className="flex items-end justify-center gap-1 mb-3">
              <span className="text-6xl font-bold text-white">$97</span>
              <span className="text-lg mb-2" style={{ color: '#888' }}>/month</span>
            </div>
            <p className="text-sm" style={{ color: '#888' }}>
              A professional website built to convert visitors into customers
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mb-2" />

          {/* Included features */}
          <div className="flex-1">
            {websiteFeaturesBasic.map((f) => (
              <FeatureRow key={f.name} name={f.name} description={f.description} />
            ))}

            {/* Excluded features */}
            <div className="mt-2">
              {automationFeaturesNotIncluded.map((f) => (
                <ExcludedFeatureRow key={f.name} name={f.name} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="block w-full py-4 rounded-xl text-center font-bold text-sm transition hover:bg-white/5"
              style={{ border: '1px solid rgba(179,137,102,0.5)', color: '#B38966' }}
            >
              Get Started
            </a>
            <p className="text-center text-xs mt-3" style={{ color: '#666' }}>
              No setup fee. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemCard() {
  return (
    <div className="flex-1 relative">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(179,137,102,0.15) 0%, rgba(179,137,102,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div
        className="rounded-2xl overflow-hidden relative z-10 h-full flex flex-col"
        style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #B38966',
          boxShadow: '0 0 60px rgba(179,137,102,0.12)',
        }}
      >
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #B38966, #d4a97c)' }} />

        <div className="p-8 flex flex-col flex-1">
          {/* Badge + Header */}
          <div className="text-center mb-8">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(179,137,102,0.15)', color: '#B38966', border: '1px solid rgba(179,137,102,0.3)' }}
            >
              RECOMMENDED
            </div>
            <div className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#B38966' }}>
              ALL-IN-ONE
            </div>
            <div className="flex items-end justify-center gap-1 mb-3">
              <span className="text-6xl font-bold text-white">$297</span>
              <span className="text-lg mb-2" style={{ color: '#888' }}>/month</span>
            </div>
            <p className="text-sm" style={{ color: '#888' }}>
              Everything you need to capture and convert leads
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mb-2" />

          {/* Features */}
          <div className="flex-1">
            <SectionLabel label="Website" />
            {websiteFeaturesSystem.map((f) => (
              <FeatureRow key={f.name} name={f.name} description={f.description} />
            ))}

            <SectionLabel label="Automation" />
            {automationFeaturesSystem.map((f) => (
              <FeatureRow key={f.name} name={f.name} description={f.description} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="block w-full py-4 rounded-xl text-center font-bold text-sm transition hover:brightness-110"
              style={{ backgroundColor: '#B38966', color: '#ffffff', boxShadow: '0 4px 20px rgba(179, 137, 102, 0.25)' }}
            >
              Get Started
            </a>
            <p className="text-center text-xs mt-3" style={{ color: '#666' }}>
              No setup fee. 14-day free trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingCard() {
  return (
    <div className="max-w-4xl mx-auto w-full px-0">
      {/* Mobile: System card on top, Website card below. Desktop: side by side */}
      <div className="flex flex-col-reverse md:flex-row gap-6 items-stretch">
        <WebsiteCard />
        <SystemCard />
      </div>
    </div>
  );
}