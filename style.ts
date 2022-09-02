import {
  GeoStylerBooleanFunction,
  GeoStylerNumberFunction,
  GeoStylerStringFunction
} from './functions';

/**
 * The ScaleDenominator defines a range of scales.
 */
export interface ScaleDenominator {
  /**
   * Minimum value of the ScaleDenominator. The value is inclusive.
   *
   */
  min?: Expression<number>;
  /**
   * Maximum value of the ScaleDenominator. The value is exclusive.
   */
  max?: Expression<number>;
}

/**
 * Expression that evaluates to the result of a function
 * call on a list of argument expressions.
 */
export interface FunctionCall<T> {
  name: T extends string ? GeoStylerStringFunction['name'] :
    T extends number ? GeoStylerNumberFunction['name'] :
    GeoStylerBooleanFunction['name'];
  args: Expression<PropertyType>[];
};

/**
 * Expressions can be a literal value, a property name or a function call.
 */
export type Expression<T extends PropertyType> =
  T extends string ? GeoStylerStringFunction | T:
  T extends number ? GeoStylerNumberFunction | T :
  T extends boolean ? GeoStylerBooleanFunction | T :
  T;

/**
 * The type of the Style.
 */
export type StyleType = 'Point' | 'Fill' | 'Line' | 'Raster';

/**
 * A value of a property of the data.
 */
export type PropertyType = string | number | boolean | null;

/**
 * The possible Operators used for comparison Filters.
 */
export type ComparisonOperator = '==' | '*=' | '!=' | '<' | '<=' | '>' | '>=' | '<=x<=';

/**
 * The possible Operators used for combination Filters.
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
 * A Filter that checks if a property is in a range of two values (inclusive).
 */
export type RangeFilter = [
  '<=x<=',
  Expression<string>,
  Expression<number>,
  Expression<number>
];

/**
 * A ComparisonFilter compares a value of an object (by key) with an expected
 * value.
 */
export type ComparisonFilter = [
  ComparisonOperator,
  Expression<string | number | boolean>,
  Expression<string | number | boolean>
] | RangeFilter;

/**
 * A CombinationFilter combines N Filters with a logical OR / AND operator.
 */
export type CombinationFilter = [
  CombinationOperator,
  ...Filter[]
];

/**
 * A NegationFilter negates a given Filter.
 */
export type NegationFilter = [
  NegationOperator,
  Filter
];

export type Filter = ComparisonFilter | NegationFilter | CombinationFilter | GeoStylerBooleanFunction;

/**
 * The kind of the Symbolizer
 */
export type SymbolizerKind = 'Fill' | 'Icon' | 'Line' | 'Text' | 'Mark' | 'Raster';

/**
 * A Symbolizer describes the style representation of geographical data.
 */
export interface BaseSymbolizer {
  /**
   * Describes the type of the kind of the Symbolizer.
   */
  kind: SymbolizerKind;
  /**
   * A color defined as a hex-color string.
   */
  color?: Expression<string>;
  /**
   * Determines the total opacity for the Symbolizer.
   * A value between 0 and 1. 0 is none opaque and 1 is full opaque.
   */
  opacity?: Expression<number>;
  /**
   * Defines whether the Symbolizer should be visibile or not.
   */
  visibility?: Expression<boolean>;
}

/**
 * A PointSymbolizer describes the style representation of POINT data.
 */
export interface BasePointSymbolizer extends BaseSymbolizer {
  /**
   * This is a property relevant if using tiled datasets.
   * If true, the symbols will not cross tile edges to avoid mutual collisions.
   */
  avoidEdges?: Expression<boolean>;
  /**
   * The offset of the Symbolizer as [x, y] coordinates. Positive values indicate
   * right and down, while negative values indicate left and up.
   */
  offset?: [Expression<number>, Expression<number>];
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-symbol-icon-translate-anchor
   */
  offsetAnchor?: 'map' | 'viewport';
}

/**
 * Template literal to be more precise on what a font specification of a wellknownname can look like.
 * font-based symbols following Geotools/Geoserver syntax: ttf://<font name>#<hex code>
 */
export type FontSpec = `ttf://${string}#0x${string}`;

/**
 * Supported WellKnownNames
 * Note that due to TypeScript limitations any string will be valid for this type; this will not change
 * until regexp or equivalent is supported, see:
 * https://github.com/microsoft/TypeScript/issues/6579
 *
 */
