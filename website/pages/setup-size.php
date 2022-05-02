<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PLANTERA | Setup</title>
    <link rel="stylesheet" href="../css/mybootstrap.css" />
    <link rel="stylesheet" href="../css/general.css" />
    <script src="../js/script.js"></script>
  </head>
  <body>
    <div class="container col">
      <nav>
        <img onclick="window.location.assign('pages/contact.php')" src="../../logo/logo_small.png" alt="" class="h-100 ml-1" />
        <span>Tutorial</span>
        <span>FAQ</span>
        <span>Contact</span>
      </nav>
      <div class="col fg-1 center relative">
        <div class="back absolute center">
          <img src="../../images/elements/icons/back-black.svg" alt="" />
        </div>
        <div class="lines w-100 h-100 absolute justify-around">
          <img src="../../images/elements/lines/0.svg" alt="" />
          <img src="../../images/elements/lines/1.svg" alt="" />
        </div>
        <div class="col center setup-header">
          <h1>Setup</h1>
          <p>Imposta le dimensioni:</p>
        </div>
        <div class="shape-container">
          <?php
          if($_GET["shape"] == "rect") {
            echo '<div class="rect"></div>';
          } else if ($_GET["shape"] == "ellipse") {
            echo '<div class="ellipse"></div>';
          } else {
            echo "Forma non disponibile";
          }
          ?>
          <div class="dim-x">23</div>
          <div class="dim-y">45</div>
        </div>
        <div class="row size-input">
          <input type="number" name="x" id="x" placeholder="32" />
          <img src="../../images/elements/icons/x.svg" alt="" />
          <input type="number" name="y" id="y" placeholder="14" />
        </div>
        (Metri)
        <div class="mt-3 btn-circle center" onclick="redirectToPlanner()">
        <input type="hidden" id="shape" value="<?php echo $_GET["shape"]; ?>">
          <img src="../../images/elements/icons/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  </body>
</html>
