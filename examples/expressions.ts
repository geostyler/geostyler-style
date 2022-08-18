import { Style } from '../index';

const sampleExpressionStyle: Style = {
  name: 'Sample style using expressions',
  rules: [
    {
      name: 'Very old Peter',
      symbolizers: [{
        kind: 'Text',
        lineHeight: {
          type: 'numberfunction',
          name: 'strLength',
          args: [
            {
              type: 'stringfunction',
              name: 'strConcat',
              args: ['pre', 'name']
            }
          ]
        }
      }]
    }
  ]
};

export default sampleExpressionStyle;
