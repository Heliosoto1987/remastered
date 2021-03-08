<?php
    $destino= "heliosoto17@gmail.com";
    $nombre = $_POST["name"];
    $telefono = $_POST["phone"];
    $correo = $_POST["email"];
    $texto = $_POST["text"];
    $contendio = "Nombre: " . $nombre . "\nTelefono:" . $telefono . "n\Correo: " . $correo . "\nTexto: " . $texto;
    mail($destino, $contendio);

