/**
 * The ScaleDenominator defines a range of scales.
 */
export interface ScaleDenominator {
  /**
   * Minimum value of the ScaleDenominator. The value is inclusive.
   *
   */
  min?: number;
  /**
   * Maximum value of the ScaleDenominator. The value is exclusive.
   */
  max?: number;
}

/**
 * The type of the Style.
 */
export type StyleType = 'Point' | 'Fill' | 'Line';

/**
 * The possible Operator used for comparison Filters.
 */
export type ComparisonOperator = '==' | '*=' | '!=' | '<' | '<=' | '>' | '>=';

/**
 * The possible Operator used for combination Filters.
 */
export type CombinationOperator = '&&' | '||';

/**
 * The Operator used for negation Filters.
 */
export type NegationOperator = '!';

/**
 * All operators.
 */
export type Operator = ComparisonOperator | CombinationOperator | NegationOperator;

/**
 * A base interface for Filter.
 */
export interface Filter extends Array<any> {}

/**
 * A ComparisonFilter compares a value of an object (by key) with an expected
 * value.
 */
export interface ComparisonFilter extends Filter {
  0: ComparisonOperator;
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
export interface CombinationFilter extends Filter  {
  0: CombinationOperator;
  1: Filter;
  2: Filter;
  3?: Filter;
  4?: Filter;
  5?: Filter;
  6?: Filter;
  7?: Filter;
  8?: Filter;
  9?: Filter;
  10?: Filter;
  11?: Filter;
}

/**
 * A NegationFilter negates a given Filter.
 */
export interface NegationFilter extends Filter  {
  0: NegationOperator;
  1: Filter;
}

/**
 * The kind of the Symbolizer
 */
export type SymbolizerKind = 'Fill' | 'Icon' | 'Line' | 'Text' | 'Mark';

/**
 * A Symbolizer describes the style representation of geographical data.
 */
interface BaseSymbolizer {
  kind: SymbolizerKind;
  color?: string;
  opacity?: number;
  translate?: [number, number];
  translateAnchor?: 'map' | 'viewport';
  visibility?: boolean;
}

/**
 * A PointSymbolizer describes the style representation of POINT data.
 */
export interface BasePointSymbolizer extends BaseSymbolizer {
  avoidEdges?: boolean;
  spacing?: number;
}

/**
 * Supported WellKnownNames
 */
export type WellKnownName = 'Circle' | 'Square' | 'Triangle' | 'Star' | 'Cross' | 'X'
                            | 'shape://vertline' | 'shape://horline' | 'shape://slash'
                            | 'shape://backslash' | 'shape://dot' | 'shape://plus'
                            | 'shape://times' | 'shape://oarrow' | 'shape://carrow' ;

/**
 * MarkSymbolizer describes the style representation of POINT data, if styled as with
 * a regular geometry.
 */
export interface MarkSymbolizer extends BasePointSymbolizer {
  kind: 'Mark';
  wellKnownName: WellKnownName;
  radius?: number;
  rotate?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  blur?: number;
  pitchAlignment?: 'map' | 'viewport';
  pitchScale?: 'map' | 'viewport';
}


/**
 * The TextSymbolizer describes the style representation of point data, if styled with
 * a text.
 */
export interface TextSymbolizer extends BasePointSymbolizer {
  kind: 'Text';
  allowOverlap?: boolean;
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  label?: string;
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
 * An IconSymbolizer describes the style representation of POINT data if styled with
 * an specific icon.
 */
export interface IconSymbolizer extends BasePointSymbolizer {
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
export interface FillSymbolizer extends BaseSymbolizer {
  kind: 'Fill';
  antialias?: boolean;
  outlineColor?: string;
  outlineWidth?: number;
  outlineDasharray?: number[];
  graphicFill?: PointSymbolizer;
}

/**
 * The Types that are allowed in a graphic
 */
export type GraphicType = 'Mark' | 'Icon';

/**
 * A LineSymbolizer describes the style representation of LINESTRING data.
 */
export interface LineSymbolizer extends BaseSymbolizer {
  kind: 'Line';
  blur?: number;
  cap?: 'butt' | 'round' | 'square';
  dasharray?: number[];
  gapWidth?: number;
  gradient?: any[];
  graphicStroke?: PointSymbolizer;
  graphicFill?: PointSymbolizer;
  join?: 'bevel' | 'round' | 'miter';
  miterLimit?: number;
  offset?: number;
  dashOffset?: number;
  roundLimit?: number;
  type?: string;
  width?: number;
}

/**
 * Operators used for Point symbolization.
 */
export type PointSymbolizer = IconSymbolizer | MarkSymbolizer | TextSymbolizer;

/**
 * All operators.
 */
export type Symbolizer = PointSymbolizer | LineSymbolizer | FillSymbolizer;

/**
 * A Rule combines a specific amount of data (defined by a filter and a
 * scaleDenominator) and an associated symbolizer.
 */
export interface Rule {
  name: string;
  filter?: Filter;
  scaleDenominator?: ScaleDenominator;
  symbolizers: Symbolizer[];
}

/**
 * The Style is the main interface and the root for all other interfaces.
 */
export interface Style {
  name: string;
  rules: Rule[];
}

/**
 * Interface for defining unsupported properties in the parsers.
 * Value of each property must either be 'undefined', or an object whose (sub-)subproperties have the value 'undefined'.
 */
export interface UnsupportedProperties {
  ScaleDenominator?: 'unsupported';
  Filter?: {
    '&&'?: 'unsupported';
    '!'?: 'unsupported';
    '||'?: 'unsupported';
    '>'?: 'unsupported';
    '>='?: 'unsupported';
    '=='?: 'unsupported';
    '<'?: 'unsupported';
    '<='?: 'unsupported';
    '!='?: 'unsupported';
    '*='?: 'unsupported';
  };
  Symbolizer?: {
    PointSymbolizer?: any;
    LineSymbolizer?: any;
    FillSymbolizer?: any;
    MarkSymbolizer?: any;
    IconSymbolizer?: any;
  }
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
   * @param geoStylerStyle Style
   */
  writeStyle(geoStylerStyle: Style): Promise<any>;

