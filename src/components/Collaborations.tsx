const collaborations = [
  { name: "TEDx Brno", label: "TEDxBrno", scope: "Marketing · Event", variant: "tedx" },
  { name: "Festival Tlak", label: "Festival Tlak", scope: "Social Media", variant: "tlak" },
  { name: "Crosskeys Towing", label: "Crosskeys", scope: "Redesign loga · USA", variant: "crosskeys" },
  { name: "Kavárna Spolek", label: "Spolek", scope: "Socials · Grafika", variant: "spolek" },
  { name: "Mascotte", label: "Mascotte", scope: "Foto služby", variant: "mascotte" }
];

export function Collaborations() {
  return (
    <section className="section collabs-section" id="collabs">
      <div className="section-head section-head-stacked">
        <h2>
          Další
          <span>spolupráce</span>
        </h2>
      </div>
      <div className="collabs-grid">
        {collaborations.map((collaboration) => (
          <article className={`collab-item collab-${collaboration.variant}`} key={collaboration.name}>
            <div className="collab-logo" aria-label={collaboration.name}>
              {collaboration.label}
            </div>
            <div>
              <h3>{collaboration.name}</h3>
              <span>{collaboration.scope}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
