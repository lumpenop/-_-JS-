const title = document.querySelector("#title");



console.log(title);
console.dir(document);

function handleResize(){
    console.log("resized")
}

window.addEventListener("resize", handleResize);

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();