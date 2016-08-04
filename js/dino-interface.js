var Dino = require('./../js/dino.js').dinoModule;

$(document).ready(function() {
  $('.dino_ipsum_form').submit(function(event) {
    event.preventDefault();
    var currentDinoObject = new Dino();

    var dinoWord = currentDinoObject.getDino();

  });
});


// $(document).ready(function() {
//   $('#play').click(function(event) {
//     event.preventDefault();
//     var dinoWord = new Dino();
//     dinoWord.getDino();
//     $('.hangman_form').submit(function(event) {
//       var userInput = new Hangman;
//          noLetters.getHangman();
//     });
//   });
// });
//
// $(document).ready(function() {
//   $('#play').submit(function(event) {
//     event.preventDefault();
//     var currentDinoObject = new Dino();
//     currentDinoObject.getDino();
//   });
// });
