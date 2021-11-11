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
    expect( cal.ageCalculator("Venus")).toEqual(45.16129032258065);
  });
  test('Should return age in Mars years when ageCalculator("Mars") is called', () => {
    expect( cal.ageCalculator("Mars")).toEqual(14.893617021276597);
  });
  test('Should return age in Jupiter years when ageCalculator("Jupiter") is called', () => {
    expect( cal.ageCalculator("Jupiter")).toEqual(2.3608768971332212);
  });
  // test('Should return age in Venus years when ageCalculator("Venus") is called', () => {
  //   expect( cal.ageCalculator("Venus")).toEqual(45.16129032258065);
  // });

  
});