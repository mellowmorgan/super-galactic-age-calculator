export class GalacticCalculator{
  constructor(age){
    this.age=age;
  }
  ageCalculator(planet){
    switch (planet) {
      case "Mercury":
        return this.age/.24;
      case "Venus":
        return this.age/.62;
      case "Mars":
        return this.age/1.88;
      case "Jupiter":
        return this.age/11.86;
      default:
        return false;
    } 
  }
  yearsLeft(planet){
    //world life expectancy 72.74 as of 2019

    let planetAge = this.ageCalculator(planet);
    let yearsLeft;
    switch (planet) {
      case "Mercury":
        yearsLeft = 72.74/.24-(this.ageCalculator("Mercury"));
        break;
      case "Venus":
        yearsLeft = 72.74/.62-(this.ageCalculator("Venus"));
        break;
      case "Mars":
        yearsLeft = 72.74/1.88-(this.ageCalculator("Mars"));
        break;
      case "Jupiter":
        yearsLeft = 72.74/11.86-(this.ageCalculator("Jupiter"));
        break;
      default:
        yearsLeft=false;
    } 
    if(yearsLeft){
      if (yearsLeft<0){
        return -1*yearsLeft;
      }
      else{
        return yearsLeft;
      }
    }
    else{
      return yearsLeft;
    }  
  }

}


