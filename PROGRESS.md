# Phase 1 content progress

Tracks `/data/countries/*.json` completion against `geolearn-africa-spec.md` §5
(Phase 1 rollout). Update this file whenever a batch of countries is inserted.

## Done (50 countries)

### Batch 01 — `phase1-batch-01.md`
| id | continent/subregion | culturalMarkers |
|---|---|---|
| kenya | africa / east-africa | vetted (1) |
| nigeria | africa / west-africa | vetted (1) |
| south-africa | africa / southern-africa | vetted (1) |

### Batch 02 — `phase1-batch-02.md`
| id | continent/subregion | culturalMarkers |
|---|---|---|
| kazakhstan | asia / central-asia | **empty — needs manual review** |
| uzbekistan | asia / central-asia | **empty — needs manual review** |
| kyrgyzstan | asia / central-asia | **empty — needs manual review** |
| tajikistan | asia / central-asia | **empty — needs manual review** |
| turkmenistan | asia / central-asia | **empty — needs manual review** |
| mongolia | asia / central-asia | **empty — needs manual review** |
| poland | europe / central-europe | **empty — needs manual review** |
| czechia | europe / central-europe | **empty — needs manual review** |
| slovakia | europe / central-europe | **empty — needs manual review** |
| hungary | europe / central-europe | **empty — needs manual review** |
| romania | europe / eastern-europe | **empty — needs manual review** |
| bulgaria | europe / eastern-europe | **empty — needs manual review** |
| ukraine | europe / eastern-europe | **empty — needs manual review** |
| lithuania | europe / eastern-europe | **empty — needs manual review** |
| estonia | europe / eastern-europe | **empty — needs manual review** |
| tanzania | africa / east-africa | vetted (1) |
| ghana | africa / west-africa | vetted (1) |
| senegal | africa / west-africa | vetted (1) |
| ethiopia | africa / east-africa | vetted (1) |
| rwanda | africa / east-africa | vetted (1) |

