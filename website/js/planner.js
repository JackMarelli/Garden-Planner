console.log("Init requests.js");

//CALLS
createMenu();


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

//ELEMENTS
const slideInSummary = document.getElementById("summary");
const summaryCloseBtn = document.getElementById("summaryClose");
const summaryOpenBtn = document.getElementById("summaryOpen");
const detailsCloseBtn = document.getElementById("detailsClose");
const slideInDetails = document.getElementById("details");

//EVENTLISTENERS
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

//open menu category
let catButtons = document.getElementsByTagName("button");
console.log(catButtons);
for (let k = 0; k < catButtons.length; k++) {
  catButtons[k].addEventListener("click", () => {
    createSubMenu(catButtons[k].innerText);
  });
}

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

  let productsMenu = document.getElementById("products-menu");

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

function createMenu() {
  let urlCategorie = "http://localhost/server/info/plantera/Web%20Service/getAllCategorie.php";

  //get json from url
  let response = httpGet(urlCategorie);

  let categoriesArr = JSON.parse(response);
  console.log(categoriesArr);

  //build categories menu
  for (let i = 0; i <= 2; i++) {
    str = categoriesArr[i].Categoria;
    addCategory(str);
  }
}

function createSubMenu(category) {
  let url = "http://localhost/server/info/plantera/Web%20Service/getProductByCategory.php?cat=" + category;
  console.log(category);
  let response = httpGet(url);
  let productsArr = JSON.parse(response);
  console.log(productsArr);
}

function addProduct() {
  //TODO
}