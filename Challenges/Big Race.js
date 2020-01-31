init();

function init(){
    for(var r=0; r<9; r++)
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
    TweenMax.to("#car1",2,{x:150, y:10,delay:8, ease:Sine.easeOut}); 
 
    TweenMax.to("#car2",2,{x:521,ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:501, y:-320,delay:2, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:-91, y:-300,delay:4, ease:Sine.easeOut});
    TweenMax.to("#car2",1.5,{x:-101, y:10,delay:7, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:121, y:10,delay:9, ease:Sine.easeOut});
   
    TweenMax.to("#car3",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:500, y:-320,delay:6, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:-90, y:-300,delay:9, ease:Sine.easeOut});
    TweenMax.to("#car3",1.5,{x:-100, y:10,delay:12, ease:Sine.easeOut});
    TweenMax.to("#car3",2,{x:120, y:10,delay:15, ease:Sine.easeOut});
}
