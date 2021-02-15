const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");

}

function genRandom(){
    const number = Math.floor(Math.random() * 5) + 2;
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();