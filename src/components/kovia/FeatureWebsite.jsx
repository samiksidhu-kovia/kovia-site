import FeatureBenefits from './FeatureBenefits';

const benefits = [
  { title: 'Actually Get Found Online', description: 'We build your site to rank on Google so local customers can actually find you when they search for your services.' },
  { title: 'Showcase Your Best Work', description: 'Beautiful galleries and project showcases that make your work speak for itself and build trust before you ever pick up the phone.' },
  { title: 'Mobile Friendly', description: 'Over 70% of your traffic comes from mobile. Your site will look and work perfectly on every device.' },
  { title: 'Optimized For Local Search', description: 'Built-in SEO best practices so you show up in local searches and Google Maps when customers need you most.' },
];

export default function FeatureWebsite() {
  return (
    <section id="functional-website" className="py-16 md:py-24 px-6" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-1 md:order-1">
          <div className="relative w-full max-w-2xl mx-auto">
            <img
              src="https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/9ad046650_cleanslatehomepagepic1.png"
              alt="Cleanslate website mockup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="order-2 md:order-2">
          <FeatureBenefits
            title="Functional Website"
            subtitle="Get a website that instantly turns visitors into leads that go DIRECTLY to your phone."
            benefits={benefits}
          />
        </div>
      </div>
    </section>
  );
}