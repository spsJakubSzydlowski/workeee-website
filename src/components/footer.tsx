import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    // One step darker than the darkest section, with white text.
    <footer className="bg-tint-deep">
      <div className="@container mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-white/15 pb-10">
          <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-white">
            <Logo className="size-5" />
            Workeee
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-white">
            <li>
              <Link
                href="/zmeny"
                className="transition-colors hover:text-slate-300"
              >
                Změny
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Mixer159/Workeee"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate-300"
              >
                github.com/Mixer159/Workeee
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mixer159/Workeee/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate-300"
              >
                Licence MIT
              </a>
            </li>
          </ul>
        </div>
        {/* Decorative wordmark, sized to the container and cut off at the bottom. */}
        <div
          aria-hidden="true"
          className="mt-16 h-[13cqw] overflow-hidden text-center text-[20.7cqw] leading-[0.8] font-bold tracking-tighter whitespace-nowrap text-white/6 select-none"
        >
          WORKEEE
        </div>
      </div>
    </footer>
  );
}
