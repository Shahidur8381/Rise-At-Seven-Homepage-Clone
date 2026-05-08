import heroBg from "@/assets/riseHero.jpg";

const cases = [
  { brand: "Skyline Beauty", title: "How we made a challenger beauty brand the #1 cited name in ChatGPT skincare answers.", tag: "Beauty / AI Search" },
  { brand: "NorthFare", title: "A search-first PR campaign that drove 240M impressions in 6 weeks.", tag: "Travel / Digital PR" },
  { brand: "Loop Audio", title: "Reddit-native social strategy that doubled organic share of voice.", tag: "Tech / Social" },
  { brand: "Field & Fern", title: "Content engine ranking for 12,000 new keywords in 9 months.", tag: "DTC / SEO" },
];

export default function Work() {
  return (
    <section className="bg-ink text-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-4">— Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.05]">
              Category leaders in the making.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold border-b border-white pb-1 self-start text-white">
            View all work ↗
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <a key={c.brand} href="#" className="group block">
              <div className={`relative overflow-hidden rounded-3xl ${i % 2 ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
                <img src={heroBg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute top-5 left-5 bg-white/15 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">{c.tag}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-mint text-xs font-semibold tracking-widest uppercase mb-2">{c.brand}</p>
                  <h3 className="text-xl md:text-2xl font-semibold leading-snug">{c.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
