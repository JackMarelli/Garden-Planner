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
                                    <div class="seemore">See more...</div>
                                    <div class="price">699€</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="product row">
                                <div class="image"><img src="../../images/2_bbq.png" alt=""></div>
                                <div class="text col">
                                    <div class="name">Barbeque 2 short</div>
                                    <div class="seemore">See more...</div>
                                    <div class="price">539€</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col right fg-1">
                <h2 class="mt-3">Plan your garden here.</h2>
                <div id="planner"></div>
                <div class="btn cta-primary mb-3">Sommario</div>
            </div>
            <div id="summary">
                <div class="close"><img src="../../images/elements/icons/icons8-close.svg" alt=""></div>
                <div class="content"></div>
            </div>
        </div>
    <script src="../js/animations.js"></script>
    <script src="../js/requests.js"></script>
</body>
</html>