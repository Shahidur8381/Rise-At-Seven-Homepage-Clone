import ArrowUpRight from './ArrowUpRight';

const services = [
  {
    name: "Digital PR",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a5b7a24a900278d778e1a9cde25a81b1",
  },
  {
    name: "Organic Social & Content",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=4b6e845cfc895c0fa7f6bd74e4720d0f",
  },
  {
    name: "Search & Growth Strategy",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=df3a8f2b5793c4b7d1ed2cc2bece8362",
  },
  {
    name: "Content Experience",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=cc2341acd50f027777efbf143d3b96c4",
  },
  {
    name: "Data & Insights",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=171d6342cb7786cf5b268f9993508c99",
  },
  {
    name: "Onsite SEO",
    img: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=b36adc666570e80f1815ec80cf4222ba",
  },
];

export default function Services() {
  return (
    <section className="w-full pb-12 xl:pb-24 bg-[#efeeec]">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 overflow-hidden lg:pt-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* Header row */}
          <div className="col-span-12">
            <div className="grid grid-cols-12 md:border-b md:border-gray-300 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              {/* Title */}
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="flex flex-wrap items-center text-gray-900 text-6xl leading-[0.9] md:text-7xl md:leading-none lg:text-8xl lg:leading-none 2xl:text-[7rem] 2xl:leading-[0.9] font-medium tracking-tight">
                  <span style={{ marginRight: '14px' }}>Our</span>
                  <span
                    className="inline-flex shrink-0 bg-black/5 relative overflow-hidden"
                    style={{ borderRadius: '15%', width: '90px', height: 'auto', marginRight: '14px' }}
                  >
                    <img
                      src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span>Services</span>
                </h2>
              </div>

              {/* Desktop button */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <a href="#" className="group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base px-6 py-3 rounded-3xl bg-white text-gray-900 hover:rounded-xl transition-all md:w-auto overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                      <span>View All Services</span>
                      <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                    </div>
                    <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                      <span>View All Services</span>
                      <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Services grid — 2 columns */}
          <div className="col-span-12 grid grid-cols-12 gap-x-2">
            {services.map((service) => (
              <div key={service.name} className="col-span-12 -my-px md:col-span-6">
                <div className="group relative">
                  {/* Bottom border */}
                  <div className="absolute w-full bottom-0 left-0 z-0">
                    <div className="w-full h-px bg-gray-300" />
                  </div>

                  <a href="#" className="grid grid-cols-1 relative z-10">
                    {/* Text layer */}
                    <div className="col-start-1 row-start-1 relative z-20 py-4 flex items-center gap-3 text-black transition duration-500 lg:py-6 group-hover:text-white">
                      {/* Mobile thumbnail */}
                      <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden md:rounded-xl md:w-16 md:h-16 lg:hidden">
                        <img
                          src={service.img}
                          alt={service.name}
                          className="w-full h-full object-cover absolute inset-0"
                          loading="lazy"
                        />
                      </div>

                      {/* Text logic */}
                      <div className="lg:translate-x-10">
                        <div className="relative">
                          {/* Arrow that slides in on hover */}
                          <div className="absolute pr-2 top-0 left-0 overflow-hidden hidden lg:block">
                            <div className="transition-all duration-500 ease-out transform -translate-x-full translate-y-full -rotate-45 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0">
                              <span className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight inline-block"><ArrowUpRight className="w-[0.9em] h-[0.9em]" /></span>
                            </div>
                          </div>

                          <div className="transition-transform duration-500 ease-out lg:group-hover:translate-x-14">
                            <div className="text-current text-3xl leading-none lg:text-4xl lg:leading-none xl:text-6xl xl:leading-none font-medium tracking-tight">
                              {service.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover image background (desktop only) */}
                    <div className="col-start-1 row-start-1 relative rounded-2xl overflow-hidden z-10 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-100 hidden lg:block">
                      <div className="w-full h-full opacity-60 transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={service.img}
                          alt={service.name}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile button */}
          <div className="col-span-12 md:hidden">
            <a href="#" className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base px-6 py-3 rounded-3xl bg-white text-gray-900 hover:rounded-xl transition-all overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                  <span>View All Services</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
                <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                  <span>View All Services</span>
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
