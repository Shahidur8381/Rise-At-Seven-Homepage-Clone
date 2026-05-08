const services = [
  { t: "Digital PR", d: "Earn coverage and authority at scale through creative, story-led campaigns that get brands talked about.", tag: "01" },
  { t: "SEO", d: "Win the SERP with content, technical and link strategies built for searchers and search engines alike.", tag: "02" },
  { t: "Content Marketing", d: "Search-first content that ranks, converts and earns shares across every platform that matters.", tag: "03" },
  { t: "Social Media", d: "Build community and culture with social-native content tuned for TikTok, Instagram, YouTube and Reddit.", tag: "04" },
  { t: "Influencer", d: "Creator-led campaigns that turn authentic voices into measurable brand and search outcomes.", tag: "05" },
  { t: "AI & LLM Search", d: "Get found, cited and recommended in ChatGPT, Gemini and the new generation of AI answer engines.", tag: "06" },
];

export default function Services() {
  return (
    <section className="bg-white text-ink py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-ink/60 mb-4">— What We Do</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
              Services built for the new search era.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold border-b border-ink pb-1 self-start">
            All services ↗
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10 rounded-3xl overflow-hidden">
          {services.map((s) => (
            <div key={s.t} className="bg-white p-8 md:p-10 group hover:bg-mint transition-colors min-h-[260px] flex flex-col justify-between">
              <span className="text-xs font-semibold text-ink/50">{s.tag}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{s.t}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
