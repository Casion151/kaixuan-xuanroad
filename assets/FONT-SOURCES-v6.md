# Website font sources — version 6

## Latin text, numbers and code: Alegreya

All Latin text uses Alegreya, including labels and code. There is no separate monospace typeface. The normal and italic fonts contain their full 1,254-character repertoire, including Latin, Latin extensions, Greek and Cyrillic. Both provide the real variable `wght` axis from 400 to 900.

Copyright 2011 The Alegreya Project Authors. License: SIL Open Font License 1.1, copied unchanged in `ALEGREYA-OFL.txt`.

Official Google Fonts distribution:
- https://github.com/google/fonts/tree/main/ofl/alegreya
- https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/Alegreya%5Bwght%5D.ttf
- https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/Alegreya-Italic%5Bwght%5D.ttf
- https://raw.githubusercontent.com/google/fonts/main/ofl/alegreya/OFL.txt

The complete TTFs were compressed to WOFF2 with fontTools. No glyphs were removed and no outlines or internal family names were modified. Format conversion is allowed by the OFL.

## Chinese: original Alimama DaoLiTi and Traditional clerical fallbacks

The primary Chinese face is the existing, unmodified official `AlimamaDaoLiTi-Regular.woff2`, aliased in CSS as `KaiXuan Lishu`. Copyright: Alimama / Taobao (China) Software Co., Ltd. Its free license expressly allows commercial, noncommercial and embedded use. Conversion, splitting, modification, derivatives and paid transfer are restricted. See `ALIMAMA-DAOLI-LICENSE.txt` and the previous `FONT-SOURCES.md` for its source record. The file is reused unchanged.

Installed LiSu / STLiti is tried for Chinese glyphs missing from DaoLi. Installed proprietary fonts are only referenced through CSS `local()` and are not copied or distributed.

An additional clerical face, Aoyagi Reisho SIMO2 (青柳隷書しも), supplies many Traditional characters where no installed LiSu / STLiti covers them. Copyright is held by SIMO, with calligraphy by Aoyagi Kouzan. The original TTF from Maoken's font distribution is copied unchanged. Its public license reproduction permits free use, including commercial use, and free redistribution, while prohibiting paid redistribution. See `AOYAGI-REISHO-LICENSE.txt` for the exact Japanese notice and distribution provenance. No conversion or subsetting was applied; this is not presented as an open-source font.

Aoyagi has 6,356 nonempty CJK glyphs. Its legacy Unicode cmap also includes blank placeholders. The CSS unicode-range lists only actual nonempty Chinese glyphs so unsupported characters fall through to another font rather than disappearing. This CSS selection leaves the TTF itself unchanged.

### Traditional Chinese coverage limitation

OpenCC s2t conversion of the existing homepage and tutorial text was checked against both downloadable Chinese faces using actual glyph outlines, not just character-map entries. The following 20 Traditional characters require an installed Chinese font, then the platform Chinese serif fallback:

丟佔侷內勻夠幫戶橫檔歷狀產緣繫腳說賴錄閱

This is not full Traditional Chinese clerical coverage. Aoyagi follows Japanese JIS glyph conventions; visual variants may differ from Taiwan/Hong Kong conventions. User text remains in its original Unicode characters.

## Shared CSS contract

Load `site-fonts-v6.css`. It defines `--site-font-english`, `--site-font-sans`, `--site-font-mono`, and legacy `--font-geist`, `--font-geist-sans`, `--font-geist-mono`, `--font-sans`, `--font-mono` variables. All general stacks begin with Alegreya; Chinese faces are limited by Unicode ranges. The code stack is intentionally identical to the general stack per the requested English font choice.

`--site-font-english` also carries the same Chinese fallback faces so mixed controls such as 中文 / English / 繁體 keep the requested typography. All Latin faces in that chain begin with Alegreya; Chinese face definitions are limited to CJK ranges.

## Binary manifest

| File | Bytes | SHA-256 |
| --- | ---: | --- |
| `Alegreya-Regular-Variable.woff2` | 161,348 | `894890ab9afa77a6009d049d38363afc48721b544ad08304d7eb2ec2590c4914` |
| `Alegreya-Italic-Variable.woff2` | 170,528 | `3679722977ff356808b2d3e4f5cbdd6cb8c7f4850870a6d60f30105a36539c99` |
| `AlimamaDaoLiTi-Regular.woff2` | 2,624,584 | `85a8afa1a7503418575793effe55bd13d99b3d0f5a82fdb7e83ec1c4910a2efb` |
| `AoyagiReishoSIMO2-Regular.ttf` | 4,412,684 | `a4c55ad5f72e65a482931d967725e97ff206eb3019c87281d9e5514a63bb8db9` |
