
var randomVar1 = Math.random();
randomVar1*=6;
randomVar1 = Math.floor(randomVar1)+1;

var randomVar2 = Math.random();
randomVar2*=6;
randomVar2 = Math.floor(randomVar2)+1;

document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+randomVar1+".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+randomVar2+".png");

if(randomVar1>randomVar2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomVar1<randomVar2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Both Wins , Draw";
}