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
export type StyleType = 'Point' | 'Fill' | 'Line' | 'Raster';

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
 * A FunctionFilter that expects a string (propertyName) as second arguement and
 * a regular expression as third argument. An actual parser implementation has to
 * return a value for this function expression.
 */
export interface StrMatchesFunctionFilter extends Filter {
  0: 'FN_strMatches';
  1: string;
  2: RegExp;
}

/**
 * A Filter that expresses a function.
 */
export type FunctionFilter = StrMatchesFunctionFilter;

/**
 * A ComparisonFilter compares a value of an object (by key) with an expected
 * value.
 */
export interface ComparisonFilter extends Filter {
  0: ComparisonOperator;
  1: string | FunctionFilter;
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
export type SymbolizerKind = 'Fill' | 'Icon' | 'Line' | 'Text' | 'Mark' | 'Raster';

/**
 * A Symbolizer describes the style representation of geographical data.
 */
interface BaseSymbolizer {
  /**
   * Describes the type of the kind of the Symbolizer.
   */
  kind: SymbolizerKind;
  /**
   * A color defined as a hex-color string.
   */
  color?: string;
  /**
   * A value between 0 and 1. 0 is none opaque and 1 is full opaque.
   */
  opacity?: number;
  /**
   * The offset of the Symbolizer as [x, y] coordinates. Positive values indicate
   * right and down, while negative values indicate left and up.
   * TODO: Duplicate with offset
   */
  translate?: [number, number];
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-symbol-icon-translate-anchor
   */
  translateAnchor?: 'map' | 'viewport';
  /**
   * Defines whether the Symbolizer should be visibile or not.
   */
  visibility?: boolean;
}

/**
 * A PointSymbolizer describes the style representation of POINT data.
 */
export interface BasePointSymbolizer extends BaseSymbolizer {
  /**
   * This is a property relevant if using tiled datasets.
   * If true, the symbols will not cross tile edges to avoid mutual collisions.
   */
  avoidEdges?: boolean;
  /**
   * The offset of the Symbolizer as [x, y] coordinates. Positive values indicate
   * right and down, while negative values indicate left and up.
   * TODO: Duplicate with translate
   */
  offset?: [number, number];
}

/**
 * Supported WellKnownNames
 */
export type WellKnownName = 'Circle' | 'Square' | 'Triangle' | 'Star' | 'Cross' | 'X'
                            | 'shape://vertline' | 'shape://horline' | 'shape://slash'
                            | 'shape://backslash' | 'shape://dot' | 'shape://plus'
                            | 'shape://times' | 'shape://oarrow' | 'shape://carrow' ;

/**
 * MarkSymbolizer describes the style representation of POINT data, if styled as
 * with a regular geometry.
 */
export interface MarkSymbolizer extends BasePointSymbolizer {
  kind: 'Mark';
  /**
   * The WellKnownName of the MarkSymbolizer.
   */
  wellKnownName: WellKnownName;
  /**
   * The radius of the Symbolizer. Values describing the full size of the Symbolizer
   * have to be divided by two.
   */
  radius?: number;
  /**
   * The rotation of the Symbolizer in degrees. Value should be between 0 and 360.
   */
  rotate?: number;
  /**
   * The opacity of the fill. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  fillOpacity?: number;
  /**
   * The color of the stroke represented as a hex-color string.
   */
  strokeColor?: string;
  /**
   * The opacity of the stroke. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  strokeOpacity?: number;
  /**
   * The width of the stroke in pixels.
   */
  strokeWidth?: number;
  /**
   * Amount to blur the Symbolizer. 1 blurs the Symbolizer such that only the
   * centerpoint has full opacity. Mostly relevant for circles.
   */
  blur?: number;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-circle-circle-pitch-alignment
   */
  pitchAlignment?: 'map' | 'viewport';
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-circle-circle-pitch-scale
   */
  pitchScale?: 'map' | 'viewport';
}

/**
 * The TextSymbolizer describes the style representation of point data, if styled
 * with a text.
 */
export interface TextSymbolizer extends BasePointSymbolizer {
  kind: 'Text';
  /**
   * If true, the text will be visible even if it collides with other previously
   * drawn symbols.
   * TODO: Duplicate of ignorePlacement
   */
  allowOverlap?: boolean;
  /**
   * The anchor position of the label referred to the center of the geometry.
   */
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * Template string where {{PROPERTYNAME}} can be used to be replaced by values
   * from the dataset.
   * e.g.: "Name {{country_name}}"
   */
  label?: string;
  /**
   * An Array of fonts. Comparable to https://www.w3schools.com/cssref/pr_font_font-family.asp
   */
  font?: string[];
  /**
   * The halo's fadeout distance towards the outside.
   */
  haloBlur?: number;
  /**
   * The color of the text's halo, which helps it stand out from backgrounds
   * represented as a hex-color string.
   */
  haloColor?: string;
  /**
   * Distance of halo to the font outline in pixels.
   */
  haloWidth?: number;
  /**
   * TODO: Duplicate of allowOverlap?
   */
  ignorePlacement?: boolean;
  /**
   * Text justification option to align the text.
   */
  justify?: 'left' | 'center' | 'right';
  /**
   * If true, the text will be kept upright.
   */
  keepUpright?: boolean;
  /**
   * Sets the spacing between text characters in pixels.
   */
  letterSpacing?: number;
  /**
   * Sets the line height in pixels.
   */
  lineHeight?: number;
  /**
   * Maximum angle change between adjacent characters in degrees.
   */
  maxAngle?: number;
  /**
   * The maximum line width for text wrapping.
   */
  maxWidth?: number;
  /**
   * TODO: CHECK where this property came from and if we need it
   */
  optional?: boolean;
  /**
   * Size of the additional area around the text bounding box used for detecting
   * symbol collisions.
   */
  padding?: number;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-pitch-alignment
   */
  pitchAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The rotation of the Symbolizer in degrees. Value should be between 0 and 360.
   */
  rotate?: number;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-rotation-alignment
   */
  rotationAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The FontSize in pixels.
   */
  size?: number;
  /**
   * Specifies how to capitalize text, similar to the CSS text-transform property.
   */
  transform?: 'none' | 'uppercase' | 'lowercase';
  /**
   * Specifies whether a font should be styled with a normal, italic, or oblique
   * face from its font-family.
   */
  fontStyle?: 'normal' | 'italic' | 'oblique';
  /**
   * Specifies the weight (or boldness) of the font. The weights available depend
   * on the font-family you are using.
   */
  fontWeight?: 'normal' | 'bold';
}

/**
 * An IconSymbolizer describes the style representation of POINT data if styled
 * with a specific icon.
 */
export interface IconSymbolizer extends BasePointSymbolizer {
  kind: 'Icon';
  /**
   * If true, the icon will be visible even if it collides with other previously
   * drawn symbols.
   */
  allowOverlap?: boolean;
  /**
   * Part of the icon placed closest to the anchor. This may conflict with a set
   * offset/translation.
   */
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * The halo's fadeout distance towards the outside.
   */
  haloBlur?: number;
  /**
   * The color of the icons halo, which helps it stand out from backgrounds represented
   * as a hex-color string.
   */
  haloColor?: string;
  /**
   * Distance of halo to the font outline in pixels.
   */
  haloWidth?: number;
  /**
   * TODO: Duplicate of allowOverlap?
   */
  ignorePlacement?: boolean;
  /**
   * A path/URL to the icon image file.
   */
  image?: string;
  /**
   * If true, the icon will be kept upright.
   */
  keepUpright?: boolean;
  /**
   * TODO: CHECK where this property came from and if we need it
   */
  optional?: boolean;
  /**
   * Size of the additional area around the icon used for detecting symbol collisions.
   */
  padding?: number;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-pitch-alignment
   */
  pitchAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The rotation of the Symbolizer in degrees. Value should be between 0 and 360.
   */
  rotate?: number;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-rotation-alignment
   */
  rotationAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The Symbolizer size in pixels.
   */
  size?: number;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-text-fit
   */
  textFit?: 'none' | 'width' | 'height' | 'both';
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-text-fit-padding
   */
  textFitPadding?: [number, number, number, number];
}

/**
 * A FillSymbolizer describes the style representation of POLYGON data.
 */
export interface FillSymbolizer extends BaseSymbolizer {
  kind: 'Fill';
  /**
   * Whether the fill should be antialiased or not .
   */
  antialias?: boolean;
  /**
   * The opacity of the fill. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  fillOpacity?: number;
  /**
   * The outline color as a hex-color string. Matches the value of fill-color if
   * unspecified.
   */
  outlineColor?: string;
  /**
   * The opacity of the outline. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  outlineOpacity?: number;
  /**
   * The outline width in pixels.
   */
  outlineWidth?: number;
  /**
   * Encodes a dash pattern as an array of numbers. Odd-indexed numbers (first,
   * third, etc) determine the length in pixels to draw the line, and even-indexed
   * numbers (second, fourth, etc) determine the length in pixels to blank out
   * the line. Default is an unbroken line.
   */
  outlineDasharray?: number[];
  /**
   * Renders the fill of the polygon with a repeated pattern of PointSymbolizer.
   */
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
  /**
   * Determines how lines are rendered at their ends. Possible values are butt
   * (sharp square edge), round (rounded edge), and square (slightly elongated
   * square edge).
   */
  cap?: 'butt' | 'round' | 'square';
  /**
   * Encodes a dash pattern as an array of numbers. Odd-indexed numbers (first,
   * third, etc) determine the length in pixels to draw the line, and even-indexed
   * numbers (second, fourth, etc) determine the length in pixels to blank out
   * the line. Default is an unbroken line.
   */
  dasharray?: number[];
  /**
   * Number of pixels into the dasharray to offset the drawing of the dash,
   * used to shift the location of the lines and gaps in a dash.
   */
  dashOffset?: number;
  /**
   * Draws a line casing outside of a line's actual path. Value indicates the
   * width of the inner gap in pixels.
   */
  gapWidth?: number;
  /**
   * Defines a gradient with which to color a line feature.
   */
  gradient?: any[];
  /**
   * Renders the line with a repeated linear PointSymbolizer.
   */
  graphicStroke?: PointSymbolizer;
  /**
   * Renders the pixels of the line with a repeated pattern.
   */
  graphicFill?: PointSymbolizer;
  /**
   * Determines how lines are rendered at intersections of line segments.
   * Possible values are mitre (sharp corner),  round (rounded corner), and bevel
   * diagonal corner).
   */
  join?: 'bevel' | 'round' | 'miter';
  /**
   * Used to automatically convert miter joins to bevel joins for sharp angles.
   */
  miterLimit?: number;
  /**
   * If present, it makes the renderer draw a line parallel to the original one,
   * at the given distance. When applied on lines, positive values generate a
   * parallel line on the left hand side, negative values on the right hand side.
   */
  perpendicularOffset?: number;
  /**
   * Used to automatically convert round joins to miter joins for shallow angles.
   */
  roundLimit?: number;
  /**
   * Distance between two symbol anchors in pixels.
   */
  spacing?: number;
  /**
   * TODO: CHECK where this property came from and if we need it
   */
  type?: string;
  /**
   * The width of the Line in pixels.
   */
  width?: number;
}

/**
 * Operators used for Point symbolization.
 */
export type PointSymbolizer = IconSymbolizer | MarkSymbolizer | TextSymbolizer;

/**
 * A single entry for the ColorMap.
 */
export interface ColorMapEntry {
  color: string;
  quantity?: number;
  label?: string;
  opacity?: number;
}

/**
 * The Types that are allowed in a ColorMap.
 */
export type ColorMapType = 'ramp' | 'intervals' | 'values';

/**
 * A ColorMap defines the color values for the pixels of a raster image.
 */
export interface ColorMap {
    type: ColorMapType;
    colorMapEntries?: ColorMapEntry[];
    extended?: boolean;
}

/**
 * A ContrastEnhancement defines how the contrast of image data should be enhanced.
 */
export interface ContrastEnhancement {
  enhancementType?: 'normalize' | 'histogram';
  gammaValue?: number;
}

/**
 * A Channel defines the properties for a color channel.
 */
export interface Channel {
  sourceChannelName?: string;
  contrastEnhancement?: ContrastEnhancement;
}

/**
 * A RGBChannel defines how dataset bands are mapped to image color channels.
 */
export interface RGBChannel {
  redChannel: Channel;
  blueChannel: Channel;
  greenChannel: Channel;
}

/**
 * A GrayChannel defines how a single dataset band is mapped to a grayscale channel.
 */
export interface GrayChannel {
  grayChannel: Channel;
}

export type ChannelSelection = RGBChannel | GrayChannel;

/**
 * A RasterSymbolizer defines the style representation of RASTER data.
 */
export interface RasterSymbolizer {
  kind: 'Raster';
  visibility?: boolean;
  opacity?: number;
  colorMap?: ColorMap;
  channelSelection?: ChannelSelection;
  contrastEnhancement?: ContrastEnhancement;
  hueRotate?: number;
  brightnessMin?: number;
  brightnessMax?: number;
  saturation?: number;
  contrast?: number;
  resampling?: 'linear' | 'nearest';
  fadeDuration?: number;
}

/**
 * All operators.
 */
export type Symbolizer = PointSymbolizer | LineSymbolizer | FillSymbolizer | RasterSymbolizer;

/**
 * A Rule combines a specific amount of data (defined by a Filter and a
 * ScaleDenominator) and an associated Symbolizer.
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
    RasterSymbolizer?: any;
  }
}

/**
 * Interface, which has to be implemented by all GeoStyler style parser classes.
 */
export interface StyleParser {
  /**
   * The name of the Parser
   */
  title: string;

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

