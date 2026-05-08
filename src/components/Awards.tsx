const awards = [
  "Global Search Awards — Best Large SEO Agency",
  "The Drum — Content Agency of the Year",
  "UK Social Media Awards — Best B2C Campaign",
  "European Search Awards — Best Use of PR",
  "Content Marketing Awards — Grand Prix",
  "Performance Marketing Awards — Best Integrated",
];

export default function Awards() {
  return (
    <section className="bg-ink text-white py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl leading-[1.05]">
            Award-winning, every year.
          </h2>
          <p className="text-white/60 max-w-sm">85+ industry awards across SEO, PR, content and social — and counting.</p>
        </div>
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {awards.map((a) => (
            <li key={a} className="flex items-center justify-between py-6 group hover:pl-4 transition-all">
              <span className="text-lg md:text-2xl font-medium">{a}</span>
              <span className="text-mint opacity-0 group-hover:opacity-100 transition">↗</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
