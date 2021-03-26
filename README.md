# geostyler-style

[![Greenkeeper badge](https://badges.greenkeeper.io/geostyler/geostyler-style.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/geostyler/geostyler-style.svg?branch=master)](https://travis-ci.com/geostyler/geostyler-style)

TypeScript Declaration File for the the [GeoStyler](https://github.com/geostyler/geostyler) Style.

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
import { isFilter, isSymbolizer } from 'geostyler-style/typeguards';
```
