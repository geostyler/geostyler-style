/**
 * Contains typeguards for geostyler-style
 * https://basarat.gitbook.io/typescript/type-system/typeguard#user-defined-type-guards
 */

import _isString from 'lodash/isString';
import _isNumber from 'lodash/isNumber';
import _isBoolean from 'lodash/isBoolean';
import _isRegExp from 'lodash/isRegExp';
import _isNull from 'lodash/isNull';

import {
  CombinationFilter,
  CombinationOperator,
  ComparisonFilter,
  ComparisonOperator,
  FillSymbolizer,
  Filter,
  GrayChannel,
  IconSymbolizer,
  LineSymbolizer,
  MarkSymbolizer,
  NegationFilter,
  NegationOperator,
  Operator,
  PropertyType,
  RasterSymbolizer,
  RGBChannel,
  Rule,
  ScaleDenominator,
  TextSymbolizer,
  Expression,
  GeoStylerBooleanFunction,
  GeoStylerNumberFunction,
  GeoStylerStringFunction,
  GeoStylerUnknownFunction,
  GeoStylerFunction,
  PointSymbolizer,
  Symbolizer,
  FunctionCall,
  Sprite
} from './index';

export const isExpression = (got: any): got is Expression<any> => {
  return isGeoStylerFunction(got) || isPropertyType(got);
};

/**
 * @deprecated use isFunction instead
 */
export const isFunctionCall = (got: any): got is FunctionCall<any> => {
  return got.type === 'functioncall' &&
    got.hasOwnProperty('name') &&
    _isString(got.name) &&
    got.hasOwnProperty('args') &&
    Array.isArray(got.args) &&
    got.args.every((arg: any) => isExpression(arg));
};

// PropertyValue
export const isPropertyType = (got: any): got is PropertyType => {
  return _isString(got) || _isNumber(got) || _isBoolean(got) || got === null;
};

// ScaleDenominator
export const isScaleDenominator = (got: any): got is ScaleDenominator => {
  return !!((got?.min || got?.max) &&
    ((!!got.min) ? isGeoStylerNumberFunction(got.min) || _isNumber(got.min) : true) &&
    ((!!got.max) ? isGeoStylerNumberFunction(got.max) || _isNumber(got.min) : true));
};

// Operators
export const isOperator = (got: any): got is Operator => {
  return isComparisonOperator(got) ||
    isCombinationOperator(got) ||
    isNegationOperator(got);
};
export const isComparisonOperator = (got: any): got is ComparisonOperator => {
  return ['==', '*=' , '!=' , '<' , '<=' , '>' , '>=', '<=x<='].includes(got);
};
export const isCombinationOperator = (got: any): got is CombinationOperator => {
  return ['&&', '||'].includes(got);
};
export const isNegationOperator = (got: any): got is NegationOperator => {
  return got === '!';
};

// Filters
export const isFilter = (got: any): got is Filter => {
  return isComparisonFilter(got) ||
    isCombinationFilter(got) ||
    isGeoStylerBooleanFunction(got) ||
    isNegationFilter(got) ||
    isGeoStylerBooleanFunction(got) ||
    _isBoolean(got);
};

export const isComparisonFilter = (got: any): got is ComparisonFilter => {
  const expectedLength = got && got[0] === '<=x<=' ? 4 : 3;
  return (
    Array.isArray(got) &&
    got.length === expectedLength &&
    isComparisonOperator(got[0]) &&
    isExpression(got[1]) &&
    isExpression(got[2]) &&
    (got[0] !== '<=x<=' || _isNumber(got[3]))
  );
};
export const isCombinationFilter = (got: any): got is CombinationFilter => {
  return Array.isArray(got) &&
    got.length >= 3 &&
    isCombinationOperator(got[0]) &&
    got.every((arg, index) => index === 0 || isFilter(arg));
};
export const isNegationFilter = (got: any): got is NegationFilter => {
  return Array.isArray(got) &&
    got.length === 2 &&
    isNegationOperator(got[0]) &&
    isFilter(got[1]);
};

