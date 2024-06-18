/* eslint-disable @typescript-eslint/naming-convention */
import {
  FunctionCall,
  Expression,
  PropertyType
} from './style';

export type GeoStylerFunction = GeoStylerNumberFunction |
  GeoStylerStringFunction |
  GeoStylerBooleanFunction |
  GeoStylerUnknownFunction;

/**
 * An expression of a function that returns a number.
 */
export type GeoStylerNumberFunction = GeoStylerUnknownFunction |
Fabs |
Facos |
Fadd |
Fasin |
Fatan |
Fatan2 |
Fceil |
Fcos |
Fdiv |
Fexp |
Ffloor |
Flog |
Fmax |
Fmin |
Fmodulo |
Fmul |
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
Fsub |
Ftan |
FtoDegrees |
FtoNumber |
FtoRadians;

/**
 * An expression of a function that returns a string.
 */
export type GeoStylerStringFunction = GeoStylerUnknownFunction |
FnumberFormat |
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
FstrTrim |
FtoString;

/**
 * An expression of a function that returns a boolean.
 */
export type GeoStylerBooleanFunction = GeoStylerUnknownFunction |
Fall |
Fany |
Fbetween |
Fdouble2bool |
FequalTo |
FgreaterThan |
FgreaterThanOrEqualTo |
Fin |
FlessThan |
FlessThanOrEqualTo |
Fnot |
FnotEqualTo |
FparseBoolean |
FstrEndsWith |
FstrEqualsIgnoreCase |
FstrMatches |
FstrStartsWith |
FtoBoolean;

export type GeoStylerUnknownFunction = Fcase | Fstep | Fproperty;

/**
 * The absolute value of the specified number value
 */
