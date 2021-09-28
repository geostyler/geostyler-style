import { Style } from '../index';

const sampleStyle: Style = {
  name: 'Sample Point Style',
  rules: [
    {
      name: 'Young Peter',
      filter: ['&&',
        ['==', 'name', 'Peter'],
        ['<=', 'age', 12],
        ['<=x<=', 'height', 1, 2]
      ],
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizers: [{
        kind: 'Icon',
        visibility: false,
        allowOverlap: true,
        optional: false,
        rotationAlignment: 'map',
        image: 'http://myserver/getImage',
        format: 'image/png'
      }, {
        kind: 'Line',
        blur: 3,
        cap: 'square',
        join: 'round',
        perpendicularOffset: 10,
        width: 9,
        spacing: 21,
        graphicStroke: {
          kind: 'Mark',
          wellKnownName: 'square'
        }
      }]
    },
    {
      name: 'Twelve year old Peter',
      filter: ['&&',
        ['==', ['FN_strMatches', 'name', /Peter/], true],
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
        optional: false,
        rotationAlignment: 'map',
        haloColor: '#ff00aa',
        haloWidth: 4,
        fontStyle: 'italic',
        fontWeight: 'bold'
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
        wellKnownName: 'circle',
        visibility: false,
        radius: 5
      }, {
        kind: 'Mark',
        wellKnownName: 'ttf://Webdings#0x68',
        radius: 12,
        color: '#8a000e',
        strokeOpacity: 0.7,
        strokeColor: '#ffffff'
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
          kind: 'Icon',
          image: '/myimage.png'
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
          type: 'ramp'
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
