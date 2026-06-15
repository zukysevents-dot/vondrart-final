(() => {
  const coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cursor = document.querySelector(".cursor");
  if (!cursor || coarse) return;

  let frame = 0;
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  const paint = () => {
    cursor.style.transform = "translate3d(" + currentX + "px," + currentY + "px,0) translate(-50%,-50%)";
  };

  const render = () => {
    if (document.hidden) {
      frame = 0;
      return;
    }

    currentX += (targetX - currentX) * 0.32;
    currentY += (targetY - currentY) * 0.32;
    paint();

    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      frame = window.requestAnimationFrame(render);
      return;
    }

    frame = 0;
  };

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (reducedMotion) {
        currentX = targetX;
        currentY = targetY;
        paint();
        return;
      }
      schedule();
    },
    { passive: true }
  );

  document.addEventListener("pointerover", (event) => {
    if (event.target && event.target.closest && event.target.closest("a, button, [data-cursor-label]")) {
      cursor.classList.add("is-active");
    }
  }, { passive: true });

  document.addEventListener("pointerout", (event) => {
    const target = event.target && event.target.closest ? event.target.closest("a, button, [data-cursor-label]") : null;
    const next = event.relatedTarget;
    if (target && next && next.closest && next.closest("a, button, [data-cursor-label]") === target) return;
    cursor.classList.remove("is-active");
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector(".project-overlay:target")) {
      window.location.hash = "projekty";
    }
  });
})();

(() => {
  document.addEventListener("click", (event) => {
    const button = event.target && event.target.closest ? event.target.closest("[data-ill-scroll]") : null;
    if (!button) return;

    const carousel = button.closest(".illustrations-section");
    const track = carousel && carousel.querySelector(".ill-track");
    if (!track) return;

    event.preventDefault();
    const direction = Number(button.getAttribute("data-ill-scroll")) || 1;
    const amount = Math.max(260, track.clientWidth * 0.72);
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  });
})();
