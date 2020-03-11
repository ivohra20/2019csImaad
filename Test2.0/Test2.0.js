//$(".type1").css("background-color",'red');

$('.type1').click(
    function(){
        var myColor = $(this).css("background-color");
        $('.bar').css('background-color', myColor);
    }
);
