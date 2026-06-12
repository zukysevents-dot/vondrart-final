import { services } from "@/data/projects";

export function Marquee() {
  const items = [...services, "Brand Identity", "Creative Direction", "Campaigns"];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
