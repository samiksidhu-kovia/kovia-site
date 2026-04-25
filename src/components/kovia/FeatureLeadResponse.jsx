import IPhoneMockup from './IPhoneMockup';
import FeatureBenefits from './FeatureBenefits';

const benefits = [
  { title: "Respond While You're On The Job", description: "You're busy. You can't answer every call. We'll start the conversation for you so leads don't go cold." },
  { title: 'No More Lost Leads', description: "On a job site and can't answer the phone? No problem. We'll fire off a text and start the conversation." },
  { title: 'Be Available 24/7', description: "Missed a call after hours? No worries. We'll make sure everyone feels taken care of even while you're sleeping." },
  { title: 'Stand Out From Your Competition', description: "Everyone misses calls, but not everyone texts back. Be the one who does." },
];

function TextMessages() {
  return (
    <div className="flex-1 flex flex-col justify-center p-4 space-y-3">
      {/* Outgoing */}
      <div className="flex justify-end">
        <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-br-md bg-kovia-gold text-kovia-dark text-xs leading-relaxed">
          Hey John, I just got your quote form. I'll be right with you, any quick questions I can answer in the meantime?
        </div>
      </div>
      {/* Incoming */}
      <div className="flex justify-start">
        <div className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-[#e5e5e5] text-[#333] text-xs leading-relaxed">
          Wow, thanks for the quick response! No more questions, look forward to hearing from you!
        </div>
      </div>
    </div>
  );
}

export default function FeatureLeadResponse() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <FeatureBenefits
            title="Instant Lead Response"
            subtitle="Someone fills out your form. They get a text back in under 60 seconds. Automatically."
            benefits={benefits}
          />
        </div>
        <div className="order-1 md:order-2">
          <IPhoneMockup>
            <TextMessages />
          </IPhoneMockup>
        </div>
      </div>
    </section>
  );
}