/* eslint-disable no-console */
import {
  isCombinationOperator,
  isComparisonOperator,
  isFilter,
  isNegationOpeartor,
  isOperator,
  isStrMatchesFunctionOperator
} from '../typeguards';

/*
 * Hover the variable used in the `console.log`s to check if the typeguard
 * is correct and typescript recognizes the correct type.
 */
const comparisonOperator: any = '<';
const negationOperator: any = '!';
const combinationOpertor: any = '&&';
const strMatchesFunctionOperator: any = 'FN_strMatches';
const filter: any[] = [comparisonOperator, 'a', 12];
if (isFilter(filter)) {
  console.log(`${filter} is a Filter`);
} else {
  console.log(`${filter} is not a Filter`);
}

if (isOperator(comparisonOperator)) {
  console.log(`${comparisonOperator} is an Operator`);
}
if (isOperator(combinationOpertor)) {
  console.log(`${combinationOpertor} is an Operator`);
}
if (isOperator(negationOperator)) {
  console.log(`${negationOperator} is an Operator`);
}
if (isOperator(strMatchesFunctionOperator)) {
  console.log(`${strMatchesFunctionOperator} is an Operator`);
}

if (isComparisonOperator(comparisonOperator)) {
  console.log(`${comparisonOperator} is a ComparisonOperator`);
}
if (isCombinationOperator(combinationOpertor)) {
  console.log(`${combinationOpertor} is a CombinationOperator`);
}
if (isNegationOpeartor(negationOperator)) {
  console.log(`${negationOperator} is a NegationOperator`);
}
if (isStrMatchesFunctionOperator(strMatchesFunctionOperator)) {
  console.log(`${strMatchesFunctionOperator} is a StrMatchesFunctionOperator`);
}
