<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLANTERA | Planner</title>
    <link rel="stylesheet" href="../css/general.css">
    <link rel="stylesheet" href="../css/mybootstrap.css">
    <script src="../js/animations.js"></script>
</head>
<body>
    <div class="container col">
    <nav>
        <img src="../../logo/logo_small.png" alt="" class="h-100 ml-1" />
        <span>Tutorial</span>
        <span>FAQ</span>
        <span>Contact</span>
    </nav>
    <div class="row fg-1">
            <div class="col left">
                <button type="button" class="collapsible">Barbeque</button>
                <div class="collapsible-content">
                <ul>
                    <li>
                        <div class="product row">
                            <div class="image"><img src="../../images/2_bbq.png" alt=""></div>
                            <div class="text col">
                                <div class="name">Barbeque 1 long nameeeeee</div>
                                <div class="seemore">See more...</div>
                                <div class="price">699€</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product row">
                            <div class="image"><img src="../../images/3_bbq.png" alt=""></div>
                            <div class="text col">
                                <div class="name">Barbeque 2 short</div>
                                <div class="seemore">See more...</div>
                                <div class="price">539€</div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
                <button type="button" class="collapsible">Open Collapsible</button>
                <div class="collapsible-content">
                <ul>
                    <li>BBQ1</li>
                    <li>BBQ2</li>
                    <li>BBQ3</li>
                    <li>BBQ4</li>
                </ul>
                </div>
            </div>
        <div class="col right fg-1">planner</div>
    </div>
    <?php
        //echo "x".$_GET["x"];
        //echo "y".$_GET["y"];
    ?>
    </div>
</body>
</html>