export type WellKnownName = 'circle' | 'square' | 'triangle' | 'star' | 'cross' | 'x'
| 'shape://vertline' | 'shape://horline' | 'shape://slash'
| 'shape://backslash' | 'shape://dot' | 'shape://plus'
| 'shape://times' | 'shape://oarrow' | 'shape://carrow'
| FontSpec;

/**
 * Unit that defines how to handle the corresponding symbolizer property.
 * Default should be pixel in your parser.
 * 'px' => pixel
 * 'm' => meter
 */
export type DistanceUnit = 'px' | 'm';

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
   * have to be divided by two (pixels if radiusUnit is not defined).
   */
  radius?: Expression<number>;
  /**
   * Unit to use for the radius.
   */
  radiusUnit?: DistanceUnit;
  /**
   * The rotation of the Symbolizer in degrees. Value should be between 0 and 360.
   */
  rotate?: Expression<number>;
  /**
   * The opacity of the fill. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  fillOpacity?: Expression<number>;
  /**
   * The color of the stroke represented as a hex-color string.
   */
  strokeColor?: Expression<string>;
  /**
   * The opacity of the stroke. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  strokeOpacity?: Expression<number>;
  /**
   * The width of the stroke (pixels if strokeWidthUnit is not defined).
   */
  strokeWidth?: Expression<number>;
  /**
   * Unit to use for the strokeWidth.
   */
  strokeWidthUnit?: DistanceUnit;
  /**
   * Amount to blur the Symbolizer. 1 blurs the Symbolizer such that only the
   * centerpoint has full opacity. Mostly relevant for circles.
   */
  blur?: Expression<number>;
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
   */
  allowOverlap?: Expression<boolean>;
  /**
   * The anchor position of the label referred to the center of the geometry.
   */
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * Template string where {{PROPERTYNAME}} can be used to be replaced by values
   * from the dataset.
   * e.g.: "Name {{country_name}}"
   */
  label?: Expression<string>;
  /**
   * An Array of fonts. Comparable to https://www.w3schools.com/cssref/pr_font_font-family.asp
   */
  font?: Expression<string>[];
  /**
   * The halo's fadeout distance towards the outside.
   */
  haloBlur?: Expression<number>;
  /**
   * The color of the text's halo, which helps it stand out from backgrounds
   * represented as a hex-color string.
   */
  haloColor?: Expression<string>;
  /**
   * Distance of halo to the font outline (pixels if haloWidthUnit is not defined).
   */
  haloWidth?: Expression<number>;
  /**
   * Unit to use for the haloWidth.
   */
  haloWidthUnit?: DistanceUnit;
  /**
   * Text justification option to align the text.
   */
  justify?: 'left' | 'center' | 'right';
  /**
   * If true, the text will be kept upright.
   */
  keepUpright?: Expression<boolean>;
  /**
   * Sets the spacing between text characters (pixels if letterSpacingUnit is not defined).
   */
  letterSpacing?: Expression<number>;
  /**
   * Unit to use for the letterSpacing.
   */
  letterSpacingUnit?: DistanceUnit | 'em';
  /**
   * Sets the line height (pixels if lineHeightUnit is not defined).
   * 'em' -> fontsize
   */
  lineHeight?: Expression<number>;
  /**
   * Unit to use for the lineHeight.
   * 'em' -> fontsize
   */
  lineHeightUnit?: DistanceUnit | 'em';
  /**
   * Maximum angle change between adjacent characters in degrees.
   */
  maxAngle?: Expression<number>;
  /**
   * The maximum line width for text wrapping.
   */
  maxWidth?: Expression<number>;
  /**
   * Property relevant for mapbox-styles.
   * If true, icons will display without their corresponding text when the text
   * collides with other symbols and the icon does not.
   */
  optional?: Expression<boolean>;
  /**
   * Size of the additional area around the text bounding box used for detecting
   * symbol collisions.
   */
  padding?: Expression<number>;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-pitch-alignment
   */
  pitchAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The rotation of the Symbolizer in degrees. Value should be between 0 and 360.
   */
  rotate?: Expression<number>;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-text-rotation-alignment
   */
  rotationAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The fontsize in pixels.
   */
  size?: Expression<number>;
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
  allowOverlap?: Expression<boolean>;
  /**
   * Part of the icon placed closest to the anchor. This may conflict with a set
   * offset.
   */
  anchor?: 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * The halo's fadeout distance towards the outside.
   */
  haloBlur?: Expression<number>;
  /**
   * The color of the icons halo, which helps it stand out from backgrounds represented
   * as a hex-color string.
   */
  haloColor?: Expression<string>;
  /**
   * Distance of halo to the font outline (pixels if haloWidthUnit is not defined).
   */
  haloWidth?: Expression<number>;
  /**
   * Unit to use for the haloWidth.
   */
  haloWidthUnit?: DistanceUnit;
  /**
   * A path/URL to the icon image file.
   */
  image?: Expression<string>;
  /**
   * An optional configuration for the image format as MIME type.
   * This might be needed if the image(path) has no filending specified. e.g. http://myserver/getImage
   */
  format?: `image/${'png' | 'jpg' | 'jpeg' | 'gif' | 'svg+xml'}`;
  /**
   * If true, the icon will be kept upright.
   */
  keepUpright?: Expression<boolean>;
  /**
   * Property relevant for mapbox-styles.
   * If true, text will display without their corresponding icons when the icon
   * collides with other symbols and the text does not.
   */
  optional?: Expression<boolean>;
  /**
   * Size of the additional area around the icon used for detecting symbol collisions.
   */
  padding?: Expression<number>;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-pitch-alignment
   */
  pitchAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The rotation of the Symbolizer in degrees. Value should be between 0 and 360.
   */
  rotate?: Expression<number>;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-rotation-alignment
   */
  rotationAlignment?: 'map' | 'viewport' | 'auto';
  /**
   * The Symbolizer size (pixels if sizeUnit is not defined).
   */
  size?: Expression<number>;
  /**
   * Unit to use for the size.
   */
  sizeUnit?: DistanceUnit;
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-text-fit
   */
  textFit?: 'none' | 'width' | 'height' | 'both';
  /**
   * Property relevant for mapbox-styles.
   * Compare https://docs.mapbox.com/mapbox-gl-js/style-spec/#layout-symbol-icon-text-fit-padding
   */
  textFitPadding?: [Expression<number>, Expression<number>, Expression<number>, Expression<number>];
}

