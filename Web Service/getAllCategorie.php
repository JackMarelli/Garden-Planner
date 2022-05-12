<?php

function getAllCategorie(){
		
    $sql_query = "SELECT Categoria FROM prodotti ";
    getDati($sql_query);

}

function getDati($sql_query){
    require_once "config.php";

    $resultset = mysqli_query($conn, $sql_query) or die("database error:". mysqli_error($conn));	
    $products = array();
    if(mysqli_num_rows($resultset)) {
        while($product = mysqli_fetch_assoc($resultset)) {

            $products[] = $product;
        }
    }

    /* output result in required format */
    
        echo json_encode($products);
        
    mysqli_close($conn);

}

    getAllCategorie();

?>
