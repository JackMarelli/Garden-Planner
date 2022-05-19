console.log("Init requests.js");

//VARIABILI GLOBALI
const urlParams = new URLSearchParams(window.location.search);
const shape = urlParams.get("shape");
const x = urlParams.get("x");
const y = urlParams.get("y");
const maxDimension = Math.max(x, y);
const existingPlannerElement = document.getElementById("planner");

let catButtons = document.getElementsByTagName("button");
let resetBtn = document.getElementById("reset");

let spesa = 0;


//CALLS
createMenu();

//BUILD PLANNER DIMENSION AND SHAPE
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
for (let k = 0; k < catButtons.length; k++) {
  catButtons[k].addEventListener("click", () => {
    createSubMenu(catButtons[k].innerText);
  });
}

//reset planner
resetBtn.addEventListener("click", () => {
  document.getElementById("planner").innerHTML = "";
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

//FUNCTIONS
function httpGet(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false); // false for synchronous request
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
  const ul = document.createElement("ul");

  newButton.appendChild(buttonText);
  newCollapsible.appendChild(ul);

  newButton.classList.add("collapsible");
  newCollapsible.classList.add("collapsible-content");

  ul.setAttribute("id", cat + "Ul")
  newCollapsible.setAttribute("id", cat)

  productsMenu.appendChild(newButton);
  productsMenu.appendChild(newCollapsible);
}

function createMenu() {
  let urlCategorie = "http://localhost/server/info/plantera/Web%20Service/getAllCategorie.php";

  //get json from url
  let response = httpGet(urlCategorie);
  let categoriesArr = JSON.parse(response);

  //build categories menu
  for (let i = 0; i < categoriesArr.length; i++) {
    str = categoriesArr[i].Categoria;
    addCategory(str);
  }
}

function createSubMenu(category) {
  let url = "http://localhost/server/info/plantera/Web%20Service/getProductByCategory.php?cat=" + category;
  let response = httpGet(url);
  let productsArr = JSON.parse(response);

  let catUl = document.getElementById(category + "Ul");
  catUl.innerHTML = "";

  for (let f = 0; f < productsArr.length; f++) {
    let id = productsArr[f].ID;
    let prodName = productsArr[f].NomeProdotto;
    let prodPrice = productsArr[f].Costo;
    let prodImgUrl = productsArr[f].immagine;

    addProduct(category, id, prodImgUrl, prodName, prodPrice);
  }

  let innerHeight = $('.left').height();
  console.log(innerHeight);
}

function addProduct(cat, id, imageUrl, name, price) {
  //TO CREATE:
  //<li></li>
  //<div class="product row"></div>
  //<div class="image">

  let catUl = document.getElementById(cat + "Ul");
  let li = document.createElement("div");
  let divProductRow = document.createElement("div");
  let divImage = document.createElement("div");
  let image = document.createElement("img");
  let divTextCol = document.createElement("div");
  let divName = document.createElement("div");
  let divRow = document.createElement("div");
  let divPriceMr1 = document.createElement("div");
  let divSeemore = document.createElement("div");
  let divAggiungi = document.createElement("div");

  divProductRow.classList.add("product");
  divImage.classList.add("image");
  divTextCol.classList.add("text");
  divTextCol.classList.add("col");
  divName.classList.add("name");
  divRow.classList.add("row");
  divPriceMr1.classList.add("price");
  divPriceMr1.classList.add("mr-1");
  divSeemore.classList.add("seemore");
  divAggiungi.classList.add("btn");
  divAggiungi.classList.add("cta-primary");
  divAggiungi.classList.add("action");

  image.src = imageUrl;
  divName.innerText = name;
  divPriceMr1.innerText = price + "€";
  divAggiungi.innerText = "Aggiungi";
  divSeemore.innerText = "See more...";

  divAggiungi.addEventListener("click", () => {

    //prod http request
    let prodUrl = "http://localhost/server/info/plantera/Web%20Service/getProductById.php?id=" + id;
    let response = httpGet(prodUrl);
    let obj = JSON.parse(response);
    console.log(id);

    //add to planner
    let newDraggable = document.createElement("div");
    console.log(obj.Larghezza);
    console.log(obj.Lunghezza);
    console.log(obj.Immagine);
    newDraggable.innerText = obj.NomeProdotto;
    newDraggable.style.width = obj.Larghezza;
    newDraggable.style.height = obj.Lunghezza;
    newDraggable.style.backgroundImage = "url("+obj.Immagine+")";
    newDraggable.style.position = "absolute";
    newDraggable.classList.add("draggable");
    document.getElementById("planner").insertBefore(newDraggable, document.getElementById("planner").children[1]);
  
    //add to summary
    let summaryList = document.getElementById("summaryList");
    let slProd = document.createElement("div");
    let slNome = document.createElement("div");
    let slPrezzo = document.createElement("div");

    slProd.classList.add("mx-3");
    slProd.classList.add("prodotto");
    slNome.classList.add("nome");
    slPrezzo.classList.add("prezzo");

    slNome.innerText = obj.NomeProdotto;
    slPrezzo.innerText = obj.Costo +"€";

    slProd.appendChild(slNome);
    slProd.appendChild(slPrezzo);
    summaryList.appendChild(slProd);

    spesa += parseInt(obj.Costo);
    document.getElementById("totale").innerText = "Totale: " + spesa + "€";

    /*
    <div class="mx-3 prodotto">
        <div class="action"><img src="../../images/elements/icons/icons8-close.svg" alt=""></div>
        <div class="nome">Prodotto 1 d'esempio</div>
        <div class="prezzo">999€</div>
    </div>
    */
  });

  divImage.appendChild(image);
  divRow.appendChild(divPriceMr1);
  divRow.appendChild(divSeemore);
  divTextCol.appendChild(divName);
  divTextCol.appendChild(divRow);
  divTextCol.appendChild(divAggiungi);
  divProductRow.appendChild(divImage);
  divProductRow.appendChild(divTextCol);
  li.appendChild(divProductRow);
  catUl.appendChild(li);
}