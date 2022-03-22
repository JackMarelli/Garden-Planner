<?php
	
	function getDataBase(){
		//$sql_query = "SELECT * FROM prodotti  ";
		$sql_query = "SELECT ID,NomeProdotto,Categoria,Larghezza,Lunghezza,Costo,immagine FROM prodotti  ";
		getDati($sql_query);

	}	

	function getInformazioni(){
		include "config.php";
		$sql_query = "SELECT InformazioniProdotti FROM prodotti  ";
	
	
		$resultset = mysqli_query($link, $sql_query) or die("database error:". mysqli_error($link));	
		$products = array();
		if(mysqli_num_rows($resultset)) {
			$i =0;
			while($product = mysqli_fetch_assoc($resultset)) {
				$info[$i]=$product;
				$i++;
			}
		}

		$i=0;
		$risultato="{\"infos\":[ ";
		while($i< count($info))
		{
			$risultato=$risultato.implode($info[$i]);
			if($i!=count($info)-1){
				$risultato=$risultato.",";
			}
			$risultato=$risultato."\n";
			$i++;

		}
		$risultato=$risultato."]}";
		echo  $risultato;
			
		//echo $products;
		mysqli_close($link);

	}	

	function getCategoria($categoria){

		$sql_query = "SELECT * FROM prodotti WHERE Categoria= '$categoria' ";
		getDati($sql_query);

	}

	function getAllCategorie(){
		
		$sql_query = "SELECT Categoria FROM prodotti ";
		getDati($sql_query);

	}

	function getProductByID($id){
		
		$sql_query = "SELECT ID,NomeProdotto,Categoria,Larghezza,Lunghezza,Costo,immagine FROM prodotti WHERE ID='$id'";
		getDati($sql_query);

	}

	function getDati($sql_query){
		include "config.php";
	
		$resultset = mysqli_query($link, $sql_query) or die("database error:". mysqli_error($link));	
		$products = array();
		if(mysqli_num_rows($resultset)) {
			while($product = mysqli_fetch_assoc($resultset)) {

				$products[] = array('product'=>$product);
			}
		}
	
		/* output result in required format */
		
			header('Content-type: application/json');
			echo json_encode(array('products'=>$products));
			
		mysqli_close($link);

	}



	getDataBase();
	//getAllCategorie();
	//getProductByID("3");
	//getInformazioni();
?>
