<?php

// Create connection
$conn = new mysqli("localhost", "root","","dbgardenplanner");
// Check connection
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
} 

?>
