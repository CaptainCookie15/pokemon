var player1Health = 100
var player2Health = 100
var round = 1
document.getElementById("text").innerHTML = "Round " + round;

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function charizard() {
  pokemon = "CHARIZARD";
  document.getElementById("pokemon").src = "https://www.kindpng.com/picc/m/79-792390_transparent-charizard-pokemon-charizard-png-png-download.png";
  document.getElementById("one").innerHTML = "Flame Thrower";
  document.getElementById("two").innerHTML = "Slash";
}

function blastoise() {
  pokemon = "BLASTOISE";
  document.getElementById("pokemon").src = "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2Mjk3OTE5MTkwNjcyNTc0/pokemon-blastoise-nicknames.jpg";
  document.getElementById("one").innerHTML = "Hydro Cannon";
  document.getElementById("two").innerHTML = "Shell Smash";
}

function bot() {
  let chance = random(1, 5)
  if (chance === 1) {
    player1Health -= 20
    document.getElementById("text").innerHTML = "BLASTOISE used HYDRO CANNON!";
  }
  if (chance === 2) {
    player1Health -= 10
    document.getElementById("text").innerHTML = "BLASTOISE used SHELL SMASH!";
  }
  if (chance === 3) {
    player1Health -= 5
    document.getElementById("text").innerHTML = "BLASTOISE used TACKLE!";
  }
  if (chance === 5) {
    player1Health -= 10
    document.getElementById("text").innerHTML = "BLASTOISE used WATER GUN!";
  }
  if (player1Health < 1) {
    player1Health = 0
    document.getElementById("text").innerHTML = "YOU LOST...";
    reset()
  }
  document.getElementById("health1").innerHTML = player1Health;
}

function one() {
  player2Health -= 10;
  if (player2Health < 1) {
    player2Health = 0
    document.getElementById("text").innerHTML = "YOU WON!!!";
    round++
  }
  
  else {
    bot()
  }
  document.getElementById("health2").innerHTML = player2Health;
}

function two() {
  player2Health -= 5;
  if (player2Health < 1) {
    player2Health = 0
    document.getElementById("text").innerHTML = "YOU WON!!!";
    reset()
  }
  
  else {
    bot()
  }
  document.getElementById("health2").innerHTML = player2Health;

}

function reset() {
  player1Health = 0;
  player2Health = 0;
}
