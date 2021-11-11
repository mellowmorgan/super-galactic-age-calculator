import $ from 'jquery';
import { GalacticCalculator } from './js/galacticCalculator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$("button").on("click",function(){
  let age = parseInt($("#age").val());
  let cal = new GalacticCalculator(age);
  $("#mercury").text(cal.ageCalculator("Mercury"));
  $("#venus").text(cal.ageCalculator("Venus"));
  $("#mars").text(cal.ageCalculator("Mars"));
  $("#jupiter").text(cal.ageCalculator("Jupiter"));

});
