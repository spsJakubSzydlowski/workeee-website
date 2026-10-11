import Link from "next/link";
import { ChangelogList } from "@/components/changelog-list";
import { CHANGELOG, CHANGELOG_PREVIEW_COUNT } from "@/lib/changelog";

export function LatestChanges() {
  return (
    <section className="dark bg-tint-strong">
      <div className="mx-auto w-full max-w-7xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-16">
        <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-5xl dark:text-white">
          Poslední změny
        </h2>
        <div className="mt-10 border-t border-slate-300 dark:border-white/15">
          <ChangelogList
            entries={CHANGELOG.slice(0, CHANGELOG_PREVIEW_COUNT)}
          />
        </div>
        <Link
          href="/zmeny"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          Celá historie
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
