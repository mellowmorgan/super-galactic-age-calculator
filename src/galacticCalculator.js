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
    //world life expectancy 72.74
    // if(this.ageCalculator(planet){
    //   let planetAge = this.ageCalculator(planet);
    // }
    // else{return false;}

    let planetAge = this.ageCalculator(planet);
    
    switch (planet) {
      case "Mercury":
        return 72.74/.24-(this.ageCalculator("Mercury"));
      case "Venus":
        return 72.74/.62-(this.ageCalculator("Venus"));
      case "Mars":
        return 72.74/1.88-(this.ageCalculator("Mars"));
      case "Jupiter":
        return 72.74/11.86-(this.ageCalculator("Jupiter"));
      default:
        return false;
    } 
   
  }

}



// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.