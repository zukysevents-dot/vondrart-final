const illustrations = [
  {
    caption: "Punkt — omalovánka",
    image: "/images/illustration-punkt.webp"
  },
  {
    caption: "Bonghemia — ilustrace",
    image: "/images/illustration-bonghemia.webp"
  },
  {
    caption: "Vltavská",
    image: "/images/illustration-vltavska.webp"
  },
  {
    caption: "Swap & Sip",
    image: "/images/illustration-swap-sip.webp"
  },
  {
    caption: "Barvy & Beaty",
    image: "/images/illustration-barvy-beaty.webp"
  },
  {
    caption: "Five Elephant Takeover",
    image: "/images/illustration-five-elephant.webp"
  }
];

export function Illustrations() {
  return (
    <section className="section illustrations-section" id="ilustrace">
      <div className="ill-top">
        <span className="ill-kicker">Vybrané ilustrace</span>
        <p>
          Výběr ilustrací napříč projekty — brandové motivy, vizuální prvky pro sociální sítě, merch a tiskové
          výstupy.
        </p>
      </div>

      <div className="ill-title-row">
        <h2 className="ill-title">Ilustrace</h2>
        <div className="ill-controls" aria-label="Ovládání carouselu ilustrací">
          <button className="ill-arrow" type="button" data-ill-scroll="-1" aria-label="Předchozí ilustrace">
            ←
          </button>
          <button className="ill-arrow" type="button" data-ill-scroll="1" aria-label="Další ilustrace">
            →
          </button>
        </div>
      </div>

      <div className="ill-carousel">
        <div className="ill-track">
          {illustrations.map((item) => (
            <figure className="ill-card" key={item.caption} data-cursor-label={item.caption}>
              <img src={item.image} alt={item.caption} decoding="async" loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
