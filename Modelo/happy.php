<?php
class happy{
    private $nombre;
    private $correo;
    private $contra;

    public function inicializar($nombre, $correo, $contra){
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->contra = $contra;
    }

    public function conectarBd(){
        $con = mysqli_connect("localhost", "root", "", "happy")
        or die ("Problemas con el insert");
        return $con;
    }

    public function ingresarUsuario(){
        $registros = mysqli_query($this->conectarBd(), "SELECT * from usuarios where correo = '$this->correo'")
        or die(mysqli_error($this->conectarBd()));
        if ($reg = mysqli_fetch_array($registros)) {
            echo "Usuario Ya registrado";
        }else{
            $insert = mysqli_query($this->conectarBd(), "INSERT into usuarios(nombre, correo, contrasenia)
            values ('$this->nombre', '$this->correo', '$this->contra')") or die ("Problemas al insertar" .mysqli_error($this->conectarBd()));
            echo "Se a alamacenado el usuario";
        }
    }

    public function iniciarSesion($correo, $contra){
        $registros = mysqli_query($this->conectarBd(), "SELECT * from usuarios where correo = '$correo' and contrasenia = '$contra'") 
        or die ("El resgistro no existe". mysqli_error($this->conectarBd()));
        if($registros = mysqli_fetch_array($registros)){
            header("Location: ../perf.html");
        }else{
            echo "Contraseña o correo incorrectos";
        }
    }

    public function cerrarBd(){
        mysqli_close($this->conectarBd());
    }
}
    


        /*$con = mysqli_connect("localhost", "root", "", "happy");
        if ($con) {
            echo "conexion exitosa";
        }else{
            echo"Error con la conexion";
        }
        
        $registros = mysqli_connect($con, "SELECT * FROM usuarios") or die (mysqli_error($con));
        while($reg = mysqli_fetch_array($this->con)){
            $reg = mysqli_query($con, "INSERT into usuarios(nombre, correo, )")
        }*/
    

?>