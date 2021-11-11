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
  test('Should return false when unknown planet is passed as argumument when ageCalculator() is called', () => {
    expect( cal.ageCalculator("Saturn")).toEqual(false);
  });
  test('Should return years left on Mercury when yearsLeft("Mercury") is called', () => {
    expect( cal.yearsLeft("Mercury")).toEqual(72.74/.24-cal.ageCalculator("Mercury"));
  });
  test('Should return false when yearsLeft() on unknown is called', () => {
    expect( cal.yearsLeft("Saturn")).toEqual(false);
  });
  test('Should return years left on Venus when yearsLeft("Venus") is called', () => {
    expect( cal.yearsLeft("Venus")).toEqual(72.16129032258064);
  });
  test('Should return years left on Jupiter when yearsLeft("Jupiter") is called', () => {
    expect( cal.yearsLeft("Jupiter")).toEqual(3.7723440134907245);
  });

  test('Should return years left on Mars when yearsLeft() is called', () => {
    expect( cal.yearsLeft("Mars")).toEqual();
  });
  
});