/**
 * A FillSymbolizer describes the style representation of POLYGON data.
 */
export interface FillSymbolizer extends BaseSymbolizer {
  kind: 'Fill';
  /**
   * Whether the fill should be antialiased or not .
   */
  antialias?: Expression<boolean>;
  /**
   * The opacity of the fill. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  fillOpacity?: Expression<number>;
  /**
   * The outline color as a hex-color string. Matches the value of fill-color if
   * unspecified.
   */
  outlineColor?: Expression<string>;
  /**
   * The opacity of the outline. A value between 0 and 1.
   * 0 is none opaque and 1 is full opaque.
   */
  outlineOpacity?: Expression<number>;
  /**
   * The outline width (pixels if outlineWidthUnit is not defined).
   */
  outlineWidth?: Expression<number>;
  /**
   * Unit to use for the outlineWidth.
   */
  outlineWidthUnit?: DistanceUnit;
  /**
   * Encodes a dash pattern as an array of numbers. Odd-indexed numbers (first,
   * third, etc) determine the length in pixels to draw the line, and even-indexed
   * numbers (second, fourth, etc) determine the length in pixels to blank out
   * the line. Default is an unbroken line.
   */
  outlineDasharray?: Expression<number>[];
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
  blur?: Expression<number>;
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
  dasharray?: Expression<number>[];
  /**
   * Number of pixels into the dasharray to offset the drawing of the dash,
   * used to shift the location of the lines and gaps in a dash.
   */
  dashOffset?: Expression<number>;
  /**
   * Draws a line casing outside of a line's actual path. Value indicates the
   * width of the inner gap (pixels if gapWidthUnit is not defined).
   */
  gapWidth?: Expression<number>;
  /**
   * Unit to use for the gapWidth.
   */
  gapWidthUnit?: DistanceUnit;
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
  miterLimit?: Expression<number>;
  /**
   * If present, it makes the renderer draw a line parallel to the original one,
   * at the given distance. When applied on lines, positive values generate a
   * parallel line on the left hand side, negative values on the right hand side.
   */
  perpendicularOffset?: Expression<number>;
  /**
   * Used to automatically convert round joins to miter joins for shallow angles.
   */
  roundLimit?: Expression<number>;
  /**
   * Distance between two symbol anchors (pixels if spacingUnit is not defined).
   */
  spacing?: Expression<number>;
  /**
   * Unit to use for the spacing.
   * 'em' -> fontsize
   */
  spacingUnit?: DistanceUnit | 'em';
  /**
   * The width of the Line (pixels if widthUnit is not defined).
   */
  width?: Expression<number>;
  /**
   * Unit to use for the width.
   */
  widthUnit?: DistanceUnit;
}

/**
 * Operators used for Point symbolization.
 */
