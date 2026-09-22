# GeoLearn: World Geography Learning Site — Spec (v2, world scope)

## 1. Vision

World-scope, textbook-style, broad-to-narrow interactive geography learning site,
built around an interactive map. Not region-limited — covers every continent.
Core teaching pillars, in priority order: **script/language, terrain & vegetation,
road infrastructure (lines, signs, plates, bollards, poles), Street View capture
meta**. Material-culture/clothing content is retained but stays a clearly-labeled
secondary, low-confidence signal — never a primary identification method, never
appearance/ethnicity-based.

## 2. Site architecture (5 layers, broad → narrow, world-scale)

```
/                          World map — continent-level visual patterns
/continent/:id             Continent overview → subregions highlighted
/subregion/:id             Subregion overview → shared patterns + country list
                            + "commonly confused within this subregion" callout
/country/:id                Country deep-dive (schema, see §3)
/compare/:idA/:idB         Side-by-side comparison + "10-second decision rule"
/quiz?region=&subregion=   Active-recall quiz, filterable by any layer/taxonomy
/progress                  Mastery dashboard (per-country / per-subregion)
```

Every country page links sideways to `commonlyConfusedWith` entries → compare page,
and up to its subregion/continent parents. This must work identically whether the
country is in Africa, Southeast Asia, or Eastern Europe — same schema everywhere.

## 3. Shared taxonomy (controlled vocabulary — use identically across all continents)

This is the key structural change from the Africa-only draft: every country's data
uses the SAME tag set, so cross-country filtering/comparison works globally.

**Vegetation / terrain type** (`terrainTags`, array, pick all that apply):
`rainforest`, `savanna`, `desert`, `mediterranean`, `temperate-forest`,
`steppe-grassland`, `highland-mountain`, `coastal`, `boreal-taiga`, `tundra`,
`agricultural-plains`, `urban-dense`

**Road infrastructure** (`roadInfra` object):
```json
{
  "centerLineColor": "yellow|white|none",
  "laneLineColor": "white|yellow",
  "distanceUnit": "km|mile",
  "signStandard": "vienna-convention | us-mutcd | uk | other",
  "plate": { "color": "string", "shape": "string", "frontRequired": true },
  "bollardStyle": "string",
  "utilityPole": { "material": "wood|concrete|steel", "transformerMount": "string" }
}
```

## 4. Data schema (per-country JSON, generalized)

```json
{
  "id": "kenya",
  "continent": "africa",
  "subregion": "east-africa",
  "flagEmoji": "🇰🇪",
  "names": { "zh": "肯亞", "en": "Kenya" },
  "driveSide": "left",
  "language": {
    "official": [{ "name": "Swahili", "family": "Niger-Congo / Bantu" }, { "name": "English", "family": "Germanic" }],
    "script": "Latin"
  },
  "terrainTags": ["savanna", "highland-mountain", "coastal"],
  "terrainDescription": { "zh": "...", "en": "..." },
  "roadInfra": { "centerLineColor": "white", "distanceUnit": "km", "signStandard": "vienna-convention", "plate": { "color": "white/yellow", "shape": "rect", "frontRequired": true }, "bollardStyle": "...", "utilityPole": { "material": "concrete", "transformerMount": "..." } },
  "historicalContext": { "zh": "...", "en": "..." },
  "culturalMarkers": [
    {
      "item": "Kanga/Kitenge cloth",
      "note": { "zh": "...", "en": "..." },
      "confidence": 3,
      "caveat": "Text-on-cloth counts as a language clue, not appearance"
    }
  ],
  "commonlyConfusedWith": ["tanzania", "uganda"],
  "images": [
    {
      "source": "wikimedia",
      "url": "https://commons.wikimedia.org/...",
      "license": "CC-BY-SA-4.0",
      "attribution": "Photographer name, Wikimedia Commons",
      "caption": { "zh": "...", "en": "..." },
      "tags": ["architecture", "road-sign", "market", "vegetation"]
    }
  ]
}
```

Renamed `materialCulture` → `culturalMarkers` (generalizes better outside Africa —
e.g. Alpine chalet architecture, Andean textile patterns, Balkan roof styles all
fit the same slot with the same confidence+caveat discipline).

## 5. Content rollout — phased, prioritized by real GeoGuessr frequency

Authoring 190+ countries at once isn't realistic even with AI-assisted coding —
the bottleneck is curated content, not code. Three phases:

- **Phase 1 (MVP, ~15–20 countries)**: pick countries that (a) appear frequently
  in actual GeoGuessr play and (b) collectively cover every terrain/road-infra
  archetype in the taxonomy above, across every continent. Example starting set:
  USA, Brazil, Japan, South Africa, Kenya, Indonesia, India, Australia, France,
  Poland, Thailand, Turkey, Argentina, Nigeria, Russia. Build these fully
  end-to-end (including live Wikimedia image integration) to validate the whole
  pipeline before scaling content production.
- **Phase 2**: fill out remaining countries within each continent's subregions
  (reuse the 5-subregion breakdown pattern piloted for Africa; apply the
  equivalent subdivision to Asia, Europe, the Americas, Oceania).
- **Phase 3**: long-tail remaining countries + accuracy review pass.

**Content-authoring split** (important — do not automate uniformly):
- `terrainTags`, `roadInfra`, `language`, `script` — largely factual/encyclopedic;
  Claude Code can draft these via research passes in batches, with human review
  for accuracy.
- `culturalMarkers` — requires human judgment every time (confidence rating +
  caveat wording). Do not auto-generate; this is the highest-risk content type
  for drifting into stereotype, and needs deliberate human review each entry.

## 6. Tech stack

- Framework: Next.js (React) — static generation for country pages, client-side
  fetch for live Wikimedia images
- Data storage: one JSON file per country under `/data/countries/<id>.json` (not
  hardcoded arrays) — scales cleanly to 190+ entries and is easy for Claude Code
  to generate/edit in batches from a template
- Map: Leaflet.js (free/open-source) with a world topojson base + continent/
  subregion overlay layers
- Hosting: Vercel (free tier sufficient for MVP traffic)
- i18n: keep the zh/en toggle pattern from the chat prototype — simple key-based
  dictionary is sufficient at this scale

## 7. Roadmap summary

1. Build the schema + taxonomy + map/nav shell first (no content yet)
2. Populate Phase 1's ~15–20 countries fully, end-to-end
3. Validate: does cross-filtering (e.g. "show all rainforest countries") work
   correctly across continents? Fix schema issues now, before scaling content.
4. Batch out Phase 2/3 content, continent by continent
