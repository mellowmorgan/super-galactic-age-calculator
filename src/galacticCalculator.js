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
      default:
        return false;
    } 
  }

}


// Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
// Returns their age in Venus years. (A Venus year is .62 Earth years.)
// Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
// Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.