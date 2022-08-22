/* eslint-disable @typescript-eslint/naming-convention */
import {
  FunctionCall,
  Expression
} from './style';

export type GeoStylerNumberFunction = Fabs |
Facos |
Fasin |
Fatan |
Fatan2 |
Fceil |
Fcos |
Fexp |
Ffloor |
Flog |
Fmax |
Fmin |
Fmodulo |
Fpi |
Fpow |
Frandom |
Frint |
Fround |
Fsin |
Fsqrt |
FstrIndexOf |
FstrLastIndexOf |
FstrLength |
Ftan |
FtoDegrees |
FtoRadians;

export type GeoStylerStringFunction = FnumberFormat |
Fproperty |
FstrAbbreviate |
FstrCapitalize |
FstrConcat |
FstrDefaultIfBlank |
FstrReplace |
FstrStripAccents |
FstrSubstring |
FstrSubstringStart |
FstrToLowerCase |
FstrToUpperCase |
FstrTrim;

export type GeoStylerBooleanFunction = Fbetween |
Fdouble2bool |
Fin |
FparseBoolean |
FstrEndsWith |
FstrEqualsIgnoreCase |
FstrMatches |
FstrStartsWith;

export type GeoStylerVoidFunction = unknown;

/**
 * The absolute value of the specified number value
 */
export interface Fabs extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'abs';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the arc cosine of an angle in radians, in the range of 0.0 through PI
 */
export interface Facos extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'acos';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the arc sine of an angle in radians, in the range of -PI / 2 through PI / 2
 */
export interface Fasin extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'asin';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the arc tangent of an angle in radians, in the range of -PI/2 through PI/2
 */
export interface Fatan extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'atan';
  args: [
    Expression<number>
  ];
};

/**
 * Converts a rectangular coordinate (x, y) to polar (r, theta) and returns theta.
 */
export interface Fatan2 extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'atan2';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns true if arg1 <= arg0 <= arg2
 */
export interface Fbetween extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'between';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns the smallest (closest to negative infinity) number value that is greater than or equal to
 * x and is equal to a mathematical integer.
 */
export interface Fceil extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'ceil';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the cosine of an angle expressed in radians
 */
export interface Fcos extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'cos';
  args: [
    Expression<number>
  ];
};

/**
 * Returns true if x is zero, false otherwise
 */
export interface Fdouble2bool extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'double2bool';
  args: [
    Expression<number>
  ];
};

/**
 * Returns Euler’s number e raised to the power of x
 */
export interface Fexp extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'exp';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the largest (closest to positive infinity) value that is less than or equal to x and is
 * equal to a mathematical integer
 */
export interface Ffloor extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'floor';
  args: [
    Expression<number>
  ];
};

/**
 * Returns true if arguments[0] is equal to one of the arguments[1], …, arguments[n] values. Use the
 * function name matching the number of arguments specified.
 */
export interface Fin extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'in';
  args: Expression<string>[];
};

/**
 * Returns the natural logarithm (base e) of x
 */
export interface Flog extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'log';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the maximum between argument[0], …, argument[n]
 */
export interface Fmax extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'max';
  args: Expression<number>[];
};

/**
 * Returns the minimum between argument[0], …, argument[n]
 */
export interface Fmin extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'min';
  args: Expression<number>[];
};

export interface Fmodulo extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'modulo';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Formats the number (argument[1]) according to the specified format (arguments[0]) using the default locale
 * or the one provided (argument[2]) as an optional argument. The format syntax can be found
 * in the Java DecimalFormat javadocs
 */
export interface FnumberFormat extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'numberFormat';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

/**
 * Parses a string into a boolean. The empty string, f, 0.0 and 0 are considered false, everything
 * else is considered true.
 */
export interface FparseBoolean extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'parseBoolean';
  args: [
    Expression<string>
  ];
};

/**
 * Returns an approximation of pi, the ratio of the circumference of a circle to its diameter
 */
export interface Fpi extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'pi';
};

/**
 * Returns the value of base (argument[0]) raised to the power of exponent (arguments[1])
 */
export interface Fpow extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'pow';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns the value of the property propertyName. Allows property names to be compute
 *  or specified by Variable substitution in SLD.
 */
export interface Fproperty extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'property';
  args: [
    Expression<string>
  ];
};

/**
 * Returns a Double value with a positive sign, greater than or equal to 0.0 and less than 1.0.
 */
export interface Frandom extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'random';
};

/**
 * Returns the Double value that is closest in value to the argument and is equal to a mathematical
 * integer. If two double values that are mathematical integers are equally close, the result is the
 * integer value that is even.
 */
