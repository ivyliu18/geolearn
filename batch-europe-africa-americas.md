# Batches: Western/Southern/Northern Europe, North Africa, North America, Central/South America

Prerequisite: run the Step 0 taxonomy-fix prompt (adding central-europe,
western-europe, southern-europe, northern-europe, north-africa, north-america,
central-america-caribbean, south-america to /data/taxonomy/subregions.json, and
reassigning Poland/Czechia/Slovakia/Hungary to central-europe) before any batch
below.

Same rules apply to every batch as before:
- culturalMarkers stays `[]` for all — human review comes later, per country.
- roadInfra / language / script / terrainTags / terrainDescription /
  historicalContext are researched by Claude Code, with sources + verification
  date noted in PROGRESS.md.
- Assign the EXACT subregion id given per batch — do not guess or fall back.

---

## Batch 05a — Western Europe (subregion: western-europe, 11 countries)

英國 UK · 愛爾蘭 Ireland · 法國 France · 德國 Germany · 荷蘭 Netherlands ·
比利時 Belgium · 盧森堡 Luxembourg · 瑞士 Switzerland · 奧地利 Austria ·
摩納哥 Monaco · 列支敦士登 Liechtenstein

```
請研究並填入以下國家的資料到 /data/countries/（id 用小寫連字號格式），subregion
一律填 "western-europe"：
英國 UK · 愛爾蘭 Ireland · 法國 France · 德國 Germany · 荷蘭 Netherlands ·
比利時 Belgium · 盧森堡 Luxembourg · 瑞士 Switzerland · 奧地利 Austria ·
摩納哥 Monaco · 列支敦士登 Liechtenstein

規則同前（culturalMarkers 留空陣列、其餘欄位研究後填寫並記錄來源/查證日期於
PROGRESS.md）。完成後重跑 typecheck/lint/build。
```

## Batch 05b — Southern Europe (subregion: southern-europe, 7 countries)

義大利 Italy · 西班牙 Spain · 葡萄牙 Portugal · 希臘 Greece · 馬爾他 Malta ·
聖馬利諾 San Marino · 安道爾 Andorra

```
請研究並填入以下國家的資料到 /data/countries/，subregion 一律填
"southern-europe"：
義大利 Italy · 西班牙 Spain · 葡萄牙 Portugal · 希臘 Greece · 馬爾他 Malta ·
聖馬利諾 San Marino · 安道爾 Andorra

規則同前。完成後重跑 typecheck/lint/build。
```

## Batch 05c — Northern Europe (subregion: northern-europe, 5 countries)

挪威 Norway · 瑞典 Sweden · 丹麥 Denmark · 芬蘭 Finland · 冰島 Iceland

```
請研究並填入以下國家的資料到 /data/countries/，subregion 一律填
"northern-europe"：
挪威 Norway · 瑞典 Sweden · 丹麥 Denmark · 芬蘭 Finland · 冰島 Iceland

規則同前。完成後重跑 typecheck/lint/build。
```

## Batch 07 — North Africa (subregion: north-africa, 7 countries)

摩洛哥 Morocco · 阿爾及利亞 Algeria · 突尼西亞 Tunisia · 利比亞 Libya ·
埃及 Egypt · 蘇丹 Sudan · 南蘇丹 South Sudan

```
請研究並填入以下國家的資料到 /data/countries/，subregion 一律填
"north-africa"：
摩洛哥 Morocco · 阿爾及利亞 Algeria · 突尼西亞 Tunisia · 利比亞 Libya ·
埃及 Egypt · 蘇丹 Sudan · 南蘇丹 South Sudan

歷史脈絡（historicalContext）請聚焦語言/文字/地理事實（如阿拉伯文＋柏柏爾語、
馬格里布 vs. 尼羅河流域的地形差異），避開當代政局與衝突相關的政治立場敘述。
規則同前。完成後重跑 typecheck/lint/build。
```

## Batch 11 — North America (subregion: north-america, 3 countries)

美國 USA · 加拿大 Canada · 墨西哥 Mexico

```
請研究並填入以下國家的資料到 /data/countries/，subregion 一律填
"north-america"：
美國 USA · 加拿大 Canada · 墨西哥 Mexico

規則同前。這三國地域遼闊、內部差異大（尤其美國各州道路標準/植被差異極大），
terrainDescription 和 roadInfra 可以註明「因國土/地形差異大，此處僅列全國通用
特徵，區域細節待日後城市/地區層級擴充」。完成後重跑 typecheck/lint/build。
```

## Batch 12 — Central America & Caribbean (subregion: central-america-caribbean, 14 countries)

瓜地馬拉 Guatemala · 貝里斯 Belize · 宏都拉斯 Honduras · 薩爾瓦多 El Salvador ·
尼加拉瓜 Nicaragua · 哥斯大黎加 Costa Rica · 巴拿馬 Panama · 古巴 Cuba ·
牙買加 Jamaica · 海地 Haiti · 多明尼加 Dominican Republic · 巴哈馬 Bahamas ·
千里達 Trinidad and Tobago · 巴貝多 Barbados

```
請研究並填入以下國家的資料到 /data/countries/，subregion 一律填
"central-america-caribbean"：
瓜地馬拉 Guatemala · 貝里斯 Belize · 宏都拉斯 Honduras · 薩爾瓦多 El Salvador ·
尼加拉瓜 Nicaragua · 哥斯大黎加 Costa Rica · 巴拿馬 Panama · 古巴 Cuba ·
牙買加 Jamaica · 海地 Haiti · 多明尼加 Dominican Republic · 巴哈馬 Bahamas ·
千里達 Trinidad and Tobago · 巴貝多 Barbados

規則同前。海地和多明尼加共和國同島但語言（法語系克里奧語 vs. 西班牙語）差異
很大，請在 historicalContext 明確標註這個對比，這是很好的教學案例。完成後重
跑 typecheck/lint/build。
```

## Batch 13 — South America (subregion: south-america, 12 countries)

巴西 Brazil · 阿根廷 Argentina · 智利 Chile · 秘魯 Peru · 哥倫比亞 Colombia ·
厄瓜多 Ecuador · 玻利維亞 Bolivia · 巴拉圭 Paraguay · 烏拉圭 Uruguay ·
委內瑞拉 Venezuela · 蓋亞那 Guyana · 蘇利南 Suriname

```
請研究並填入以下國家的資料到 /data/countries/，subregion 一律填
"south-america"：
巴西 Brazil · 阿根廷 Argentina · 智利 Chile · 秘魯 Peru · 哥倫比亞 Colombia ·
厄瓜多 Ecuador · 玻利維亞 Bolivia · 巴拉圭 Paraguay · 烏拉圭 Uruguay ·
委內瑞拉 Venezuela · 蓋亞那 Guyana · 蘇利南 Suriname

規則同前。巴西的葡萄牙語 vs. 其餘西班牙語系國家的對比，請在 language/
historicalContext 明確標註（這點在我們之前的手冊已經強調過，維持一致）。完成
後重跑 typecheck/lint/build。
