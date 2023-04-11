const words = ["jajko", "informatyka", "krowa", "auto", "samochód", "krowa", "piłka", "laptop", "dzik"];
const keyboardCharacters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

const word = document.querySelector(".word");
let wordsMaxNumber = Math.floor(Math.random()*words.length);
const keyboard = document.querySelector(".keyboard");

let currentWord = words[wordsMaxNumber].split("");

    

for(let i=0; i<currentWord.length; i++){
    console.log(currentWord.length);
    word.innerHTML+='<div class="theWord"><div class="theKey key_'+currentWord[i]+'">'+currentWord[i]+'</div></div>';

}



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

addEventListener("click", function(e){
    const keyLetter = e.target;
    console.log(keyLetter.textContent);


    
})
