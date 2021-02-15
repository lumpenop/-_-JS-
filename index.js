const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS); 
    //hasClass -> CLICKED_CLASS라는 값이 있는지 확인
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}


// handleClick()과 같은 기능을 하는 toggle 사용
function toggleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();