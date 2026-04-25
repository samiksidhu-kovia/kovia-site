const partners = [
  { name: 'Meta', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/87f7c7051_metalogo.png' },
  { name: 'Local Falcon', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/cfdb7162f_localfalconlogo.png' },
  { name: 'OpenAI', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/882b587db_openailogo.png' },
  { name: 'Zapier', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/f08fc3e81_zapierlogo.png' },
  { name: 'Framer', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/bb8281911_framerlogo.png' },
  { name: 'Google Business Profile', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/6b7c9f21e_gbplogo.png' },
  { name: 'Google Analytics', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/3336e15f0_googleanalyticslogo.png' },
  { name: 'GoDaddy', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/d2cccc5ca_godaddylogo.png' },
  { name: 'Canva', url: 'https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/ef6c7a283_canvalogo.png' },
];

const looped = [...partners, ...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="max-w-5xl mx-auto text-center px-6 mb-10">
        <h2 className="text-2xl sm:text-3xl font-serif italic font-medium text-white">
          Just so you know we're legit, we partner with...
        </h2>
      </div>

      <style>{`
        @keyframes scroll-partners {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .partners-track {
          animation: scroll-partners 64s linear infinite;
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="partners-track flex items-center gap-10 w-max">
          {looped.map((partner, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center" style={{ height: '160px' }}>
              <img
                src={partner.url}
                alt={partner.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}