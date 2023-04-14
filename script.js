//words for guess
const words = ["jajko", "informatyka", "ananas", "krowa", "auto", "drzewo", "krowa", "bramka", "laptop", "dzik", "kubek", "portfel", "krokodyl", "guzik", "dywan", "okno", "farba", "ciasto", "spodnie", "trawa", "telefon", "butelka"];
//keyboard's keys
const keyboardCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

//getting divs
const word = document.querySelector(".word");
const keyboard = document.querySelector(".keyboard");
//random number od key in array
let wordsMaxNumber = Math.floor(Math.random()*words.length);
//split the word
let currentWord = words[wordsMaxNumber].split("");
//console.log(currentWord);

    
//shuffle word and display
for(let i=0; i<currentWord.length; i++){
    console.log(currentWord.length);
    word.innerHTML+='<div class="theWord"><div class="theKey key_'+currentWord[i]+'">'+currentWord[i]+'</div></div>';
}


//loop creating keyboard
keyboardCharacters.forEach(function(letter){
    keyboard.innerHTML += `
    <button class="letter">${letter}</button>
    `;

    if (letter == "p"){
        keyboard.innerHTML += `<div class="halfLetter"></div>`;
    }
    else if(letter == "l"){
        keyboard.innerHTML += `<div class="oneHalfLetter"></div>`;
    }

})

//if you click keyboard's button
addEventListener("click", function(e){
    const keyLetter = e.target;
    console.log(keyLetter.textContent);
    console.log(currentWord);
    let uncoverLetter = document.getElementsByClassName("key_"+keyLetter.textContent);
    let winCheck = document.getElementsByClassName("theKey");
    let chancesFails = document.querySelector(".chances");
    
    //uncover selected letters
    currentWord.forEach(function(clickedletter){
        if(clickedletter==keyLetter.textContent){
        if(winCheck.length > 0){
            for(let i =0; i<uncoverLetter.length; i++){
                uncoverLetter[i].classList.remove("theKey");
                console.log(winCheck.length);
            }
        };
    }
    });


    if(winCheck.length==0){
        chancesFails.innerHTML=`<h1>WYGRAŁEŚ</h1>`
    }
})


