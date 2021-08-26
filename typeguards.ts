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
  BasePointSymbolizer,
  BaseSymbolizer,
  CombinationFilter,
  CombinationOperator,
  ComparisonFilter,
  ComparisonOperator,
  FillSymbolizer,
  Filter,
  FunctionFilter,
  IconSymbolizer,
  LineSymbolizer,
  MarkSymbolizer,
  NegationFilter,
  NegationOperator,
  Operator,
  PropertyValue,
  RasterSymbolizer,
  Rule,
  ScaleDenominator,
  StrMatchesFunctionOperator,
  TextSymbolizer,
  CategorizeFunctionFilter,
  CategorizeFunctionOperator,
  Expression,
  FunctionCall,
  LiteralValue,
  PropertyName
} from './index';
import _ from 'lodash';

export const isExpression = (got: any): got is Expression => {
  return isFunctionCall(got) || isLiteralValue(got) || isPropertyName(got);
};

export const isFunctionCall = (got: any): got is FunctionCall => {
  return got.type === 'functioncall' &&
    got.hasOwnProperty('name') &&
    _isString(got.name) &&
    got.hasOwnProperty('args') &&
    Array.isArray(got.args) &&
    got.args.every((arg: any) => isExpression(arg));
};

export const isLiteralValue = (got: any): got is LiteralValue => {
  return got.type === 'literal' &&
    got.hasOwnProperty('value') &&
    (
      _isRegExp(got.value) ||
      _isString(got.value) ||
      _isNumber(got.value) ||
      _isBoolean(got.value) ||
      _isNull(got.value)
    );
};

export const isPropertyName = (got: any): got is PropertyName => {
  return got.type === 'property' &&
    got.hasOwnProperty('name') &&
    _isString(got.name);
};

// PropertyValue
export const isPropertyValue = (got: any): got is PropertyValue => {
  return _isString(got) || _isNumber(got) || _isBoolean(got) || got === null;
};

// ScaleDenominator
export const isScaleDenominator = (got: any): got is ScaleDenominator => {
  return (got?.min || got?.max) &&
    (got.min ? isFilter(got.min) : true) &&
    (got.max ? isFilter(got.max) : true);
};

// Operators
export const isOperator = (got: any): got is Operator => {
  return isComparisonOperator(got) ||
    isCombinationOperator(got) ||
    isStrMatchesFunctionOperator(got) ||
    isNegationOperator(got);
};
export const isComparisonOperator = (got: any): got is ComparisonOperator => {
  return ['==', '*=' , '!=' , '<' , '<=' , '>' , '>='].includes(got);
};
export const isCombinationOperator = (got: any): got is CombinationOperator => {
  return ['&&', '||'].includes(got);
};
export const isNegationOperator = (got: any): got is NegationOperator => {
  return got === '!';
};
export const isStrMatchesFunctionOperator = (got: any): got is StrMatchesFunctionOperator => {
  return got === 'FN_strMatches';
};
export const isCategorizeFunctionOperator = (got: any): got is CategorizeFunctionOperator => {
  return got === 'Categorize';
};

// Filters
export const isFilter = (got: any): got is Filter => {
  return isComparisonFilter(got) ||
    isCombinationFilter(got) ||
    isFunctionFilter(got) ||
    isNegationFilter(got);
};
export const isComparisonFilter = (got: any): got is ComparisonFilter => {
  return Array.isArray(got) &&
    got.length === 3 &&
    isComparisonOperator(got[0]) &&
    (isFunctionFilter(got[1]) || _isString(got[1])) &&
    isPropertyValue(got[2]);
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
export const isFunctionFilter = (got: any): got is FunctionFilter => {
  return Array.isArray(got) &&
    got.length === 3 &&
    isStrMatchesFunctionOperator(got[0]) &&
    _isString(got[1]) &&
    _isRegExp(got[2]);
};

// Function filters
export const isCategorizeFunctionFilter = (got: any): got is CategorizeFunctionFilter => {
  return isFunctionCall(got) && isCategorizeFunctionOperator(got.name);
};

// Symbolizers
export const isSymbolizer = (got: any): got is BaseSymbolizer => {
  return ['Fill', 'Icon', 'Line', 'Text', 'Mark', 'Raster'].includes(got?.kind);
};
export const isPointSymbolizer = (got: any): got is BasePointSymbolizer => {
  return ['Icon', 'Text', 'Mark'].includes(got?.kind);
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
  return _isString(got?.name) &&
    (got?.filter ? isFilter(got.filter) : true) &&
    (got?.scaleDenominator ? isScaleDenominator(got.scaleDenominator) : true) &&
    got?.symbolizers.every((arg: any) => isSymbolizer(arg));
};
