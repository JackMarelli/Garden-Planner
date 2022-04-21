console.log("Init requests.js");

//URL VARI
let testUrl = "https://httpbin.org/ip"; //va
let url0 = "http://172.16.102.64/WebService/prova.php"; //non va se non sono sulla stessa rete locale 172.16.x.x
let url1 = "http://localhost/server/info/plantera/website/index.html"; //va
let url2 = "http://plantera.altervista.org/";

//ELEMENTI DI DEFAULT
let productsMenu = document.getElementById("products-menu");
console.log(productsMenu);

//MAIN
//get json from url
let response = httpGet(testUrl);
console.log(response);

let categoriesObj = JSON.parse(response);
let testStr = categoriesObj.origin;

//build categories menu
for (let i = 0; i <= 3; i++) {
    let str = i.toString();
    addCategory(str + " " + testStr);
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