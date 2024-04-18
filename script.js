window.onload = function() {
    const imgElement = document.querySelector('.img img');
    imgElement.style.animation = 'moveUpDown 3s infinite';
    typeWord();
};

let words = ['Software Developer', 'Code Enthusiasts', 'Problem Solver', 'Competitive Programmers'];
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
    let currentWord = words[wordIndex];
    let currentChar = currentWord.charAt(charIndex++);
    document.querySelector('.home p span').textContent += currentChar;

    if(charIndex < currentWord.length) {
        setTimeout(typeWord, 200);
    } else {
        setTimeout(deleteWord, 2000);
    }
}

function deleteWord() {
    let currentWord = words[wordIndex];
    let currentText = document.querySelector('.home p span').textContent;
    document.querySelector('.home p span').textContent = currentText.slice(0, -1);

    if(currentText.length > 0) {
        setTimeout(deleteWord, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        setTimeout(typeWord, 100);
    }
}