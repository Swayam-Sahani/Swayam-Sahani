"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "work", label: "Work" },
  { id: "seo", label: "SEO experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "testimonials", label: "Testimonials" },
];

export function ChapterIndex() {
  const [active, setActive] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -54% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`chapter-index${menuOpen ? " menu-open" : ""}`}
      aria-label="Portfolio navigation"
      onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
    >
      <a className="wordmark" href="#work" aria-label="Swayam, home">S<span>.</span></a>
      <ol id="portfolio-menu">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              aria-current={active === chapter.id ? "location" : undefined}
              className={active === chapter.id ? "is-active" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
      <a className="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="portfolio-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
