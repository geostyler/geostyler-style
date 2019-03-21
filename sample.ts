import { Style } from 'index';

const sampleStyle: Style = {
  name: 'Sample Point Style',
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
      symbolizers: [{
        kind: 'Icon',
        visibility: false,
        allowOverlap: true,
        ignorePlacement: false,
        optional: false,
        rotationAlignment: 'map',
        spacing: 21
      }, {
        kind: 'Line',
        blur: 3,
        cap: 'square',
        join: 'round',
        perpendicularOffset: 10,
        width: 9,
        graphicStroke: {
          kind: 'Mark',
          wellKnownName: 'Square'
        }
      }]
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
      symbolizers: [{
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
      }]
    },
    {
      name: 'Old Peter',
      filter: ['&&',
        ['==', 'name', 'Peter'],
        ['==', 'age', 50]
      ],
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizers: [{
        kind: 'Mark',
        wellKnownName: 'Circle',
        visibility: false,
        radius: 5,
        spacing: 21
      }]
    },
    {
      name: 'Very old Peter',
      filter: ['&&',
        ['==', 'name', 'Peter'],
        ['>=', 'age', 51]
      ],
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizers: [{
        kind: 'Fill',
        color: '#FF0000',
        graphicFill: {
          kind: 'Icon'
        }
      }, {
        kind: 'Raster',
        opacity: 1,
        colorMap: {
          colorMapEntries: [
            {
              color: '#00FFFF',
              quantity: 100
            }
          ],
          extended: false,
          type: "ramp"
        },
        channelSelection: {
          grayChannel: {
            sourceChannelName: '1'
          }
        }
      }]
    }
  ]
};

export default sampleStyle;
