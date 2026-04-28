"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { primaryNavigation, secondaryNavigation } from "@/config/navigation";

export function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonId = "mobile-menu-button";
  const panelId = "mobile-menu-panel";

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const onClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative lg:hidden">
      <button
        id={buttonId}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full border border-cab-700 bg-cab-900/70 px-3 py-2 text-sm font-semibold text-cab-100 transition hover:bg-cab-800/80"
      >
        Menü
      </button>

      {isOpen ? (
        <div
          id={panelId}
          role="menu"
          aria-labelledby={buttonId}
          className="absolute right-0 z-50 mt-2 w-56 rounded-2xl border border-cab-800 bg-cab-950/95 p-2 shadow-soft backdrop-blur"
        >
          <ul className="space-y-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-cab-100 hover:bg-white/5 hover:text-brand-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {secondaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-cab-300 hover:bg-white/5 hover:text-brand-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
