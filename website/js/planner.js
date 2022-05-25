console.log("Init requests.js");

//VARIABILI GLOBALI
const urlParams = new URLSearchParams(window.location.search);
const shape = urlParams.get("shape");
const x = urlParams.get("x");
const y = urlParams.get("y");
const maxDimension = Math.max(x, y);
const existingPlannerElement = document.getElementById("planner");
const slideInSummary = document.getElementById("summary");
const summaryCloseBtn = document.getElementById("summaryClose");
const summaryOpenBtn = document.getElementById("summaryOpen");
const detailsCloseBtn = document.getElementById("detailsClose");
const slideInDetails = document.getElementById("details");

let catButtons = document.getElementsByTagName("button");
let resetBtn = document.getElementById("reset");

let spesa = 0;


//CALLS
createMenu();

//BUILD PLANNER DIMENSION AND SHAPE
let plannerWidth;
let plannerHeight;

if (x == y) {
  existingPlannerElement.style.height = "60%";
  plannerHeight = existingPlannerElement.clientHeight;
  plannerWidth = plannerHeight;
  existingPlannerElement.style.width = plannerWidth;
} else {
  if (maxDimension == x) {
    existingPlannerElement.style.width = "80%";
    plannerWidth = existingPlannerElement.clientWidth;
    plannerHeight = plannerWidth * y / x;
    existingPlannerElement.style.height = plannerHeight;
  } else if (maxDimension == y) {
    existingPlannerElement.style.height = "60%";
    plannerHeight = existingPlannerElement.clientHeight;
    plannerWidth = plannerHeight * x / y;
    existingPlannerElement.style.width = plannerWidth;
  }
}

if (shape == "ellipse") {
  existingPlannerElement.style.borderRadius = "100%";
}

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
  //document.getElementById("detailsProductName").innerHTML = id.toString();
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

  //OPEN DETAILS BTN
  divSeemore.addEventListener("click", () => {

    //prod http request
    let prodUrl = "http://localhost/server/info/plantera/Web%20Service/getProductById.php?id=" + id;
    let response = httpGet(prodUrl);
    let obj = JSON.parse(response);
    console.log("item id: " + id);
    openDetails(id);

    /*
      <div class="m-3 prodotto">
        <img src="../../images/2_bbq.png" alt="errore">
        <div class="text">
          <h1 id="detailsProductName" class="mx-3 nome">Nome Prodotto</h1>
          <div id="productDesc" class="m-3 desc">Lorem ipsum dolor sit amet</div>
          <div id="productPrice" class="mx-3 prezzo">699€</div>
        </div>
      </div>
      <div id="propTable" class="prop">Qui apparirà la tabella dei dettagli</div>
    */

    let divM3Prodotto = document.createElement("div");
    let img = document.createElement("img");
    let divText = document.createElement("div");
    let h1Mx3Nome = document.createElement("h1");
    let divM3Desc = document.createElement("div");
    let divMx3Prezzo = document.createElement("div");
    let divProp = document.createElement("div");

    divM3Prodotto.classList.add("m-3");
    divM3Prodotto.classList.add("prodotto");
    divText.classList.add("text");
    h1Mx3Nome.classList.add("mx-3");
    h1Mx3Nome.classList.add("nome");
    divM3Desc.classList.add("m-3");
    divM3Desc.classList.add("desc");
    divMx3Prezzo.classList.add("m-3");
    divMx3Prezzo.classList.add("prezzo");
    divProp.classList.add("prop");
    img.classList.add("m-3");

    h1Mx3Nome.innerText = obj.NomeProdotto;
    divM3Desc.innerText = obj.Categoria + ", " + obj.Larghezza + "x" + obj.Lunghezza;
    divMx3Prezzo.innerText = obj.Costo + "€"
    img.src = obj.Immagine;
    divProp.style.width = "100%";

    let propCount = Object.keys(obj.InformazioniProdotti).length;
    for (let p = 0; p < propCount; p++) {
      console.log(Object.keys(obj.InformazioniProdotti)[p]);

      let newRow = document.createElement("div");
      //newRow.style.width = "100%";
      newRow.classList.add("row");
      newRow.classList.add("justify-between");
      newRow.classList.add("mx-3");

      let newKey = document.createElement("p");
      let newVal = document.createElement("p");

      newKey.innerText = Object.keys(obj.InformazioniProdotti)[p] + ": ";
      newVal.innerText = Object.values(obj.InformazioniProdotti)[p];

      newKey.style.fontWeight = "bold";
      newVal.style.flexGrow = "1";
      newVal.style.textAlign = "right";

      newRow.appendChild(newKey);
      newRow.appendChild(newVal);

      divProp.appendChild(newRow);
    }

    document.getElementById("detailsContent").innerHTML = "";

    divText.appendChild(h1Mx3Nome);
    divText.appendChild(divM3Desc);
    divText.appendChild(divMx3Prezzo);
    divM3Prodotto.appendChild(img);
    divM3Prodotto.appendChild(divText);
    divM3Prodotto.appendChild(divProp);
    document.getElementById("detailsContent").appendChild(divM3Prodotto);



  });

  //ADD TO PLANNER BTN
  divAggiungi.addEventListener("click", () => {

    //prod http request
    let prodUrl = "http://localhost/server/info/plantera/Web%20Service/getProductById.php?id=" + id;
    let response = httpGet(prodUrl);
    let obj = JSON.parse(response);
    console.log("item id: " + id);

    if (obj.Categoria == "Manto Erboso") {
      document.getElementById("planner").style.backgroundImage = "url(" + obj.Immagine + ")";
      document.getElementById("planner").style.backgroundSize = "100% 100%";
      document.getElementById("planner").style.backgroundPosition = "center center";

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
      slPrezzo.innerText = obj.Costo + "€";

      slProd.appendChild(slNome);
      slProd.appendChild(slPrezzo);
      summaryList.appendChild(slProd);

      spesa += parseInt(obj.Costo);
      document.getElementById("totale").innerText = "Totale: " + spesa + "€";
    } else {
      //add to planner
      let newDraggable = document.createElement("div");
      console.log(obj.Larghezza);
      console.log(obj.Lunghezza);

      let newKeyrodWidth;
      let newKeyrodHeight;

      let xCm = x * 100;
      let yCm = y * 100;

      newKeyrodWidth = Math.floor(obj.Larghezza * plannerWidth / xCm);
      newKeyrodHeight = Math.floor(obj.Lunghezza * plannerHeight / yCm);

      console.log(newKeyrodWidth + ", " + newKeyrodHeight);

      //xCm:Larghezza=plannerWidth:x
      //x = Larghezza*plannerWidth/xCm

      //newDraggable.innerText = obj.NomeProdotto;
      newDraggable.style.width = newKeyrodWidth;
      newDraggable.style.height = newKeyrodHeight;
      newDraggable.style.backgroundImage = "url(" + obj.Immagine + ")";
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
      slPrezzo.innerText = obj.Costo + "€";

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
    }

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