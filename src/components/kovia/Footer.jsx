export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#080808' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 */}
          <div>
            <img src="https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/365c878d4_base44kovianavlogo1.png" alt="KOVIA" className="h-12 w-auto" />
            <p className="mt-4 text-kovia-text-gray text-sm leading-relaxed">
              Want to learn more about how we can help?
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block px-5 py-2.5 rounded-lg bg-kovia-gold text-white text-sm font-medium hover:brightness-110 transition"
            >
              Book A Call
            </a>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Links</h4>
            <div className="space-y-2.5">
              <a href="/pricing#top" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">Pricing</a>
              <a href="/our-work" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">Our Work</a>
              <a href="/#faq" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">FAQs</a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-medium text-sm mb-4">Products</h4>
            <div className="space-y-2.5">
              <a href="/#functional-website" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">Functional Website</a>
              <a href="/#lead-response" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">Instant Lead Response</a>
              <a href="/#review-funnel" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">5-Star Review Funnel</a>
              <a href="/#follow-up" className="block text-kovia-text-gray text-sm hover:text-white transition-colors">Automated Lead Follow-Up</a>
            </div>
          </div>

          {/* Column 4 - Hidden on tablet */}
          <div className="hidden lg:block">
            <h4 className="text-white font-medium text-sm mb-4">Ready to get started?</h4>
            <a
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-lg bg-kovia-gold text-white text-sm font-medium hover:brightness-110 transition"
            >
              Book A Call
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-kovia-text-dim text-xs">© 2026 KOVIA. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-kovia-text-dim">
              <a href="mailto:samik@koviacreative.com" className="hover:text-white transition-colors">samik@koviacreative.com</a>
              <span>·</span>
              <a href="tel:+15712412782" className="hover:text-white transition-colors">(571) 241-2782</a>
              <span>·</span>
              <a href="https://kovia-privacy-policy-and-terms.vercel.app/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="https://kovia-privacy-policy-and-terms.vercel.app/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}