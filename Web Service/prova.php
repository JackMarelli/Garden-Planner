<?php
	
	function getDataBase(){
		$sql_query = "SELECT * FROM prodotti  ";
		getDatiAll($sql_query);
        
	}	

	function getCategoria($categoria){

		$sql_query = "SELECT * FROM prodotti WHERE Categoria= '$categoria' ";
		getDati($sql_query);

	}

	function getAllCategorie(){
		
		$sql_query = "SELECT Categoria FROM prodotti ";
		getDati($sql_query);

	}

	function getProductByCategoty($categoria){
		$sql_query = "SELECT NomeProdotto, Costo, immagine FROM prodotti WHERE Categoria='$categoria'";
		getDati($sql_query);     
	}

	function getProductByID($id){
		
		$sql_query = "SELECT ID,NomeProdotto,Categoria,InformazioniProdotti,Larghezza,Lunghezza,Costo,immagine FROM prodotti WHERE ID='$id'";
		getDatiAll($sql_query);

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


	getProductByCategoty("Pianta");
	//getDataBase();
	//getAllCategorie();
	//getProductByID("3");


//prodotti di una categoria solo prezzi e




?>
