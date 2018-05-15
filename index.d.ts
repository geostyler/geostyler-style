/**
 * The ScaleDenominator defines a range of scales.
 */
export interface ScaleDenominator {
  /**
   * Minimum value of the ScaleDenominator. The value is inclusive.
   *
   */
  min: number;
  /**
   * Maximum value of the ScaleDenominator. The value is exclusive.
   */
  max: number;
}

/**
 * A ComparisonFilter compares a value of an object (by key) with an expected
 * value.
 */
export interface ComparisonFilter {
  0: '==' | '*=' | '!=' | '<' | '<=' | '>' | '>=';
  1: string;
  2: string|number|boolean|null;
}

/**
 * A CombinationFilter combines N Filters with a logical OR / AND operator.
 *
 * This is just type secure for a maximum of 10 combined filters as you can't
 * type 'rest' parameters of an array. Nevertheless, theoreticaly you can
 * combine >10 filters.
 */
export interface CombinationFilter {
  0: '&&' | '||';
  1: ComparisonFilter | CombinationFilter | NegationFilter;
  2: ComparisonFilter | CombinationFilter | NegationFilter;
  3?: ComparisonFilter | CombinationFilter | NegationFilter;
  4?: ComparisonFilter | CombinationFilter | NegationFilter;
  5?: ComparisonFilter | CombinationFilter | NegationFilter;
  6?: ComparisonFilter | CombinationFilter | NegationFilter;
  7?: ComparisonFilter | CombinationFilter | NegationFilter;
  8?: ComparisonFilter | CombinationFilter | NegationFilter;
  9?: ComparisonFilter | CombinationFilter | NegationFilter;
  10?: ComparisonFilter | CombinationFilter | NegationFilter;
  11?: ComparisonFilter | CombinationFilter | NegationFilter;
}

/**
 * A Symbolizer describes the style representation of geographical data.
 */
export interface NegationFilter {
  0: '!';
  1: ComparisonFilter | CombinationFilter | NegationFilter;
}

/**
 * A Symbolizer describes the style representation of geographical data.
 */
export interface Symbolizer {
  kind: 'Circle' | 'Fill' | 'Icon' | 'Line' |'Text';
  color?: string;
  opacity?: number;
  translate?: [number, number];
  translateAnchor?: 'map' | 'viewport';
  visibility?: boolean;
}

/**
 * A PointSymbolizer describes the style representation of POINT data.
 */
export interface PointSymbolizer extends Symbolizer {
  avoidEdges?: boolean;
  spacing?: number;
}

/**
 * A CircleSymbolizer describes the style representation of POINT data if styled with
 * a regular circle geometry.
 */
export interface CircleSymbolizer extends PointSymbolizer {
  kind: 'Circle';
  blur?: number;
  pitchAlignment?: 'map' | 'viewport';
  pitchScale?: 'map' | 'viewport';
  radius?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
}

/**
 * A TextSymbolizer describes the style representation of POINT data if styled with
 * a text.
 */
export interface TextSymbolizer extends PointSymbolizer {
  kind: 'Text';
  allowOverlap?: boolean;
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  field?: string;
  font?: string[];
  haloBlur?: number;
  haloColor?: string;
  haloWidth?: number;
  ignorePlacement?: boolean;
  justify?: 'left' | 'center' | 'right';
  keepUpright?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  maxAngle?: number;
  maxWidth?: number;
  offset?: [number, number];
  optional?: boolean;
  padding?: number;
  pitchAlignment?: 'map' | 'viewport' | 'auto';
  rotate?: number;
  rotationAlignment?: 'map' | 'viewport' | 'auto';
  size?: number;
  transform?: 'none' | 'uppercase' | 'lowercase';
}

/**
 * A FillSymbolizer describes the style representation of POINT data if styled with
 * an specific icon.
 */
export interface IconSymbolizer extends PointSymbolizer {
  kind: 'Icon';
  allowOverlap?: boolean;
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  haloBlur?: number;
  haloColor?: string;
  haloWidth?: number;
  ignorePlacement?: boolean;
  image?: string;
  keepUpright?: boolean;
  offset?: [number, number];
  optional?: boolean;
  padding?: number;
  pitchAlignment?: 'map' | 'viewport' | 'auto';
  rotate?: number;
  rotationAlignment?: 'map' | 'viewport' | 'auto';
  size?: number;
  textFit?: 'none' | 'width' | 'height' | 'both';
  textFitPadding?: [number, number, number, number];
}

/**
 * A FillSymbolizer describes the style representation of POLYGON data.
 */
export interface FillSymbolizer extends Symbolizer {
  kind: 'Fill';
  antialias?: boolean;
  fillPattern?: string;
  outlineColor?: string;
}

/**
 * A LineSymbolizer describes the style representation of LINESTRING data.
 */
export interface LineSymbolizer extends Symbolizer {
  kind: 'Line';
  blur?: number;
  cap?: 'butt' | 'round' | 'square';
  dasharray?: number[];
  gapWidth?: number;
  gradient?: any[];
  join?: 'bevel' | 'round' | 'miter';
  miterLimit?: number;
  offset?: number;
  pattern?: string;
  roundLimit?: number;
  type?: string;
  width?: number;
}

/**
 * A Rule aggreagates a specific amount of data and an associated styler.
 */
export interface Rule {
  filter: ComparisonFilter | CombinationFilter | NegationFilter;
  scaleDenominator: ScaleDenominator;
  symbolizer: IconSymbolizer | CircleSymbolizer | LineSymbolizer | FillSymbolizer | TextSymbolizer;
}

/**
 * The Style is the main interface and the root for all other interfaces.
 */
export interface Style {
  rules: Rule[];
  type: 'Point' | 'Fill' | 'Line';
}

/**
 * Interface, which has to be implemented by all GeoStyler style parser classes.
 */
export interface StyleParser {
  /**
   * Parses the inputStyle and transforms it to the GeoStyler Style
   *
   * @param inputStyle
   */
  readStyle(inputStyle: any): Promise<Style>;

  /**
   * Reads the GeoStyler Style and transforms it to the target Style
   * representation.
   *
   * @param style
   */
  writeStyle(geoStylerStyle: Style): Promise<any>;
}
