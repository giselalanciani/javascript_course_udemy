const button = document.querySelector("button");

button.onclick = function() {

};

const buttonClickHandler = () => {
    alert ("Button was clicked!");
}

//button.onclick = buttonClickHandler;

button.addEventListener("click" , buttonClickHandler);

setTimeout(() => {
    button.removeEventListener("click", buttonClickHandler);
}, 2000);



