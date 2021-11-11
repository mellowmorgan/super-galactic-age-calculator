import $ from 'jquery';
import { GalacticCalculator } from './js/galacticCalculator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("button").on("click",function(){
  $("#messages").empty();
  let age = parseInt($("#age").val());

  if(age){
    let cal = new GalacticCalculator(age);
    $("#mercury").text(Math.round(cal.ageCalculator("Mercury")) + " years");
    $("#venus").text(Math.round(cal.ageCalculator("Venus"))+" years");
    $("#mars").text(Math.round(cal.ageCalculator("Mars"))+" years");
    $("#jupiter").text(Math.round(cal.ageCalculator("Jupiter"))+" years");
    if (cal.age>72.74 && cal.age<123){
      $("#mercury-left").text("+" +Math.round(cal.yearsLeft("Mercury")));
      $("#venus-left").text("+" +Math.round(cal.yearsLeft("Venus")));
      $("#mars-left").text("+" +Math.round(cal.yearsLeft("Mars")));
      $("#jupiter-left").text("+" +Math.round(cal.yearsLeft("Jupiter")));
      $("#messages").append("<br><h6>You've surpassed the world average life expectancy!</h6>"); 
    }
    else if(cal.age>123){
      $("#messages").append("<br><h6>No one can live that long. Not even <a href='https://en.wikipedia.org/wiki/Jeanne_Calment'>Jeanne Calment!</a></h6>");
    }
    else{
      $("#mercury-left").text(Math.round(cal.yearsLeft("Mercury")));
      $("#venus-left").text(Math.round(cal.yearsLeft("Venus")));
      $("#mars-left").text(Math.round(cal.yearsLeft("Mars")));
      $("#jupiter-left").text(Math.round(cal.yearsLeft("Jupiter")));
    }
  }
  
  else{
    $("#messages").append("<br><h6>Please enter a valid age.</h6>");
  }
});
