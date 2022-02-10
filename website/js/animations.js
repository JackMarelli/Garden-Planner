let indexTreeImageElement;
let alreadyRotating = false;
let treeInterval;

window.onload = function setup() {
    indexTreeImageElement = document.getElementById("rotating-tree");

    indexTreeImageElement.addEventListener("mouseenter", function (event) {
        console.log(alreadyRotating);
        let degrees = 0; //da trasformare in current deg dell'elemento
        treeInterval = setInterval(() => {
            degrees++;
            event.target.style.transform = "rotate(" + degrees + "deg)";
        }, 10);
    }, false);

    indexTreeImageElement.addEventListener("mouseout", function (event) {
        console.log(alreadyRotating);
        clearInterval(treeInterval);

    }, false);

}

function getRotate(element) {

}