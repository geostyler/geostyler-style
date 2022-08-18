/* eslint-disable @typescript-eslint/naming-convention */
import {
  FunctionCall,
  Expression
} from './style';

export type GeoStylerNumberFunction = Fabs |
Fabs_2 |
Fabs_3 |
Fabs_4 |
Facos |
Fasin |
Fatan |
Fatan2 |
Fceil |
Fcos |
Fdisjoint3D |
Fdistance |
Fdistance3D |
FendAngle |
Fexp |
Ffloor |
Fint2ddouble |
Fintersects3D |
FisWithinDistance3D |
Flength |
Flog |
Fmax |
Fmax_2 |
Fmax_3 |
Fmax_4 |
Fmin |
Fmin_2 |
Fmin_3 |
Fmin_4 |
Fmodulo |
FparseDouble |
FparseInt |
FparseLong |
Fpi |
Fpow |
Frandom |
Frint |
Fround |
Fround_2 |
FroundDouble |
Fsin |
Fsize |
Fsqrt |
FstartAngle |
FstrIndexOf |
FstrLastIndexOf |
FstrLength |
Ftan |
FtoDegrees |
FtoRadians;

export type GeoStylerStringFunction = Farray |
FattributeCount |
FboundedBy |
Fclassify |
Fcontrast |
Fconvert |
Fdarken |
Fdesaturate |
Fdifference |
FendPoint |
Fenv |
Fgrayscale |
Fhsl |
Fid |
Fif_then_else |
Fintersection |
FjsonPointer |
Flapply |
Flighten |
Flist |
FlistMultiply |
Flitem |
Fliterate |
FmapGet |
Fmix |
FnumberFormat |
FnumberFormat2 |
Foverlaps |
Fparameter |
Fproperty |
Frelate |
FrescaleToPixels |
Fsaturate |
Fshade |
Fspin |
FstartPoint |
FstrAbbreviate |
FstrCapitalize |
FstrConcat |
FstrDefaultIfBlank |
FstringTemplate |
FstrPosition |
FstrReplace |
FstrStripAccents |
FstrSubstring |
FstrSubstringStart |
FstrToLowerCase |
FstrToUpperCase |
FstrTrim |
FstrTrim2 |
FstrURLEncode |
Ftint;

export type GeoStylerBooleanFunction = Fbetween |
Fcontains |
Fcrosses |
Fdisjoint |
Fdouble2bool |
FequalsExact |
FequalsExactTolerance |
FequalTo |
FgreaterEqualThan |
FgreaterThan |
Fin |
Fin10 |
Fin2 |
Fin3 |
Fin4 |
Fin5 |
Fin6 |
Fin7 |
Fin8 |
Fin9 |
FinArray |
Fint2bbool |
Fintersects |
FisCached |
FisCoverage |
FisInstanceOf |
FisLike |
FisNull |
FisWithinDistance |
FlessEqualThan |
FlessThan |
Fnot |
FnotEqualTo |
FparseBoolean |
FstrEndsWith |
FstrEqualsIgnoreCase |
FstrMatches |
FstrStartsWith;

export interface Fabs extends FunctionCall {
  type: 'numberfunction';
  name: 'abs';
  args: [
    Expression<number>
  ];
};

export interface Fabs_2 extends FunctionCall {
  type: 'numberfunction';
  name: 'abs_2';
  args: [
    Expression<number>
  ];
};

export interface Fabs_3 extends FunctionCall {
  type: 'numberfunction';
  name: 'abs_3';
  args: [
    Expression<number>
  ];
};

export interface Fabs_4 extends FunctionCall {
  type: 'numberfunction';
  name: 'abs_4';
  args: [
    Expression<number>
  ];
};

export interface Facos extends FunctionCall {
  type: 'numberfunction';
  name: 'acos';
  args: [
    Expression<number>
  ];
};

export interface Farray extends FunctionCall {
  type: 'stringfunction';
  name: 'array';
};

export interface Fasin extends FunctionCall {
  type: 'numberfunction';
  name: 'asin';
  args: [
    Expression<number>
  ];
};