// Symbolizers
export const isSymbolizer = (got: any): got is Symbolizer => {
  return isPointSymbolizer(got) ||
  isLineSymbolizer(got) ||
  isFillSymbolizer(got) ||
  isRasterSymbolizer(got);
};
export const isPointSymbolizer = (got: any): got is PointSymbolizer => {
  return isIconSymbolizer(got) || isMarkSymbolizer(got) || isTextSymbolizer(got);
};
export const isIconSymbolizer = (got: any): got is IconSymbolizer => {
  return got?.kind === 'Icon';
};
export const isTextSymbolizer = (got: any): got is TextSymbolizer => {
  return got?.kind === 'Text';
};
export const isMarkSymbolizer = (got: any): got is MarkSymbolizer => {
  return got?.kind === 'Mark' && _isString(got?.wellKnownName);
};
export const isLineSymbolizer = (got: any): got is LineSymbolizer => {
  return got?.kind === 'Line';
};
export const isFillSymbolizer = (got: any): got is FillSymbolizer => {
  return got?.kind === 'Fill';
};
export const isRasterSymbolizer = (got: any): got is RasterSymbolizer => {
  return got?.kind === 'Raster';
};

// Rule
export const isRule = (got: any): got is Rule => {
  return !!(_isString(got?.name) &&
    (got?.filter ? isFilter(got.filter) : true) &&
    (got?.scaleDenominator ? isScaleDenominator(got.scaleDenominator) : true) &&
    got?.symbolizers?.every((arg: any) => isSymbolizer(arg)));
};

/**
 * Checks if ChannelSelection is of type RGBChannel.
 */
export const isRgbChannel = (got: any): got is RGBChannel => {
  return !!(
    got?.redChannel !== undefined
      || got?.greenChannel !== undefined
      || got?.blueChannel !== undefined
  );
};

/**
 * Checks if ChannelSelection is of type GrayChannel.
 */
export const isGrayChannel = (got: any): got is GrayChannel => {
  return !!(got?.grayChannel !== undefined);
};

// Functions
export const isGeoStylerNumberFunction = (got: any): got is GeoStylerNumberFunction => {
  const functionNames: GeoStylerNumberFunction['name'][] = [
    'abs',
    'acos',
    'add',
    'asin',
    'atan',
    'atan2',
    'ceil',
    'cos',
    'div',
    'exp',
    'floor',
    'log',
    'max',
    'min',
    'modulo',
    'mul',
    'pi',
    'pow',
    'random',
    'rint',
    'round',
    'sin',
    'sqrt',
    'strIndexOf',
    'strLastIndexOf',
    'strLength',
    'sub',
    'tan',
    'toDegrees',
    'toRadians'
  ];
  return functionNames.includes(got?.name);
};

export const isGeoStylerStringFunction = (got: any): got is GeoStylerStringFunction => {
  const functionNames: GeoStylerStringFunction['name'][] = [
    'numberFormat',
    'strAbbreviate',
    'strCapitalize',
    'strConcat',
    'strDefaultIfBlank',
    'strReplace',
    'strStripAccents',
    'strSubstring',
    'strSubstringStart',
    'strToLowerCase',
    'strToUpperCase',
    'strTrim'
  ];
  return functionNames.includes(got?.name);
};

export const isGeoStylerBooleanFunction = (got: any): got is GeoStylerBooleanFunction => {
  const functionNames: GeoStylerBooleanFunction['name'][] = [
    'all',
    'any',
    'between',
    'double2bool',
    'equalTo',
    'greaterThan',
    'greaterThanOrEqualTo',
    'in',
    'lessThan',
    'lessThanOrEqualTo',
    'not',
    'notEqualTo',
    'parseBoolean',
    'strEndsWith',
    'strEqualsIgnoreCase',
    'strMatches',
    'strStartsWith'
  ];
  return functionNames.includes(got?.name);
};

export const isGeoStylerUnknownFunction = (got: any): got is GeoStylerUnknownFunction => {
  const functionNames: GeoStylerUnknownFunction['name'][] = [
    'case',
    'property',
  ];
  return functionNames.includes(got?.name);
};

export const isGeoStylerFunction = (got: any): got is GeoStylerFunction => {
  return isGeoStylerBooleanFunction(got) ||
    isGeoStylerNumberFunction(got) ||
    isGeoStylerStringFunction(got) ||
    isGeoStylerUnknownFunction(got);
};

export const isSprite = (got: any): got is Sprite => {
  return typeof got?.source === 'string' || isGeoStylerFunction(got?.source) &&
    Array.isArray(got.position) &&
    Array.isArray(got.size);
};
