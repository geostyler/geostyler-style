import {
  GeoStylerBooleanFunction,
  GeoStylerNumberFunction,
  GeoStylerStringFunction,
  GeoStylerUnknownFunction
} from '../functions';
import {
  CombinationFilter,
  CombinationOperator,
  ComparisonFilter,
  ComparisonOperator,
  FillSymbolizer,
  Filter,
  GrayChannel,
  IconSymbolizer,
  LineSymbolizer,
  MarkSymbolizer,
  NegationFilter,
  NegationOperator,
  RGBChannel,
  RasterSymbolizer,
  Rule,
  ScaleDenominator,
  TextSymbolizer
} from '../style';
import {
  isCombinationFilter,
  isCombinationOperator,
  isComparisonFilter,
  isComparisonOperator,
  isFillSymbolizer,
  isFilter,
  isGeoStylerBooleanFunction,
  isGeoStylerFunction,
  isGeoStylerNumberFunction,
  isGeoStylerStringFunction,
  isGeoStylerUnknownFunction,
  isGrayChannel,
  isIconSymbolizer,
  isMarkSymbolizer,
  isNegationFilter,
  isNegationOperator,
  isOperator,
  isPointSymbolizer,
  isPropertyType,
  isRasterSymbolizer,
  isRgbChannel,
  isRule,
  isScaleDenominator,
  isSymbolizer,
  isTextSymbolizer
} from '../typeguards';


const scaleDenominator1: ScaleDenominator = {
  min: 100,
  max: 200
};
const scaleDenominator2: ScaleDenominator = {
  min: 100
};
const scaleDenominator3: ScaleDenominator = {
  max: {
    name: 'pi'
  }
};

const comparisonOperators: ComparisonOperator[] = [
  '!=', '*=', '<', '<=', '<=x<=', '==', '>', '>='
];

const combinationOperators: CombinationOperator[] = [
  '&&', '||'
];

const negationOperator: NegationOperator = '!';

const comparisonFilter: ComparisonFilter = ['==', 'name', 'peter'];
const comparisonFilterWithFunction1: ComparisonFilter = ['>', { name: 'random' }, 0.5];
const comparisonFilterWithFunction2: ComparisonFilter = ['==', 'city', {
  name: 'strToUpperCase',
  args: ['berlin']
}];

const functionAsFilter: Filter = {
  name: 'double2bool',
  args: [1]
};
const negationFilter1: NegationFilter = ['!', comparisonFilter];
const negationFilter2: NegationFilter = ['!', functionAsFilter];

const combinationFilter: CombinationFilter = ['&&',
  comparisonFilter,
  comparisonFilterWithFunction1,
  comparisonFilterWithFunction2,
  functionAsFilter
];

const iconSymbolizer: IconSymbolizer = {
  kind: 'Icon',
  image: 'https://avatars1.githubusercontent.com/u/1849416?s=460&v=4',
  opacity: 0.5,
  rotate: 45,
  size: 12,
  offset: [10, 20]
};

const markSymbolizer: MarkSymbolizer = {
  kind: 'Mark',
  wellKnownName: 'ttf://My Font Name#0x7c',
  color: '#FF0000',
  radius: 12,
  rotate: 0,
  strokeColor: '#112233',
  offset: [10, 20]
};

const textSymbolizer: TextSymbolizer = {
  kind: 'Text',
  color: '#000000',
  label: '{{name}}',
  font: ['Arial'],
  size: 12,
  offset: [0, 5],
  haloColor: '#000000',
  haloWidth: 5,
  rotate: 45
};

const fillSymbolizer: FillSymbolizer = {
  kind: 'Fill',
  graphicFill: {
    kind: 'Mark',
    wellKnownName: 'circle'
  }
};

const lineSymbolizer: LineSymbolizer = {
  kind: 'Line',
  color: '#FF0000',
  width: 5,
  dasharray: undefined,
  opacity: undefined
};

