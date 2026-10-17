import { Mark } from "@/components/shared/mark";
import { ACTIONS, LINKS } from "@/lib/workeee";
import { externalProps } from "./button-link";
import { NavMenu, type NavLink } from "./nav-menu";

/** Where the changelog page lives. */
export const CHANGES_HREF = "/zmeny";

/** On the landing page the sections are in-page anchors; elsewhere they lead back to it. */
export type Page = "home" | "zmeny" | "not-found";

const SECTIONS = [
  { hash: "#obrazovky", label: "Jak to funguje" },
  { hash: "#funkce", label: "Funkce" },
  { hash: "#nasazeni", label: "Nasazení" },
  { hash: "#zdrojovy-kod", label: "Zdrojový kód" },
];

/**
 * The floating bar: a dark rounded rectangle, centred. It starts inside the
 * hero sheet and scrolls with the page until it is 12 px from the top, where
 * it stays for the rest of the page (see .nav-rail in vyber.css). It is opaque, so its text reads over the photograph, over the
 * light sections and over a dark frame (the thin light ring marks its edge
 * there). Below 1024 px (phones and upright tablets) the links move into a
 * burger menu beside the login.
 * The header itself lets clicks through, only the bar takes them.
 */
export function Nav({ page = "home" }: { page?: Page }) {
  const base = page === "home" ? "" : "/";
  const links: NavLink[] = [
    ...SECTIONS.map((section) => ({ href: base + section.hash, label: section.label, current: false })),
    { href: CHANGES_HREF, label: "Změny", current: page === "zmeny" },
  ];
  return (
    <header className="pointer-events-none nav-rail sticky top-3 z-50 flex h-0 items-start justify-center px-4">
      <nav
        aria-label="Hlavní"
        className="pointer-events-auto relative flex items-center gap-1 rounded-control bg-ink p-1 text-white shadow-bar ring-1 ring-white/20 [--focus:#ffffff]"
      >
        <a
          href={page === "home" ? "#top" : "/"}
          aria-label={page === "home" ? "Workeee, začátek stránky" : "Workeee, úvodní stránka"}
          className="flex h-10 items-center gap-2.5 rounded-inset px-3 transition-[background-color] duration-200 ease-out hover:bg-white/10 lg:px-4"
        >
          <Mark className="h-5 w-auto text-white [&_rect:last-child]:fill-dot" />
          <span className="hidden text-[1.0625rem] font-semibold tracking-[-0.01em] sm:inline">
            Workeee
          </span>
        </a>

        <ul className="hidden items-center lg:mx-2 lg:flex">
          {links.map((section) => (
            <li key={section.href}>
              <a
                href={section.href}
                aria-current={section.current ? "page" : undefined}
                className="flex h-10 items-center rounded-inset px-3.5 text-[0.9375rem] lg:px-5 font-medium whitespace-nowrap text-[#dadde3] transition-[background-color,color] duration-200 ease-out hover:bg-white/10 hover:text-white aria-[current=page]:text-white"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={LINKS.login}
          {...externalProps(LINKS.login)}
          className="mr-1 ml-2 flex h-[34px] items-center rounded-[7px] bg-white px-3.5 text-[0.90625rem] font-semibold text-ink transition-[background-color] duration-200 ease-out hover:bg-[#e3f1ec] lg:ml-3 lg:px-[1.125rem]"
        >
          {ACTIONS.login}
        </a>

        <NavMenu links={links} />
      </nav>
    </header>
  );
}
