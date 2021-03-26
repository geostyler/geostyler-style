import { Style } from 'index';

const sampleRasterStyle: Style = {
  name: 'Sample Raster Style',
  rules: [
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
        },
        brightnessMax: 1,
        brightnessMin: 0,
        saturation: 1,
        contrast: 1,
        resampling: 'linear',
        fadeDuration: 200
      }]
    }
  ]
};

export default sampleRasterStyle;
