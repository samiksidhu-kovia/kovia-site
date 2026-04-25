import { Check } from 'lucide-react';

export default function FeatureBenefits({ title, subtitle, benefits }) {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-3xl sm:text-4xl font-medium text-[#111]">{title}</h3>
      <p className="mt-3 text-kovia-gold italic text-base sm:text-lg">{subtitle}</p>
      <div className="mt-8 space-y-6">
        {benefits.map((b, i) => (
          <div key={i} className="flex gap-3">
            <div className="mt-0.5 shrink-0">
              <Check className="w-5 h-5 text-kovia-gold" />
            </div>
            <div>
              <div className="text-kovia-gold font-medium text-sm">{b.title}</div>
              <div className="text-[#666] text-sm mt-0.5 leading-relaxed">{b.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}