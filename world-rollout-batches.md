# World Rollout — Remaining ~170 Countries, Batched for Claude Code

23 countries already done (batches 01–02): Kazakhstan, Uzbekistan, Kyrgyzstan,
Tajikistan, Turkmenistan, Mongolia, Poland, Czechia, Slovakia, Hungary, Romania,
Bulgaria, Ukraine, Lithuania, Estonia, Kenya, Tanzania, Nigeria, Ghana, Senegal,
Ethiopia, South Africa, Rwanda.

This file lists everyone else, grouped into batches of ~15–20. Hand Claude Code
ONE batch at a time using the prompt template below — don't paste all batches at
once. `culturalMarkers` is intentionally left out of scope here: it stays `[]`
for every country in this file until you and I review specific ones together.

Note: not 100% exhaustive (a few micro-states/territories omitted) — flag
anything missing and we'll add it.

---

## Reusable prompt template (fill in the batch's country list each time)

```
請研究並填入以下國家的資料到 /data/countries/（id 用小寫連字號格式，如 japan、
south-korea）：
[貼上該批次清單]

規則：
1. language（official languages + family）、script、terrainTags（用已定義的受控詞
   彙）、terrainDescription、roadInfra、historicalContext 請上網研究後填寫，確保
   事實正確，並在 PROGRESS.md 註記資料來源或查證日期。
2. culturalMarkers 一律留空陣列 []，不要自己生成——這欄之後由我親自審核填入。
3. commonlyConfusedWith 可依地理/語言相似度合理推斷。
4. subregion 請依照 /data/taxonomy/subregions.json 現有分類；如果某國找不到對應
   子區域，先用最接近的既有分類，並在 PROGRESS.md 註記需要之後檢視。
5. 全部做完後更新 PROGRESS.md，重跑 typecheck/lint/build 確認沒有錯誤。
```

---

## Batch 03 — East & Southeast Asia (13)

日本 Japan · 南韓 South Korea · 北韓 North Korea · 中國 China · 台灣 Taiwan ·
越南 Vietnam · 泰國 Thailand · 印尼 Indonesia · 菲律賓 Philippines ·
馬來西亞 Malaysia · 新加坡 Singapore · 緬甸 Myanmar · 柬埔寨 Cambodia ·
寮國 Laos · 汶萊 Brunei · 東帝汶 Timor-Leste

## Batch 04 — South Asia & the Middle East (18)

印度 India · 巴基斯坦 Pakistan · 孟加拉 Bangladesh · 斯里蘭卡 Sri Lanka ·
尼泊爾 Nepal · 不丹 Bhutan · 馬爾地夫 Maldives · 阿富汗 Afghanistan ·
沙烏地阿拉伯 Saudi Arabia · 阿聯 UAE · 卡達 Qatar · 巴林 Bahrain ·
科威特 Kuwait · 阿曼 Oman · 葉門 Yemen · 約旦 Jordan · 以色列 Israel ·
黎巴嫩 Lebanon · 敘利亞 Syria · 伊拉克 Iraq · 伊朗 Iran · 土耳其 Turkey ·
賽普勒斯 Cyprus · 喬治亞 Georgia · 亞美尼亞 Armenia · 亞塞拜然 Azerbaijan

## Batch 05 — Western, Southern & Northern Europe (20)

英國 UK · 愛爾蘭 Ireland · 法國 France · 德國 Germany · 荷蘭 Netherlands ·
比利時 Belgium · 盧森堡 Luxembourg · 瑞士 Switzerland · 奧地利 Austria ·
摩納哥 Monaco · 列支敦士登 Liechtenstein · 義大利 Italy · 西班牙 Spain ·
葡萄牙 Portugal · 希臘 Greece · 馬爾他 Malta · 聖馬利諾 San Marino ·
挪威 Norway · 瑞典 Sweden · 丹麥 Denmark · 芬蘭 Finland · 冰島 Iceland

## Batch 06 — Remaining Eastern Europe & the Balkans (11)

