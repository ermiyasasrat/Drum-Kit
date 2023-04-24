var numberOfDrumButtons = document.querySelectorAll(".drum");

// adds sound using the mouse(when the drums are clicked)

for(i=0; i < numberOfDrumButtons.length; i++){
numberOfDrumButtons[i].addEventListener("click", function (){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    animateButtons(buttonInnerHtml);
})
}

// adds sound when the appropret key is pressed

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animateButtons(event.key);
})

// the function used to assign the letter in the document with the approprtsound

function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");    
            kick.play();
            break;
        default: console.log(buttonInnerHtml);
    }
}

function animateButtons(but){
    var animate = document.querySelector("."+but);
    animate.classList.add("pressed");
    setTimeout(function(){
        animate.classList.remove("pressed");
    },100)


}