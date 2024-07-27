var numberButton=document.querySelectorAll(".drum").length;

for(var i=0;i<numberButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        var buttn =this.innerHTML;
        
    });
}
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });
function makesound(key){
    switch(buttn){
            case "w" :
                var aud1 = new Audio("sounds/tom-1.mp3");
                aud1.play();
                break;
            case "a" :
                var aud2 = new Audio("sounds/tom-2.mp3");
                aud2.play();
                break;
            case "s" :
                var aud3 = new Audio("sounds/tom-3.mp3");
                aud3.play();
                break;
            case "d" :
                var aud4 = new Audio("sounds/tom-4.mp3");
                aud4.play();
                break;
            case "j" :
                var aud5 = new Audio("sounds/snare.mp3");
                aud5.play();
                break;
            case "k" :
                var aud6 = new Audio("sounds/kick-bass.mp3");
                aud6.play();
                break;
            case "l" :
                var aud7 = new Audio("sounds/crash.mp3");
                aud7.play();
                break;
        default : 
            console.log(buttn);
            
    }
}

document.addEventListener("keydown",function(){
    alert("key pressed!");
});