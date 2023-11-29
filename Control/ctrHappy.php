<?php
include("../Modelo/happy.php");
$happy = new happy();
$happy->conectarBd();
$happy->inicializar($_REQUEST['nombre'], $_REQUEST['correo'], $_REQUEST['contra']);
$happy->ingresarUsuario();
$happy->cerrarBd();
?>