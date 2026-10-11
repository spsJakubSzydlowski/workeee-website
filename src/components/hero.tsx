import Image from "next/image"
import { GitHubButton } from "@/components/github-button"
import { tidy } from "@/lib/typography"

// Each line is split around the part shown in blue.
const highlights: { before: string; accent: string; after: string }[] = [
	{ before: "", accent: "Open source", after: " pod licencí MIT" },
	{ before: "Nasadíte během ", accent: "jednoho odpoledne", after: "" },
	{ before: "", accent: "Žádné poplatky", after: " za členy týmu" },
]

export function Hero() {
	return (
		// 4.5rem is the navbar's reserved height, so navbar + hero fill one screen.
		<section className="flex min-h-[calc(100dvh-4.5rem)] flex-col">
			{/* The larger bottom padding lifts the content slightly above center. */}
			<div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-12 px-6 pt-16 pb-24 sm:pb-28 xl:flex-row xl:items-center xl:justify-start">
				<div className="shrink-0 text-center xl:text-left">
					<h1 className="text-[3.25rem] leading-[1.1] font-bold tracking-tighter text-slate-900 sm:text-7xl sm:whitespace-nowrap xl:text-[5rem]">
						Týmová nástěnka,
						<br />
						<span className="text-brand">která běží u&nbsp;vás</span>
					</h1>
					{/* Below xl everything is centered. From xl up the left margins line the
					    paragraph and buttons up with the visible edge of the blue "k". */}
					<p className="mt-6 text-base leading-6 text-slate-600 sm:whitespace-nowrap xl:ml-1">
						{tidy("Projekty, úkoly, komentáře a přílohy na jednom místě.")}
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3 xl:ml-[5px] xl:justify-start">
						<GitHubButton />
						<a
							href="#nasazeni"
							className="inline-flex h-10 items-center rounded border border-slate-300 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
						>
							Nasazení krok za krokem
						</a>
					</div>
				</div>
				{/* Screenshot of the board from the app's repository, cropped to its left part.
				    From xl up it sits next to the text, 440px tall. Below xl the two no
				    longer fit side by side, so it drops under the buttons at the same
				    528x440 size: the content keeps its scale and only shrinks on phones
				    narrower than the box. */}
				<div className="relative mx-auto aspect-[6/5] w-full max-w-132 min-w-0 overflow-hidden rounded-lg border border-slate-300 shadow-[0_24px_48px_-24px_rgb(15_23_42/0.25)] xl:mx-0 xl:aspect-auto xl:h-[440px] xl:w-auto xl:max-w-none xl:flex-1">
					<Image
						src="/screenshots/board.png"
						alt="Nástěnka projektu v aplikaci Workeee"
						fill
						sizes="(min-width: 576px) 960px, 181vw"
						loading="eager"
						fetchPriority="high"
						className="object-cover object-left-top"
					/>
				</div>
			</div>
			{/* Stacked on phones, where a thin line between the items shows which two
			    lines belong together. Side by side from md up, without lines. */}
			<ul className="mx-auto grid w-full max-w-7xl px-6 pb-10 text-center text-lg font-semibold tracking-tight text-slate-900 md:grid-cols-3 md:gap-8 lg:text-xl">
				{highlights.map((highlight) => (
					<li
						key={highlight.accent}
						className="mx-auto w-full max-w-64 border-t border-slate-200 py-4 first:border-t-0 md:max-w-none md:border-t-0 md:py-0"
					>
						{highlight.before}
						{/* block puts the blue part on its own line */}
						<span className="block text-brand">
							{highlight.accent}
						</span>
						{highlight.after}
					</li>
				))}
			</ul>
		</section>
	)
}
