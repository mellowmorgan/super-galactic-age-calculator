import { GalacticCalculator } from './../src/galacticCalculator.js';

describe('GalacticCalculator', () => {
  let cal;
  beforeEach(() => {
    cal = new GalacticCalculator(28);
  });
  test('Should return age in Mercury years when ageCalculator("Mercury") is called', () => {
    expect( cal.ageCalculator("Mercury")).toEqual(116.66666666666667);
  });
  test('Should return age in Venus years when ageCalculator("Venus") is called', () => {
    expect( cal.ageCalculator("Venus")).toEqual(?);
  });
  // test('Should create GalacticCalculator cal object with age property', () => {
  //   expect(cal.age).toEqual(28);
  // });
  // test('Should create GalacticCalculator cal object with age property', () => {
  //   expect(cal.age).toEqual(28);
  // });
  // test('Should create GalacticCalculator cal object with age property', () => {
  //   expect(cal.age).toEqual(28);
  // });

  
});