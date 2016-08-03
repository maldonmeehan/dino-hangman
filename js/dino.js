function Dino(){
}

Dino.prototype.getDino = function(dinoPara, dinoWord) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15',function(response) {
    // fillContainer = function(html) {
    //   $('#dino-container').html(html);
    // };
    console.log(response);
  });
  // .fail(function(error) {
  //   $('.showDino').text(error.responseJSON.message);
  //   console.log('Where did all the dinosaurs go?');
  // });
};

exports.dinoModule = Dino;
