function Dino(){
}

Dino.prototype.getDino = function(dinoPara, dinoWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15',function(response) {
    $("#dino-container").prepend(response);
  });
};

exports.dinoModule = Dino;
