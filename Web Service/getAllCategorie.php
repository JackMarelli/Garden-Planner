<?php

function getAllCategorie(){
		
    $sql_query = "SELECT Categoria FROM prodotti ";
    getDati($sql_query);

}

function getDati($sql_query){
    include "config.php";

    $resultset = mysqli_query($conn, $sql_query) or die("database error:". mysqli_error($conn));	
    $products = array();
    if(mysqli_num_rows($resultset)) {
        while($product = mysqli_fetch_assoc($resultset)) {

            $products[] = array('product'=>$product);
        }
    }

    /* output result in required format */
    
        header('Content-type: application/json');
        echo json_encode(array('products'=>$products));
        
    mysqli_close($conn);

}

?>