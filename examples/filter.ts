import { LikeAttributes, Style } from '../index';

const pointSimplePoint: Style = {
  name: 'Simple Point Filter',
  rules: [{
    filter: ['&&',
      ['==', 'NAME', 'New York'],
      ['==', 'TEST_BOOL', 'true'],
      ['==', 'TEST', null],
      ['*=', 'TEST2', '*York*'],
      ['*=', 'TEST1', '*New*'],
      ['*=', 'TEST1', '%New%', { wildCard: '%', singleChar: '_', escape: '\\' } as LikeAttributes],
      ['!', ['>', 'POPULATION', '100000']],
      ['||',
        ['==', 'TEST2', '1'],
        ['==', 'TEST2', '2']
      ],
      ['<=x<=', 'TEST3', 1, 5]
    ],
    name: 'Small populated New Yorks',
    scaleDenominator: {
      max: 20000,
      min: 10000
    },
    symbolizers: [{
      kind: 'Mark',
      wellKnownName: 'circle',
      color: '#FF0000',
      radius: 3,
      strokeColor: '#000000',
      strokeWidth: 2
    }]
  }]
};

export default pointSimplePoint;
