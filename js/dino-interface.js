var Dino = require('./../js/dino.js').dinoModule;

$(document).ready(function() {
  $('.dino_ipsum_form').submit(function(event) {
    event.preventDefault()
    var currentDinoObject = new Dino();
    var dinoPara = parseInt($('#paragraph').val());
    var dinoWord = parseInt($('#word').val());
    currentDinoObject.getDino(dinoPara, dinoWord);
  });
});
