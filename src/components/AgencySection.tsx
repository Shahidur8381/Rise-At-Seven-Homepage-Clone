import ArrowUpRight from './ArrowUpRight';

export default function AgencySection() {
  return (
    <section className="w-full py-12 xl:py-24 bg-[#efeeec]">
      <div className="w-full px-4 md:px-7">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">

          {/* Mobile CTA buttons (shown above text on mobile) */}
          <div className="flex flex-wrap gap-4 w-full md:hidden">
            <a href="#" className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base px-6 py-3 rounded-3xl bg-white text-gray-900 hover:rounded-xl transition-all overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                  <span>Our Story</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
                <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                  <span>Our Story</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
              </div>
            </a>
            <a href="#" className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base text-gray-900 overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                  <span>Our Services</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
                <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                  <span>Our Services</span>
                  <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                </div>
              </div>
            </a>
          </div>

          {/* Left - description */}
          <div className="w-full mb-1 md:mt-2 md:mb-0 max-w-sm xl:max-w-xl">
            <p className="text-lg leading-tight lg:text-lg lg:leading-tight xl:text-2xl xl:leading-none font-medium tracking-tight text-gray-900">
              A global team of search-first content marketers engineering semantic relevancy &amp; category signals for both the internet and people
            </p>
          </div>

          {/* Right - heading + buttons */}
          <div className="w-full grid max-w-[24rem] md:max-w-[40rem] xl:max-w-xl 2xl:max-w-[42rem] gap-y-3 md:gap-y-7">
            <h2 className="flex flex-wrap text-balance text-left justify-start text-gray-900 text-5xl leading-none lg:text-6xl lg:leading-none xl:text-7xl xl:leading-[0.9] font-medium tracking-tight">
              <span className="inline mr-2" style={{ marginRight: '12px' }}>Driving</span>
              <span className="inline mr-2" style={{ marginRight: '12px' }}>Demand</span>
              <span className="inline mr-2" style={{ marginRight: '12px' }}>&amp;</span>
              <span className="inline mr-2" style={{ marginRight: '12px' }}>Discovery</span>
              <span
                className="inline shrink-0 bg-black/5 relative overflow-hidden"
                style={{ borderRadius: '15%', width: '81px' }}
              >
                <img
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                  alt=""
                  className="w-full h-full object-cover object-center absolute inset-0"
                />
              </span>
            </h2>

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex flex-wrap gap-4">
              <a href="#" className="group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base px-6 py-3 rounded-3xl bg-white text-gray-900 hover:rounded-xl transition-all md:w-auto overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                    <span>Our Story</span>
                    <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                  <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                    <span>Our Story</span>
                    <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </a>
              <a href="#" className="group inline-flex shrink-0 justify-center gap-x-2 items-center font-medium text-base text-gray-900 md:w-auto overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="transition-transform duration-300 group-hover:-translate-y-8 flex items-center gap-x-2">
                    <span>Our Services</span>
                    <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                  <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-8 group-hover:translate-y-0 flex items-center gap-x-2">
                    <span>Our Services</span>
                    <span className="inline-block text-xs mt-0.5"><ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
