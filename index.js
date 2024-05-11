$("button").click(function () { 
    var randomNumber1= Math.floor(Math.random()*6 + 1);
    var random1Source= "assets/images/dice" + randomNumber1 + ".png";
    $(".dice1").attr("src", random1Source);
    var randomNumber2= Math.floor(Math.random()*6 +1);
    var random2Source= "assets/images/dice" + randomNumber2 + ".png";
    $(".dice2").attr("src", random2Source);
    

    if(randomNumber1>randomNumber2){
        $("h3").text("Player 1 Wins!");
    } else if(randomNumber1<randomNumber2){
        $("h3").text("Player 2 Wins!");
    } else
    {
        $("h3").text("Draw!");
    }
});