All `roadInfra` fields above were researched and filled in (were `null` in the
source batch files). Most are solid (Wikipedia "Vehicle registration plates
of X", Vienna Convention party lists, national traffic law); a handful of
`bollardStyle`/`utilityPole` sub-fields are honestly thin because no credible
source was found — those are called out in the JSON text itself (e.g.
"not a confirmed clue", "flagging as unconfirmed") rather than invented.
Countries with the weakest-sourced `roadInfra` sub-fields: **turkmenistan**
(sparse Street View coverage generally), **ethiopia** (center/lane line color
and utility pole unconfirmed), **tanzania** and **rwanda** (utility pole
unconfirmed), **senegal** (bollard style unconfirmed).

Taxonomy additions made to support batches 01–02 (`data/taxonomy/subregions.json`):
`east-africa`, `west-africa`, `southern-africa` (africa); `central-asia`
(asia); `eastern-europe` (europe). Later, on 2026-09-22, `east-asia`,
`mainland-southeast-asia`, and `maritime-southeast-asia` were added (asia)
to fix batch 03's placeholder subregion — see batch 03 notes below. Also on
2026-09-22 (separate follow-up request, ahead of a Europe/Africa/Americas
batch): `central-europe`, `western-europe`, `southern-europe`,
`northern-europe` (europe); `north-africa` (africa); `north-america`,
`central-america-caribbean` (north-america); `south-america`
(south-america) were added, and **poland, czechia, slovakia, hungary were
moved from `eastern-europe` to `central-europe`** (a more accurate fit —
these four are usually classified Central European, not Eastern European,
in standard geographic schemes). Note `north-america`/`south-america` now
exist as both a *continent id* and a same-named *subregion id* nested under
that continent — intentional (mirrors the common distinction between
"North America proper" vs. Central America/Caribbean), not a bug.

### Batch 03 — East/Southeast Asia (16 countries, ad hoc request, no batch file)
| id | continent/subregion | culturalMarkers |
|---|---|---|
| japan | asia / east-asia | empty — needs manual review |
| south-korea | asia / east-asia | empty — needs manual review |
| north-korea | asia / east-asia | empty — needs manual review |
| china | asia / east-asia | empty — needs manual review |
| taiwan | asia / east-asia | empty — needs manual review |
| vietnam | asia / mainland-southeast-asia | empty — needs manual review |
| thailand | asia / mainland-southeast-asia | empty — needs manual review |
| myanmar | asia / mainland-southeast-asia | empty — needs manual review |
| cambodia | asia / mainland-southeast-asia | empty — needs manual review |
| laos | asia / mainland-southeast-asia | empty — needs manual review |
| indonesia | asia / maritime-southeast-asia | empty — needs manual review |
| philippines | asia / maritime-southeast-asia | empty — needs manual review |
| malaysia | asia / maritime-southeast-asia | empty — needs manual review |
| singapore | asia / maritime-southeast-asia | empty — needs manual review |
| brunei | asia / maritime-southeast-asia | empty — needs manual review |
| timor-leste | asia / maritime-southeast-asia | empty — needs manual review |

**Subregion history.** These 16 originally shipped with `subregion:
"central-asia"` (a known placeholder — the taxonomy only had one Asia
subregion at the time, and the instruction was to reuse the closest existing
category rather than invent new ones mid-batch). On 2026-09-22, three proper
subregions were added to `data/taxonomy/subregions.json` — `east-asia`,
`mainland-southeast-asia`, `maritime-southeast-asia` — and all 16 files above
were reassigned to the correct one per the grouping in the table. This is
now resolved; no further subregion follow-up needed for this batch.

`roadInfra`, `language`/`script`, `terrainTags`, `terrainDescription`, and
`historicalContext` were researched via three parallel fork agents (one per
group above) — verified 2026-09-22. Sources per country: Wikipedia "Vehicle
registration plates of X" and "Road signs in X" pages, Vienna Convention on
Road Signs and Signals (1968) party status, national traffic law/highway
codes, and community GeoGuessr-meta references (plonkit.net, geometas.com)
for bollard/utility-pole visual details when official sources were silent.
`signStandard` note: Japan, South Korea, North Korea, China, and Taiwan are
all confirmed **not** Vienna Convention parties → classified `"other"`
(distinct from most of Southeast Asia, which is Vienna-based).

Weakest-sourced fields (flagged honestly in the JSON text itself rather than
invented — treat these as lower-confidence than the rest of the batch):
- **north-korea**: nearly everything is low-confidence (`bollardStyle`,
  `utilityPole`, and `centerLineColor` are inferred, not directly observed —
  essentially no ground-level photo/Street View access to the country).
- **myanmar**: `bollardStyle` and `utilityPole` unconfirmed.
- **singapore**, **brunei**: `bollardStyle` and `utilityPole` unconfirmed.
- **timor-leste**: `bollardStyle` unconfirmed, `utilityPole.material`
  inferred rather than confirmed; generally sparse documentation.
- **malaysia**: `utilityPole.transformerMount` unconfirmed.
- **laos**: `centerLineColor`/`laneLineColor` sourced from a single terse
  community snippet, not a cited regulation — medium- not high-confidence.
- **cambodia**: `signStandard` is a genuine mixed case (signed but not
  ratified Vienna Convention, with some legacy US-MUTCD-style diamond
  warning signs) — classified `"vienna-convention"` but worth a second look.

### Batch 04 — Western Europe (11 countries, ad hoc request, no batch file)
| id | continent/subregion | culturalMarkers |
|---|---|---|
| uk | europe / western-europe | empty — needs manual review |
| ireland | europe / western-europe | empty — needs manual review |
| france | europe / western-europe | empty — needs manual review |
| germany | europe / western-europe | empty — needs manual review |
| netherlands | europe / western-europe | empty — needs manual review |
| belgium | europe / western-europe | empty — needs manual review |
| luxembourg | europe / western-europe | empty — needs manual review |
| switzerland | europe / western-europe | empty — needs manual review |
| austria | europe / western-europe | empty — needs manual review |
| monaco | europe / western-europe | empty — needs manual review |
| liechtenstein | europe / western-europe | empty — needs manual review |

`subregion: "western-europe"` for all 11 per explicit instruction — note
this is a broader grouping than standard UN geoscheme (which would split
Germany/Austria/Switzerland/Liechtenstein into Central Europe and
UK/Ireland into Northern Europe); intentional simplification for this
batch, not an error.

Researched via three parallel fork agents (UK+Ireland; France/Germany/
Netherlands/Belgium/Luxembourg; Switzerland/Austria/Monaco/Liechtenstein) —
verified 2026-09-22. Sources: Wikipedia "Vehicle registration plates of X"
and "Road signs in X" pages, Vienna Convention on Road Signs and Signals
(1968) party status, national traffic law, plonkit.net/geometas.com for
bollard/pole visual details.

Notable findings:
- **UK**: not a Vienna Convention party, distance signs in **miles** (not
  km) — a major identification signal. `signStandard: "uk"`.
- **Ireland**: drives left like the UK but uses **km** (switched 2005) and
  American-style yellow-diamond warning signs — a genuine hybrid case, not
  cleanly "uk" or "vienna-convention"; classified `"other"`, worth a second
  look later.
- **Belgium**: the only EU country with red-on-white (not black-on-white)
  plates; road-sign language is strictly regional (Dutch in Flanders,
  French in Wallonia, German near the eastern border) — only Brussels is
  officially bilingual, a commonly misunderstood point worth keeping
  accurate in any future quiz content.
- **Switzerland**: four official languages (German/French/Italian/Romansh)
  with visible regional sign-language boundaries — flagged as an especially
  good teaching case. Not an EU member (no blue EU band on plates), unlike
  Austria which adopted the EU-style plate in 2002.
- **Liechtenstein**: only joined the Vienna Convention on Road Signs and
  Signals in 2020; infrastructure/currency closely follow Switzerland's.

Weakest-sourced fields (flagged honestly in the JSON text, not invented):
- **monaco**: `bollardStyle` and `utilityPole` both unconfirmed/inferred
  from French integration and its near-total urban density — genuinely
  sparse documentation for a microstate this size.
- **liechtenstein**: `bollardStyle` and `utilityPole` both unconfirmed/
  inferred from Swiss-legislation dependence.
- **uk**/**ireland** `utilityPole`: sourced from community (plonkit-derived)
  references rather than an official/government source — reasonably
  confident but not government-cited.

## Pending

- `southern-europe`, `northern-europe`, `north-africa`, `north-america`,
  `central-america-caribbean`, `south-america` subregions exist in the
  taxonomy but have **no countries assigned yet** — added ahead of
  `batch-europe-africa-americas.md`, not yet processed. (`western-europe`
  is now populated — see batch 04.)
- **Manual review of `culturalMarkers`** for all 42 countries above with
  empty arrays (15 from batch 02 + 16 from batch 03 + 11 from batch 04) —
  per spec §5, this field requires human judgment every time and is
  intentionally not auto-generated.
- Countries referenced by `commonlyConfusedWith` but not yet in the dataset
  (will resolve once added): afghanistan, belarus, benin, botswana, burundi,
  eritrea, eswatini, finland, guinea, iran, latvia, lesotho, mali, namibia,
  north-macedonia, russia, somalia, togo, uganda.
- Remaining Phase 1 candidates from spec §5's example starting set not yet
  added: usa, brazil, india, australia, turkey, argentina.
- Phase 2/3 (remaining countries per continent, long-tail) — not started.
