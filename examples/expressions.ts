import { Style } from '../index';

const sampleExpressionStyle: Style = {
  name: 'Sample style using expressions',
  rules: [
    {
      name: 'The max of Pi ',
      symbolizers: [{
        kind: 'Text',
        lineHeight: {
          name: 'max',
          args: [{
            name: 'strLength',
            args: [{
              name: 'strConcat',
              args: ['pr', {
                name: 'property',
                args: ['Hilde']
              }]
            }]
          }, {
            name: 'pi'
          }]
        }
      }]
    }
  ]
};

export default sampleExpressionStyle;
