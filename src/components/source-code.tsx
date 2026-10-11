import { GitHubButton } from "@/components/github-button";
import { tidy } from "@/lib/typography";

const links: { label: string; href: string }[] = [
  { label: "Issues", href: "https://github.com/Mixer159/Workeee/issues" },
  {
    label: "Licence MIT",
    href: "https://github.com/Mixer159/Workeee/blob/main/LICENSE",
  },
];

export function SourceCode() {
  return (
    <section className="dark bg-tint">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24">
        <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-5xl dark:text-white">
          Zdrojový kód máte celý
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {tidy(
            "Licence MIT, jeden repozitář, žádná uzavřená část. Next.js, Convex a Better Auth; nic dalšího si nikde nezakládáte. Chybí vám něco, nebo jste našli chybu? Založte issue, nebo rovnou pošlete pull request. Kód je psaný tak, aby se v něm dalo číst: každé rozhodnutí, které by jinak vypadalo náhodně, má v repozitáři napsáno proč.",
          )}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <GitHubButton />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-slate-300 pb-0.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-white/25 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
