import { useState, useEffect, useRef } from 'react';

const cards = [
  {
    title: "Pioneers",
    description: "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
    extra: "We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    bg: "bg-black",
    text: "text-white",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    baseRotate: 4,
  },
  {
    title: "Award Winning",
    description: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    bg: "bg-[#a6e5ce]", // mint
    text: "text-gray-900",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
    baseRotate: 8,
  },
  {
    title: "Speed",
    description: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    bg: "bg-white",
    text: "text-gray-900",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c",
    baseRotate: 12,
  },
];

export default function Legacy() {
  const [progress, setProgress] = useState(0);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Triple the cards for infinite scroll illusion
  const loopedCards = [...cards, ...cards, ...cards];

  // After mount, scroll to the start of the middle set so we can scroll both directions
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const cardWidth = el.scrollWidth / loopedCards.length;
      el.scrollLeft = cardWidth * cards.length;
    });
  }, []);

  const resetScrollPosition = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / loopedCards.length;
    const startOfMiddle = cardWidth * cards.length;
    const endOfMiddle = cardWidth * cards.length * 2;

    if (el.scrollLeft >= endOfMiddle - cardWidth * 0.5) {
      el.style.scrollBehavior = 'auto';
      el.scrollLeft = startOfMiddle + (el.scrollLeft - endOfMiddle);
      el.style.scrollBehavior = '';
    } else if (el.scrollLeft <= startOfMiddle - cardWidth * 0.5) {
      el.style.scrollBehavior = 'auto';
      el.scrollLeft = endOfMiddle - (startOfMiddle - el.scrollLeft);
      el.style.scrollBehavior = '';
    }
  };

  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / loopedCards.length;

    // Track current card index only (no position reset during scroll)
    const centerX = el.scrollLeft + el.clientWidth / 2;
    const rawIndex = Math.round(centerX / cardWidth);
    const logicalIndex = ((rawIndex % cards.length) + cards.length) % cards.length;
    setMobileCardIndex(logicalIndex);

    // Debounced reset: only jump position after scrolling stops
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(resetScrollPosition, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const maxScroll = sectionHeight - viewportHeight;
      const currentProgress = Math.min(1, Math.max(0, scrolled / maxScroll));

      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#efeeec]">
      {/* MOBILE VIEW (Infinite scrollable row with progress bar) */}
      <div className="w-full py-10 px-4 md:px-7 lg:hidden">
        <div className="flex justify-center mb-6">
          <h2 className="text-gray-900 text-3xl font-medium tracking-tight">Legacy In The Making</h2>
        </div>

        <div
          ref={mobileScrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4"
          onScroll={handleMobileScroll}
        >
          {loopedCards.map((card, i) => (
            <div key={i} className="snap-center shrink-0 w-[85vw] max-w-[320px]">
              <div className={`w-full flex-col text-center rounded-2xl grid p-7 ${card.bg} ${card.text}`}>
                <div className="flex flex-col text-center gap-y-5">
                  <div className="rounded-xl overflow-hidden w-full aspect-[4/3] relative">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover absolute inset-0" loading="lazy" />
                  </div>
                  <div className="flex flex-col items-center gap-y-4">
                    <h2 className="text-3xl font-medium tracking-tight">{card.title}</h2>
                    <div>
                      <p className="text-sm leading-normal mb-5">{card.description}</p>
                      {card.extra && <p className="text-sm leading-normal">{card.extra}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar — fills based on current card index */}
        <div className="w-full h-0.5 bg-gray-300 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((mobileCardIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* DESKTOP VIEW (Sticky Cards Animation) */}
      <div ref={sectionRef} className="w-full relative hidden lg:block" style={{ height: '300vh' }}>
        <div className="w-full h-screen sticky top-0 left-0 overflow-hidden">

          <div className="absolute top-0 left-0 w-full flex justify-center mt-10 3xl:mt-16 z-50">
            <h2 className="text-gray-900 text-xl lg:text-2xl font-medium tracking-tight">
              Legacy In The Making
            </h2>
          </div>

          <div className="w-full h-full absolute left-0 top-0 flex items-center justify-center pt-8">
            {cards.map((card, i) => {
              // Calculate how far out this card has animated (0 to 1)
              const outProgress = Math.min(1, Math.max(0, (progress - i * 0.4) / 0.4));

              // Only top cards animate out
              const translateY = i < cards.length - 1 ? -(outProgress * 150) : 0;
              const rotate = i < cards.length - 1 ? -(outProgress * 45) : 0;

              // Scale down slightly the cards behind
              // For card i, if progress is low, it sits at scale ~0.95 + 0.05 * its visibility
              // But original uses just baseRotate instead of complex scaling. Let's stick to simple translate + rotate.

              return (
                <div
                  key={i}
                  className="w-full h-full absolute left-0 flex items-center justify-center"
                  style={{
                    zIndex: cards.length - i,
                    transform: `translate(0%, ${translateY}%) rotate(${rotate}deg)`,
                    transition: 'transform 0.1s linear',
                  }}
                >
                  <div
                    className="w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl"
                    style={{ transform: `rotate(${card.baseRotate}deg)` }}
                  >
                    <div className={`w-full flex-col text-center rounded-3xl grid items-center aspect-square xl:py-10 xl:px-14 p-7 shadow-xl ${card.bg} ${card.text}`}>
                      <div className="col-start-1 row-start-1 flex flex-col items-center text-center gap-y-5">

                        <div className="rounded-2xl overflow-hidden aspect-square relative w-48 4xl:w-56">
                          <img src={card.img} alt={card.title} className="w-full h-full object-cover absolute inset-0" loading="lazy" />
                        </div>

                        <div className="flex flex-col items-center gap-y-4 px-4">
                          <h2 className="text-5xl xl:text-6xl 3xl:text-7xl font-medium tracking-tight">
                            {card.title}
                          </h2>
                          <div className="w-full">
                            <p className="text-base leading-normal mb-5">{card.description}</p>
                            {card.extra && <p className="text-base leading-normal">{card.extra}</p>}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
