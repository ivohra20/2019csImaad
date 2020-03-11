//$(".type1").css("background-color",'red');

$('.type1').click(
    function(){
        var myColor = $(this).css("background-color");
        $('.bar').css('background-color','darkorange', myColor);
    }
);
$('.type2').click(
    function(){
        var myColor = $(this).css("background-color");
        $('.bar').css('background-color','indigo', myColor);
    }
);
$('.type3').click(
    function(){
        var myColor = $(this).css("background-color");
        $('.bar').css('background-color','darkred', myColor);
    }
);
$('.type4').click(
    function(){
        var myColor = $(this).css("background-color");
        $('.bar').css('background-color','darkred', myColor);
    }
);
$('.type5').click(
    function(){
        var myColor = $(this).css("background-color");
        $('.bar').css('background-color','indigo', myColor);
    }
);
