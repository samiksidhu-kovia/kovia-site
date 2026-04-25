const steps = [
  {
    num: 1,
    title: 'Demo Call',
    time: '20 mins',
    description: "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you how the system works.",
  },
  {
    num: 2,
    title: 'We Build Your System',
    time: '2-3 days',
    description: 'Fill out a basic onboarding form with your business details. After we have the correct information, we\'ll get to work on building your new website and marketing system.',
  },
  {
    num: 3,
    title: 'Launch Call',
    time: '25 mins',
    description: "We'll walk you through your new website and marketing system, answer any questions you have, and show you how everything works. And by everything, we're really just talking about pressing two buttons.",
  },
];

function WavyConnector() {
  return (
    <svg className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-full" height="60" viewBox="0 0 400 60" fill="none" preserveAspectRatio="none">
      <path
        d="M0 30 C50 0, 100 60, 150 30 C200 0, 250 60, 300 30 C350 0, 400 60, 400 30"
        stroke="#B38966"
        strokeWidth="2"
        strokeDasharray="8 6"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif italic font-medium text-[#111] text-center">
          What working with us looks like...
        </h2>

        <div className="mt-16 relative">
          {/* Wavy connector line (desktop only) */}
          <div className="hidden md:block absolute top-5 left-[20%] right-[20%]">
            <style>{`
              @keyframes dash-travel {
                from { stroke-dashoffset: 28; }
                to { stroke-dashoffset: 0; }
              }
              .animated-dash {
                animation: dash-travel 1.2s linear infinite;
              }
            `}</style>
            <svg width="100%" height="40" viewBox="0 0 600 40" preserveAspectRatio="none" fill="none">
              <path
                className="animated-dash"
                d="M0 20 C75 0, 150 40, 225 20 C300 0, 375 40, 450 20 C525 0, 600 40, 600 20"
                stroke="#B38966"
                strokeWidth="2"
                strokeDasharray="8 6"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-20 h-20 rounded-full bg-kovia-gold mx-auto flex items-center justify-center shadow-lg shadow-kovia-gold/20">
                  <span className="text-2xl font-semibold text-kovia-dark">{step.num}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#111]">{step.title}</h3>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#111] text-kovia-gold text-xs font-medium">
                  {step.time}
                </span>
                <p className="mt-4 text-sm text-[#666] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}