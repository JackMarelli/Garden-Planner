<?php

function getProductByID($id){
		
    $sql_query = "SELECT ID,NomeProdotto,Categoria,InformazioniProdotti,Larghezza,Lunghezza,Costo,immagine FROM prodotti WHERE ID='$id'";
    getDatiAll($sql_query);

}

function getDatiAll($sql_query){
    require_once("config.php");

    $resultset = mysqli_query($conn, $sql_query) or die("database error:". mysqli_error($conn));	
    $products = array();
    if(mysqli_num_rows($resultset)) {
        while($product = mysqli_fetch_assoc($resultset)) {
            //print_r($product);

            $myObj = new stdClass();
            $myObj->id = $product['ID'];
            $myObj->NomeProdotto = $product['NomeProdotto'];
            $myObj->Categoria = $product['Categoria'];
            $myObj->InformazioniProdotti = json_decode($product['InformazioniProdotti']);
            $myObj->Larghezza = $product['Larghezza'];
            $myObj->Lunghezza = $product['Lunghezza'];
            $myObj->Costo = $product['Costo'];
            $myObj->Immagine = $product['immagine'];

            $products[] = array('product'=>$myObj);
            
        }
    }

    /* output result in required format */
    
        header('Content-type: application/json');
        echo json_encode(array('products'=>$products));
        
    mysqli_close($conn);

}

?>