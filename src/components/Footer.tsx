const cols = [
  { h: "Services", l: ["Digital PR", "SEO", "Content", "Social", "Influencer", "AI Search"] },
  { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
  { h: "Resources", l: ["Blog", "Webinars", "Reports", "Leaderboard"] },
  { h: "Offices", l: ["Manchester", "London", "New York", "Berlin"] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-white/10 px-6 md:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="text-3xl font-semibold italic">Rise at Seven<sup className="text-xs not-italic">®</sup></div>
            <p className="text-white/60 mt-4 max-w-xs text-sm">Organic media planners creating, distributing & optimising search-first content.</p>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-ink rounded-full px-5 py-3 text-sm font-medium mt-6">Get in touch ↗</a>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="text-mint text-xs font-semibold tracking-widest uppercase mb-5">{c.h}</h4>
              <ul className="space-y-3 text-sm text-white/80">
                {c.l.map((i) => <li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Rise at Seven. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
