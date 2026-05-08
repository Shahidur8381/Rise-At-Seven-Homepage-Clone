import heroBg from "@/assets/riseHero.jpg";

const navItems = [
  { label: "Services", plus: true },
  { label: "Industries", plus: true },
  { label: "International", plus: true },
  { label: "About", plus: true },
  { label: "Work", plus: false, badge: "25" },
  { label: "Careers", plus: false },
  { label: "Blog & Resources", plus: true },
  { label: "Webinar", plus: false },
];

const platforms = [
  "Google", "ChatGPT", "Gemini", "TikTok", "YouTube", "Pinterest", "GIPHY", "reddit", "amazon",
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Top announcement bar */}
      <div className="bg-mint text-ink text-center text-sm py-2 font-medium">
        🚨 The Category Leaderboard - Live Now
      </div>

      {/* Nav */}
      <header className="absolute top-10 left-0 right-0 z-20 px-6 md:px-10">
        <div className="flex items-center justify-between">
          <a href="/" className="text-white text-2xl font-semibold tracking-tight italic">
            Rise at Seven<sup className="text-xs not-italic">®</sup>
          </a>
          <nav className="hidden lg:flex items-center gap-7 bg-white/10 backdrop-blur-md rounded-full px-7 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="relative text-white text-sm font-medium hover:opacity-80 transition"
              >
                {item.label}{item.plus && " +"}
                {item.badge && (
                  <span className="absolute -top-3 -right-4 bg-mint text-ink text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="bg-white text-ink rounded-full px-5 py-3 text-sm font-medium flex items-center gap-1 hover:bg-white/90 transition"
          >
            Get In Touch <span className="text-base">↗</span>
          </a>
        </div>
      </header>

      {/* Hero background */}
      <div
        className="relative w-full h-[100vh] min-h-[760px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/10" />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24">
          {/* Award strip */}
          <div className="text-white text-xs tracking-wide mb-3 font-semibold">
            #1 MOST RECOMMENDED<br />CONTENT MARKETING AGENCY
          </div>
          <div className="flex items-center gap-6 text-white/90 text-[10px] mb-10 opacity-80">
            <span>🏆 GLOBAL SEARCH AWARDS</span>
            <span>The Drum</span>
            <span>UK Social Media Awards</span>
            <span>CONTENT AWARDS</span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-bold leading-[0.95] tracking-tight text-[64px] md:text-[110px] lg:text-[140px]">
            <span className="block">We Create</span>
            <span className="block flex items-center justify-center gap-4 flex-wrap">
              Category
              <span className="inline-block w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-2xl overflow-hidden align-middle">
                <img src={heroBg} alt="" className="w-full h-full object-cover" />
              </span>
              Leaders
            </span>
          </h1>

          <p className="text-white/95 text-lg md:text-xl mt-6">
            on every searchable platform
          </p>

          {/* Platforms */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-12 text-white/90 text-lg font-medium">
            {platforms.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between gap-3 text-white text-xs md:text-sm">
          <p>
            Organic media planners creating, distributing & optimising<br />
            <span className="font-semibold">search-first</span> content for SEO, Social, PR, Ai and LLM search
          </p>
          <p className="text-right">
            <span className="font-semibold">4 Global Offices serving</span><br />
            UK, USA (New York) & EU
          </p>
        </div>
      </div>
    </section>
  );
}
