console.log("Init requests.js");

//URL VARI
let testUrl = "https://httpbin.org/ip"; //va
let url0 = "http://172.16.102.64/WebService/prova.php"; //non va se non sono sulla stessa rete locale 172.16.x.x
let url1 = "http://localhost/server/info/plantera/website/index.html"; //va
let url2 = "http://plantera.altervista.org/";
let url3 = "http://localhost/server/info/plantera/Web%20Service/prova.php";

let getCategoriesUrl = "http://plantera.altervista.org/getAllCategorie.php"

//ELEMENTI DI DEFAULT
let productsMenu = document.getElementById("products-menu");

//MAIN
//get json from url
let response = httpGet(getCategoriesUrl);
console.log(response);

let categoriesObj = JSON.parse(response);
console.log(categoriesObj);
let testStr;

//test build menu
/*
for (let i = 0; i <= 3; i++) {
  addCategory(i.toString());
}
*/

//build categories menu
for (let i = 0; i <= 3; i++) {
    str = categoriesObj.categiorie[i];
    addCategory(str);
}


//BUILD PLANNER DIMENSION AND SHAPE
const urlParams = new URLSearchParams(window.location.search);
const shape = urlParams.get("shape");
const x = urlParams.get("x");
const y = urlParams.get("y");
const maxDimension = Math.max(x, y);
const existingPlannerElement = document.getElementById("planner");

console.log(x);
console.log(y);
console.log(shape);
console.log(maxDimension);

if (x == y) {
  existingPlannerElement.style.height = "60%";
  let plannerHeight = existingPlannerElement.clientHeight;
  let plannerWidth = plannerHeight;
  existingPlannerElement.style.width = plannerWidth;
} else {
  if (maxDimension == x) {
    existingPlannerElement.style.width = "80%";
    let plannerWidth = existingPlannerElement.clientWidth;
    let plannerHeight = plannerWidth * y / x;
    existingPlannerElement.style.height = plannerHeight;
  } else if (maxDimension == y) {
    existingPlannerElement.style.height = "60%";
    let plannerHeight = existingPlannerElement.clientHeight;
    let plannerWidth = plannerHeight * x / y;
    existingPlannerElement.style.width = plannerWidth;
  }
}

if (shape == "ellipse") {
  console.log("applying border radius");
  existingPlannerElement.style.borderRadius = "100%";
}

//FUNCTIONS
function httpGet(theUrl) {
  console.log("Try request")
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.response;
}

function addCategory(cat) {

  //TO CREATE:
  //<button type="button" class="collapsible">Barbeque</button>
  //<div id="barbeque" class="collapsible-content"></div>

  const newButton = document.createElement("button");
  const newCollapsible = document.createElement("div");
  const buttonText = document.createTextNode(cat);

  newButton.appendChild(buttonText);

  newButton.classList.add("collapsible");
  newCollapsible.classList.add("collapsible-content");

  newCollapsible.setAttribute("id", cat)

  productsMenu.appendChild(newButton);
  productsMenu.appendChild(newCollapsible);
}

//SLIDE IN ELEMENTS
const slideInSummary = document.getElementById("summary");
const summaryCloseBtn = document.getElementById("summaryClose");
const summaryOpenBtn = document.getElementById("summaryOpen");
const detailsCloseBtn = document.getElementById("detailsClose");
const slideInDetails = document.getElementById("details");

//close summary
summaryCloseBtn.addEventListener("click", function () {
  console.log("closing summary");
  slideInSummary.style.transform = "translateX(60vw)";
});

//open summary
summaryOpenBtn.addEventListener("click", function () {
  console.log("opening summary");
  slideInSummary.style.transform = "translateX(0)";
});

//open details with product id
function openDetails(id) {
  console.log("opening details with id " + id.toString());
  document.getElementById("detailsProductName").innerHTML = id.toString();
  slideInDetails.style.transform = "translateX(0)";
}

//close details
detailsCloseBtn.addEventListener("click", function () {
  console.log("closing details");
  slideInDetails.style.transform = "translateX(60vw)";
});

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: false,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end(event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
            Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
