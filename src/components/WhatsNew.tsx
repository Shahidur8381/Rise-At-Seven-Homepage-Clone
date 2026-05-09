import { useState, useRef, useEffect } from 'react';
import ArrowUpRight from './ArrowUpRight';

const posts = [
  {
    author: "Ray Saddiq",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    tag: null,
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A8137.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778062638&s=b59fc4a9963beea28e9f8a2a8d45c1b8",
  },
  {
    author: "Ray Saddiq",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg?w=1231&h=1145&q=100&auto=format&fit=crop&dm=1750949501&s=fe120a0db5c7acc0cd0c72601fb4ba89",
    time: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    tag: null,
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/WRAS-Manchester-01.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1778084605&s=e809ec791a3a4026cf5673426e4d3395",
  },
  {
    author: "Carrie Rose",
    authorImg: "https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg?w=1080&h=1080&q=100&auto=format&fit=crop&dm=1750847674&s=8bef9798a0d24a5970f561908d301967",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    tag: "News",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371",
  },
];

export default function WhatsNew() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Triple posts for infinite scroll
  const loopedPosts = [...posts, ...posts, ...posts];

  // Start at middle set
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const cardWidth = el.scrollWidth / loopedPosts.length;
      el.scrollLeft = cardWidth * posts.length;
    });
  }, []);

  const resetScrollPosition = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / loopedPosts.length;
    const startOfMiddle = cardWidth * posts.length;
    const endOfMiddle = cardWidth * posts.length * 2;

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

    const cardWidth = el.scrollWidth / loopedPosts.length;

    const centerX = el.scrollLeft + el.clientWidth / 2;
    const rawIndex = Math.round(centerX / cardWidth);
    const logicalIndex = ((rawIndex % posts.length) + posts.length) % posts.length;
    setMobileCardIndex(logicalIndex);

    // Debounced reset: only jump position after scrolling stops
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(resetScrollPosition, 150);
  };

  return (
    <section className="w-full pb-12 xl:pb-24 bg-[#efeeec]">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* Header Row */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-gray-300 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="flex flex-wrap items-center text-gray-900 text-6xl leading-[0.9] md:text-7xl md:leading-none lg:text-7xl lg:leading-none 2xl:text-8xl 2xl:leading-[0.9] 4xl:text-8.5xl 4xl:leading-[0.9] font-medium tracking-tight">
                  <span style={{ marginRight: '14px' }}>What's</span>
                  <span
                    className="inline-flex shrink-0 bg-black/5 relative overflow-hidden"
                    style={{ borderRadius: '15%', width: '90px', height: 'auto', marginRight: '14px' }}
                  >
                    <div className="w-full aspect-square relative">
                      <img
                        src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad"
                        alt=""
                        className="w-full h-full object-cover object-center absolute inset-0"
                      />
                    </div>
                  </span>
                  <span>New</span>
                </h2>
              </div>

              {/* Desktop Button */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <a href="#" className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden md:w-auto text-base px-6 py-3 rounded-3xl transition-all hover:rounded-xl bg-white text-gray-900">
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                      <span>Explore More Thoughts</span>
                      <span className="inline-block align-middle text-xs mt-1">
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                    <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                      <span>Explore More Thoughts</span>
                      <span className="inline-block align-middle text-xs mt-1">
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Carousel */}
          <div className="col-span-12 lg:px-7 mt-4 md:mt-0">
            <div className="w-full relative">
              {/* Mobile: horizontal scroll */}
              <div
                ref={mobileScrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-4 pb-4 md:hidden"
                onScroll={handleMobileScroll}
              >
                {loopedPosts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="shrink-0 w-[80vw] max-w-[300px] snap-center flex flex-col items-start gap-y-5 group"
                  >
                    <div className="w-full grid relative">
                      {/* Tags */}
                      <div className="col-start-1 row-start-1 z-20 p-3 pointer-events-none">
                        {post.tag && (
                          <div className="flex flex-wrap gap-1">
                            <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-white bg-white/20 backdrop-blur-sm">
                              <div>{post.tag}</div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-3">
                      <div className="flex items-start gap-1 mt-1">
                        <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-gray-500 bg-white">
                          <div className="inline-flex items-center justify-center -ml-1.5">
                            <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                              <img src={post.authorImg} alt="" className="w-full h-full object-cover" />
                            </div>
                          </div>
                          <div>{post.author}</div>
                        </div>
                        <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 text-gray-500 bg-white">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          <div>{post.time}</div>
                        </div>
                      </div>
                      <h2 className="text-gray-900 text-2xl leading-none font-medium tracking-tight">{post.title}</h2>
                    </div>
                  </a>
                ))}
              </div>

              {/* Desktop: grid */}
              <div
                className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0 pb-8"
              >
                {posts.map((post, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-full flex flex-col items-start gap-y-5 group hover:-translate-y-2 transition-transform duration-300 cursor-none"
                    onMouseMove={(e) => {
                      const imgContainer = e.currentTarget.querySelector('.grid.relative') as HTMLElement;
                      if (imgContainer) {
                        const rect = imgContainer.getBoundingClientRect();
                        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                      }
                    }}
                    onMouseEnter={() => setHoveredPost(index)}
                    onMouseLeave={() => setHoveredPost(null)}
                  >
                    <div className="w-full grid relative">

                      {/* Custom circle cursor that follows mouse */}
                      <div
                        className={`pointer-events-none absolute z-30 hidden lg:flex w-20 h-20 rounded-full bg-[#b2f6e3] items-center justify-center transition-[opacity,transform] duration-300 ease-out ${hoveredPost === index ? 'opacity-100' : 'opacity-0 scale-50'}`}
                        style={{
                          left: hoveredPost === index ? cursorPos.x : 0,
                          top: hoveredPost === index ? cursorPos.y : 0,
                          transform: `translate(-50%, -50%)`,
                        }}
                      >
                        <svg className="w-6 h-6 text-grey-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>

                      {/* Tags */}
                      <div className="col-start-1 row-start-1 z-20 p-3 pointer-events-none">
                        {post.tag && (
                          <div className="flex flex-wrap gap-1">
                            <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                              <div>{post.tag}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Main Image */}
                      <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm" loading="lazy" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                      </div>

                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start gap-y-3">
                      <div className="flex items-start gap-1 mt-1">

                        {/* Author */}
                        <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-500 bg-white">
                          <div className="inline-flex items-center justify-center -ml-1.5">
                            <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                              <img src={post.authorImg} alt="" className="w-full h-full object-cover" />
                            </div>
                          </div>
                          <div>{post.author}</div>
                        </div>

                        {/* Reading Time */}
                        <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-500 bg-white">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <div>{post.time}</div>
                        </div>

                      </div>

                      <h2 className="inline-flex flex-wrap text-balance text-left justify-start text-gray-900 text-2xl leading-none xl:text-3xl xl:leading-none 4xl:text-4xl 4xl:leading-none font-medium tracking-tight group-hover:text-gray-600 transition-colors">
                        {post.title}
                      </h2>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile progress bar */}
          <div className="col-span-12 px-4 md:hidden">
            <div className="w-full h-0.5 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((mobileCardIndex + 1) / posts.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="col-span-12 md:hidden px-4 md:px-7 mt-4">
            <a href="#" className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight capitalize font-medium overflow-hidden text-base px-6 py-3 rounded-3xl transition-all hover:rounded-xl bg-white text-gray-900">
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                  <span>Explore More Thoughts</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
                <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                  <span>Explore More Thoughts</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
