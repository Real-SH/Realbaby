"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { href: "/products", label: "Products" },
  { href: "/#moments", label: "Play Moments" },
  { href: "/#oem", label: "OEM / ODM" },
  { href: "/#capability", label: "Manufacturing" },
  { href: "/#quality", label: "Quality" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mobile-menu" ref={wrapperRef}>
      <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((current) => !current)}>
        <span className="mobile-menu-icon" aria-hidden="true"><span /><span /><span /></span>
        <span>Menu</span>
      </button>
      {open ? (
        <nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Mobile navigation">
          {menuItems.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        </nav>
      ) : null}
    </div>
  );
}
