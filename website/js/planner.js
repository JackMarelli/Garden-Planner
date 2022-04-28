console.log("Init requests.js");

//URL VARI
let testUrl = "https://httpbin.org/ip"; //va
let url0 = "http://172.16.102.64/WebService/prova.php"; //non va se non sono sulla stessa rete locale 172.16.x.x
let url1 = "http://localhost/server/info/plantera/website/index.html"; //va
let url2 = "http://plantera.altervista.org/";
let url3 = "http://localhost/server/info/plantera/Web%20Service/prova.php";

//ELEMENTI DI DEFAULT
let productsMenu = document.getElementById("products-menu");
console.log(productsMenu);

//MAIN
//get json from url
let response = httpGet(url3);
console.log(response);

let categoriesObj = JSON.parse(response);
let testStr;

//test build menu
for (let i = 0; i <= 3; i++) {
    addCategory(i.toString());
}


//build categories menu
/*
for (let i = 0; i <= 3; i++) {
    str = categoriesObj.categiorie[i];
    addCategory(str);
}
*/

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
    document.getElementById("productName").innerHTML = id.toString();
    slideInSummary.style.transform = "translateX(0)";
}

//close details
detailsCloseBtn.addEventListener("click", function () {
    console.log("closing details");
    slideInSummary.style.transform = "translateX(60vw)";
});

