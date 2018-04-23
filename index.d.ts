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

export interface ComparisonFilter {
  0: '==' | '*=' | '!=' | '<' | '<=' | '>' | '>=',
  1: string;
  2: string|number|boolean|null;
}

// This is just type secure for a maximum of 10 combined filters as you can't
// type 'rest' parameters of an array.
export interface CombinationFilter {
  0: '&&' | '||',
  1: ComparisonFilter | CombinationFilter | NegationFilter,
  2: ComparisonFilter | CombinationFilter | NegationFilter,
  3?: ComparisonFilter | CombinationFilter | NegationFilter,
  4?: ComparisonFilter | CombinationFilter | NegationFilter,
  5?: ComparisonFilter | CombinationFilter | NegationFilter,
  6?: ComparisonFilter | CombinationFilter | NegationFilter,
  7?: ComparisonFilter | CombinationFilter | NegationFilter,
  8?: ComparisonFilter | CombinationFilter | NegationFilter,
  9?: ComparisonFilter | CombinationFilter | NegationFilter,
  10?: ComparisonFilter | CombinationFilter | NegationFilter,
  11?: ComparisonFilter | CombinationFilter | NegationFilter
}

export interface NegationFilter {
  0: '!',
  1: ComparisonFilter | CombinationFilter | NegationFilter;
}

export interface Symbolizer {
  kind: 'Circle' | 'Fill' | 'Icon' | 'Line' |'Text',
  visibility?: boolean
}

export interface PointSymbolizer extends Symbolizer {
  avoidEdges?: boolean,
  spacing?: number,
}

export interface CircleSymbolizer extends PointSymbolizer {
  kind: 'Circle',
  blur?: number,
  color?: string,
  opacity?: number,
  pitchAlignment?: 'map' | 'viewport',
  pitchScale?: 'map' | 'viewport',
  radius?: number,
  strokeColor?: string,
  strokeOpacity?: number
  strokeWidth?: number,
  translate?: [number, number],
  translateAnchor?: 'map' | 'viewport',
}

export interface TextSymbolizer extends PointSymbolizer {
  kind: 'Text',
  allowOverlap?: boolean,
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  color?: string,
  field?: string,
  font?: string[],
  haloBlur?: number,
  haloColor?: string,
  haloWidth?: number,
  ignorePlacement?: boolean,
  justify?: 'left' | 'center' | 'right',
  keepUpright?: boolean,
  letterSpacing?: number,
  lineHeight?: number,
  maxAngle?: number,
  maxWidth?: number,
  offset?: [number, number],
  opacity?: number,
  optional?: boolean,
  padding?: number,
  pitchAlignment?: 'map' | 'viewport' | 'auto',
  rotate?: number,
  rotationAlignment?: 'map' | 'viewport' | 'auto',
  size?: number,
  transform?: 'none' | 'uppercase' | 'lowercase',
  translate?: [number, number],
  translateAnchor?: 'map' | 'viewport'
}

export interface IconSymbolizer extends PointSymbolizer {
  kind: 'Icon',
  allowOverlap?: boolean,
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  color?: string,
  haloBlur?: number,
  haloColor?: string,
  haloWidth?: number,
  ignorePlacement?: boolean,
  image?: string,
  keepUpright?: boolean,
  offset?: [number, number],
  opacity?: number,
  optional?: boolean,
  padding?: number,
  pitchAlignment?: 'map' | 'viewport' | 'auto',
  rotate?: number,
  rotationAlignment?: 'map' | 'viewport' | 'auto',
  size?: number,
  textFit?: 'none' | 'width' | 'height' | 'both',
  textFitPadding?: [number, number, number, number],
  translate?: [number, number],
  translateAnchor?: 'map' | 'viewport'
}

export interface FillSymbolizer extends Symbolizer {
  kind: 'Fill',
  antialias?: boolean,
  color?: string,
  fillPattern?: string,
  opacity?: number,
  outlineColor?: string,
  translate?: [number, number],
  translateAnchor?: 'map' | 'viewport'
}

export interface LineSymbolizer extends Symbolizer {
  kind: 'Line',
  blur?: number,
  cap?: 'butt' | 'round' | 'square',
  color?: string,
  dasharray?: number[],
  gapWidth?: number,
  gradient?: any[],
  join?: 'bevel' | 'round' | 'miter',
  miterLimit?: number,
  offset?: number,
  opacity?: number,
  pattern?: string,
  roundLimit?: number,
  translate?: [number, number],
  translateAnchor?: 'map' | 'viewport',
  type?: string,
  width?: number
}

export interface Rule {
  filter: ComparisonFilter | CombinationFilter | NegationFilter,
  scaleDenominator: ScaleDenominator,
  symbolizer: IconSymbolizer | CircleSymbolizer | LineSymbolizer | FillSymbolizer | TextSymbolizer
}

/**
 *
 */
export interface Style{
  rules: Rule[],
  type: 'Point' | 'Fill' | 'Line'
}
