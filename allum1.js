window.onload=function(){
  var difficulty;

  init();

  $("#reset").on("click", function(){
    reset();
    play(difficulty);
  });

  $("#easy").on("click", function(){
    difficulty = "easy";
    reset();
    play(difficulty);
  });

  $("#medium").on("click", function(){
    difficulty = "medium";
    reset();
    play(difficulty);
  });

  $("#hard").on("click", function(){
    difficulty = "hard";
    reset();
    play(difficulty);
  });
};

function init(){
  difficulty = "easy";
  displayMatches(11);
  play(difficulty);
}

function reset(){
  displayMatches(11);
}

function displayMatches(matches){
  $("#allum1").empty();
  for (var i = 0; i < matches; i++) {
    $("#allum1").prepend('<img id="'+i+'" src="matche.png" />');
  }
}

function displayTurn(turn){
  if (turn === 1){
    player = "player";
  }
  else if (turn === 2) {
    player = "AI";
  }
  $("#turn").empty();
  $("#turn").prepend(player);
}

function displayDifficulty(difficulty){
  $("#difficulty").empty();
  $("#difficulty").prepend(difficulty);
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function play(difficulty){
  matches=11;
  displayDifficulty(difficulty);
  var turn=getRandom(1, 2);
  displayTurn(turn);
  if (difficulty=="easy"){
    while (matches > 1) {
      if (turn===2){
        matches=matches-getRandom(1,3);
        turn = 1;
      }
      else {
        matches=matches-$(".play").val();
      }
      displayMatches(matches);
    }
  }
  else if (difficulty=="medium") {

  }
  else if (difficulty=="hard") {

  }
}
