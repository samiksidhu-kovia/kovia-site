import { Star } from 'lucide-react';
import IPhoneMockup from './IPhoneMockup';
import FeatureBenefits from './FeatureBenefits';

const benefits = [
  { title: '5-Star Reviews Only', description: "You can't make everyone happy, but our funnel sure can. Five stars, every time." },
  { title: 'Automatic Follow-Up Reminders', description: "We'll gently remind them for a few weeks until they remember." },
  { title: 'Ask For Reviews In One Click', description: "As promised, we keep it simple. If you're confused, we're fired." },
  { title: 'Stop Worrying About Bad Reviews', description: "We'll take the guesswork out by routing your customer to leave a 5-star review." },
];

function ReviewPrompt() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-6 text-center w-full border border-gray-200 shadow-sm">
        <div className="flex justify-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 text-kovia-gold fill-kovia-gold" />
          ))}
        </div>
        <p className="text-[#111] text-sm font-medium mb-5">How was your experience?</p>
        <button className="w-full py-2.5 rounded-lg bg-kovia-gold text-kovia-dark text-sm font-medium">
          Leave a Review
        </button>
      </div>
    </div>
  );
}

export default function FeatureReviewFunnel() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-1 md:order-1">
          <IPhoneMockup>
            <ReviewPrompt />
          </IPhoneMockup>
        </div>
        <div className="order-2 md:order-2">
          <FeatureBenefits
            title="5-Star Review Funnel"
            subtitle="'Sure I'll leave you a review', but the truth is people forget. We'll remind them until they remember."
            benefits={benefits}
          />
        </div>
      </div>
    </section>
  );
}