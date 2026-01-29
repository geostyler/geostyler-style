## [11.0.1](https://github.com/geostyler/geostyler-style/compare/v11.0.0...v11.0.1) (2026-01-29)

### Bug Fixes

* enable expressions for Textsymbolizer repeat ([#707](https://github.com/geostyler/geostyler-style/issues/707)) ([e087c24](https://github.com/geostyler/geostyler-style/commit/e087c24d94e1a7273b4f312424a0e1f75c8c4922))

## [11.0.0](https://github.com/geostyler/geostyler-style/compare/v10.5.0...v11.0.0) (2026-01-29)

### ⚠ BREAKING CHANGES

* Changed structure of package. Version 10.2.0 includes
an overlooked breaking change that changes the structure of the
published package. Now, the original structure was recreated again. If
you used any version prior 10.2.0, you do not have to change anything.
If you used versions 10.2.0, 10.3.0, 10.4.0, or 10.5.0 you might have to
readjust your imports, e.g. instead of importing via
```
import { isFilter } from 'geostyler-style/dist/src/typeguards'
```
you now can import via
```
import { isFilter } from 'geostyler-style/dist/typeguards'
```
again. Imports such as
```
import { isFilter } from 'geostyler-style'
```
were working throughout all mentioned versions and do not require any change.

### Features

* add repeat to TextSymbolizer ([#703](https://github.com/geostyler/geostyler-style/issues/703)) ([8c15a5f](https://github.com/geostyler/geostyler-style/commit/8c15a5f1015422c920e6227a715f21086ff5f332))

### Bug Fixes

* reconstruct package structure ([#705](https://github.com/geostyler/geostyler-style/issues/705)) ([82893ba](https://github.com/geostyler/geostyler-style/commit/82893ba3fb317136a2742b742d3b92efa4deab64))

## [10.5.0](https://github.com/geostyler/geostyler-style/compare/v10.4.0...v10.5.0) (2025-09-18)

### Features

* add sizeUnit-property to TextSymbolizer ([#683](https://github.com/geostyler/geostyler-style/issues/683)) ([adad4a4](https://github.com/geostyler/geostyler-style/commit/adad4a4686717db7e28f1b07429f76af86f802d4))
* introduce type AnchorType for anchor-properties ([#686](https://github.com/geostyler/geostyler-style/issues/686)) ([116c2ae](https://github.com/geostyler/geostyler-style/commit/116c2aed015d88ceda487d23e9faa231bd66b2a6))

## [10.4.0](https://github.com/geostyler/geostyler-style/compare/v10.3.0...v10.4.0) (2025-09-03)

### Features

* **#681:** add perpendicularOffset ([c8630df](https://github.com/geostyler/geostyler-style/commit/c8630df32f7d2cd72ae3afdd75d31523af412548)), closes [#681](https://github.com/geostyler/geostyler-style/issues/681)

## [10.3.0](https://github.com/geostyler/geostyler-style/compare/v10.2.0...v10.3.0) (2025-06-10)

### Features

* add more wellknownnames ([abe45ce](https://github.com/geostyler/geostyler-style/commit/abe45cecafc9b4336a26f23494f1a301f8569763))

## [10.2.0](https://github.com/geostyler/geostyler-style/compare/v10.1.0...v10.2.0) (2025-06-06)

### Features

* update dependencies and switch to bun ([9dd347d](https://github.com/geostyler/geostyler-style/commit/9dd347d98464ddc61fa21190bad877d3ce8edd5c))

### Bug Fixes

* **build:** use vite for build ([dfc3800](https://github.com/geostyler/geostyler-style/commit/dfc3800a922c440990a4b1d8a4c0124645af2e16))

## [10.1.0](https://github.com/geostyler/geostyler-style/compare/v10.0.0...v10.1.0) (2025-06-04)


### Features

* **550:** add dasharry ([9755576](https://github.com/geostyler/geostyler-style/commit/9755576dc45150f493454f91430c071d7f2131de))
* **550:** add schema ([67f04f1](https://github.com/geostyler/geostyler-style/commit/67f04f15edc4b4832c21e1e83ae2e704527d5bab))
* **550:** rename property ([ce48b83](https://github.com/geostyler/geostyler-style/commit/ce48b83513391fa1573340ab52df259fa0f2b2a9))


### Bug Fixes

* correct typeguard for scale denominators ([#654](https://github.com/geostyler/geostyler-style/issues/654)) ([e90e1f3](https://github.com/geostyler/geostyler-style/commit/e90e1f373993075b771d3779b63e75c4a5367acf))

## [10.0.0](https://github.com/geostyler/geostyler-style/compare/v9.2.0...v10.0.0) (2025-02-05)


### ⚠ BREAKING CHANGES

* Due to the added WellKnownNames, typechecks for distinct values of WellKnownNames need to be adjusted to also distinguish the newly added WellKnownNames.

### Features

* add WellKnownNames to support extra styles from QGIS ([#652](https://github.com/geostyler/geostyler-style/issues/652)) ([1e9e90b](https://github.com/geostyler/geostyler-style/commit/1e9e90be9fd11b710772cd5a77334fb887df4fee))

## [9.2.0](https://github.com/geostyler/geostyler-style/compare/v9.1.0...v9.2.0) (2024-11-26)


### Features

* add graphicfillpadding on fill symbolizer ([711b71b](https://github.com/geostyler/geostyler-style/commit/711b71ba31e822bf8e72b733d2aad1fcef3f7d95))

## [9.1.0](https://github.com/geostyler/geostyler-style/compare/v9.0.1...v9.1.0) (2024-07-09)


### Features

* allow numbers in the in function ([2907811](https://github.com/geostyler/geostyler-style/commit/2907811f4d0c3efe61650d816406c6b7a57bbe9a))

## [9.0.1](https://github.com/geostyler/geostyler-style/compare/v9.0.0...v9.0.1) (2024-06-25)


### Bug Fixes

* fix elintrc name ([07af12e](https://github.com/geostyler/geostyler-style/commit/07af12e65b7840820c440442abad989e813a5431))

## [9.0.0](https://github.com/geostyler/geostyler-style/compare/v8.1.0...v9.0.0) (2024-06-25)


### ⚠ BREAKING CHANGES

* order of arguments of the FCase function has been change

### Features

* add interpolate function ([ac4a927](https://github.com/geostyler/geostyler-style/commit/ac4a9270b70a2d388a3954f2e7d6e6c94ea120eb))
* add new functions ([b15e97f](https://github.com/geostyler/geostyler-style/commit/b15e97f91210f989725b92ed7b0d8bf3bed51ea3))
* export case and step params ([ea7cbaf](https://github.com/geostyler/geostyler-style/commit/ea7cbaf42dbc91495d0fa4b8fa7ca8f11d60dcae))
* prepare pre releases ([3290ff1](https://github.com/geostyler/geostyler-style/commit/3290ff124d5e5d3d69345ee4aca83d3d66fd45e2))


### Bug Fixes

* **deps:** update dependency @types/lodash to v4.17.5 ([d32fec9](https://github.com/geostyler/geostyler-style/commit/d32fec9d3b396349f501a19660fe1bbdb9b5a515))
* fix semantic release plugin ([944a92f](https://github.com/geostyler/geostyler-style/commit/944a92faa85cdafd384ed732aafef3df870969a0))
* fix tsconfig ([a49482e](https://github.com/geostyler/geostyler-style/commit/a49482ea49842f039ce3bbd189e894090e14a106))
* switch to node 20 ([89c4f64](https://github.com/geostyler/geostyler-style/commit/89c4f64661976200cc38aa85462fed5e5025e495))
* update FCase arguments ([2d51319](https://github.com/geostyler/geostyler-style/commit/2d513191a62b58a841c695c3ba0e3fd0426d9dcb))
* update repo schema ([0b4c5c1](https://github.com/geostyler/geostyler-style/commit/0b4c5c144dc72c0591327478152a1a92c1e23a29))
* use proper node version ([8b72f62](https://github.com/geostyler/geostyler-style/commit/8b72f62fb9597faa4ade9242afbb8a1075822d6f))
* use single entry point ([12d2d3b](https://github.com/geostyler/geostyler-style/commit/12d2d3b9b1ebd3d683306b932b29339bb8bc9049))

## [9.0.0-next.5](https://github.com/geostyler/geostyler-style/compare/v9.0.0-next.4...v9.0.0-next.5) (2024-06-20)


### Bug Fixes

* use single entry point ([8a918ce](https://github.com/geostyler/geostyler-style/commit/8a918ce2a59c00d2206e5b818568f402ace13a57))

## [9.0.0-next.4](https://github.com/geostyler/geostyler-style/compare/v9.0.0-next.3...v9.0.0-next.4) (2024-06-19)


### Bug Fixes

* switch to node 20 ([dd9979f](https://github.com/geostyler/geostyler-style/commit/dd9979f32960c146520f8a380caaa99bc2d4416e))

## [9.0.0-next.3](https://github.com/geostyler/geostyler-style/compare/v9.0.0-next.2...v9.0.0-next.3) (2024-06-19)


### Bug Fixes

* use proper node version ([993a896](https://github.com/geostyler/geostyler-style/commit/993a896d84687a54c0e5f9f8b1329940cde46165))

## [9.0.0-next.2](https://github.com/geostyler/geostyler-style/compare/v9.0.0-next.1...v9.0.0-next.2) (2024-06-19)


### Bug Fixes

* fix tsconfig ([37973c5](https://github.com/geostyler/geostyler-style/commit/37973c56bdedcade31e213ef3a33345a2a3ce27c))

## [9.0.0-next.1](https://github.com/geostyler/geostyler-style/compare/v8.1.0...v9.0.0-next.1) (2024-06-18)


### ⚠ BREAKING CHANGES

* order of arguments of the FCase function has been change

### Features

* add new functions ([b15e97f](https://github.com/geostyler/geostyler-style/commit/b15e97f91210f989725b92ed7b0d8bf3bed51ea3))
* export case and step params ([ea7cbaf](https://github.com/geostyler/geostyler-style/commit/ea7cbaf42dbc91495d0fa4b8fa7ca8f11d60dcae))
* prepare pre releases ([0f1f859](https://github.com/geostyler/geostyler-style/commit/0f1f8595e60897e1c0ced88406424f9a75fb2431))
* produce esm build ([3b71147](https://github.com/geostyler/geostyler-style/commit/3b71147905265b9f96b6856ab61bc5962a32f532))


### Bug Fixes

* **deps:** update dependency @types/lodash to v4.17.5 ([d32fec9](https://github.com/geostyler/geostyler-style/commit/d32fec9d3b396349f501a19660fe1bbdb9b5a515))
* fix esm exports ([bfba56b](https://github.com/geostyler/geostyler-style/commit/bfba56b965e6eaf1c9f55b167ec1e0d39e9bcb6b))
* fix semantic release plugin ([0954bd7](https://github.com/geostyler/geostyler-style/commit/0954bd7a0194a125436aa55a9cf92103e2983632))
* update FCase arguments ([2d51319](https://github.com/geostyler/geostyler-style/commit/2d513191a62b58a841c695c3ba0e3fd0426d9dcb))
* update repo schema ([0b4c5c1](https://github.com/geostyler/geostyler-style/commit/0b4c5c144dc72c0591327478152a1a92c1e23a29))

## [8.1.0](https://github.com/geostyler/geostyler-style/compare/v8.0.0...v8.1.0) (2023-12-01)


### Features

* adds isSprite typeguard ([2684c38](https://github.com/geostyler/geostyler-style/commit/2684c3836dd90658de79dbd5d552142321bad389))

## [8.0.0](https://github.com/geostyler/geostyler-style/compare/v7.5.0...v8.0.0) (2023-11-30)


### ⚠ BREAKING CHANGES

* IconSymbolizer.image can be a Sprite

### Features

* add support for image sprites ([f51c297](https://github.com/geostyler/geostyler-style/commit/f51c29760ab0536b50edbeab648785fd72f43bc2))


### Bug Fixes

*  replace width and height with size ([f264c83](https://github.com/geostyler/geostyler-style/commit/f264c830cfd213a6c98aba9314b462d8452ef573))
* add missing semantic-release dependency ([aa60480](https://github.com/geostyler/geostyler-style/commit/aa6048023b89ba0f8f217ead4b0c542c375c65ec))
