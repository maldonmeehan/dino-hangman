// function Dino(){
//   // this.dinoLetters = []
// }
// //
// // Dino.prototype.getDino = function(dinoPara, dinoWord) {
// //   var dinoLetters = []
// //   $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1',function(response) {
// //     response.slice(dinoLetters)
// //
// //   });
// //   return dinoLetters; //this is what is going to be put into the DOM
// // };
// //
// // exports.dinoModule = Dino;
// //
// // function Hangman(){ //this object gets created upon click event
// //   this.userInput = userInput
// // }
// //
// // Hangman.prototype.getHangman = function(dinoLetters) {
// //   var hangman = []
// //   for (var i = 0; i <= dinoLetters.length; i++) {
// //     if (this.userInput === i) {
// //       display letter;
// //     }
// //     else {
// //       alert("That letter doesn't appear to be in this word");
// //     }
// //   }
// // };
//
// Dino.prototype.getDino = function() {
//   $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1',function(response) {
//     $("#dino-container").prepend(response);
//   });
// };
//
// exports.dinoModule = Dino;



function Dino(){
}

Dino.prototype.getDino = function(dinoPara, dinoWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1',function(response) {
    $("#dino-container").prepend(response);
  });
};

exports.dinoModule = Dino;