export interface Fatan extends FunctionCall {
  type: 'numberfunction';
  name: 'atan';
  args: [
    Expression<number>
  ];
};

export interface Fatan2 extends FunctionCall {
  type: 'numberfunction';
  name: 'atan2';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface FattributeCount extends FunctionCall {
  type: 'stringfunction';
  name: 'attributeCount';
  args: [
    Expression<string>
  ];
};

export interface Fbetween extends FunctionCall {
  type: 'booleanfunction';
  name: 'between';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface FboundedBy extends FunctionCall {
  type: 'stringfunction';
  name: 'boundedBy';
};

export interface Fceil extends FunctionCall {
  type: 'numberfunction';
  name: 'ceil';
  args: [
    Expression<number>
  ];
};

export interface Fclassify extends FunctionCall {
  type: 'stringfunction';
  name: 'classify';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fcontains extends FunctionCall {
  type: 'booleanfunction';
  name: 'contains';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fcontrast extends FunctionCall {
  type: 'stringfunction';
  name: 'contrast';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<number>
  ];
};

export interface Fconvert extends FunctionCall {
  type: 'stringfunction';
  name: 'convert';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fcos extends FunctionCall {
  type: 'numberfunction';
  name: 'cos';
  args: [
    Expression<number>
  ];
};

export interface Fcrosses extends FunctionCall {
  type: 'booleanfunction';
  name: 'crosses';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fdarken extends FunctionCall {
  type: 'stringfunction';
  name: 'darken';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface Fdesaturate extends FunctionCall {
  type: 'stringfunction';
  name: 'desaturate';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface Fdifference extends FunctionCall {
  type: 'stringfunction';
  name: 'difference';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fdisjoint extends FunctionCall {
  type: 'booleanfunction';
  name: 'disjoint';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fdisjoint3D extends FunctionCall {
  type: 'numberfunction';
  name: 'disjoint3D';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fdistance extends FunctionCall {
  type: 'numberfunction';
  name: 'distance';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fdistance3D extends FunctionCall {
  type: 'numberfunction';
  name: 'distance3D';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fdouble2bool extends FunctionCall {
  type: 'booleanfunction';
  name: 'double2bool';
  args: [
    Expression<number>
  ];
};

export interface FendAngle extends FunctionCall {
  type: 'numberfunction';
  name: 'endAngle';
  args: [
    Expression<string>
  ];
};

export interface FendPoint extends FunctionCall {
  type: 'stringfunction';
  name: 'endPoint';
  args: [
    Expression<string>
  ];
};

export interface Fenv extends FunctionCall {
  type: 'stringfunction';
  name: 'env';
  args: [
    Expression<string>
  ];
};

export interface FequalsExact extends FunctionCall {
  type: 'booleanfunction';
  name: 'equalsExact';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FequalsExactTolerance extends FunctionCall {
  type: 'booleanfunction';
  name: 'equalsExactTolerance';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<number>
  ];
};

export interface FequalTo extends FunctionCall {
  type: 'booleanfunction';
  name: 'equalTo';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fexp extends FunctionCall {
  type: 'numberfunction';
  name: 'exp';
  args: [
    Expression<number>
  ];
};

export interface Ffloor extends FunctionCall {
  type: 'numberfunction';
  name: 'floor';
  args: [
    Expression<number>
  ];
};

export interface Fgrayscale extends FunctionCall {
  type: 'stringfunction';
  name: 'grayscale';
  args: [
    Expression<string>
  ];
};

export interface FgreaterEqualThan extends FunctionCall {
  type: 'booleanfunction';
  name: 'greaterEqualThan';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FgreaterThan extends FunctionCall {
  type: 'booleanfunction';
  name: 'greaterThan';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fhsl extends FunctionCall {
  type: 'stringfunction';
  name: 'hsl';
  args: [
    Expression<number>,
    Expression<number>,
    Expression<number>
  ];
};

export interface Fid extends FunctionCall {
  type: 'stringfunction';
  name: 'id';
};

export interface Fif_then_else extends FunctionCall {
  type: 'stringfunction';
  name: 'if_then_else';
  args: [
    Expression<boolean>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin extends FunctionCall {
  type: 'booleanfunction';
  name: 'in';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin10 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in10';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin2 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in2';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin3 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in3';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin4 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in4';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin5 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in5';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin6 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in6';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin7 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in7';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin8 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in8';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Fin9 extends FunctionCall {
  type: 'booleanfunction';
  name: 'in9';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface FinArray extends FunctionCall {
  type: 'booleanfunction';
  name: 'inArray';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fint2bbool extends FunctionCall {
  type: 'booleanfunction';
  name: 'int2bbool';
  args: [
    Expression<number>
  ];
};

export interface Fint2ddouble extends FunctionCall {
  type: 'numberfunction';
  name: 'int2ddouble';
  args: [
    Expression<number>
  ];
};

export interface Fintersection extends FunctionCall {
  type: 'stringfunction';
  name: 'intersection';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fintersects extends FunctionCall {
  type: 'booleanfunction';
  name: 'intersects';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fintersects3D extends FunctionCall {
  type: 'numberfunction';
  name: 'intersects3D';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FisCached extends FunctionCall {
  type: 'booleanfunction';
  name: 'isCached';
  args: [
    Expression<string>
  ];
};

export interface FisCoverage extends FunctionCall {
  type: 'booleanfunction';
  name: 'isCoverage';
};

export interface FisInstanceOf extends FunctionCall {
  type: 'booleanfunction';
  name: 'isInstanceOf';
  args: [
    Expression<string>
  ];
};

export interface FisLike extends FunctionCall {
  type: 'booleanfunction';
  name: 'isLike';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FisNull extends FunctionCall {
  type: 'booleanfunction';
  name: 'isNull';
  args: [
    Expression<string>
  ];
};

export interface FisWithinDistance extends FunctionCall {
  type: 'booleanfunction';
  name: 'isWithinDistance';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<number>
  ];
};

export interface FisWithinDistance3D extends FunctionCall {
  type: 'numberfunction';
  name: 'isWithinDistance3D';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<number>
  ];
};

export interface FjsonPointer extends FunctionCall {
  type: 'stringfunction';
  name: 'jsonPointer';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Flapply extends FunctionCall {
  type: 'stringfunction';
  name: 'lapply';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Flength extends FunctionCall {
  type: 'numberfunction';
  name: 'length';
  args: [
    Expression<string>
  ];
};

export interface FlessEqualThan extends FunctionCall {
  type: 'booleanfunction';
  name: 'lessEqualThan';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface FlessThan extends FunctionCall {
  type: 'booleanfunction';
  name: 'lessThan';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Flighten extends FunctionCall {
  type: 'stringfunction';
  name: 'lighten';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface Flist extends FunctionCall {
  type: 'stringfunction';
  name: 'list';
  args: [
    Expression<string>
  ];
};

export interface FlistMultiply extends FunctionCall {
  type: 'stringfunction';
  name: 'listMultiply';
  args: [
    Expression<number>,
    Expression<string>
  ];
};

export interface Flitem extends FunctionCall {
  type: 'stringfunction';
  name: 'litem';
  args: [
    Expression<string>,
    Expression<number>
  ];
};

export interface Fliterate extends FunctionCall {
  type: 'stringfunction';
  name: 'literate';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface Flog extends FunctionCall {
  type: 'numberfunction';
  name: 'log';
  args: [
    Expression<number>
  ];
};

export interface FmapGet extends FunctionCall {
  type: 'stringfunction';
  name: 'mapGet';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fmax extends FunctionCall {
  type: 'numberfunction';
  name: 'max';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmax_2 extends FunctionCall {
  type: 'numberfunction';
  name: 'max_2';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmax_3 extends FunctionCall {
  type: 'numberfunction';
  name: 'max_3';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmax_4 extends FunctionCall {
  type: 'numberfunction';
  name: 'max_4';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmin extends FunctionCall {
  type: 'numberfunction';
  name: 'min';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmin_2 extends FunctionCall {
  type: 'numberfunction';
  name: 'min_2';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmin_3 extends FunctionCall {
  type: 'numberfunction';
  name: 'min_3';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmin_4 extends FunctionCall {
  type: 'numberfunction';
  name: 'min_4';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fmix extends FunctionCall {
  type: 'stringfunction';
  name: 'mix';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<number>
  ];
};

export interface Fmodulo extends FunctionCall {
  type: 'numberfunction';
  name: 'modulo';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fnot extends FunctionCall {
  type: 'booleanfunction';
  name: 'not';
  args: [
    Expression<boolean>
  ];
};

export interface FnotEqualTo extends FunctionCall {
  type: 'booleanfunction';
  name: 'notEqualTo';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FnumberFormat extends FunctionCall {
  type: 'stringfunction';
  name: 'numberFormat';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface FnumberFormat2 extends FunctionCall {
  type: 'stringfunction';
  name: 'numberFormat2';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface Foverlaps extends FunctionCall {
  type: 'stringfunction';
  name: 'overlaps';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface Fparameter extends FunctionCall {
  type: 'stringfunction';
  name: 'parameter';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FparseBoolean extends FunctionCall {
  type: 'booleanfunction';
  name: 'parseBoolean';
  args: [
    Expression<string>
  ];
};

export interface FparseDouble extends FunctionCall {
  type: 'numberfunction';
  name: 'parseDouble';
  args: [
    Expression<string>
  ];
};

export interface FparseInt extends FunctionCall {
  type: 'numberfunction';
  name: 'parseInt';
  args: [
    Expression<string>
  ];
};

export interface FparseLong extends FunctionCall {
  type: 'numberfunction';
  name: 'parseLong';
  args: [
    Expression<string>
  ];
};

export interface Fpi extends FunctionCall {
  type: 'numberfunction';
  name: 'pi';
};

export interface Fpow extends FunctionCall {
  type: 'numberfunction';
  name: 'pow';
  args: [
    Expression<number>,
    Expression<number>
  ];
};

export interface Fproperty extends FunctionCall {
  type: 'stringfunction';
  name: 'property';
  args: [
    Expression<string>
  ];
};

export interface Frandom extends FunctionCall {
  type: 'numberfunction';
  name: 'random';
};

export interface Frelate extends FunctionCall {
  type: 'stringfunction';
  name: 'relate';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FrescaleToPixels extends FunctionCall {
  type: 'stringfunction';
  name: 'rescaleToPixels';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface Frint extends FunctionCall {
  type: 'numberfunction';
  name: 'rint';
  args: [
    Expression<number>
  ];
};

export interface Fround extends FunctionCall {
  type: 'numberfunction';
  name: 'round';
  args: [
    Expression<number>
  ];
};

export interface Fround_2 extends FunctionCall {
  type: 'numberfunction';
  name: 'round_2';
  args: [
    Expression<number>
  ];
};

export interface FroundDouble extends FunctionCall {
  type: 'numberfunction';
  name: 'roundDouble';
  args: [
    Expression<number>
  ];
};

export interface Fsaturate extends FunctionCall {
  type: 'stringfunction';
  name: 'saturate';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<string>
  ];
};

export interface Fshade extends FunctionCall {
  type: 'stringfunction';
  name: 'shade';
  args: [
    Expression<string>,
    Expression<number>
  ];
};

export interface Fsin extends FunctionCall {
  type: 'numberfunction';
  name: 'sin';
  args: [
    Expression<number>
  ];
};

export interface Fsize extends FunctionCall {
  type: 'numberfunction';
  name: 'size';
  args: [
    Expression<string>
  ];
};

export interface Fspin extends FunctionCall {
  type: 'stringfunction';
  name: 'spin';
  args: [
    Expression<string>,
    Expression<number>
  ];
};

export interface Fsqrt extends FunctionCall {
  type: 'numberfunction';
  name: 'sqrt';
  args: [
    Expression<number>
  ];
};

export interface FstartAngle extends FunctionCall {
  type: 'numberfunction';
  name: 'startAngle';
  args: [
    Expression<string>
  ];
};

export interface FstartPoint extends FunctionCall {
  type: 'stringfunction';
  name: 'startPoint';
  args: [
    Expression<string>
  ];
};

export interface FstrAbbreviate extends FunctionCall {
  type: 'stringfunction';
  name: 'strAbbreviate';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<number>,
    Expression<string>
  ];
};

export interface FstrCapitalize extends FunctionCall {
  type: 'stringfunction';
  name: 'strCapitalize';
  args: [
    Expression<string>
  ];
};

export interface FstrConcat extends FunctionCall {
  type: 'stringfunction';
  name: 'strConcat';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrDefaultIfBlank extends FunctionCall {
  type: 'stringfunction';
  name: 'strDefaultIfBlank';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrEndsWith extends FunctionCall {
  type: 'booleanfunction';
  name: 'strEndsWith';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrEqualsIgnoreCase extends FunctionCall {
  type: 'booleanfunction';
  name: 'strEqualsIgnoreCase';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrIndexOf extends FunctionCall {
  type: 'numberfunction';
  name: 'strIndexOf';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstringTemplate extends FunctionCall {
  type: 'stringfunction';
  name: 'stringTemplate';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrLastIndexOf extends FunctionCall {
  type: 'numberfunction';
  name: 'strLastIndexOf';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrLength extends FunctionCall{
  type: 'numberfunction';
  name: 'strLength';
  args: [
    Expression<string>
  ];
};

export interface FstrMatches extends FunctionCall {
  type: 'booleanfunction';
  name: 'strMatches';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrPosition extends FunctionCall {
  type: 'stringfunction';
  name: 'strPosition';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrReplace extends FunctionCall {
  type: 'stringfunction';
  name: 'strReplace';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>,
    Expression<boolean>
  ];
};

export interface FstrStartsWith extends FunctionCall {
  type: 'booleanfunction';
  name: 'strStartsWith';
  args: [
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrStripAccents extends FunctionCall {
  type: 'stringfunction';
  name: 'strStripAccents';
  args: [
    Expression<string>
  ];
};

export interface FstrSubstring extends FunctionCall {
  type: 'stringfunction';
  name: 'strSubstring';
  args: [
    Expression<string>,
    Expression<number>,
    Expression<number>
  ];
};

export interface FstrSubstringStart extends FunctionCall {
  type: 'stringfunction';
  name: 'strSubstringStart';
  args: [
    Expression<string>,
    Expression<number>
  ];
};

export interface FstrToLowerCase extends FunctionCall {
  type: 'stringfunction';
  name: 'strToLowerCase';
  args: [
    Expression<string>
  ];
};

export interface FstrToUpperCase extends FunctionCall {
  type: 'stringfunction';
  name: 'strToUpperCase';
  args: [
    Expression<string>
  ];
};

export interface FstrTrim extends FunctionCall {
  type: 'stringfunction';
  name: 'strTrim';
  args: [
    Expression<string>
  ];
};

export interface FstrTrim2 extends FunctionCall {
  type: 'stringfunction';
  name: 'strTrim2';
  args: [
    Expression<string>,
    Expression<string>,
    Expression<string>
  ];
};

export interface FstrURLEncode extends FunctionCall {
  type: 'stringfunction';
  name: 'strURLEncode';
  args: [
    Expression<string>,
    Expression<boolean>
  ];
};

export interface Ftan extends FunctionCall {
  type: 'numberfunction';
  name: 'tan';
  args: [
    Expression<number>
  ];
};

export interface Ftint extends FunctionCall {
  type: 'stringfunction';
  name: 'tint';
  args: [
    Expression<string>,
    Expression<number>
  ];
};

export interface FtoDegrees extends FunctionCall {
  type: 'numberfunction';
  name: 'toDegrees';
  args: [
    Expression<number>
  ];
};

export interface FtoRadians extends FunctionCall {
  type: 'numberfunction';
  name: 'toRadians';
  args: [
    Expression<number>
  ];
};
