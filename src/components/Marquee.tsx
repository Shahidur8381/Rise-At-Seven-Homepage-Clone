export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-6">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {row.map((t, i) => (
          <span key={i} className="text-white/80 text-2xl md:text-4xl font-semibold tracking-tight flex items-center gap-12">
            {t} <span className="text-mint">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee {from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
