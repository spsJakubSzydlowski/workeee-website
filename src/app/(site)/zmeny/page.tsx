import type { Metadata } from "next";
import { ChangelogList } from "@/components/changelog-list";
import { CHANGELOG, groupChangelogByMonth } from "@/lib/changelog";
import { OPEN_GRAPH_BASE } from "@/lib/site";
import { tidy } from "@/lib/typography";

const title = "Změny";
const description =
  "Co se v aplikaci Workeee změnilo, od nejnovějšího: nové funkce, úpravy a opravy seřazené po měsících.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/zmeny" },
  openGraph: { ...OPEN_GRAPH_BASE, title, description, url: "/zmeny" },
};

const MONTHS = [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec",
];

// "2026-10" -> "Říjen 2026"
function formatMonth(month: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  return `${MONTHS[monthNumber - 1]} ${year}`;
}

// 1 změna, 2-4 změny, 5+ změn
function formatCount(count: number) {
  if (count === 1) return "1 změna";
  if (count >= 2 && count <= 4) return `${count} změny`;
  return `${count} změn`;
}

export default function Zmeny() {
  return (
    // Same grey as the lighter sections of the home page. The dark class
    // switches the shared changelog rows to light text.
    <main className="dark flex-1 bg-tint">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:py-20">
        <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter text-white sm:text-6xl">
          Změny
        </h1>
        <p className="mt-6 text-base leading-6 text-slate-300">
          {tidy(
            "Co se v aplikaci změnilo, od nejnovějšího. Seznam je součástí repozitáře, takže se mění spolu s kódem.",
          )}
        </p>
        {groupChangelogByMonth(CHANGELOG).map((group) => (
          <section key={group.month} className="mt-16">
            <div className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
              <h2 className="text-base font-bold tracking-tight text-white">
                {formatMonth(group.month)}
              </h2>
              <span className="font-mono text-xs text-slate-400">
                {formatCount(group.entries.length)}
              </span>
            </div>
            <ChangelogList entries={group.entries} />
          </section>
        ))}
      </div>
    </main>
  );
}
