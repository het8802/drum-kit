button = document.querySelectorAll('.button');

letters = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

for (let i = 0; i < letters.length; i++) {
    button[i].addEventListener('click', function(){
        playSound(letters[i]);
        animation(letters[i]);
    })
}

function playSound(key) {
    var sound = new Audio(`music/${key}.mp3`)
    sound.play();
}

function animation(key) {
    let pressedKey = document.querySelector(`.${key}`);
    pressedKey.classList.add('animation');

    setTimeout(() => {
        pressedKey.classList.remove('animation');
    }, 100);
}


