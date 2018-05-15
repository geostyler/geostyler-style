import {
  Style,
  StyleParser
} from 'index';

import sampleStyle from './sample';

describe('Style', () => {
  it('Considers the sampleStyle as valid', () => {
    const testStyle: Style = sampleStyle;
    expect(testStyle).toBeDefined();
  });
});

describe('StyleParser interface', () => {
  // create a mock implementation of the interface
  const Mock = jest.fn<StyleParser>(() => ({
    readStyle: jest.fn(),
    writeStyle: jest.fn()
  }));
  // get instance
  const styleParser = new Mock();

  it('has a function "readStyle"', () => {
    styleParser.readStyle({});
    expect(styleParser.readStyle).toHaveBeenCalled();
  });
  it('has a function "writeStyle"', () => {
    const testStyle: Style = sampleStyle;
    styleParser.writeStyle(testStyle);
    expect(styleParser.writeStyle).toHaveBeenCalled();
  });
});