export interface Fabs extends FunctionCall<number> {
  name: 'abs';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the arc cosine of an angle in radians, in the range of 0.0 through PI
 */
export interface Facos extends FunctionCall<number> {
  name: 'acos';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the sum of the arguments
 */
export interface Fadd extends FunctionCall<number> {
  name: 'add';
  args: Expression<number>[];
};

/**
 * Resolves to true if all passed arguments resolve to true
 */
export interface Fall extends FunctionCall<boolean> {
  name: 'all';
  args: Expression<boolean>[];
};

/**
 * Resolves to true if any of the passed arguments resolves to true
 */
export interface Fany extends FunctionCall<boolean> {
  name: 'any';
  args: Expression<boolean>[];
};

/**
 * Returns the arc sine of an angle in radians, in the range of -PI / 2 through PI / 2
 */
export interface Fasin extends FunctionCall<number> {
  name: 'asin';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the arc tangent of an angle in radians, in the range of -PI/2 through PI/2
 */
export interface Fatan extends FunctionCall<number> {
  name: 'atan';
  args: [
    Expression<number>
  ];
};

/**
 * Converts a rectangular coordinate (x, y) to polar (r, theta) and returns theta.
 */
export interface Fatan2 extends FunctionCall<number> {
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
  name: 'between';
  args: [
    Expression<number>,
    Expression<number>,
    Expression<number>
  ];
};

type FCaseParameter = {
  case: Expression<boolean>;
  value: Expression<PropertyType>;
};

/**
 * Textual representation of a switch-case function.
 * argument[0] - argument[args.length - 2] are objects with 'case' and
 * 'value'. argument[args.length -1] will be the default value.
 *
 * The value of the first object where its 'case' Expression resolves to true
 * will be used.
 * If no 'case' expression resolves to true the default value will be returned.
 */
export interface Fcase extends FunctionCall<PropertyType> {
  name: 'case';
  args: [
    ...FCaseParameter[],
    Expression<PropertyType>
  ];
};

/**
 * Returns the smallest (closest to negative infinity) number value that is greater than or equal to
 * x and is equal to a mathematical integer.
 */
export interface Fceil extends FunctionCall<number> {
  name: 'ceil';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the cosine of an angle expressed in radians
 */
export interface Fcos extends FunctionCall<number> {
  name: 'cos';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the division of argument[0] by argument[1]
 */
export interface Fdiv extends FunctionCall<number> {
  name: 'div';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns true if x is zero, false otherwise
 */
export interface Fdouble2bool extends FunctionCall<boolean> {
  name: 'double2bool';
  args: [
    Expression<number>
  ];
};

/**
 * Resolves to true if both arguments are equal
 */
export interface FequalTo extends FunctionCall<boolean> {
  name: 'equalTo';
  args: [
    Expression<PropertyType>,
    Expression<PropertyType>
  ];
};

/**
 * Returns Euler’s number e raised to the power of x
 */
export interface Fexp extends FunctionCall<number> {
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
  name: 'floor';
  args: [
    Expression<number>
  ];
};

/**
 * Resolves to true if argument[0] is greater than argument[1]
 */
export interface FgreaterThan extends FunctionCall<boolean> {
  name: 'greaterThan';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Resolves to true if argument[0] is greater than or equal to argument[1]
 */
export interface FgreaterThanOrEqualTo extends FunctionCall<boolean> {
  name: 'greaterThanOrEqualTo';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns true if arguments[0] is equal to one of the arguments[1], …, arguments[n] values. Use the
 * function name matching the number of arguments specified.
 */
export interface Fin extends FunctionCall<boolean> {
  name: 'in';
  args: Expression<string>[];
};

/**
 * Resolves to true if argument[0] is less than argument[1]
 */
export interface FlessThan extends FunctionCall<boolean> {
  name: 'lessThan';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Resolves to true if argument[0] is less than or equal to argument[1]
 */
export interface FlessThanOrEqualTo extends FunctionCall<boolean> {
  name: 'lessThanOrEqualTo';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Inverts the boolean value of argument[0]
 */
export interface Fnot extends FunctionCall<boolean> {
  name: 'not';
  args: [
    Expression<boolean>
  ];
};

/**
 * Resolves to false if both arguments are equal
 */
export interface FnotEqualTo extends FunctionCall<boolean> {
  name: 'notEqualTo';
  args: [
    Expression<PropertyType>,
    Expression<PropertyType>
  ];
};

/**
 * Returns the natural logarithm (base e) of x
 */
export interface Flog extends FunctionCall<number> {
  name: 'log';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the maximum between argument[0], …, argument[n]
 */
export interface Fmax extends FunctionCall<number> {
  name: 'max';
  args: Expression<number>[];
};

/**
 * Returns the minimum between argument[0], …, argument[n]
 */
export interface Fmin extends FunctionCall<number> {
  name: 'min';
  args: Expression<number>[];
};

/**
 * Returns the remainder after integer division of argument[0] by argument[1]
 */
export interface Fmodulo extends FunctionCall<number> {
  name: 'modulo';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns the product of the arguments
 */
export interface Fmul extends FunctionCall<number> {
  name: 'mul';
  args: Expression<number>[];
};

/**
 * Formats the number (argument[1]) according to the specified format (arguments[0]) using the default locale
 * or the one provided (argument[2]) as an optional argument. The format syntax can be found
 * in the Java DecimalFormat javadocs
 */
export interface FnumberFormat extends FunctionCall<string> {
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
  name: 'parseBoolean';
  args: [
    Expression<string>
  ];
};

/**
 * Returns an approximation of pi, the ratio of the circumference of a circle to its diameter
 */
export interface Fpi extends Omit<FunctionCall<number>, 'args'> {
  name: 'pi';
};

/**
 * Returns the value of base (argument[0]) raised to the power of exponent (arguments[1])
 */
export interface Fpow extends FunctionCall<number> {
  name: 'pow';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns the value of the property argument[0]. Allows property names to be compute
 * or specified by Variable substitution in SLD.
 */
export interface Fproperty extends FunctionCall<unknown> {
  name: 'property';
  args: [
    Expression<string>
  ];
};

/**
 * Returns a Double value with a positive sign, greater than or equal to 0.0 and less than 1.0.
 */
export interface Frandom extends Omit<FunctionCall<number>, 'args'> {
  name: 'random';
};

/**
 * Returns the Double value that is closest in value to the argument and is equal to a mathematical
 * integer. If two double values that are mathematical integers are equally close, the result is the
 * integer value that is even.
 */
export interface Frint extends FunctionCall<number> {
  name: 'rint';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the closest number to argument[0].
 */
export interface Fround extends FunctionCall<number> {
  name: 'round';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the sine of an angle expressed in radians
 */
export interface Fsin extends FunctionCall<number> {
  name: 'sin';
  args: [
    Expression<number>
  ];
};

/**
 * Returns the square root of argument[0]
 */
export interface Fsqrt extends FunctionCall<number> {
  name: 'sqrt';
  args: [
    Expression<number>
  ];
};

type FStepParameter = {
  boundary: Expression<number>;
  value: Expression<PropertyType>;
};

/**
 * Returns an unknown value depending on the passed in value of argument[0]. In
 * most cases this will be an {@link Fproperty}.
 * The argument[1] is the initial value.
 * All following arguments are an array of length 2 where the first element is
 * a numeric value and the second element is the value to return if the value is
 * larger than that boundry.
 */
export interface Fstep extends FunctionCall<unknown> {
  name: 'step';
  args: [
    Expression<number>, Expression<PropertyType>,
    ...FStepParameter[]
  ];
};

/**
 * Abbreviates the sentence (argument[0]) at first space beyond lower (argument[1])
 * or at upper (argument[2]) if no space. Appends append (argument[3]) if string is abbreviated.
 */
export interface FstrAbbreviate extends FunctionCall<string> {
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
  name: 'strCapitalize';
  args: [
    Expression<string>
  ];
};

/**
 * Concatenates the two strings into one
 */
export interface FstrConcat extends FunctionCall<string> {
  name: 'strConcat';
  args: Expression<string>[];
};

/**
 * Returns default (argument[1]) if str (argument[0]) is empty, blank or null
 */
export interface FstrDefaultIfBlank extends FunctionCall<string> {
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
  name: 'strToLowerCase';
  args: [
    Expression<string>
  ];
};

/**
 * Returns the upper case version of the string
 */
export interface FstrToUpperCase extends FunctionCall<string> {
  name: 'strToUpperCase';
  args: [
    Expression<string>
  ];
};

/**
 * Returns a copy of the string, with leading and trailing blank-space omitted
 */
export interface FstrTrim extends FunctionCall<string> {
  name: 'strTrim';
  args: [
    Expression<string>
  ];
};

/**
 * Returns the result of substracting argument[1] from argument[0]
 */
export interface Fsub extends FunctionCall<number> {
  name: 'sub';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

/**
 * Returns the trigonometric tangent of angle expressed in radians
 */
export interface Ftan extends FunctionCall<number> {
  name: 'tan';
  args: [
    Expression<number>
  ];
};

/**
 * Converts an unknown value to boolean
 */
export interface FtoBoolean extends FunctionCall<boolean> {
  name: 'toBoolean';
  args: [
    Expression<unknown>
  ];
};


/**
 * Converts an angle expressed in radians into degrees
 */
export interface FtoDegrees extends FunctionCall<number> {
  name: 'toDegrees';
  args: [
    Expression<number>
  ];
};

/**
 * Converts an unknown value into a number
 */
export interface FtoNumber extends FunctionCall<number> {
  name: 'toNumber';
  args: [
    Expression<unknown>
  ];
};

/**
 * Converts an angle expressed in radians into degrees
 */
export interface FtoRadians extends FunctionCall<number> {
  name: 'toRadians';
  args: [
    Expression<number>
  ];
};

/**
 * Converts an unknown value into a string
 */
export interface FtoString extends FunctionCall<string> {
  name: 'strToString';
  args: [
    Expression<unknown>
  ];
};
