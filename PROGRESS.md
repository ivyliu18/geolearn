# Phase 1 content progress

Tracks `/data/countries/*.json` completion against `geolearn-africa-spec.md` §5
(Phase 1 rollout). Update this file whenever a batch of countries is inserted.

## Done (39 countries)

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
| poland | europe / eastern-europe | **empty — needs manual review** |
| czechia | europe / eastern-europe | **empty — needs manual review** |
| slovakia | europe / eastern-europe | **empty — needs manual review** |
| hungary | europe / eastern-europe | **empty — needs manual review** |
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
to fix batch 03's placeholder subregion — see batch 03 notes below.

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

## Pending

- **Manual review of `culturalMarkers`** for all 31 countries above with
  empty arrays (15 from batch 02 + all 16 from batch 03) — per spec §5, this
  field requires human judgment every time and is intentionally not
  auto-generated.
- Countries referenced by `commonlyConfusedWith` but not yet in the dataset
  (will resolve once added): afghanistan, belarus, benin, botswana, burundi,
  eritrea, eswatini, finland, germany, guinea, iran, latvia, mali, namibia,
  north-macedonia, russia, somalia, togo, uganda.
- Remaining Phase 1 candidates from spec §5's example starting set not yet
  added: usa, brazil, india, australia, france, turkey, argentina.
- Phase 2/3 (remaining countries per continent, long-tail) — not started.
