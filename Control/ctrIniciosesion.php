<?php
include("../Modelo/happy.php");
$happy = new happy();
$happy->conectarBd();
$happy->iniciarSesion($_REQUEST['correo'], $_REQUEST['contra']);
$happy->cerrarBd();
?>