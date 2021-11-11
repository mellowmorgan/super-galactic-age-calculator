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

});
