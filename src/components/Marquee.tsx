import { useState } from 'react';

const marqueeItems = [
  {
    text: "Chasing Consumers",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=f220bffc8303450846250315e3fcb457",
  },
  {
    text: "Not Algorithms",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=cb2016613a41d1153d28e086f39c0c72",
  },
];

export default function Marquee() {
  const allItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-[#efeeec] overflow-hidden">
      <a
        href="#"
        className="w-full relative overflow-hidden block cursor-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Custom pill cursor: "Send Us Your Brief ↗" */}
        <div
          className={`pointer-events-none absolute z-50 hidden lg:flex items-center gap-2 px-5 py-3 rounded-full bg-[#b2f6e3] text-grey-900 font-medium text-sm tracking-tight whitespace-nowrap transition-[opacity,transform] duration-300 ease-out ${isHovered ? 'opacity-100' : 'opacity-0 scale-75'}`}
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span>Send Us Your Brief</span>
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>

        <div className="w-[120vw] flex relative z-0 overflow-hidden">
          <div className="flex animate-[marqueeScroll_30s_linear_infinite]">
            {allItems.map((item, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-x-4 px-2 pb-3 lg:pt-5 lg:pb-10 lg:gap-x-10 lg:px-5"
              >
                {/* Text */}
                <h2 className="text-7xl leading-[0.9] md:text-7xl md:leading-[0.9] lg:text-8xl lg:leading-[0.9] xl:text-[10rem] xl:leading-[0.9] font-medium tracking-tight text-gray-900 flex-1 lg:pb-10 whitespace-nowrap">
                  {item.text}
                </h2>

                {/* Image */}
                <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:mb-10 lg:rounded-3xl lg:w-[12vw]">
                  <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                    <img
                      src={item.img}
                      alt=""
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </a>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}
      </style>
    </section>
  );
}
