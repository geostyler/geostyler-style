import { Style } from '../index';

const sampleExpressionStyle: Style = {
  name: 'Sample style using expressions',
  rules: [
    {
      name: 'Very old Peter',
      symbolizers: [{
        kind: 'Line',
        width: {
          type: 'functioncall',
          name: 'peter',
          args: [{
            type: 'literal',
            value: 7
          }, {
            type: 'property',
            name: 'myProp'
          }, {
            type: 'functioncall',
            name: 'hans',
            args: [{
              type: 'literal',
              value: 12
            }]
          }]
        }
      }]
    }
  ]
};

export default sampleExpressionStyle;