export interface Frint extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'rint';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the closest number to argument[0].
 */
export interface Fround extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'round';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the sine of an angle expressed in radians
 */
export interface Fsin extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'sin';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the square root of argument[0]
 */
export interface Fsqrt extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'sqrt';
  args: [
    Expression<number>
  ];
};

/**
 * Abbreviates the sentence (argument[0]) at first space beyond lower (argument[1])
 * or at upper (argument[2]) if no space.Appends append (argument[3]) if string is abbreviated.
 */
export interface FstrAbbreviate extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strAbbreviate';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<number>,
    Expression<string>
  ];
};

/**
 * Fully capitalizes the sentence. For example, “HoW aRe YOU?” will be turned into “How Are You?”
 */
export interface FstrCapitalize extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strCapitalize';
  args: [
    Expression<string>
  ];
};

/**
 * Concatenates the two strings into one
 */
export interface FstrConcat extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strConcat';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns default (argument[1]) if str (argument[0]) is empty, blank or null
 */
export interface FstrDefaultIfBlank extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strDefaultIfBlank';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns true if string (argument[0]) ends with suffix (argument[1])
  */
export interface FstrEndsWith extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'strEndsWith';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns true if the two strings are equal ignoring case considerations
 */
export interface FstrEqualsIgnoreCase extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'strEqualsIgnoreCase';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns the index within this string (argument[0]) of the first occurrence of the specified
 * substring (argument[1]), or -1 if not found
 */
export interface FstrIndexOf extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'strIndexOf';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns the index within this string (arguments[0]) of the last occurrence of the specified
 * substring (arguments[1]), or -1 if not found
 */
export interface FstrLastIndexOf extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'strLastIndexOf';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns the string length
 */
export interface FstrLength extends FunctionCall<number>{
  type: 'numberfunction';
  name: 'strLength';
  args: [
    Expression<string>
  ];
};

/**
 * Returns true if the string (arguments[0]) matches the specified regular expression (arguments[1]).
 * For the full syntax of the pattern specification see the Java Pattern class javadocs
 */
export interface FstrMatches extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'strMatches';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Returns the string (argument[0]) with the pattern (argument[1]) replaced with the given
 * replacement (argument[2]) text. If the global argument (argument[3]) is true then all occurrences of the pattern
 * will be replaced, otherwise only the first. For the full syntax of the pattern specification see
 * the Java Pattern class javadocs
 */
export interface FstrReplace extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strReplace';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<boolean>
  ];
};

/**
 * Returns true if string (argument[0]) starts with prefix (argument[1]).
 */
export interface FstrStartsWith extends FunctionCall<boolean> {
  type: 'booleanfunction';
  name: 'strStartsWith';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

/**
 * Removes diacritics (~= accents) from a string. The case will not be altered.
 */
export interface FstrStripAccents extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strStripAccents';
  args: [
    Expression<string>
  ];
};

/**
 * Returns a new string that is a substring of this string (argument[0]). The substring begins
 * at the specified begin (argument[1]) and extends to the character at index endIndex (argument[2]) - 1
 * (indexes are zero-based).
 */
export interface FstrSubstring extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strSubstring';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns a new string that is a substring of this string (argument[0]). The substring begins
 * at the specified begin (arguments[1]) and extends to the last character of the string
 */
export interface FstrSubstringStart extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strSubstringStart';
  args: [
    Expression<string>,
    Expression<number>
  ];
};

/**
 * Returns the lower case version of the string
 */
export interface FstrToLowerCase extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strToLowerCase';
  args: [
    Expression<string>
  ];
};

/**
 * Returns the upper case version of the string
 */
export interface FstrToUpperCase extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strToUpperCase';
  args: [
    Expression<string>
  ];
};

/**
 * Returns a copy of the string, with leading and trailing blank-space omitted
 */
export interface FstrTrim extends FunctionCall<string> {
  type: 'stringfunction';
  name: 'strTrim';
  args: [
    Expression<string>
  ];
};

/**
 * Returns the trigonometric tangent of angle expressed in radians
 */
export interface Ftan extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'tan';
  args: [
    Expression<number>
  ];
};

/**
 * Converts an angle expressed in radians into degrees
 */
export interface FtoDegrees extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'toDegrees';
  args: [
    Expression<number>
  ];
};

/**
 * Converts an angle expressed in radians into degrees
 */
export interface FtoRadians extends FunctionCall<number> {
  type: 'numberfunction';
  name: 'toRadians';
  args: [
    Expression<number>
  ];
};