const rasterSymbolizer: RasterSymbolizer = {
  kind:'Raster',
  colorMap:{
    type:'intervals',
    colorMapEntries:[
      {
        color:'#ffffff',
        quantity:1.0001,
        opacity:1
      },
      {
        color:'#ff0000',
        quantity:50000.0001,
        opacity:1
      },
      {
        color:'#ffff00',
        quantity:100000.0001,
        opacity:1
      },
      {
        color:'#00aa00',
        quantity:10000000,
        label:'100000 < x',
        opacity:1
      }
    ]
  }
};

const rule: Rule = {
  name: 'my rule',
  filter: combinationFilter,
  symbolizers: [
    fillSymbolizer,
    lineSymbolizer,
    rasterSymbolizer,
    markSymbolizer,
    textSymbolizer
  ]
};

const rgbChannel: RGBChannel = {
  redChannel: {
    sourceChannelName: '1'
  },
  blueChannel: {
    sourceChannelName: '2',
    contrastEnhancement: {
      enhancementType: 'histogram',
      gammaValue: 2
    }
  },
  greenChannel: {
    sourceChannelName: '3',
    contrastEnhancement: {
      enhancementType: 'normalize'
    }
  }
};

const grayChannel: GrayChannel = {
  grayChannel: {
    sourceChannelName: '3',
    contrastEnhancement: {
      enhancementType: 'normalize'
    }
  }
};

const numberFunction1: GeoStylerNumberFunction = {
  name: 'floor',
  args: [23.234]
};

const numberFunction2: GeoStylerNumberFunction = {
  name: 'pi'
};

const stringFunction: GeoStylerStringFunction = {
  name:'strToLowerCase',
  args: ['Berlin']
};

const booleanFunction: GeoStylerBooleanFunction = {
  name:'in',
  args: [{
    name: 'property',
    args: ['city'],
  }, 'Berlin', 'Hamburg', 'Bremen']
};

const unknownFunction: GeoStylerUnknownFunction = {
  name: 'property',
  args: ['city']
};

const peter = 'peter';
const twelve = 12;
const tru = true;
const nul = null;

const thingsToTest = [
  scaleDenominator1,
  scaleDenominator2,
  scaleDenominator3,
  ...comparisonOperators,
  ...combinationOperators,
  negationOperator,
  peter,
  twelve,
  tru,
  nul,
  combinationFilter,
  comparisonFilter,
  comparisonFilterWithFunction1,
  comparisonFilterWithFunction2,
  negationFilter1,
  negationFilter2,
  markSymbolizer,
  iconSymbolizer,
  textSymbolizer,
  lineSymbolizer,
  fillSymbolizer,
  rasterSymbolizer,
  rule,
  rgbChannel,
  grayChannel,
  numberFunction1,
  numberFunction2,
  stringFunction,
  booleanFunction,
  unknownFunction
];

