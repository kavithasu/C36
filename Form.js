class Form{
      constructor(){}
      display(){
          var title=createElement('h2');
          title.html("Car racing game");
          title.position(130,10);
          var input=createInput("Name");
          var button=createButton("play")
          var greeting=createElement('h3');
          input.position(130,160);
          button.position(250,200);
         button.mousePressed(function(){
             input.hide()
             button.hide()
             var name =input.value();
             playercount=playercount+1
             player.update(name)
             player.updatecount(playercount)
             greeting.html("Hello"+name)
             greeting.position(130,160)
                })
      }

}