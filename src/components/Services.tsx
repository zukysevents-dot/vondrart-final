const serviceGroups = [
  {
    title: "Brand Identity & Identita",
    items: ["Brand Strategy", "360° Brand Identity", "Logo Design", "Typografie & barvy", "Brand manuál", "Art Direction"]
  },
  {
    title: "Brand Concept",
    items: ["Positioning", "Naming", "Tone of Voice", "Brand Direction", "Storytelling", "Brand Management"]
  },
  {
    title: "Marketing & Social",
    items: ["Social Media", "Content Creation", "Grafické podklady", "Kampaně", "Fotografie", "Packaging Design"]
  }
];

export function Services() {
  return (
    <section className="section services-section" id="sluzby">
      <div className="section-head section-head-simple">
        <h2>Služby</h2>
      </div>

      <div className="services-grid">
        {serviceGroups.map((service, index) => (
          <article key={service.title} className="service-item">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
