import { useState, useEffect, useRef } from 'react';
import ArrowUpRight from './ArrowUpRight';

// Reusable circle cursor SVG
const CircleCursorIcon = () => (
  <svg className="w-6 h-6 text-grey-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const workItems = [
  {
    name: "SIXT", year: "[2023-2025]", tag: "Car rental", color: "#cb7b3a",
    hoverText: "An extra 3m clicks regionally through SEO",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=7dd66f58bc995fde07eaf029a20fdfc7",
  },
  {
    name: "Dojo - B2B", year: "[2021-2025]", tag: "Card Machines", color: "#fdd8c4",
    hoverText: "A B2B success story for Dojo card machines",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=bd66606297d902f69b5597cc577c024b",
  },
  {
    name: "Magnet Trade - B2B", year: "[2023-2024]", tag: null, color: "#d8c4fd",
    hoverText: "A full service SEO success story 170%+ increase",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=9608e252248a4b2ddffaec7d45eede5b",
  },
  {
    name: "Leading E Sim brand globally", year: "[2023-2025]", tag: "Esims", color: "#cb7b3a",
    hoverText: "Increasing brand and non brand visibility UK/ES",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=71e6a673976355cd5f6f063b7fcef10d",
  },
  {
    name: "JD Sports", year: "[2025]", tag: "Trainers", color: "#3a8ccb",
    hoverText: "65% up YoY in clicks for JDSports FR, IT, ES",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=12d06985b7017711f29e3ce6aef304f3",
  },
  {
    name: "Parkdean Resorts", year: "[2019-2025]", tag: "Easter Breaks", color: "#d2b59d",
    hoverText: "Dominating Google and AI search",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=381c81d4a44783a7bda73dd07a3a04ee",
  },
  {
    name: "Pooky", year: "[2025]", tag: "Rechargeable Lights", color: "#39b0bd",
    hoverText: "Driving demand for Pooky Rechargeable Lights",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=c8f7c6f6625c568f08115b06804143d2",
  },
  {
    name: "Revolution Beauty", year: "[2022-2025]", tag: "Beauty Dupes", color: "#fecacc",
    hoverText: "Building the UK's leading beauty dupe brand",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-10-at-12.13.46.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847624&s=10365ef99515fa381664a5b9294a3098",
  },
  {
    name: "Lloyds Pharmacy", year: "[2022-23]", tag: "STI tests", color: "#60dcfb",
    hoverText: "Driving category leadership for STI tests",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-04-at-12.50.54.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751629865&s=9c1e99f0f435b81cc6adf3917ee406f3",
  },
  {
    name: "PrettyLittleThing", year: "[2021-2023]", tag: "Outfits", color: "#fecacc",
    hoverText: "Driving discovery for everything outfits for PLT",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-14.43.56.png?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=014efbb529a579b3171f4116ce49e0e5",
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled into the section (0 to sectionHeight - viewportHeight)
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = sectionHeight - viewportHeight;
      const progress = Math.min(1, Math.max(0, scrolled / maxScroll));

      // Move headings up based on scroll progress
      if (headingsRef.current) {
        const headingsHeight = headingsRef.current.scrollHeight - 400;
        headingsRef.current.style.transform = `translate3d(0, ${-progress * headingsHeight}px, 0)`;
      }

      // Move images up based on scroll progress
      if (imagesRef.current) {
        const imagesHeight = imagesRef.current.scrollHeight - viewportHeight + 200;
        imagesRef.current.style.transform = `translate3d(0, ${-progress * imagesHeight}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full pb-12 xl:pb-24 bg-[#efeeec]">
      <div className="w-full px-4 md:px-7">
        {/* MOBILE: Cards in dark container */}
        <div className="lg:hidden bg-[#111212] rounded-3xl p-5 pt-7">
          <h2 className="text-white text-xl font-medium tracking-tight mb-5 font-sans-primary">Featured Work</h2>
          <div className="grid gap-4">
            {workItems.map((item, i) => (
              <a key={i} href="#" className="group grid rounded-2xl overflow-hidden relative">
                <div className="col-start-1 row-start-1 transition-transform duration-300 group-hover:scale-105">
                  <div className="relative overflow-hidden w-full" style={{ paddingTop: '75%' }}>
                    <img src={item.img} alt={item.name} className="absolute top-0 left-0 w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                {item.tag && (
                  <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-start">
                    <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-md text-sm gap-x-2 py-2.5 px-3.5">
                      <SearchIcon className="w-4 h-4" />
                      <span>{item.tag}</span>
                      <TrendingUpIcon className="w-4 h-4" />
                    </div>
                  </div>
                )}
                <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end">
                  <div className="grid gap-y-1 relative z-20">
                    <div className="text-white text-xs font-medium mt-2">{item.year}</div>
                    <div className="text-white text-3xl leading-none font-medium tracking-tight">{item.name}</div>
                  </div>
                  <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DESKTOP: Outer scroll container - tall to create scroll distance */}
        <div
          ref={sectionRef}
          className="w-full relative overflow-visible hidden lg:flex"
          style={{ height: `${workItems.length * 620 + 400}px` }}
        >
          {/* Sticky viewport */}
          <div className="w-full py-7 top-0 h-screen sticky">
            <div className="w-full h-full overflow-hidden bg-[#111212] rounded-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">

              {/* LEFT: Client names (desktop only) */}
              <div className="relative col-span-12 items-start hidden lg:flex lg:flex-row lg:items-center lg:col-span-6">
                <div className="flex flex-col items-start relative z-10 h-full pt-16 lg:pt-24 lg:pb-32 lg:gap-y-20">
                  <h2 className="text-lg lg:text-lg xl:text-xl font-medium tracking-tight text-white leading-tight">
                    Featured Work
                  </h2>

                  <div className="relative flex-1 overflow-hidden hidden pr-5 lg:inline-block">


                    <div ref={headingsRef} className="grid gap-y-2 2xl:gap-y-3 relative z-10 transition-transform duration-100 ease-linear">
                      {workItems.map((item, i) => (
                        <div key={i} className="relative transition-all duration-200">
                          <a
                            href="#"
                            className={`flex items-start gap-x-2 transition-transform duration-200 ${activeIndex === i ? 'translate-x-3' : ''
                              }`}
                            onMouseEnter={() => { setActiveIndex(i); setHoveredCard(i); }}
                            onMouseLeave={() => { setActiveIndex(null); setHoveredCard(null); }}
                          >
                            <div className="text-white text-5xl leading-none lg:text-6xl lg:leading-none xl:text-7xl xl:leading-[0.9] font-medium tracking-tight">
                              {item.name}
                            </div>
                            <div className="text-white text-xs font-medium mt-2">
                              {item.year}
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Image cards */}
              <div
                ref={imagesRef}
                className="col-span-12 grid pt-7 pb-14 lg:col-span-6 lg:col-start-7 transition-transform duration-100 ease-linear"
              >
                {/* Mobile header */}
                <div className="mb-5 lg:hidden">
                  <h2 className="text-base font-medium tracking-tight text-white leading-tight font-sans-primary">
                    Featured Work
                  </h2>
                </div>

                {workItems.map((item, i) => {
                  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCursorPos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                    });
                  };

                  return (
                    <a
                      key={i}
                      href="#"
                      className="group grid rounded-2xl overflow-hidden mb-5 lg:mb-7 relative cursor-none"
                      onMouseEnter={() => { setActiveIndex(i); setHoveredCard(i); }}
                      onMouseLeave={() => { setActiveIndex(null); setHoveredCard(null); }}
                      onMouseMove={handleMouseMove}
                    >
                      {/* Custom circle cursor that follows mouse */}
                      <div
                        className={`pointer-events-none absolute z-50 hidden lg:flex w-20 h-20 rounded-full bg-[#b2f6e3] items-center justify-center transition-[opacity,transform] duration-300 ease-out ${hoveredCard === i ? 'opacity-100' : 'opacity-0 scale-50'}`}
                        style={{
                          left: hoveredCard === i ? cursorPos.x : 0,
                          top: hoveredCard === i ? cursorPos.y : 0,
                          transform: `translate(-50%, -50%)`,
                        }}
                      >
                        <CircleCursorIcon />
                      </div>
                      {/* Background image */}
                      <div className="col-start-1 row-start-1 transition-transform duration-300 group-hover:scale-105">
                        <div className="relative overflow-hidden w-full" style={{ paddingTop: '75%' }}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Tag pill */}
                      {item.tag && (
                        <div className="col-start-1 row-start-1 p-3 z-30 flex justify-end items-start lg:items-end lg:p-5">
                          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-md text-sm gap-x-2 py-2.5 px-3.5 lg:text-base">
                            <SearchIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span>{item.tag}</span>
                            <TrendingUpIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                          </div>
                        </div>
                      )}

                      {/* Mobile overlay: name + year */}
                      <div className="col-start-1 row-start-1 p-3 z-30 relative flex justify-start items-end lg:hidden">
                        <div className="grid gap-y-1 relative z-20">
                          <div className="text-white text-xs font-medium mt-2">{item.year}</div>
                          <div className="text-white text-3xl leading-none font-medium tracking-tight">{item.name}</div>
                        </div>
                        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70" />
                      </div>

                      {/* Hover overlay with colored background */}
                      <div
                        className="col-start-1 row-start-1 flex flex-col items-start justify-between z-40 p-3 lg:p-5 transition-all duration-500 ease-out"
                        style={{
                          backgroundColor: item.color,
                          color: '#111212',
                          clipPath: hoveredCard === i
                            ? 'circle(150% at 50% 50%)'
                            : 'circle(0% at 50% 50%)',
                        }}
                      >
                        <div className="text-3xl leading-none lg:text-4xl lg:leading-none xl:text-5xl xl:leading-none font-medium tracking-tight">
                          {item.hoverText}
                        </div>
                        <div className="w-full flex items-end justify-end mt-4">
                          {item.tag && (
                            <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none bg-white/15 backdrop-blur-md text-sm gap-x-2 py-2.5 px-3.5 lg:text-base">
                              <SearchIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                              <span>{item.tag}</span>
                              <TrendingUpIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Explore button */}
        <div className="flex justify-center mt-3 lg:mt-7">
          <a href="#" className="w-full lg:w-auto group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base px-6 py-3 rounded-3xl bg-white text-gray-900 hover:rounded-xl transition-all overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                <span>Explore Our Work</span>
                <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
              </div>
              <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                <span>Explore Our Work</span>
                <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
