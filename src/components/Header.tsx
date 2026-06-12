const navItems = [
  { href: "#projekty", label: "Projekty" },
  { href: "#sluzby", label: "Služby" },
  { href: "#o-mne", label: "O nás" }
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="vondrart">
        <span>vond</span>rart
      </a>

      <nav className="desktop-nav" aria-label="Hlavní navigace">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#kontakt">
        Napsat →
      </a>

      <input className="nav-toggle" id="nav-toggle" type="checkbox" aria-hidden="true" />
      <label className="menu-toggle" htmlFor="nav-toggle" aria-label="Otevřít menu">
        <span />
        <span />
      </label>

      <div className="mobile-nav">
        {[...navItems, { href: "#kontakt", label: "Napsat →" }].map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <span>vondrart — Brand Studio, Brno</span>
      </div>
    </header>
  );
}
