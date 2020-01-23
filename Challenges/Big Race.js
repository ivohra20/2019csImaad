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
    TweenMax.to("#car1",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:500, y:-320,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-90, y:-300,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:-100, y:10,delay:6, ease:Sine.easeOut});
}