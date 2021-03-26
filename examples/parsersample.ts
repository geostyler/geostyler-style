import { Style, StyleParser, UnsupportedProperties } from 'index';

export class SampleParser implements StyleParser {

  public static unsupportedProperties: UnsupportedProperties = {
    ScaleDenominator: 'partial',
    Symbolizer: {
      PointSymbolizer: {
        color: 'partial'
      },
      LineSymbolizer: {
        cap: 'none',
        blur: {
          support: 'partial',
          info: 'Blur is only partially supported'
        }
      }
    }
  };

  title = 'Sample Parser';

  writeStyle(geoStylerStyle: Style): Promise<string> {
    return new Promise<string>(() => 'sample');
  }

  readStyle(sldString: string): Promise<Style> {
    return new Promise<Style>(() => {
      return {
        name: 'Samplestyle',
        rules: []
      };
    });
  }
};

export default SampleParser;
