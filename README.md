# geostyler-style

[![Lint & Docs (main)](https://github.com/geostyler/geostyler-style/actions/workflows/on-push-master.yml/badge.svg)](https://github.com/geostyler/geostyler-style/actions/workflows/on-push-master.yml)
[![Create & publish versioned documentation](https://github.com/geostyler/geostyler-style/actions/workflows/on-publish.yml/badge.svg)](https://github.com/geostyler/geostyler-style/actions/workflows/on-publish.yml)
[![License](https://img.shields.io/github/license/geostyler/geostyler-style)](https://github.com/geostyler/geostyler-style/blob/master/LICENSE)

TypeScript Declaration File for the the [GeoStyler](https://github.com/geostyler/geostyler) Style.

### Documentation

https://geostyler.github.io/geostyler-style/docs/master/

### Why another style format?

The *Geostyler Style* is not primarily intended to be a new standard for styling geographic data.

The main task of the format is to be an **exchange format** for all the other standards. It should be
capable of storing the styling possibilities of SLD, OpenLayers-Styles, MapBox-Styles, CartoCSS (and others)
while being easily read- and writable.

On the other hand it is used by the [GeoStyler](https://github.com/geostyler/geostyler) to build the UI components. This
way you should be able to configure any type of style via UI and also translate between all supported formats (in theory :grin:).

### TypeGuards

In addition to the definition itself, there are some custom [TypeGuards](https://basarat.gitbook.io/typescript/type-system/typeguard#user-defined-type-guards) that can be used as utility methods to enhance the coding experience with the geostyler-style.

```typescript
import { isFilter, isSymbolizer } from 'geostyler-style/dist/typeguards';
```

## <a name="funding"></a>Funding & financial sponsorship

Maintenance and further development of this code can be funded through the
[GeoStyler Open Collective](https://opencollective.com/geostyler). All contributions and
expenses can transparently be reviewed by anyone; you see what we use the donated money for.
Thank you for any financial support you give the GeoStyler project 💞

