import { Style } from 'index';

const sampleStyle: Style = {
  name: 'Sample Point Style',
  type: 'Point',
  rules: [
    {
      name: 'Young Peter',
      filter: ['&&',
        ['==', 'name', 'Peter'],
        ['<=', 'age', 12]
      ],
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizer: {
        kind: 'Icon',
        visibility: false,
        allowOverlap: true,
        ignorePlacement: false,
        optional: false,
        rotationAlignment: 'map',
        spacing: 21
      }
    },
    {
      name: 'Twelve year old Peter',
      filter: ['&&',
        ['==', 'name', 'Peter'],
        ['==', 'age', 12]
      ],
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizer: {
        kind: 'Text',
        visibility: false,
        allowOverlap: true,
        letterSpacing: 12,
        ignorePlacement: false,
        optional: false,
        rotationAlignment: 'map',
        spacing: 21,
        haloColor: '#ff00aa',
        haloWidth: 4
      }
    },
    {
      name: 'Old Peter',
      filter: ['&&',
        ['==', 'name', 'Peter'],
        ['>=', 'age', 12]
      ],
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizer: {
        kind: 'Circle',
        visibility: false,
        radius: 5,
        spacing: 21
      }
    }
  ]
};

export default sampleStyle;
