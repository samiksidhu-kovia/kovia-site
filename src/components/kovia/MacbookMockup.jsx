export default function MacbookMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* Screen */}
      <div className="relative rounded-t-2xl overflow-hidden border-[8px] border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl" style={{ paddingBottom: '63%' }}>
        <div className="absolute inset-0 overflow-hidden">

          {/* Background: gradient simulating a photo with dark overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #0a2a3a 0%, #0d3d54 30%, #1a5c7a 60%, #0e2e40 100%)'
          }} />
          {/* Glass/light shimmer overlay */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 120% 80% at 60% 40%, rgba(100,200,255,0.12) 0%, transparent 70%)'
          }} />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* NAV BAR */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black/50 backdrop-blur-sm z-10">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded bg-teal-400 opacity-90" />
              <span className="text-white text-[7px] font-bold tracking-wider">GLASSPERTS</span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {['Home', 'Services', 'Gallery', 'Contact'].map(link => (
                <span key={link} className="text-white/80 text-[6px] hover:text-white cursor-pointer">{link}</span>
              ))}
            </div>
            <div className="px-2 py-0.5 rounded bg-teal-500 text-white text-[6px] font-semibold">
              Free Quote
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="absolute inset-0 flex items-center pt-8 px-3 gap-3">

            {/* LEFT: Headline + Body */}
            <div className="flex-1 flex flex-col justify-center pr-1">
              <div className="text-[6px] text-teal-400 font-semibold tracking-widest uppercase mb-1">Trusted Since 2005</div>
              <h2 className="text-white font-bold leading-tight mb-2" style={{ fontSize: '11px', lineHeight: 1.25 }}>
                Professional<br />Glass Cleaning<br />Services
              </h2>
              <p className="text-white/60 leading-relaxed mb-3" style={{ fontSize: '5.5px' }}>
                We specialize in residential and commercial glass cleaning, delivering spotless results every time. Licensed, insured, and trusted by hundreds of homeowners and businesses across the region.
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <span style={{ fontSize: '5px' }} className="text-teal-400">★</span>
                </div>
                <span style={{ fontSize: '5px' }} className="text-white/50">4.9/5 from 200+ reviews</span>
              </div>
            </div>

            {/* RIGHT: Quote Card */}
            <div className="w-[44%] shrink-0 rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#0f1e35', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Card top accent */}
              <div className="h-0.5 w-full bg-gradient-to-r from-teal-400 to-teal-600" />

              <div className="p-3">
                {/* Logo placeholder */}
                <div className="flex items-center gap-1 mb-2.5">
                  <div className="w-5 h-5 rounded bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-teal-400" />
                  </div>
                  <span className="text-white font-bold" style={{ fontSize: '6px' }}>GLASSPERTS</span>
                </div>

                <div className="text-white font-bold mb-0.5" style={{ fontSize: '8px' }}>GET A FREE QUOTE</div>
                <div className="text-white/40 mb-2.5" style={{ fontSize: '5px' }}>Fill out the form and we'll call you back.</div>

                {/* Full Name + Phone row */}
                <div className="flex gap-1 mb-1.5">
                  <div className="flex-1">
                    <div className="text-white/50 mb-0.5" style={{ fontSize: '4.5px' }}>Full Name</div>
                    <div className="rounded px-1.5 py-1 bg-white/5 border border-white/10 text-white/20" style={{ fontSize: '5px' }}>John Smith</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white/50 mb-0.5" style={{ fontSize: '4.5px' }}>Phone</div>
                    <div className="rounded px-1.5 py-1 bg-white/5 border border-white/10 text-white/20" style={{ fontSize: '5px' }}>(555) 000-0000</div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-2">
                  <div className="text-white/50 mb-0.5" style={{ fontSize: '4.5px' }}>Message</div>
                  <div className="rounded px-1.5 py-2 bg-white/5 border border-white/10 text-white/20" style={{ fontSize: '5px', height: '22px' }}>
                    Describe your project...
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-1 mb-2">
                  <div className="w-2 h-2 mt-0.5 rounded-sm border border-white/20 bg-white/5 shrink-0" />
                  <span className="text-white/30 leading-tight" style={{ fontSize: '4px' }}>I agree to the Terms &amp; Privacy Policy and consent to be contacted.</span>
                </div>

                {/* Submit */}
                <button className="w-full py-1.5 rounded font-bold text-center" style={{ backgroundColor: '#B38966', color: '#fff', fontSize: '6.5px' }}>
                  GET MY FREE QUOTE →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hinge */}
      <div className="h-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-sm" />
      {/* Base */}
      <div className="h-2 mx-auto rounded-b-xl bg-[#222]" style={{ width: '80%' }} />
      <div className="h-1 mx-auto rounded-b-full bg-[#333] shadow-lg" style={{ width: '60%' }} />
    </div>
  );
}