import { GalacticCalculator } from './../src/galacticCalculator.js';

describe('GalacticCalculator', () => {
  let cal;
  beforeEach(() => {
    cal = new GalacticCalculator(28);
  });
  test('Should create GalacticCalculator cal object with age property', () => {
    expect(cal.age).toEqual(28);
  });
  
});