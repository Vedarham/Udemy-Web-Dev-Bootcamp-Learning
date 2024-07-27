const gamePattern=[];
const userClickedPattern =[];
const buttonColours = ["red", "blue", "green", "yellow"];
var started =false;
var level =0;
$(document).keypress(function(){
    if(!started){
        $("level-title").text("Level "+level);
        nextSequence();
        started =true;
    }
});

function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.random();
randomNumber=Math.floor(randomNumber*4);

var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

var level=0;
level++;

}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function playSound(name){
    
        var audio = new Audio('sounds/'+name+'.mp3');
        audio.play();
}


function animatePress(currentColour){
    $("#" +currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" +currentColour).removeClass("pressed");
      }, 100);
}
