# geostyler-style

[![Greenkeeper badge](https://badges.greenkeeper.io/terrestris/geostyler-style.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/terrestris/geostyler-style.svg?branch=master)](https://travis-ci.com/terrestris/geostyler-style)

TypeScript Declaration File for the the [GeoStyler](https://github.com/terrestris/geostyler) Style.

### Issues
Please provide related issues here https://github.com/terrestris/geostyler/issues

### Why another style format?

The *Geostyler Style* is not primarily intended to be a new standard for styling geographic data.

The main task of the format is to be an **exchange format** for all the other standards. It should be
capable of storing the styling possibilities of SLD, OpenLayers-Styles, MapBox-Styles, CartoCSS, …
while beeing easy read- and writable.

On the other hand it is used by the [GeoStyler](https://github.com/terrestris/geostyler) to build the UI components. This
way you should be able to configure any type of style via UI and also translate between all supported formats (in theory :grin:).
