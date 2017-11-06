<?php
class usuario{

    private $_nombre;
    private $_apellido;
    private $_dni;
    private $_mail;
    private $_password;
    private $_legajo;
    private $_tipo;

    //GETTERS Y SETTERS
    public function getNombre()
    {
        return $this->_nombre;
    }
    public function setNombre($nombre)
    {
        $this->_nombre = $nombre;
    }
    public function getApellido()
    {
        return $this->_apellido;
    }
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }
    public function getDni()
    {
        return $this->_dni;
    }
    public function setDni($dni)
    {
        $this->_dni = $dni;
    }
    public function getPassword()
    {
        return $this->_password;
    }
    public function setPassword($pw)
    {
        $this->_password = $pw;
    }
    public function getLegajo()
    {
        return $this->_legajo;
    }
    public function setLegajo($leg)
    {
        $this->_legajo = $leg;
    }
    public function getTipo()
    {
        return $this->_tipo;
    }
    public function setTipo($tipo)
    {
        $this->_tipo = $tipo;
    }
    //GETTERS Y SETTERS

    //ALTA DE USUARIOS
    public function AgregarProfesor($nombre,$apellido,$dni,$mail,$sexo)
    {
      $rta = false;
      $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
      $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuarios (nombre,apellido,dni,mail,password,tipo,legajo,sexo)values(:nombre,:apellido,:dni,:mail,:password,:tipo,:legajo,:sexo)");
      $consulta->bindValue(':nombre',$nombre, PDO::PARAM_STR);
      $consulta->bindValue(':apellido', $apellido, PDO::PARAM_STR);
      $consulta->bindValue(':dni', $dni, PDO::PARAM_INT);
      $consulta->bindValue(':password', $dni, PDO::PARAM_STR);
      $consulta->bindValue(':sexo', $sexo);
      $consulta->bindValue(':tipo', 2);
      $consulta->bindValue(':legajo', 10);
      if($consulta->execute()){
          $rta = true;
      }
      return $rta;  
    }
    public function AgregarAlumno($nombre,$apellido,$dni,$mail,$sexo)
    {
        $rta = false;
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into  usuarios (nombre,apellido,dni,mail,password,tipo,legajo,sexo)values(:nombre,:apellido,:dni,:mail,:password,:tipo,:legajo,:sexo)");
        $consulta->bindValue(':nombre',$nombre, PDO::PARAM_STR);
        $consulta->bindValue(':apellido', $apellido, PDO::PARAM_STR);
        $consulta->bindValue(':dni', $dni, PDO::PARAM_INT);
        $consulta->bindValue(':password', $dni, PDO::PARAM_STR);
        $consulta->bindValue(':sexo', $sexo);
        $consulta->bindValue(':tipo', 4);
        $consulta->bindValue(':legajo', 1003);
        if($consulta->execute()){
            $rta = true;
        }
        return $rta;
    }
    public function AgregarAdministrativo($nombre,$apellido,$dni,$mail,$sexo)
    {
        $rta = false;
        $objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
        $consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuarios (nombre,apellido,dni,mail,password,tipo,legajo,sexo)values(:nombre,:apellido,:dni,:mail,:password,:tipo,:legajo,:sexo)");
        $consulta->bindValue(':nombre',$nombre, PDO::PARAM_STR);
        $consulta->bindValue(':apellido', $apellido, PDO::PARAM_STR);
        $consulta->bindValue(':dni', $dni, PDO::PARAM_INT);
        $consulta->bindValue(':password', $dni, PDO::PARAM_STR);
        $consulta->bindValue(':sexo', $sexo);
        $consulta->bindValue(':tipo', 3);
        $consulta->bindValue(':legajo', 15);
        if($consulta->execute()){
            $rta = true;
        }
        return $rta;
    }

}
?>