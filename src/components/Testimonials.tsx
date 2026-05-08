const quotes = [
  { q: "They don't just deliver campaigns — they shift our share of search.", a: "Head of Growth, Global DTC brand" },
  { q: "The most strategic and creative organic media partner we've ever worked with.", a: "CMO, FTSE 250 retailer" },
  { q: "Rise made us the brand AI assistants recommend by name. That's a moat.", a: "VP Marketing, SaaS scale-up" },
];

export default function Testimonials() {
  return (
    <section className="bg-mint text-ink py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase mb-10">— What clients say</p>
        <div className="space-y-16">
          {quotes.map((t, i) => (
            <figure key={i} className="border-t border-ink/20 pt-10">
              <blockquote className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-widest opacity-70">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
