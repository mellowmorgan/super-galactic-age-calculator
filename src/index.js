import $ from 'jquery';
import { GalacticCalculator } from './js/galacticCalculator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("button").on("click",function(){
  let age = parseInt($("#age").val());
  let cal = new GalacticCalculator(age);
  $("#mercury").text(Math.round(cal.ageCalculator("Mercury")));
  $("#venus").text(Math.round(cal.ageCalculator("Venus")));
  $("#mars").text(Math.round(cal.ageCalculator("Mars")));
  $("#jupiter").text(Math.round(cal.ageCalculator("Jupiter")));
  if (cal.age>72.74){
    $("#mercury-left").text("+" +Math.round(cal.yearsLeft("Mercury")));
    $("#venus-left").text("+" +Math.round(cal.yearsLeft("Venus")));
    $("#mars-left").text("+" +Math.round(cal.yearsLeft("Mars")));
    $("#jupiter-left").text("+" +Math.round(cal.yearsLeft("Jupiter")));
    $(".left-div").append("<br><h6>You've surpassed the world average life expectancy!</h6>");
  }
  else{
    $("#mercury-left").text(Math.round(cal.yearsLeft("Mercury")));
    $("#venus-left").text(Math.round(cal.yearsLeft("Venus")));
    $("#mars-left").text(Math.round(cal.yearsLeft("Mars")));
    $("#jupiter-left").text(Math.round(cal.yearsLeft("Jupiter")));
  }
  
});
