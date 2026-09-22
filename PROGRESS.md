# Phase 1 content progress

Tracks `/data/countries/*.json` completion against `geolearn-africa-spec.md` §5
(Phase 1 rollout). Update this file whenever a batch of countries is inserted.

## Done (99 countries)

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

### Batch 05 — Southern Europe (7 countries, ad hoc request, no batch file)
| id | continent/subregion | culturalMarkers |
|---|---|---|
| italy | europe / southern-europe | empty — needs manual review |
| san-marino | europe / southern-europe | empty — needs manual review |
| spain | europe / southern-europe | empty — needs manual review |
| portugal | europe / southern-europe | empty — needs manual review |
| andorra | europe / southern-europe | empty — needs manual review |
| greece | europe / southern-europe | empty — needs manual review |
| malta | europe / southern-europe | empty — needs manual review |

Researched via three parallel fork agents (Spain/Portugal/Andorra;
Italy/San Marino; Greece/Malta) — verified 2026-09-22. Sources: Wikipedia
"Vehicle registration plates of X" and "Road signs in X" pages, Vienna
Convention on Road Signs and Signals (1968) party status, national traffic
law, [Road signs in the European microstates](https://en.wikipedia.org/wiki/Road_signs_in_the_European_microstates),
plonkit.net/geometas.com for bollard/pole visual details.

Notable findings:
- **Spain**: Castilian is the sole national official language, but Catalan,
  Basque (a genuine language isolate, unrelated to any other European
  language), and Galician are co-official regionally with bilingual
  signage — a strong, accurate regional identifier worth keeping precise in
  future quiz content.
- **Greece**: uses its own 24-letter Greek alphabet (neither Latin nor
  Cyrillic) — one of the single clearest script-based identifiers in
  Europe; signs typically pair Greek with a Latin transliteration below.
- **Malta**: drives **left** (former British colony, independence 1964)
  despite being surrounded by right-hand-drive Mediterranean neighbors —
  `signStandard: "uk"`, but distance unit is **km** (not miles) — a useful
  parallel to Ireland's already-documented UK/metric split. Maltese is
  linguistically unique: the only Semitic language written in the Latin
  alphabet and the only Semitic EU-official language.
- **San Marino**: fully enclaved within Italy; road law and sign design
  directly mirror Italy's. Andorra's road-sign design closely follows
  Spain's but with Catalan language — it only formally joined the Vienna
  Convention on Road Signs and Signals in January 2025 (notably recent).
- **Italy**: mostly monolingual Italian, but South Tyrol/Alto Adige
  (German co-official, near the Austrian border) and the Aosta Valley
  (French co-official) are genuine bilingual border pockets.

Weakest-sourced fields (flagged honestly in the JSON text, not invented):
- **andorra**: `bollardStyle` and `utilityPole` both unconfirmed — no
  country-specific documentation found given its tiny size.
- **malta**: `bollardStyle` and `utilityPole` both unconfirmed.
- **greece**: `utilityPole.material` inferred (concrete) rather than
  directly confirmed.

### Batch 06 — Northern Europe / Nordics (5 countries, ad hoc request, no batch file)
| id | continent/subregion | culturalMarkers |
|---|---|---|
| norway | europe / northern-europe | empty — needs manual review |
| sweden | europe / northern-europe | empty — needs manual review |
| denmark | europe / northern-europe | empty — needs manual review |
| finland | europe / northern-europe | empty — needs manual review |
| iceland | europe / northern-europe | empty — needs manual review |

Researched via two parallel fork agents (Norway/Sweden/Denmark; Finland/
Iceland) — verified 2026-09-22. Sources: Wikipedia "Vehicle registration
plates of X" and "Road signs in X" pages, Vienna Convention on Road Signs
and Signals (1968) party status, national traffic law, plonkit.net/
geometas.com for bollard/pole visual details.

Notable findings:
- **Finland**: Finnish is Uralic, genuinely unrelated to the North Germanic
  languages of Norway/Sweden/Denmark despite the "Nordic" geographic
  grouping — a precise, useful teaching point (parallel to Estonian/
  Hungarian elsewhere in Europe). Swedish is co-official nationwide with
  bilingual signage on the west/south coast.
- **Iceland**: North Germanic but retains archaic letters þ (thorn) and ð
  (eth) from Old Norse, absent from Norwegian/Swedish/Danish — a strong
  script-based identifier. Terrain is tundra/volcanic/near-treeless, NOT
  forested like its neighbors — deliberately did not default to
  `boreal-taiga` just because it's "Nordic." Not a Vienna Convention party
  (`signStandard: "other"`), though its sign design broadly follows it.
- **Norway/Sweden/Denmark**: North Germanic and largely mutually
  intelligible in writing, but distinguishable by precise spelling: Norway
  and Denmark share æ/ø/å, Sweden uses ä/ö/å instead. Norway is notably one
  of the only European countries with a **yellow** center line (most of
  Europe uses white); Denmark's white-with-orange-stripe bollard is called
  out as one of the more reliable single-country bollard clues in Europe.
  Denmark is also famously flat with no real mountains, unlike
  mountainous Norway/Sweden — terrainTags reflect that distinction rather
  than treating all three Nordics the same.

Weakest-sourced fields (flagged honestly in the JSON text, not invented):
- **iceland**, **sweden**: `utilityPole.transformerMount` inferred from
  general Nordic wooden-pole norms rather than country-specific sources.

### Batch 07 — North Africa, North America, Central America & Caribbean, South America (36 countries, ad hoc request, no batch file)

| id | continent/subregion | culturalMarkers |
|---|---|---|
| morocco | africa / north-africa | empty — needs manual review |
| algeria | africa / north-africa | empty — needs manual review |
| tunisia | africa / north-africa | empty — needs manual review |
| libya | africa / north-africa | empty — needs manual review |
| egypt | africa / north-africa | empty — needs manual review |
| sudan | africa / north-africa | empty — needs manual review |
| south-sudan | africa / north-africa | empty — needs manual review |
| usa | north-america / north-america | empty — needs manual review |
| canada | north-america / north-america | empty — needs manual review |
| mexico | north-america / north-america | empty — needs manual review |
| guatemala | north-america / central-america-caribbean | empty — needs manual review |
| belize | north-america / central-america-caribbean | empty — needs manual review |
| honduras | north-america / central-america-caribbean | empty — needs manual review |
| el-salvador | north-america / central-america-caribbean | empty — needs manual review |
| nicaragua | north-america / central-america-caribbean | empty — needs manual review |
| costa-rica | north-america / central-america-caribbean | empty — needs manual review |
| panama | north-america / central-america-caribbean | empty — needs manual review |
| cuba | north-america / central-america-caribbean | empty — needs manual review |
| jamaica | north-america / central-america-caribbean | empty — needs manual review |
| haiti | north-america / central-america-caribbean | empty — needs manual review |
| dominican-republic | north-america / central-america-caribbean | empty — needs manual review |
| bahamas | north-america / central-america-caribbean | empty — needs manual review |
| trinidad-and-tobago | north-america / central-america-caribbean | empty — needs manual review |
| barbados | north-america / central-america-caribbean | empty — needs manual review |
| brazil | south-america / south-america | empty — needs manual review |
| argentina | south-america / south-america | empty — needs manual review |
| chile | south-america / south-america | empty — needs manual review |
| uruguay | south-america / south-america | empty — needs manual review |
| paraguay | south-america / south-america | empty — needs manual review |
| bolivia | south-america / south-america | empty — needs manual review |
| peru | south-america / south-america | empty — needs manual review |
| colombia | south-america / south-america | empty — needs manual review |
| ecuador | south-america / south-america | empty — needs manual review |
| venezuela | south-america / south-america | empty — needs manual review |
| guyana | south-america / south-america | empty — needs manual review |
| suriname | south-america / south-america | empty — needs manual review |

Researched via six parallel fork agents (North Africa; USA/Canada/Mexico;
Central America mainland; Caribbean islands; South America — Brazil/
Argentina/Chile/Uruguay/Paraguay/Bolivia; South America — Peru/Colombia/
Ecuador/Venezuela/Guyana/Suriname) — verified 2026-09-22. Sources: Wikipedia
"Vehicle registration plates of X" and "Road signs in X" pages, Vienna
Convention on Road Signs and Signals (1968) party status, national traffic
law/constitutions, plonkit.net/geometas.com for bollard/pole visual details.
Multiple forks hit this session's WebSearch quota mid-task and fell back to
WebFetch on Wikipedia directly — flagged per-field below where that made a
fact thinner than usual, not hidden.

**Instructed special-case handling, confirmed present in the JSON text
itself (not just noted to the user):**
- **North Africa historicalContext** (all 7) is deliberately restricted to
  language/script/geography facts — no mention of contemporary politics,
  civil war, or conflict, per explicit instruction. Language-policy facts
  (Arabization, Berber/Tamazight official status, Sudan/South Sudan's
  Arabic-vs-English split) are framed as linguistic history, not politics.
- **Haiti ↔ Dominican Republic**: both countries' `historicalContext`
  explicitly names the other and states the language contrast (Haiti:
  French + French-lexified Haitian Creole, not mutually intelligible with
  French; Dominican Republic: Spanish) despite sharing Hispaniola.
- **Brazil**: `language.note` and `historicalContext` explicitly contrast
  Brazil's Portuguese against the Spanish spoken by the rest of Latin
  America, tracing it to the 1494 Treaty of Tordesillas.
- **USA/Canada/Mexico**: `terrainDescription` and `roadInfra.plate`/
  `bollardStyle` text explicitly states these are nationwide/common-
  denominator summaries only, with state/province-level detail deferred —
  e.g. "此處僅列全國通用特徵，各州/省差異極大，區域細節待日後擴充" appears
  literally in the JSON, not just as a note to the user.

**Other notable findings:**
- Vienna Convention party status is genuinely mixed across this batch and
  was checked per-country rather than assumed: Morocco/Tunisia/Egypt/Cuba/
  Brazil/Costa Rica/Suriname are confirmed parties; Algeria/Libya/Sudan/
  South Sudan/USA/Canada/Mexico/most of Central America/Chile/Uruguay/
  Paraguay/Bolivia are not (classified `"us-mutcd"` or `"other"` as
  appropriate — several countries' own official sign manuals explicitly
  cite MUTCD influence, e.g. Chile, Mexico, most of Central America).
- **Belize** is the only Central American country with English as its sole
  official language (former British Honduras) yet drives on the **right**
  (unlike most former UK colonies) to match neighboring Mexico/Guatemala.
- **Guyana and Suriname** are the two South American exceptions: Guyana
  (English-official) and Suriname (Dutch-official) both drive on the
  **left** — the only left-hand-drive countries on the mainland continent.
- Jamaica/Bahamas/Trinidad and Tobago/Barbados (former British Caribbean)
  all drive left; Cuba/Haiti/Dominican Republic drive right.
- Paraguay (Guaraní) and Bolivia (37 constitutionally recognized languages)
  stand out for unusually strong indigenous-language co-officiality.

**Weakest-sourced fields** (flagged honestly in the JSON text, not
invented): `bollardStyle` and/or `utilityPole` are unconfirmed for most of
the Caribbean (cuba, jamaica, haiti, dominican-republic, bahamas,
trinidad-and-tobago, barbados), most of Central America (all 7 — thin
regional documentation overall), Venezuela, Guyana, Suriname, Paraguay, and
all 7 North African countries — these fields say so explicitly rather than
guessing a plausible-sounding style. South Sudan's Street View coverage is
noted as essentially nonexistent. Panama's `frontRequired: false` and
Ecuador's `signStandard` (`"us-mutcd"` despite unratified Vienna signature)
are judgment calls worth a second look later.

### Batch 08 — taxonomy expansion + Latvia (ad hoc request, no batch file)

Added 5 new subregions to `data/taxonomy/subregions.json` ahead of future
country batches (no countries assigned yet, except where noted):
`south-asia`, `middle-east`, `caucasus` (asia); `balkans` (europe);
`oceania` (oceania — subregion id intentionally matches the continent id,
same pattern as `north-america`/`south-america`).

| id | continent/subregion | culturalMarkers |
|---|---|---|
| latvia | europe / eastern-europe | empty — needs manual review |

Latvia was requested for reassignment into `eastern-europe` (to match
Lithuania/Estonia), but didn't actually exist in the dataset yet — it had
only ever appeared as a `commonlyConfusedWith` placeholder on Lithuania's
and Estonia's records. Researched and added fresh instead (WebFetch on
Wikipedia, since this session's WebSearch quota — 200/session, shared
across all fork agents run today — was exhausted; geometas.com covered the
bollard detail). Verified 2026-09-22. Sources: [Vehicle registration
plates of Latvia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Latvia),
[Road signs in Latvia](https://en.wikipedia.org/wiki/Road_signs_in_Latvia),
[Languages of Latvia](https://en.wikipedia.org/wiki/Languages_of_Latvia),
[Latvia — Geometas](https://geometas.com/metas/countries/latvia/).

Notable: Latvian and Lithuanian are the only two surviving Baltic
languages, clearly distinct from Estonian (Uralic) — the three "Baltic
states" are geographically grouped but linguistically split 2-vs-1, a
point already established on Estonia's record and now made explicit on
Latvia's too. Latvia acceded to the Vienna Convention on Road Signs and
Signals in 1992. `utilityPole.transformerMount` is flagged unconfirmed —
no country-specific source found, consistent with this dataset's practice
of not guessing a plausible-sounding style.

## Pending

- `south-asia`, `middle-east`, `caucasus`, `balkans` subregions exist in
  the taxonomy but have **no countries assigned yet**. `oceania` (the
  subregion) likewise has none yet, though at least one Oceania country
  will need it eventually since it's currently the only Oceania subregion.
- **Manual review of `culturalMarkers`** for all 91 countries above with
  empty arrays (15 from batch 02 + 16 from batch 03 + 11 from batch 04 + 7
  from batch 05 + 5 from batch 06 + 36 from batch 07 + 1 from batch 08) —
  per spec §5, this field requires human judgment every time and is
  intentionally not auto-generated.
- Countries referenced by `commonlyConfusedWith` but not yet in the dataset
  (will resolve once added): afghanistan, belarus, benin, botswana, burundi,
  eritrea, eswatini, guinea, iran, lesotho, mali, namibia, north-macedonia,
  russia, somalia, togo, uganda.
- Remaining Phase 1 candidates from spec §5's example starting set: all
  added as of batch 07 (usa, brazil, argentina now present); india,
  australia, turkey remain — not yet added.
- Phase 2/3 (remaining countries per continent, long-tail) — not started.
