// Dark button linking to the repository, with the GitHub mark and an arrow
// that nudges up and right while the button is hovered or focused. Inside a
// dark section it turns brand blue, so it stays visible.
export function GitHubButton() {
  return (
    <a
      href="https://github.com/Mixer159/Workeee"
      target="_blank"
      rel="noopener noreferrer"
      className="mist mist-dark group inline-flex h-10 items-center gap-2 rounded bg-slate-900 px-4 text-sm font-semibold text-white transition-[background-color,filter] duration-200 ease-out hover:bg-slate-700 dark:bg-brand dark:hover:bg-brand dark:hover:brightness-110"
    >
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className="size-4"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
      Otevřít na GitHubu
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
      >
        <path d="M7 7h10v10M7 17 17 7" />
      </svg>
    </a>
  );
}
