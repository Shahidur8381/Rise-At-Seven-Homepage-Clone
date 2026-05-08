import heroBg from "@/assets/riseHero.jpg";

const posts = [
  { tag: "AI Search", title: "How to optimise your brand for ChatGPT and Gemini in 2026", date: "May 02, 2026" },
  { tag: "SEO", title: "The death of the keyword: planning content for entity-based search", date: "Apr 24, 2026" },
  { tag: "Digital PR", title: "Why newsroom-style PR is the new performance channel", date: "Apr 11, 2026" },
];

export default function Blog() {
  return (
    <section className="bg-white text-ink py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-ink/60 mb-4">— Insights</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">From the Rise newsroom.</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold border-b border-ink pb-1 self-start">All articles ↗</a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5">
                <img src={heroBg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-ink/60 mb-3">
                <span className="bg-ink text-white px-2 py-1 rounded-full">{p.tag}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug group-hover:underline">{p.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
