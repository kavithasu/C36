var  database;
var Gamestate=0;
var playercount=0;
var form,player,game;


function setup(){
  database = firebase.database();
    createCanvas(400,400)
    game=new Game();
    game.getstate()
    game.start()
}

function draw(){
  background("white");
   
}
