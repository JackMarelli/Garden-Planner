<?php
include_once("config.php");	

	$sql_query = "SELECT * FROM prodotti WHERE Categoria='Barbecue' ";
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
?>