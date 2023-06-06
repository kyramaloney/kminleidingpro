// stores the amount of times you watered/feeded/enlightened
var waterCount = 0;
var zonCount = 0;

var waterButton = document.querySelector('#water-button');
var resetButton = document.querySelector('#reset-button');

//array 
var groeien = ['bloempot.png', 'stek1.png', 'stek2.png', 'stek3.png', 'bloem.png','dood.png'];

var bloemgroei = 0;

//functie
function groei() {
    bloemgroei = bloemgroei + 1;
    
    
    //check if out of range before updating
    if (bloemgroei > groeien.length - 1) {
        bloemgroei = groeien.length - 1;
    }
    console.log(groeien[bloemgroei])
    //play sound
    var audio = new Audio('audio/water-drop.mp3');
    audio.play();

    document.querySelector('#zonnebloem').src = 'img/' + groeien[bloemgroei];
}

function reset() {
    bloemgroei = 0;
    document.querySelector('#zonnebloem').src = 'img/' + groeien[bloemgroei];
}


//eventlisteners
waterButton.addEventListener('click', groei) 
resetButton.addEventListener('click', reset)