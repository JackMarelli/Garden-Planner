<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLANTERA | Planner</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/mybootstrap.css">
</head>
<body>
    <div class="container col">
        <nav>
            <img src="../../logo/logo_small.png" alt="" class="h-100 ml-1" />
            <span>Tutorial</span>
            <span>FAQ</span>
            <span>Contact</span>
        </nav>
        <div class="row fg-1 relative">
            <div id="products-menu" class="col left">
                <button type="button" class="collapsible">Barbeque</button>
                <div id="barbeque" class="collapsible-content">
                    <ul>
                        <li>
                            <div class="product row">
                                <div class="image"><img src="../../images/3_bbq.png" alt=""></div>
                                <div class="text col">
                                    <div class="name">Barbeque 1 long nameeeeee LOREM IPSUM DOLOR SIT AMET</div>
                                    <div onclick="openDetails(0)" class="seemore">See more...</div>
                                    <div class="price">699€</div>
                                    <div class="btn cta-primary action">+ Aggiungi</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="product row">
                                <div class="image"><img src="../../images/2_bbq.png" alt=""></div>
                                <div class="text col">
                                    <div class="name">Barbeque 2 short</div>
                                    <div onclick="openDetails(1)" class="seemore">See more...</div>
                                    <div class="price">539€</div>
                                    <div class="btn cta-primary action">+ Aggiungi</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col right fg-1">
                <h2 class="mt-3">Plan your garden here.</h2>
                <div id="planner">
                    <div id="testRect" class="draggable">I'm a rectangle</div>
                    <div id="testCirc" class="draggable">I'm a circle</div>
                </div>
                <div id="summaryOpen" class="btn cta-primary mb-3">Sommario</div>
            </div>
            <div id="summary">
                <div id="summaryClose" class="close"><img src="../../images/elements/icons/icons8-close.svg" alt=""></div>
                <div class="content">
                    <h1 class="m-3">Sommario</h1>
                    <div class="list my-2 mx-3">
                        <div class="mx-3 prodotto">
                            <div class="action"><img src="../../images/elements/icons/icons8-close.svg" alt=""></div>
                            <div class="nome">Prodotto 1 d'esempio</div>
                            <div class="prezzo">999€</div>
                        </div>
                        <div class="mx-3 prodotto">
                            <div class="action"><img src="../../images/elements/icons/icons8-close.svg" alt=""></div>
                            <div class="nome">Prodotto 2 d'esempio</div>
                            <div class="prezzo">420€</div>
                        </div>
                    </div>
                    <div class="mx-3 btn cta-primary">Stampa</div>
                </div>
            </div>
            <div id="details">
                <div id="detailsClose" class="close"><img src="../../images/elements/icons/icons8-close.svg" alt=""></div>
                <div class="content">
                   <div class="m-3 prodotto">
                       <img src="../../images/2_bbq.png" alt="errore">
                       <div class="text">
                           <h1 id="detailsProductName" class="mx-3 nome">Nome Prodotto</h1>
                           <div id="productDesc" class="m-3 desc">Lorem ipsum dolor sit amet</div>
                           <div id="productPrice" class="mx-3 prezzo">699€</div>
                       </div>
                   </div>
                   <div id="propTable" class="prop">Qui apparirà la tabella dei dettagli</div>
                </div>
            </div>
        </div>
    <script src="https://unpkg.com/interactjs/dist/interact.min.js"></script>
    <script src="../js/animations.js"></script>
    <script src="../js/planner.js"></script>
</body>
</html>