  /**
   * Parses an input Rule and transforms it to a GeoStyler Rule
   *
   * @param inputRule
   */
  readRule?(inputRule: any): Promise<Rule>;

  /**
   * Reads a GeoStyler Rule and transforms it to a target Rule
   * representation.
   *
   * @param geoStylerRule Rule
   */
  writeRule?(geoStylerRule: Rule): Promise<any>;

  /**
   * Parses an input Filter and transforms it to a GeoStyler Filter
   *
   * @param inputFilter
   */
  readFilter?(inputFilter: any): Promise<Filter>;

  /**
   * Reads a GeoStyler Filter and transforms it to a target Filter
   * representation.
   *
   * @param geoStylerFilter Filter
   */
  writeFilter?(geoStylerFilter: Filter): Promise<any>;

  /**
   * Parses an input ScaleDenominator and transforms it to a GeoStyler
   * ScaleDenominator
   *
   * @param inputScaleDenominator
   */
  readScaleDenominator?(inputScaleDenominator: any): Promise<ScaleDenominator>;

  /**
   * Reads a GeoStyler ScaleDenominator and transforms it to a target
   * ScaleDenominator representation
   *
   * @param geoStylerScaleDenominator ScaleDenominator
   */
  writeScaleDenominator?(geoStylerScaleDenominator: ScaleDenominator): Promise<any>;

  /**
   * Parses an input Symbolizer and transforms it to a GeoStyler Symbolizer
   *
   * @param inputSymbolizer
   */
  readSymbolizer?(inputSymbolizer: any): Promise<Symbolizer>;

  /**
   * Reads a GeoStyler Symbolizer and transforms it to a target Symbolizer
   * representation
   *
   * @param geoStylerSymbolizer Symbolizer
   */
  writeSymbolizer?(geoStylerSymbolizer: Symbolizer): Promise<any>;

  /**
   * Object specifying which properties are not supported. MUST be a static
   * class attribute.
   */
  unsupportedProperties?: UnsupportedProperties;
}

export interface StyleParserConstructable extends StyleParser {
  /**
   * Constructor interface
   */
  new(): StyleParser;
  /**
   * The name of the Parser instance
   */
  title: string;
}
