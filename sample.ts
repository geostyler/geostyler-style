import { Style } from 'index';

const testStyle: Style = {
  type: 'Point',
  rules: [
    {
      filter: ['&&',
        ['name', 'Peter'],
        ['age', 12]
      ],
      scaleDenominator: {
        min: 1000,
        max: 500
      },
      symbolizer: {
        visibility: false,
        antialias: true,
        spacing: 21
      }
    }
  ]
};
