export default function AngleDivider({ fromColor = '#0D0D0D', toColor = '#0a0a0a', direction = 'left' }) {
  const polygonPoints = direction === 'left' ? "0,0 1440,0 1440,40 480,120 0,0" : "0,0 1440,0 960,120 0,40";
  
  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden" style={{ backgroundColor: toColor }}>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points={polygonPoints} fill={fromColor} />
      </svg>
    </div>
  );
}