import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { tidy } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
};

// Shown for notFound() calls and for every URL that matches no route.
export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <Logo className="size-8" />
      <h1 className="mt-8 text-4xl leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-5xl">
        Tady nic není
      </h1>
      <p className="mt-4 max-w-md text-base leading-6 text-balance text-slate-600">
        {tidy(
          "Stránka na této adrese neexistuje. Možná se změnila, nebo je odkaz přepsaný jen zčásti.",
        )}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded bg-brand px-4 text-sm font-semibold text-white transition-[filter] duration-200 ease-out hover:brightness-110"
        >
          Zpět na úvod
        </Link>
        <a
          href="https://workeee.vercel.app/prihlaseni"
          className="inline-flex h-10 items-center rounded border border-slate-300 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
        >
          Otevřít aplikaci
        </a>
      </div>
    </main>
  );
}