describe('typeguards', () => {
  it('isPropertyType', () => {
    const expectedMatches: any[] = [
      ...combinationOperators,
      ...comparisonOperators,
      negationOperator,
      peter,
      twelve,
      tru,
      nul
    ];
    thingsToTest.forEach(thing => {
      expect(isPropertyType(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isScaleDenominator', () => {
    const expectedMatches: any[] = [
      scaleDenominator1,
      scaleDenominator2,
      scaleDenominator3
    ];
    thingsToTest.forEach(thing => {
      expect(isScaleDenominator(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isOperator', () => {
    const expectedMatches: any[] = [
      ...combinationOperators,
      ...comparisonOperators,
      negationOperator
    ];
    thingsToTest.forEach(thing => {
      expect(isOperator(thing)).toBe(expectedMatches.includes(thing));
    });
  });

  it('isComparisonOperator', () => {
    const expectedMatches: any[] = [
      ...comparisonOperators,
    ];
    thingsToTest.forEach(thing => {
      expect(isComparisonOperator(thing)).toBe(expectedMatches.includes(thing));
    });
  });

  it('isCombinationOperator', () => {
    const expectedMatches: any[] = [
      ...combinationOperators
    ];
    thingsToTest.forEach(thing => {
      expect(isCombinationOperator(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isNegationOperator', () => {
    const expectedMatches: any[] = [
      negationOperator
    ];
    thingsToTest.forEach(thing => {
      expect(isNegationOperator(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isFilter', () => {
    const expectedMatches: any[] = [
      combinationFilter,
      comparisonFilter,
      comparisonFilterWithFunction1,
      comparisonFilterWithFunction2,
      negationFilter1,
      negationFilter2,
      booleanFunction,
      tru
    ];
    thingsToTest.forEach(thing => {
      expect(isFilter(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isComparisonFilter', () => {
    const expectedMatches: any[] = [
      comparisonFilter,
      comparisonFilterWithFunction1,
      comparisonFilterWithFunction2
    ];
    thingsToTest.forEach(thing => {
      expect(isComparisonFilter(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isCombinationFilter', () => {
    const expectedMatches: any[] = [
      combinationFilter
    ];
    thingsToTest.forEach(thing => {
      expect(isCombinationFilter(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isNegationFilter', () => {
    const expectedMatches: any[] = [
      negationFilter1,
      negationFilter2
    ];
    thingsToTest.forEach(thing => {
      expect(isNegationFilter(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isSymbolizer', () => {
    const expectedMatches: any[] = [
      markSymbolizer,
      iconSymbolizer,
      textSymbolizer,
      lineSymbolizer,
      fillSymbolizer,
      rasterSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isPointSymbolizer', () => {
    const expectedMatches: any[] = [
      markSymbolizer,
      iconSymbolizer,
      textSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isPointSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isIconSymbolizer', () => {
    const expectedMatches: any[] = [
      iconSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isIconSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isTextSymbolizer', () => {
    const expectedMatches: any[] = [
      textSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isTextSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isMarkSymbolizer', () => {
    const expectedMatches: any[] = [
      markSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isMarkSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isFillSymbolizer', () => {
    const expectedMatches: any[] = [
      fillSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isFillSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isRasterSymbolizer', () => {
    const expectedMatches: any[] = [
      rasterSymbolizer
    ];
    thingsToTest.forEach(thing => {
      expect(isRasterSymbolizer(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isRule', () => {
    const expectedMatches: any[] = [
      rule
    ];
    thingsToTest.forEach(thing => {
      expect(isRule(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isRgbChannel', () => {
    const expectedMatches: any[] = [
      rgbChannel
    ];
    thingsToTest.forEach(thing => {
      expect(isRgbChannel(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isGrayChannel', () => {
    const expectedMatches: any[] = [
      grayChannel,
      functionAsFilter
    ];
    thingsToTest.forEach(thing => {
      expect(isGrayChannel(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isGeoStylerNumberFunction', () => {
    const expectedMatches: any[] = [
      numberFunction1,
      numberFunction2
    ];
    thingsToTest.forEach(thing => {
      expect(isGeoStylerNumberFunction(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isGeoStylerStringFunction', () => {
    const expectedMatches: any[] = [
      stringFunction
    ];
    thingsToTest.forEach(thing => {
      expect(isGeoStylerStringFunction(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isGeoStylerBooleanFunction', () => {
    const expectedMatches: any[] = [
      booleanFunction,
      functionAsFilter
    ];
    thingsToTest.forEach(thing => {
      expect(isGeoStylerBooleanFunction(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isGeoStylerUnknownFunction', () => {
    const expectedMatches: any[] = [
      unknownFunction
    ];
    thingsToTest.forEach(thing => {
      expect(isGeoStylerUnknownFunction(thing)).toBe(expectedMatches.includes(thing));
    });
  });
  it('isGeoStylerFunction', () => {
    const expectedMatches: any[] = [
      numberFunction1,
      numberFunction2,
      stringFunction,
      booleanFunction,
      unknownFunction,
      functionAsFilter
    ];
    thingsToTest.forEach(thing => {
      expect(isGeoStylerFunction(thing)).toBe(expectedMatches.includes(thing));
    });
  });

});
