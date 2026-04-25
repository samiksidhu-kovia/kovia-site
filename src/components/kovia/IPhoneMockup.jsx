export default function IPhoneMockup({ children }) {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] bg-[#1a1a1a] border-2 border-[#333] p-2 shadow-2xl">
        {/* Dynamic island */}
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-24 h-6 rounded-full bg-black" />
        </div>
        {/* Screen */}
        <div className="rounded-[1.8rem] overflow-hidden bg-black min-h-[380px] flex flex-col">
          {children}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-28 h-1 rounded-full bg-white/20" />
        </div>
      </div>
      {/* Side buttons (subtle) */}
      <div className="absolute left-[-3px] top-28 w-[3px] h-8 rounded-l bg-[#333]" />
      <div className="absolute left-[-3px] top-40 w-[3px] h-12 rounded-l bg-[#333]" />
      <div className="absolute left-[-3px] top-56 w-[3px] h-12 rounded-l bg-[#333]" />
      <div className="absolute right-[-3px] top-36 w-[3px] h-14 rounded-r bg-[#333]" />
    </div>
  );
}