class Game{
    constructor(){}
    getstate(){
     var Gamestateref=database.ref('gamestate');
     Gamestateref.on("value",function(data){
         Gamestate=data.val()
     })
    }
    update(state){
        database.ref('/').update({
            gamestate:state
        })
    }
    start(){
        if(Gamestate===0){
            player=new Player();
            player.getcount();
            form=new Form();
            form.display();
            }
    }

}