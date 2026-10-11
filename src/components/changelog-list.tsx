import type { ChangelogEntry } from "@/lib/changelog";
import { tidy } from "@/lib/typography";

// "2026-10-05" -> "5. 10. 2026"
function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${day}. ${month}. ${year}`;
}

// Changelog entries as rows: date on the left, title, tags and items on the
// right. Shared by the home page preview and the full /zmeny page.
export function ChangelogList({ entries }: { entries: ChangelogEntry[] }) {
  return (
    <ul className="divide-y divide-slate-300 dark:divide-white/15">
      {entries.map((entry) => (
        <li
          key={`${entry.date}-${entry.title}`}
          className="grid gap-x-8 gap-y-3 py-8 md:grid-cols-[10rem_1fr]"
        >
          <time
            dateTime={entry.date}
            className="pt-1 font-mono text-xs leading-5 text-slate-600 dark:text-slate-400"
          >
            {formatDate(entry.date)}
          </time>
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-lg leading-7 font-bold tracking-tight text-slate-900 dark:text-white">
                {tidy(entry.title)}
              </h3>
              {entry.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm border border-slate-300 px-1.5 py-0.5 font-mono text-[11px] leading-4 text-slate-600 dark:border-white/25 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul className="mt-3 flex flex-col gap-2">
              {entry.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-sm leading-6 text-slate-600 before:absolute before:top-2.5 before:left-0 before:size-1 before:bg-slate-300 dark:text-slate-300 dark:before:bg-white/30"
                >
                  {tidy(item)}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
