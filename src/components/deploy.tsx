import { tidy } from "@/lib/typography";

const steps: { title: string; description: string; code: string[] }[] = [
  {
    title: "Naklonovat a nainstalovat",
    description: "Node 20 nebo novější a pnpm. Nic dalšího.",
    code: [
      "git clone https://github.com/Mixer159/Workeee.git",
      "cd Workeee",
      "pnpm install",
    ],
  },
  {
    title: "Založit deployment Convexu",
    description:
      "Přihlásí vás, vytvoří projekt a čtyři proměnné zapíše do .env.local samo.",
    code: ["pnpm exec convex dev"],
  },
  {
    title: "Nastavit tajemství",
    description:
      "SITE_URL se musí rovnat adrese, ze které aplikaci servírujete. Jinak Better Auth odmítne přihlášení.",
    code: [
      'pnpm exec convex env set BETTER_AUTH_SECRET "$(openssl rand -base64 32)"',
      "pnpm exec convex env set SITE_URL https://vase-app.vercel.app",
      "# volitelně, jinak se e-maily jen neodesílají",
      "pnpm exec convex env set BREVO_API_KEY xxx",
      "pnpm exec convex env set BREVO_SENDER_EMAIL vy@vase-domena.cz",
    ],
  },
  {
    title: "Nasadit",
    description:
      "Na Vercel patří jen tři veřejné proměnné. Tajemství zůstávají v Convexu, prohlížeč je nikdy neuvidí.",
    code: [
      "NEXT_PUBLIC_CONVEX_URL",
      "NEXT_PUBLIC_CONVEX_SITE_URL",
      "NEXT_PUBLIC_SITE_URL",
    ],
  },
];

export function Deploy() {
  return (
    // scroll-mt keeps the heading clear of the fixed navbar when linked to.
    <section id="nasazeni" className="dark scroll-mt-18 bg-tint-strong">
      <div className="mx-auto grid w-full max-w-7xl gap-x-16 gap-y-10 px-6 pt-20 pb-14 sm:pt-24 sm:pb-16 lg:grid-cols-[2fr_3fr]">
        <div>
          <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-5xl dark:text-white">
            Nasadíte si to sami
          </h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            {tidy(
              "Vlastní Convex, vlastní Vercel, vlastní data. Čtyři kroky a aplikace běží, bez jediného účtu navíc.",
            )}
          </p>
        </div>
        {/* Vertical stepper: a numbered circle per step, joined by a line that
          runs from each circle down to the next one. */}
        <ol className="min-w-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative pb-8 pl-11 last:pb-0 sm:pl-14"
            >
              {index < steps.length - 1 && (
                <span className="absolute top-7.5 -bottom-0.5 left-4 w-0.5 -translate-x-1/2 bg-slate-300 dark:bg-white/20" />
              )}
              <span className="absolute -top-0.5 left-0 flex size-8 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="text-lg leading-7 font-bold tracking-tight text-slate-900 dark:text-white">
                {tidy(step.title)}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {tidy(step.description)}
              </p>
              {/* Long commands wrap instead of scrolling sideways, so they stay
                readable on phones; wrapped parts are indented to show that
                they continue the same line. */}
              <pre className="mt-3 rounded-sm border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs leading-5 wrap-anywhere whitespace-pre-wrap text-slate-900 dark:border-white/15 dark:bg-black/25 dark:text-slate-100">
                <code>
                  {step.code.map((line) => (
                    <span
                      key={line}
                      className={`block pl-4 -indent-4 ${line.startsWith("#") ? "text-slate-500 dark:text-slate-400" : ""}`}
                    >
                      {line}
                    </span>
                  ))}
                </code>
              </pre>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
