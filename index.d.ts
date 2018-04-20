// declare namespace GeoStyler_Style {

  export type StyleType = 'Point' | 'Fill' | 'Line';

  export type Operator =
  '!' | // Not
  '==' | // Equal
  '*=' | // Like (not included in MapBox expression decisions)
  '!=' | // NotEqual
  '<' | // Less
  '<=' | // LessOrEqual
  '>' | // Greater
  '>=' | // GreaterOrEqual
  '&&' | // All/And
  '||'; // Any/Or

  export interface ScaleDenominator {
    /**
     * Minimum value of the ScaleDenominator. The value is inclusive.
     *
     */
    min: number,
    /**
     * Maximum value of the ScaleDenominator. The value is exclusive.
     */
    max: number
  }

  export interface Filter extends Array<any> {
    0: Operator;
  }

  export interface Negation extends Filter {
    1: boolean|Filter;
  }

  export interface Comparison extends Filter {
    1: string|number|boolean|null;
    2: string|number|boolean|null;
  }

  export interface Symbolizer {
    visibility?: boolean
  }

  export interface PointSymbolizer extends Symbolizer {
    spacing?: number,
    avoidEdges?: boolean,
  }

  export interface IconSymbolizer extends PointSymbolizer {
    allowOverlap?: boolean,
    ignorePlacement?: boolean,
    optional?: boolean,
    rotationAlignment?: 'map' | 'viewport' | 'auto',
    size?: number,
    textFit?: 'none' | 'width' | 'height' | 'both',
    textFitPadding?: [number, number, number, number],
    image?: string,
    rotate?: number,
    padding?: number,
    keepUpright?: boolean,
    offset?: [number, number],
    anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    pitchAlignment?: 'map' | 'viewport' | 'auto',
    opacity?: number,
    color?: string,
    haloColor?: string,
    haloWidth?: number,
    haloBlur?: number,
    translate?: [number, number],
    translateAnchor?: 'map' | 'viewport',
  }

  export interface FillSymbolizer extends Symbolizer {
    visibility?: boolean,
    antialias?: boolean,
    opacity?: number,
    color?: string,
    outlineColor?: string,
    translate?: [number, number],
    translateAnchor?: 'map' | 'viewport',
    fillPattern?: string
  }

  export interface LineSymbolizer extends Symbolizer {
    cap?: 'butt' | 'round' | 'square',
    join?: 'bevel' | 'round' | 'miter',
    miterLimit?: number,
    roundLimit?: number,
    type?: string,
    opacity?: number,
    color?: string,
    translate?: [number, number],
    translateAnchor?: 'map' | 'viewport',
    width?: number,
    gapWidth?: number,
    offset?: number,
    blur?: number,
    dasharray?: number[],
    pattern?: string,
    gradient?: any[]
  }

  export interface Rule {
    filter: Filter,
    scaleDenominator: ScaleDenominator,
    symbolizer: PointSymbolizer | LineSymbolizer | FillSymbolizer
  }

  /**
   *
   */
  export interface Style{
    type: StyleType,
    rules: Rule[]
  }
// }
