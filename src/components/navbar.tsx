"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { Logo } from "@/components/logo";

// The navbar stays transparent for the first pixels of scrolling and turns
// dark only past this point.
const SCROLL_THRESHOLD = 50;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

// The logo links to "/", which does nothing when the home page is already
// open, so the click also scrolls back to the top.
function scrollToTop() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

export function Navbar() {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );

  // Only the home page starts with a white hero. Other pages are dark from
  // the top, so there the navbar is dark from the start and only gains its
  // shadow on scroll.
  const dark = usePathname() !== "/" || scrolled;

  // The after element is the underline: it grows from the left edge while the
  // link is hovered or focused.
  const linkClassName = `relative text-sm font-medium sm:text-base transition-colors duration-500 ease-out after:absolute after:inset-x-0 after:-bottom-[5px] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 ${
    dark
      ? "text-white hover:text-slate-300"
      : "text-zinc-600 hover:text-foreground"
  }`;

  return (
    <>
      {/* Reserves the space of the fixed navbar. */}
      <div className="h-18 shrink-0" />
      <header
        className={`fixed inset-x-0 top-0 z-10 transition-[background-color,box-shadow] duration-500 ease-out ${
          dark ? "bg-tint" : "bg-transparent"
        } ${
          scrolled ? "shadow-[0_8px_24px_-12px_rgb(0_0_0/0.5)]" : "shadow-none"
        }`}
      >
        <nav className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            onClick={scrollToTop}
            className={`group flex shrink-0 items-center gap-2 text-xl leading-none sm:gap-2.5 sm:text-2xl font-semibold tracking-tight transition-colors duration-500 ease-out ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {/* The mark brightens while the link is hovered or focused, like the
                login button. */}
            <Logo className="size-6 transition-[filter] sm:size-8 duration-200 ease-out group-hover:brightness-125 group-focus-visible:brightness-125" />
            Workeee
          </Link>
          <div className="flex items-center gap-2.5 sm:gap-6">
            <Link href="/zmeny" className={linkClassName}>
              Změny
            </Link>
            <a
              href="https://workeee.vercel.app/prihlaseni"
              className="mist mist-brand group inline-flex h-9 items-center gap-1.5 rounded bg-brand px-2.5 text-sm font-semibold sm:h-10 sm:px-4 sm:text-base text-white transition-[filter] duration-200 ease-out hover:brightness-110"
            >
              Přihlášení
              {/* The arrow slides to the right while the link is hovered or focused. */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="hidden size-4 transition-transform duration-200 ease-out group-hover:translate-x-1 sm:block group-focus-visible:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
