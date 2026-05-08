const stats = [
  { n: "300+", l: "Global brands trusted" },
  { n: "1.2B", l: "Impressions generated" },
  { n: "85+", l: "Industry awards won" },
  { n: "4", l: "Global offices" },
];

export default function Stats() {
  return (
    <section className="bg-ink text-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-mint text-sm font-semibold tracking-widest uppercase mb-6">— Who We Are</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-[1.05]">
          We're an organic media agency reshaping how brands grow on every searchable platform.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 border-t border-white/15 pt-12">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="text-5xl md:text-6xl font-bold text-mint">{s.n}</div>
              <p className="text-white/70 text-sm mt-3">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
