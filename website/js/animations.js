let indexTreeImageElement;
let alreadyRotating = false;
let treeInterval;
var coll = document.getElementsByClassName("collapsible");
var i;

window.onload = function setup() {
    //SETUP ALBERO CHE GIRA
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

    //SETUP COLLAPSIBLE
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
}

function getRotate(element) {
    //TODO
}

