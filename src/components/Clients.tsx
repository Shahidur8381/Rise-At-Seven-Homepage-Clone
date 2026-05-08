const clients = ["MISSGUIDED", "ASOS", "VIRGIN", "JD SPORTS", "MOONPIG", "CURRYS", "BOOHOO", "HALFORDS", "ETSY", "TUI", "LNER", "PRIMARK"];

export default function Clients() {
  return (
    <section className="bg-white text-ink py-20 px-6 md:px-10 border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-ink/60 mb-12">
          Trusted by the world's most ambitious brands
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
          {clients.map((c) => (
            <span key={c} className="text-center text-ink/70 text-lg md:text-xl font-bold tracking-wider hover:text-ink transition">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
