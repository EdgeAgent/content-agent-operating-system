/**
 * Operative Ledger style reminder: the header is a precise public dossier masthead—warm paper,
 * black structural type, a pink route indicator, and a chartreuse proof marker.
 */
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

const markUrl = "manus-storage/caos-mark_9a5d080f.png";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/features", label: "Feature guide" },
  { href: "/project", label: "Project profile" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" aria-label="Content Agent Operating System home">
          <img className="brand-mark" src={markUrl} alt="Four-stage controlled workflow mark" />
          <span className="brand-name">
            <span>CONTENT AGENT</span>
            <span>OPERATING SYSTEM</span>
          </span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "nav-link is-current" : "nav-link"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-status" aria-label="Document status">
          <span className="status-dot" />
          <span>PUBLIC FIELD GUIDE</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
