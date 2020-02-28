init();

function init(){
    for(var r=0; r<12; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace(){
    TweenMax.to("#player1",2,{x:520,ease:Sine.easeOut});

    TweenMax.to("#player2",2,{x:420,ease:Sine.easeOut});

    TweenMax.to("#player3",2,{x:320,ease:Sine.easeOut});

    TweenMax.to("#player4",2,{x:220,ease:Sine.easeOut});

    TweenMax.to("#player5",2,{x:120,ease:Sine.easeOut});

    TweenMax.to("#ball",2,{x:20,ease:Sine.easeOut});

}
