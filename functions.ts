/* eslint-disable @typescript-eslint/naming-convention */
import {
  FunctionCall,
  LiteralValue
} from './style';

export interface Fabs extends FunctionCall<number> {
  name: 'abs';
  args: [
    LiteralValue<number>
  ];
};

export interface Fabs_2 extends FunctionCall<number> {
  name: 'abs_2';
  args: [
    LiteralValue<number>
  ];
};

export interface Fabs_3 extends FunctionCall<number> {
  name: 'abs_3';
  args: [
    LiteralValue<number>
  ];
};

export interface Fabs_4 extends FunctionCall<number> {
  name: 'abs_4';
  args: [
    LiteralValue<number>
  ];
};

export interface Facos extends FunctionCall<number> {
  name: 'acos';
  args: [
    LiteralValue<number>
  ];
};

export interface Farray extends FunctionCall<string> {
  name: 'array';
};

export interface Fasin extends FunctionCall<number> {
  name: 'asin';
  args: [
    LiteralValue<number>
  ];
};

export interface Fatan extends FunctionCall<number> {
  name: 'atan';
  args: [
    LiteralValue<number>
  ];
};

export interface Fatan2 extends FunctionCall<number> {
  name: 'atan2';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface FattributeCount extends FunctionCall<string> {
  name: 'attributeCount';
  args: [
    LiteralValue<string>
  ];
};

export interface Fbetween extends FunctionCall<boolean> {
  name: 'between';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FboundedBy extends FunctionCall<string> {
  name: 'boundedBy';
};

export interface Fceil extends FunctionCall<number> {
  name: 'ceil';
  args: [
    LiteralValue<number>
  ];
};

export interface Fclassify extends FunctionCall<string> {
  name: 'classify';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fcontains extends FunctionCall<boolean> {
  name: 'contains';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fcontrast extends FunctionCall<string> {
  name: 'contrast';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface Fconvert extends FunctionCall<string> {
  name: 'convert';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fcos extends FunctionCall<number> {
  name: 'cos';
  args: [
    LiteralValue<number>
  ];
};

export interface Fcrosses extends FunctionCall<boolean> {
  name: 'crosses';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fdarken extends FunctionCall<string> {
  name: 'darken';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Fdesaturate extends FunctionCall<string> {
  name: 'desaturate';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Fdifference extends FunctionCall<string> {
  name: 'difference';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fdisjoint extends FunctionCall<boolean> {
  name: 'disjoint';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fdisjoint3D extends FunctionCall<number> {
  name: 'disjoint3D';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fdistance extends FunctionCall<number> {
  name: 'distance';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fdistance3D extends FunctionCall<number> {
  name: 'distance3D';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fdouble2bool extends FunctionCall<boolean> {
  name: 'double2bool';
  args: [
    LiteralValue<number>
  ];
};

export interface FendAngle extends FunctionCall<number> {
  name: 'endAngle';
  args: [
    LiteralValue<string>
  ];
};

export interface FendPoint extends FunctionCall<string> {
  name: 'endPoint';
  args: [
    LiteralValue<string>
  ];
};

export interface Fenv extends FunctionCall<string> {
  name: 'env';
  args: [
    LiteralValue<string>
  ];
};

export interface FequalsExact extends FunctionCall<boolean> {
  name: 'equalsExact';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FequalsExactTolerance extends FunctionCall<boolean> {
  name: 'equalsExactTolerance';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface FequalTo extends FunctionCall<boolean> {
  name: 'equalTo';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fexp extends FunctionCall<number> {
  name: 'exp';
  args: [
    LiteralValue<number>
  ];
};

export interface Ffloor extends FunctionCall<number> {
  name: 'floor';
  args: [
    LiteralValue<number>
  ];
};

export interface Fgrayscale extends FunctionCall<string> {
  name: 'grayscale';
  args: [
    LiteralValue<string>
  ];
};

export interface FgreaterEqualThan extends FunctionCall<boolean> {
  name: 'greaterEqualThan';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FgreaterThan extends FunctionCall<boolean> {
  name: 'greaterThan';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fhsl extends FunctionCall<string> {
  name: 'hsl';
  args: [
    LiteralValue<number>,
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fid extends FunctionCall<string> {
  name: 'id';
};

export interface Fif_then_else extends FunctionCall<string> {
  name: 'if_then_else';
  args: [
    LiteralValue<boolean>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin extends FunctionCall<boolean> {
  name: 'in';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin10 extends FunctionCall<boolean> {
  name: 'in10';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin2 extends FunctionCall<boolean> {
  name: 'in2';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin3 extends FunctionCall<boolean> {
  name: 'in3';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin4 extends FunctionCall<boolean> {
  name: 'in4';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin5 extends FunctionCall<boolean> {
  name: 'in5';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin6 extends FunctionCall<boolean> {
  name: 'in6';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin7 extends FunctionCall<boolean> {
  name: 'in7';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin8 extends FunctionCall<boolean> {
  name: 'in8';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fin9 extends FunctionCall<boolean> {
  name: 'in9';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FinArray extends FunctionCall<boolean> {
  name: 'inArray';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fint2bbool extends FunctionCall<boolean> {
  name: 'int2bbool';
  args: [
    LiteralValue<number>
  ];
};

export interface Fint2ddouble extends FunctionCall<number> {
  name: 'int2ddouble';
  args: [
    LiteralValue<number>
  ];
};

export interface Fintersection extends FunctionCall<string> {
  name: 'intersection';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fintersects extends FunctionCall<boolean> {
  name: 'intersects';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fintersects3D extends FunctionCall<number> {
  name: 'intersects3D';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FisCached extends FunctionCall<boolean> {
  name: 'isCached';
  args: [
    LiteralValue<string>
  ];
};

export interface FisCoverage extends FunctionCall<boolean> {
  name: 'isCoverage';
};

export interface FisInstanceOf extends FunctionCall<boolean> {
  name: 'isInstanceOf';
  args: [
    LiteralValue<string>
  ];
};

export interface FisLike extends FunctionCall<boolean> {
  name: 'isLike';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FisNull extends FunctionCall<boolean> {
  name: 'isNull';
  args: [
    LiteralValue<string>
  ];
};

export interface FisWithinDistance extends FunctionCall<boolean> {
  name: 'isWithinDistance';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface FisWithinDistance3D extends FunctionCall<number> {
  name: 'isWithinDistance3D';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface FjsonPointer extends FunctionCall<string> {
  name: 'jsonPointer';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Flapply extends FunctionCall<string> {
  name: 'lapply';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Flength extends FunctionCall<number> {
  name: 'length';
  args: [
    LiteralValue<string>
  ];
};

export interface FlessEqualThan extends FunctionCall<boolean> {
  name: 'lessEqualThan';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface FlessThan extends FunctionCall<boolean> {
  name: 'lessThan';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Flighten extends FunctionCall<string> {
  name: 'lighten';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Flist extends FunctionCall<string> {
  name: 'list';
  args: [
    LiteralValue<string>
  ];
};

export interface FlistMultiply extends FunctionCall<string> {
  name: 'listMultiply';
  args: [
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Flitem extends FunctionCall<string> {
  name: 'litem';
  args: [
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface Fliterate extends FunctionCall<string> {
  name: 'literate';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Flog extends FunctionCall<number> {
  name: 'log';
  args: [
    LiteralValue<number>
  ];
};

export interface FmapGet extends FunctionCall<string> {
  name: 'mapGet';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fmax extends FunctionCall<number> {
  name: 'max';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmax_2 extends FunctionCall<number> {
  name: 'max_2';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmax_3 extends FunctionCall<number> {
  name: 'max_3';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmax_4 extends FunctionCall<number> {
  name: 'max_4';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmin extends FunctionCall<number> {
  name: 'min';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmin_2 extends FunctionCall<number> {
  name: 'min_2';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmin_3 extends FunctionCall<number> {
  name: 'min_3';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmin_4 extends FunctionCall<number> {
  name: 'min_4';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fmix extends FunctionCall<string> {
  name: 'mix';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface Fmodulo extends FunctionCall<number> {
  name: 'modulo';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fnot extends FunctionCall<boolean> {
  name: 'not';
  args: [
    LiteralValue<boolean>
  ];
};

export interface FnotEqualTo extends FunctionCall<boolean> {
  name: 'notEqualTo';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FnumberFormat extends FunctionCall<string> {
  name: 'numberFormat';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface FnumberFormat2 extends FunctionCall<string> {
  name: 'numberFormat2';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Foverlaps extends FunctionCall<string> {
  name: 'overlaps';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface Fparameter extends FunctionCall<string> {
  name: 'parameter';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FparseBoolean extends FunctionCall<boolean> {
  name: 'parseBoolean';
  args: [
    LiteralValue<string>
  ];
};

export interface FparseDouble extends FunctionCall<number> {
  name: 'parseDouble';
  args: [
    LiteralValue<string>
  ];
};

export interface FparseInt extends FunctionCall<number> {
  name: 'parseInt';
  args: [
    LiteralValue<string>
  ];
};

export interface FparseLong extends FunctionCall<number> {
  name: 'parseLong';
  args: [
    LiteralValue<string>
  ];
};

export interface Fpi extends FunctionCall<number> {
  name: 'pi';
};

export interface Fpow extends FunctionCall<number> {
  name: 'pow';
  args: [
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface Fproperty extends FunctionCall<string> {
  name: 'property';
  args: [
    LiteralValue<string>
  ];
};

export interface Frandom extends FunctionCall<number> {
  name: 'random';
};

export interface Frelate extends FunctionCall<string> {
  name: 'relate';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FrescaleToPixels extends FunctionCall<string> {
  name: 'rescaleToPixels';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Frint extends FunctionCall<number> {
  name: 'rint';
  args: [
    LiteralValue<number>
  ];
};

export interface Fround extends FunctionCall<number> {
  name: 'round';
  args: [
    LiteralValue<number>
  ];
};

export interface Fround_2 extends FunctionCall<number> {
  name: 'round_2';
  args: [
    LiteralValue<number>
  ];
};

export interface FroundDouble extends FunctionCall<number> {
  name: 'roundDouble';
  args: [
    LiteralValue<number>
  ];
};

export interface Fsaturate extends FunctionCall<string> {
  name: 'saturate';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface Fshade extends FunctionCall<string> {
  name: 'shade';
  args: [
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface Fsin extends FunctionCall<number> {
  name: 'sin';
  args: [
    LiteralValue<number>
  ];
};

export interface Fsize extends FunctionCall<number> {
  name: 'size';
  args: [
    LiteralValue<string>
  ];
};

export interface Fspin extends FunctionCall<string> {
  name: 'spin';
  args: [
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface Fsqrt extends FunctionCall<number> {
  name: 'sqrt';
  args: [
    LiteralValue<number>
  ];
};

export interface FstartAngle extends FunctionCall<number> {
  name: 'startAngle';
  args: [
    LiteralValue<string>
  ];
};

export interface FstartPoint extends FunctionCall<string> {
  name: 'startPoint';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrAbbreviate extends FunctionCall<string> {
  name: 'strAbbreviate';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<number>,
    LiteralValue<string>
  ];
};

export interface FstrCapitalize extends FunctionCall<string> {
  name: 'strCapitalize';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrConcat extends FunctionCall<string> {
  name: 'strConcat';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrDefaultIfBlank extends FunctionCall<string> {
  name: 'strDefaultIfBlank';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrEndsWith extends FunctionCall<boolean> {
  name: 'strEndsWith';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrEqualsIgnoreCase extends FunctionCall<boolean> {
  name: 'strEqualsIgnoreCase';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrIndexOf extends FunctionCall<number> {
  name: 'strIndexOf';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstringTemplate extends FunctionCall<string> {
  name: 'stringTemplate';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrLastIndexOf extends FunctionCall<number> {
  name: 'strLastIndexOf';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrLength extends FunctionCall<number> {
  name: 'strLength';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrMatches extends FunctionCall<boolean> {
  name: 'strMatches';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrPosition extends FunctionCall<string> {
  name: 'strPosition';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrReplace extends FunctionCall<string> {
  name: 'strReplace';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<boolean>
  ];
};

export interface FstrStartsWith extends FunctionCall<boolean> {
  name: 'strStartsWith';
  args: [
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrStripAccents extends FunctionCall<string> {
  name: 'strStripAccents';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrSubstring extends FunctionCall<string> {
  name: 'strSubstring';
  args: [
    LiteralValue<string>,
    LiteralValue<number>,
    LiteralValue<number>
  ];
};

export interface FstrSubstringStart extends FunctionCall<string> {
  name: 'strSubstringStart';
  args: [
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface FstrToLowerCase extends FunctionCall<string> {
  name: 'strToLowerCase';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrToUpperCase extends FunctionCall<string> {
  name: 'strToUpperCase';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrTrim extends FunctionCall<string> {
  name: 'strTrim';
  args: [
    LiteralValue<string>
  ];
};

export interface FstrTrim2 extends FunctionCall<string> {
  name: 'strTrim2';
  args: [
    LiteralValue<string>,
    LiteralValue<string>,
    LiteralValue<string>
  ];
};

export interface FstrURLEncode extends FunctionCall<string> {
  name: 'strURLEncode';
  args: [
    LiteralValue<string>,
    LiteralValue<boolean>
  ];
};

export interface Ftan extends FunctionCall<number> {
  name: 'tan';
  args: [
    LiteralValue<number>
  ];
};

export interface Ftint extends FunctionCall<string> {
  name: 'tint';
  args: [
    LiteralValue<string>,
    LiteralValue<number>
  ];
};

export interface FtoDegrees extends FunctionCall<number> {
  name: 'toDegrees';
  args: [
    LiteralValue<number>
  ];
};

export interface FtoRadians extends FunctionCall<number> {
  name: 'toRadians';
  args: [
    LiteralValue<number>
  ];
};

export type GeoStylerFunction = Fabs |
Fabs_2 |
Fabs_3 |
Fabs_4 |
Facos |
Farray |
Fasin |
Fatan |
Fatan2 |
FattributeCount |
Fbetween |
FboundedBy |
Fceil |
Fclassify |
Fcontains |
Fcontrast |
Fconvert |
Fcos |
Fcrosses |
Fdarken |
Fdesaturate |
Fdifference |
Fdisjoint |
Fdisjoint3D |
Fdistance |
Fdistance3D |
Fdouble2bool |
FendAngle |
FendPoint |
Fenv |
FequalsExact |
FequalsExactTolerance |
FequalTo |
Fexp |
Ffloor |
Fgrayscale |
FgreaterEqualThan |
FgreaterThan |
Fhsl |
Fid |
Fif_then_else |
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
Fint2ddouble |
Fintersection |
Fintersects |
Fintersects3D |
FisCached |
FisCoverage |
FisInstanceOf |
FisLike |
FisNull |
FisWithinDistance |
FisWithinDistance3D |
FjsonPointer |
Flapply |
Flength |
FlessEqualThan |
FlessThan |
Flighten |
Flist |
FlistMultiply |
Flitem |
Fliterate |
Flog |
FmapGet |
Fmax |
Fmax_2 |
Fmax_3 |
Fmax_4 |
Fmin |
Fmin_2 |
Fmin_3 |
Fmin_4 |
Fmix |
Fmodulo |
Fnot |
FnotEqualTo |
FnumberFormat |
FnumberFormat2 |
Foverlaps |
Fparameter |
FparseBoolean |
FparseDouble |
FparseInt |
FparseLong |
Fpi |
Fpow |
Fproperty |
Frandom |
Frelate |
FrescaleToPixels |
Frint |
Fround |
Fround_2 |
FroundDouble |
Fsaturate |
Fshade |
Fsin |
Fsize |
Fspin |
Fsqrt |
FstartAngle |
FstartPoint |
FstrAbbreviate |
FstrCapitalize |
FstrConcat |
FstrDefaultIfBlank |
FstrEndsWith |
FstrEqualsIgnoreCase |
FstrIndexOf |
FstringTemplate |
FstrLastIndexOf |
FstrLength |
FstrMatches |
FstrPosition |
FstrReplace |
FstrStartsWith |
FstrStripAccents |
FstrSubstring |
FstrSubstringStart |
FstrToLowerCase |
FstrToUpperCase |
FstrTrim |
FstrTrim2 |
FstrURLEncode |
Ftan |
Ftint |
FtoDegrees |
FtoRadians;
