import Image from "next/image";
import { tidy } from "@/lib/typography";

const features: {
  title: string;
  description: string;
  image: string;
  alt: string;
  // How the screenshot sits in the 16:10 window at the top of the card.
  fit: string;
}[] = [
  {
    title: "Nástěnka s vlastními stavy",
    image: "/screenshots/features/stavy.png",
    alt: "Nástěnka projektu se sloupci To-do, V průběhu a Hotovo",
    fit: "object-cover object-left-top",
    description:
      "Každý projekt začne se třemi sloupci. Další si pojmenujete a obarvíte, nejvýš jich je dvanáct.",
  },
  {
    title: "Role a viditelnost",
    image: "/screenshots/features/role.png",
    alt: "Seznam členů organizace s rolemi a rozsahem přístupu",
    fit: "object-cover object-left-top",
    description:
      "Vlastník, správce a člen. Člen vidí celou organizaci, nebo jen projekty, do kterých ho někdo pozval.",
  },
  {
    title: "Pozvánky odkazem",
    image: "/screenshots/features/pozvanky.png",
    alt: "Seznam pozvánek s kódem, stavem a datem vypršení",
    fit: "object-cover object-left-top",
    description:
      "Odkaz na jedno použití, platný šest hodin až třicet dnů. Do celé organizace, nebo do jednoho projektu.",
  },
  {
    title: "Přílohy a komentáře",
    image: "/screenshots/comments.png",
    alt: "Komentáře pod úkolem se zmínkami kolegů",
    fit: "object-cover object-left-top",
    description:
      "Soubory do deseti megabajtů u úkolu i v komentáři. Diskuse se neztrácí v e-mailech.",
  },
  {
    title: "Upozornění po dávkách",
    image: "/screenshots/features/upozorneni-2.png",
    alt: "Stránka Upozornění se zmínkou v komentáři",
    fit: "object-cover object-left-top",
    description:
      "Přiřazení, zmínka a komentář chodí e-mailem po dávkách: osm změn za sebou je jedna zpráva s počtem v předmětu. V aplikaci je kanál s nepřečtenými nahoře.",
  },
  {
    title: "Šest vzhledů",
    image: "/screenshots/features/vzhledy-2.png",
    alt: "Výběr ze šesti barevných vzhledů aplikace",
    fit: "object-contain",
    description:
      "Tři světlé a tři tmavé palety celé aplikace. Výběr se pamatuje v prohlížeči.",
  },
];

export function Features() {
  return (
    <section className="dark bg-tint pt-20 pb-14 sm:pt-24 sm:pb-16">
      <h2 className="mx-auto w-full max-w-7xl px-6 text-4xl leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-5xl dark:text-white">
        Co je uvnitř
      </h2>
      <p className="mx-auto mt-5 w-full max-w-7xl px-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {tidy(
          "Žádné makety. Každý obrázek na této stránce je snímek běžící aplikace.",
        )}
      </p>
      {/* Cards with a screenshot on top. The window behind each screenshot has
          the app's own background colour, so shots that do not fill it blend
          in. */}
      <ul className="mx-auto mt-10 grid w-full max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="overflow-hidden rounded-md bg-white/6"
          >
            <div className="relative aspect-[16/10] bg-[#fbfcfe]">
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className={feature.fit}
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg leading-7 font-bold tracking-tight text-slate-900 dark:text-white">
                {tidy(feature.title)}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {tidy(feature.description)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
