# Workeee: web

Prezentační stránka aplikace [Workeee](https://github.com/Mixer159/Workeee), týmové nástěnky, která běží u vás.

Projekty, úkoly, komentáře a přílohy na jednom místě. Open source pod licencí MIT, nasadíte ji na vlastní Convex a Vercel a za členy týmu neplatíte.

- Aplikace: [workeee.vercel.app](https://workeee.vercel.app)
- Zdrojový kód aplikace: [github.com/Mixer159/Workeee](https://github.com/Mixer159/Workeee)

## Co je uvnitř aplikace

| Funkce | Popis |
| --- | --- |
| Nástěnka s vlastními stavy | Každý projekt začne se třemi sloupci. Další si pojmenujete a obarvíte, nejvýš jich je dvanáct. |
| Role a viditelnost | Vlastník, správce a člen. Člen vidí celou organizaci, nebo jen projekty, do kterých ho někdo pozval. |
| Pozvánky odkazem | Odkaz na jedno použití, platný šest hodin až třicet dnů. Do celé organizace, nebo do jednoho projektu. |
| Přílohy a komentáře | Soubory do deseti megabajtů u úkolu i v komentáři. Diskuse se neztrácí v e-mailech. |
| Upozornění po dávkách | Přiřazení, zmínka a komentář chodí e-mailem po dávkách. V aplikaci je kanál s nepřečtenými nahoře. |
| Šest vzhledů | Tři světlé a tři tmavé palety celé aplikace. Výběr se pamatuje v prohlížeči. |

## Co je na webu

- **Úvodní stránka:** úvod, přehled funkcí se snímky běžící aplikace, nasazení ve čtyřech krocích, odkaz na zdrojový kód a poslední změny.
- **Změny** (`/zmeny`): celá historie změn aplikace po měsících.
- **404:** vlastní stránka pro neexistující adresy.

Snímky v `public/screenshots` jsou z běžící aplikace s ukázkovými daty.

## Spuštění

Potřebujete Node 20 nebo novější a pnpm.

```bash
pnpm install
pnpm dev
```

Web poběží na `http://localhost:3000`.

Další příkazy:

```bash
pnpm lint    # kontrola kódu
pnpm build   # produkční build
pnpm start   # spuštění produkčního buildu
```

## Nastavení domény

Kanonické adresy, `sitemap.xml`, `robots.txt` a náhledy při sdílení se skládají z jedné adresy webu:

- Na Vercelu se použije produkční doména projektu automaticky.
- Jinde nastavte proměnnou `NEXT_PUBLIC_SITE_URL`, například `https://vase-domena.cz`.

## Struktura

| Cesta | Obsah |
| --- | --- |
| `src/app` | Stránky, metadata, `robots.ts` a `sitemap.ts` |
| `src/components` | Sekce úvodní stránky, navigace a patička |
| `src/lib/changelog.ts` | Data pro stránku Změny, převzatá z repozitáře aplikace |
| `src/lib/site.ts` | Název, popis a adresa webu pro vyhledávače |
| `src/lib/typography.ts` | Nezlomitelné mezery za jednopísmennými předložkami |
| `public/screenshots` | Snímky aplikace |

## Technologie

Next.js 16 (App Router), React 19, TypeScript a Tailwind CSS 4.