export type PointSymbolizer = IconSymbolizer | MarkSymbolizer | TextSymbolizer;

/**
 * A single entry for the ColorMap.
 */
export interface ColorMapEntry {
  color: Expression<string>;
  quantity?: Expression<number>;
  label?: Expression<string>;
  opacity?: Expression<number>;
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
  extended?: Expression<boolean>;
}

/**
 * A ContrastEnhancement defines how the contrast of image data should be enhanced.
 */
export interface ContrastEnhancement {
  enhancementType?: 'normalize' | 'histogram';
  gammaValue?: Expression<number>;
}

/**
 * A Channel defines the properties for a color channel.
 */
export interface Channel {
  sourceChannelName?: Expression<string>;
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
  visibility?: Expression<boolean>;
  opacity?: Expression<number>;
  colorMap?: ColorMap;
  channelSelection?: ChannelSelection;
  contrastEnhancement?: ContrastEnhancement;
  hueRotate?: Expression<number>;
  brightnessMin?: Expression<number>;
  brightnessMax?: Expression<number>;
  saturation?: Expression<number>;
  contrast?: Expression<number>;
  resampling?: 'linear' | 'nearest';
  fadeDuration?: Expression<number>;
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
 */
export interface UnsupportedProperties {
  ScaleDenominator?: SupportDef;
  Filter?: SupportDef | {
    '&&'?: SupportDef;
    '!'?: SupportDef;
    '||'?: SupportDef;
    '>'?: SupportDef;
    '>='?: SupportDef;
    '=='?: SupportDef;
    '<'?: SupportDef;
    '<='?: SupportDef;
    '!='?: SupportDef;
    '*='?: SupportDef;
  };
  Symbolizer?: SupportDef | {
    LineSymbolizer?: SupportDef | {
      [key in keyof Required<LineSymbolizer>]?: SupportDef
    };
    FillSymbolizer?: SupportDef | {
      [key in keyof Required<FillSymbolizer>]?: SupportDef
    };
    MarkSymbolizer?: SupportDef | {
      [key in keyof Required<MarkSymbolizer>]?: SupportDef
    };
    IconSymbolizer?: SupportDef | {
      [key in keyof Required<IconSymbolizer>]?: SupportDef
    };
    TextSymbolizer?: SupportDef | {
      [key in keyof Required<TextSymbolizer>]?: SupportDef
    };
    RasterSymbolizer?: SupportDef | {
      [key in keyof Required<RasterSymbolizer>]?: SupportDef
    };
  };
}

/**
 * Level of support for a functionality.
 */
export type SupportLevel = 'partial' | 'none';

/**
 * Detailed information about the support of a functionality.
 * Can contain an info text.
 */
export type SupportInfo = {
  support: SupportLevel;
  info?: string;
};

/**
 * Defines in which way a functionality is supported.
 */
export type SupportDef = SupportInfo | SupportLevel;

/**
 * The Result of the readStyle function of a StyleParser.
 */
export type ReadStyleResult = {
  /**
   * A list of warnings occured while reading the stlye.
   */
  warnings?: string[];
  /**
   * A list of unsupportedProperties used while reading the style.
   */
  unsupportedProperties?: UnsupportedProperties;
  /**
   * The geostyler-style as read by the parser.
   */
  output?: Style;
  /**
   * A list of errors occured while reading the style.
   */
  errors?: Error[];
};

/**
 * The Result of the writeStyle function of a StyleParser.
 */
export type WriteStyleResult<T = any> = {
  /**
   * A list of warnings occured while writing the style.
   */
  warnings?: string[];
  /**
   * A list of unsupportedProperties used while writing the style.
   */
  unsupportedProperties?: UnsupportedProperties;
  /**
   * The target-style as written by the parser.
   */
  output?: T;
  /**
   * A list of errors occured while writing the style.
   */
  errors?: Error[];
};

/**
 * Interface, which has to be implemented by all GeoStyler style parser classes.
 */
export interface StyleParser<T = any> {
  /**
   * The name of the Parser
   */
  title: string;

  /**
   * Object specifying which properties are not or just partially supported.
   */
  unsupportedProperties?: UnsupportedProperties;

  /**
   * Parses the inputStyle and transforms it to the GeoStyler Style
   *
   * @param inputStyle
   */
  readStyle(inputStyle: T): Promise<ReadStyleResult>;

  /**
   * Reads the GeoStyler Style and transforms it to the target Style
   * representation.
   *
   * @param geoStylerStyle Style
   */
  writeStyle(geoStylerStyle: Style): Promise<WriteStyleResult<T>>;

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
}
