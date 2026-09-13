# Website font sources — version 7

## Traditional Chinese: 教育部隸書 / TW-MOE-Li

The Traditional Chinese page stack starts with Alegreya for Latin text and 教育部隸書 for Chinese. Its CSS alias is `KaiXuan MoeLI`. The Simplified Chinese stack retains the original Alimama DaoLiTi. Traditional display text uses Taiwan standard orthographic forms; the author's downloadable originals remain unchanged.

Attribution: **中華民國教育部**. Font: 教育部隸書, Version 3.00, June 2019. License: **CC BY-ND 3.0 Taiwan**, allowing attributed redistribution, including commercial redistribution, of the unchanged original. See `MOE-LISHU-LICENSE.txt` and https://creativecommons.org/licenses/by-nd/3.0/tw/legalcode .

`MoeLI-Regular.ttf` is an unchanged copy of the original 5,243,908-byte TTF. It was not converted, subsetted, merged, edited, or internally renamed. Its embedded English notice explicitly permits commercial and noncommercial redistribution when passed along unchanged and in whole, with MOE credit. Original Chinese and English notices are reproduced in the local license file.

Official publication:
- https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/MoeLI-3.0.zip
- https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/eduli.pdf
- Education-network publication and license confirmation: https://2blog.ilc.edu.tw/868/48599/

The official download server returned transport failures during integration. The original was instead obtained from the archived official release below and verified byte-for-byte against a separate distribution of the same font:
- Fixed archive revision: https://github.com/typst-doc-cn/moe-tw-fonts/blob/46f5d417406b25a145e37746e927583f15b1490d/fonts/eduLi-v3.0-2019-06.ttf
- Archive provenance: https://github.com/typst-doc-cn/moe-tw-fonts/blob/46f5d417406b25a145e37746e927583f15b1490d/NOTICE.md
- Published checksum: https://github.com/typst-doc-cn/moe-tw-fonts/blob/46f5d417406b25a145e37746e927583f15b1490d/fonts.sha256
- Independent matching package: https://font.doany.cn/fonts/%E5%8F%B0%E6%B9%BE%E6%95%99%E8%82%B2%E9%83%A8/MoeLI.zip
- SHA-256: `f0ba5eda31727ad89cc0b1f6b9a7dfda02f061fa101c18548b6f8ea0145c108b`
- MD5: `69df8205904fb4d4a5892005913107bf`

### Verified coverage of the current website

The font contains 4,827 nonempty CJK glyphs. Checks use actual outlines, not only cmap entries. The website uses OpenCC s2tw for Traditional orthographic forms, without Taiwan vocabulary replacement.

- All 276 Chinese characters used by the Traditional homepage are covered by the primary MoeLI face.
- The Traditional tutorial text requires six characters outside MoeLI: `侷 洩 胺 薦 閾 饋`.
- Aoyagi supplies nonempty clerical glyphs for `洩 薦 閾 饋`; DaoLi supplies `胺`.
- `侷` uses an installed LiSu/STLiti when available, otherwise the platform Chinese serif fallback.
- An unchanged Chinese book title in the English resource map contains the Simplified character `浅`, supplied by DaoLi / Aoyagi rather than MoeLI.

Thus the main Traditional text has a consistent primary clerical face, with a small, explicit fallback set. This is not a claim of universal Traditional Chinese coverage. CSS does not rename or replace Unicode characters, and all Chinese font binaries remain unmodified.

The three shared variables (`--site-font-sans`, `--site-font-english`, `--site-font-mono`) use the same Traditional stack under `html[lang="zh-Hant"]`. Explicitly Simplified language-picker labels retain the Simplified stack. Chinese face definitions have CJK-only Unicode ranges, while Alegreya stays first for English and numbers.

## Latin text, numbers and code: Alegreya

All Latin text uses Alegreya, including labels and code. The normal and italic fonts contain their full 1,254-character repertoire, including Latin, Latin extensions, Greek and Cyrillic. Both provide the real variable `wght` axis from 400 to 900. There is no separate monospace face.

Copyright 2011 The Alegreya Project Authors. License: SIL Open Font License 1.1, copied unchanged in `ALEGREYA-OFL.txt`.

Official sources:
- https://github.com/google/fonts/tree/main/ofl/alegreya
- https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/Alegreya%5Bwght%5D.ttf
- https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/Alegreya-Italic%5Bwght%5D.ttf
- https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/OFL.txt

The complete official TTFs were compressed to WOFF2 with fontTools under the OFL. No glyphs were removed and no outlines or internal family names were modified. The resulting files are reused unchanged from version 6.

## Simplified Chinese and rare fallback glyphs: Alimama DaoLiTi

The Simplified primary face remains the original `AlimamaDaoLiTi-Regular.woff2`, aliased as `KaiXuan Lishu`. Copyright: **阿里媽媽 / 淘寶（中國）軟件有限公司** (Alimama / Taobao (China) Software Co., Ltd.). The full original Chinese copyright/license wording is retained in `ALIMAMA-DAOLI-LICENSE.txt`.

License clause 3 permits free commercial, noncommercial and embedded use. Clause 4 restricts conversion, splitting, modification, derivatives and paid transfer. The official WOFF2 is reused unchanged, without conversion or subsetting.

- Publisher: https://www.alibabafonts.com/#/more
- Official package: https://fonts.alibabadesign.com/AlimamaDaoLiTi.zip
- Official legal statement: https://www.yuque.com/alimama_ai-font/vfse9w/ynqpf9pt8wops4sl

## Additional clerical glyphs: Aoyagi Reisho SIMO2

Aoyagi Reisho SIMO2 (青柳隷書しも) provides the small set of Traditional glyphs named above. Copyright is held by **SIMO**, with calligraphy by **青柳衡山** (Aoyagi Kouzan).

The public Japanese license notice permits free use, including commercial use, and free redistribution, while prohibiting paid redistribution. `AOYAGI-REISHO-LICENSE.txt` preserves the exact notice and provenance. The original TTF from Maoken's font distribution is reused unchanged: no conversion, subsetting or editing. It is not described as open-source.

- Official distributor and copyright confirmation: https://opentype.jp/aoyagireisho.htm
- Distributor reproducing the original Japanese notice: https://www.maoken.com/freefonts/2508.html#comment-7369

Aoyagi's legacy cmap contains empty placeholders. CSS lists only actual nonempty Chinese glyphs, allowing missing characters to fall through without displaying blank boxes or blank space. This CSS selection leaves the original binary unchanged.

## System fonts

Installed LiSu / STLiti is referenced only through CSS `local()`. No proprietary operating-system font file is copied or distributed. The final Chinese serif fallback is supplied by the user's device.

## Binary manifest

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `MoeLI-Regular.ttf` | 5,243,908 | `f0ba5eda31727ad89cc0b1f6b9a7dfda02f061fa101c18548b6f8ea0145c108b` |
| `Alegreya-Regular-Variable.woff2` | 161,348 | `894890ab9afa77a6009d049d38363afc48721b544ad08304d7eb2ec2590c4914` |
| `Alegreya-Italic-Variable.woff2` | 170,528 | `3679722977ff356808b2d3e4f5cbdd6cb8c7f4850870a6d60f30105a36539c99` |
| `AlimamaDaoLiTi-Regular.woff2` | 2,624,584 | `85a8afa1a7503418575793effe55bd13d99b3d0f5a82fdb7e83ec1c4910a2efb` |
| `AoyagiReishoSIMO2-Regular.ttf` | 4,412,684 | `a4c55ad5f72e65a482931d967725e97ff206eb3019c87281d9e5514a63bb8db9` |