俄羅斯 Russia · 白俄羅斯 Belarus · 摩爾多瓦 Moldova · 塞爾維亞 Serbia ·
克羅埃西亞 Croatia · 波士尼亞 Bosnia and Herzegovina · 蒙特內哥羅 Montenegro ·
北馬其頓 North Macedonia · 阿爾巴尼亞 Albania · 斯洛維尼亞 Slovenia ·
科索沃 Kosovo · 拉脫維亞 Latvia

## Batch 07 — North Africa & the Horn (7)

摩洛哥 Morocco · 阿爾及利亞 Algeria · 突尼西亞 Tunisia · 利比亞 Libya ·
埃及 Egypt · 蘇丹 Sudan · 南蘇丹 South Sudan

## Batch 08 — Remaining West Africa (13)

馬利 Mali · 布吉納法索 Burkina Faso · 尼日 Niger ·
象牙海岸 Côte d'Ivoire · 幾內亞 Guinea · 獅子山 Sierra Leone ·
賴比瑞亞 Liberia · 貝南 Benin · 多哥 Togo · 甘比亞 Gambia ·
幾內亞比索 Guinea-Bissau · 茅利塔尼亞 Mauritania · 維德角 Cabo Verde

## Batch 09 — Central Africa (8)

喀麥隆 Cameroon · 查德 Chad · 中非共和國 Central African Republic ·
剛果民主共和國 DR Congo · 剛果共和國 Republic of Congo · 加彭 Gabon ·
赤道幾內亞 Equatorial Guinea · 聖多美普林西比 São Tomé and Príncipe

## Batch 10 — Remaining East & Southern Africa (14)

烏干達 Uganda · 蒲隆地 Burundi · 索馬利亞 Somalia · 厄利垂亞 Eritrea ·
吉布地 Djibouti · 納米比亞 Namibia · 波札那 Botswana · 辛巴威 Zimbabwe ·
尚比亞 Zambia · 馬拉威 Malawi · 莫三比克 Mozambique · 賴索托 Lesotho ·
史瓦濟蘭 Eswatini · 馬達加斯加 Madagascar · 模里西斯 Mauritius ·
葛摩 Comoros · 塞席爾 Seychelles · 安哥拉 Angola

## Batch 11 — North America, Central America & the Caribbean (17)

美國 USA · 加拿大 Canada · 墨西哥 Mexico · 瓜地馬拉 Guatemala ·
貝里斯 Belize · 宏都拉斯 Honduras · 薩爾瓦多 El Salvador ·
尼加拉瓜 Nicaragua · 哥斯大黎加 Costa Rica · 巴拿馬 Panama · 古巴 Cuba ·
牙買加 Jamaica · 海地 Haiti · 多明尼加 Dominican Republic ·
巴哈馬 Bahamas · 千里達 Trinidad and Tobago · 巴貝多 Barbados

## Batch 12 — South America (12)

巴西 Brazil · 阿根廷 Argentina · 智利 Chile · 秘魯 Peru ·
哥倫比亞 Colombia · 厄瓜多 Ecuador · 玻利維亞 Bolivia · 巴拉圭 Paraguay ·
烏拉圭 Uruguay · 委內瑞拉 Venezuela · 蓋亞那 Guyana · 蘇利南 Suriname

## Batch 13 — Oceania (14)

澳洲 Australia · 紐西蘭 New Zealand · 巴布亞紐幾內亞 Papua New Guinea ·
斐濟 Fiji · 索羅門群島 Solomon Islands · 萬那杜 Vanuatu · 薩摩亞 Samoa ·
東加 Tonga · 吉里巴斯 Kiribati · 密克羅尼西亞 Micronesia ·
馬紹爾群島 Marshall Islands · 帛琉 Palau · 諾魯 Nauru · 吐瓦魯 Tuvalu

---

## Suggested pacing

Do 1–2 batches per session, review locally + `git push` after each — same
discipline as batch 01/02. At ~15–20 countries per batch and 11 batches here,
this is realistically several sessions of work, not one sitting.
