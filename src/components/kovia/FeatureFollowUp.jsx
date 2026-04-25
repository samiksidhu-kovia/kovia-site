import IPhoneMockup from './IPhoneMockup';
import FeatureBenefits from './FeatureBenefits';

const benefits = [
  { title: 'Instant Lead Response', description: 'When a new lead comes in, they get a personalized message within seconds.' },
  { title: 'Multi-Step Sequences', description: "Not everyone books on the first message. We follow up over days until they do." },
  { title: 'Personalized Messaging', description: "Every message sounds like you wrote it. Not a robot." },
  { title: 'Works While You Work', description: "You're on a job site. We're following up with your leads. Everyone's doing their job." },
];

function FollowUpText() {
  return (
    <div className="flex-1 flex flex-col justify-center p-4 space-y-3">
      {/* First outbound message (immediate response) */}
      <div className="flex justify-end">
        <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-br-md bg-kovia-gold text-kovia-dark text-xs leading-relaxed">
          Hey John, this is Mike from AC Pressure Washing. Just got your quote request. I'll put together pricing for you today.
        </div>
      </div>
      
      {/* Time gap indicator */}
      <div className="text-center">
        <span className="text-gray-500 text-[10px]">2 days later</span>
      </div>
      
      {/* Second outbound message (follow-up) */}
      <div className="flex justify-end">
        <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-br-md bg-kovia-gold text-kovia-dark text-xs leading-relaxed">
          Hey John, circling back on that driveway quote. Still interested? I've got availability this week.
        </div>
      </div>
      
      {/* Lead response */}
      <div className="flex justify-start">
        <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-[#e5e5e5] text-[#333] text-xs leading-relaxed">
          Hey! Sorry, totally forgot. Yeah I'm interested. What times work?
        </div>
      </div>
    </div>
  );
}

export default function FeatureFollowUp() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <FeatureBenefits
            title="Automated Lead Follow-Up"
            subtitle="Leads that don't book right away get followed up over the next few days. Automatically."
            benefits={benefits}
          />
        </div>
        <div className="order-1 md:order-2">
          <IPhoneMockup>
            <FollowUpText />
          </IPhoneMockup>
        </div>
      </div>
    </section>
  );
}