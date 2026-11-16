"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChevronDown, Menu, X } from "lucide-react";
import { cleaningServices, constructionServices } from "../data";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"construction" | "cleaning" | null>(null);
  const [suppressedDropdown, setSuppressedDropdown] = useState<"construction" | "cleaning" | null>(null);

  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    });
    setScrolled(false);
    setMenuOpen(false);
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!suppressedDropdown) return;

    const dropdown = document.querySelector<HTMLElement>(
      `[data-nav-dropdown="${suppressedDropdown}"]`,
    );
    if (!dropdown) return;

    function releaseSuppression(event: PointerEvent) {
      const bounds = [
        dropdown.getBoundingClientRect(),
        dropdown.querySelector(".dropdown-panel")?.getBoundingClientRect(),
      ].filter((rect): rect is DOMRect => rect !== undefined);
      const pointerIsInside = bounds.some(
        (rect) =>
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom,
      );

      if (!pointerIsInside) setSuppressedDropdown(null);
    }

    document.addEventListener("pointermove", releaseSuppression, true);
    return () => document.removeEventListener("pointermove", releaseSuppression, true);
  }, [suppressedDropdown]);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    function scrollToTopBeforeNavigation(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement) || link.hasAttribute("download")) return;
      if (link.target && link.target !== "_self") return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search)
      ) {
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    document.addEventListener("click", scrollToTopBeforeNavigation, true);
    return () => document.removeEventListener("click", scrollToTopBeforeNavigation, true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const closeDropdown = (dropdown: "construction" | "cleaning") => {
    setOpenDropdown(null);
    setSuppressedDropdown(dropdown);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <div className="shell header-inner">
        <Link className="brand" href="/" onClick={closeMenu} aria-label="Jaseda Company Ltd home">
          <span className="brand-mark"><Building2 size={22} strokeWidth={1.6} /></span>
          <span className="brand-name">JASEDA<span>COMPANY LTD</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <div
            data-nav-dropdown="construction"
            className={`nav-dropdown${openDropdown === "construction" ? " nav-dropdown-open" : ""}`}
            onMouseEnter={() => {
              if (suppressedDropdown !== "construction") setOpenDropdown("construction");
            }}
            onMouseLeave={() => setOpenDropdown(null)}
            onFocus={() => {
              if (suppressedDropdown !== "construction") setOpenDropdown("construction");
            }}
            onBlur={(event) => {
              if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                setOpenDropdown(null);
              }
            }}
          >
            <Link href="/construction" className="nav-parent" aria-haspopup="true" aria-expanded={openDropdown === "construction"} onClick={() => closeDropdown("construction")}>Construction <ChevronDown size={13} /></Link>
            <div className="dropdown-panel">
              {constructionServices.map((service) => (
                <Link key={service.slug} href={`/construction/${service.slug}`} onClick={() => closeDropdown("construction")}>{service.title}</Link>
              ))}
            </div>
          </div>
          <div
            data-nav-dropdown="cleaning"
            className={`nav-dropdown${openDropdown === "cleaning" ? " nav-dropdown-open" : ""}`}
            onMouseEnter={() => {
              if (suppressedDropdown !== "cleaning") setOpenDropdown("cleaning");
            }}
            onMouseLeave={() => setOpenDropdown(null)}
            onFocus={() => {
              if (suppressedDropdown !== "cleaning") setOpenDropdown("cleaning");
            }}
            onBlur={(event) => {
              if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                setOpenDropdown(null);
              }
            }}
          >
            <Link href="/cleaning" className="nav-parent" aria-haspopup="true" aria-expanded={openDropdown === "cleaning"} onClick={() => closeDropdown("cleaning")}>Cleaning <ChevronDown size={13} /></Link>
            <div className="dropdown-panel">
              {cleaningServices.map((service) => (
                <Link key={service.slug} href={`/cleaning/${service.slug}`} onClick={() => closeDropdown("cleaning")}>{service.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/team">Our team</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="header-cta" href="/contact">Request a quote <span>↗</span></Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav${menuOpen ? " mobile-nav-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-nav-links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About us</Link>
          <details className="mobile-nav-group">
            <summary>Construction <ChevronDown size={17} /></summary>
            <Link href="/construction" onClick={closeMenu}>All construction services</Link>
            {constructionServices.map((service) => (
              <Link key={service.slug} href={`/construction/${service.slug}`} onClick={closeMenu}>{service.title}</Link>
            ))}
          </details>
          <details className="mobile-nav-group">
            <summary>Cleaning <ChevronDown size={17} /></summary>
            <Link href="/cleaning" onClick={closeMenu}>All cleaning services</Link>
            {cleaningServices.map((service) => (
              <Link key={service.slug} href={`/cleaning/${service.slug}`} onClick={closeMenu}>{service.title}</Link>
            ))}
          </details>
          <Link href="/projects" onClick={closeMenu}>Our projects</Link>
          <Link href="/team" onClick={closeMenu}>Our team</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </div>
        <Link className="button button-gold mobile-quote" href="/contact" onClick={closeMenu}>Request a quote <span>↗</span></Link>
      </nav>
      {menuOpen && <button className="mobile-nav-scrim" aria-label="Close navigation" onClick={closeMenu} />}
    </header>
  );
}
