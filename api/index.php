<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';
require_once './clases/AccesoDatos.php';
require_once './clases/persona.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*

¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

$app = new \Slim\App(["settings" => $config]);
//ALTA PROFESOR*******************/
$app->post('/altaProfesor',function($request,$response){
    $datos = $request->getParsedBody();
    $nombre = $datos['nombre'];
    $apellido = $datos['apellido'];
    $password = $datos['dni'];
    $mail = $datos['mail'];
    $sexo = $datos['sexo'];
    $response->write(usuario::AgregarProfesor($nombre,$apellido,$password,$mail,$sexo));
});
//********************************/
//ALTA ADMINISTRATIVO*******************/
$app->post('/altaAdministrativo',function($request,$response){
    $datos = $request->getParsedBody();
    $nombre = $datos['nombre'];
    $apellido = $datos['apellido'];
    $password = $datos['dni'];
    $mail = $datos['mail'];
    $sexo = $datos['sexo'];
    $response->write(usuario::AgregarAdministrativo($nombre,$apellido,$password,$mail,$sexo));
});
//*************************************/
//ALTA ALUMNO*******************/
$app->post('/altaAdministrativo',function($request,$response){
    $datos = $request->getParsedBody();
    $nombre = $datos['nombre'];
    $apellido = $datos['apellido'];
    $password = $datos['dni'];
    $mail = $datos['mail'];
    $sexo = $datos['sexo'];
    $response->write(usuario::AgregarAlumno($nombre,$apellido,$password,$mail,$sexo));
});
//******************************/






//require_once "saludo.php";
//*******************************************************************************
$app->post('/agregarUsuario',function($request,$response){
    $nombre = $request->getParam("nombre");
    $mail = $request->getParam("mail");
    $sexo = $request->getParam("sexo");
    $password = $request->getParam("password");
    //$datos = $request->getParsedBody();
    $response->write(Persona::AgregarUsuario($nombre,$mail,$sexo,$password));
});
$app->post('/caca',function($request,$response){
    $datos = $request->getParsedBody();
    $response->write(Persona::AgregarUsuario($datos["nombre"],$datos["mail"],$datos["sexo"],$datos["password"]));
});

//*******************************************************************************
$app->get('/traerTodasLasPersonas', function($request,$response)
{
    $response->getbody()->write(persona::TodasLasPersonas());
    //$response->getbody()->write("HOLAAA");
    return $response;
});

$app->get('[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("GET => Bienvenido!!! ,a SlimFramework");
    return $response;

});

$app->post('[/]', function (Request $request, Response $response) {   
    $response->getBody()->write("POST => Bienvenido!!! ,a SlimFramework");
    return $response;

});

$app->put('[/]', function (Request $request, Response $response) {  
    $response->getBody()->write("PUT => Bienvenido!!! ,a SlimFramework");
    return $response;

});

$app->delete('[/]', function (Request $request, Response $response) {  
    $response->getBody()->write(" DELETE => Bienvenido!!! ,a SlimFramework");
    return $response;

});



$app->get('/datos/', function (Request $request, Response $response) {     
    $datos = array('nombre' => 'rogelio','apellido' => 'agua', 'edad' => 40);
    $newResponse = $response->withJson($datos, 200);  
    return $newResponse;
});

$app->post('/datos/', function (Request $request, Response $response) {    
    $ArrayDeParametros = $request->getParsedBody();
   // var_dump($ArrayDeParametros);
    $objeto= new stdclass();
    $objeto->nombre=$ArrayDeParametros['nombre'];
    $objeto->apellido=$ArrayDeParametros['apellido'];
    $objeto->edad=$ArrayDeParametros['edad'];
    $newResponse = $response->withJson($objeto, 200);  
    return $newResponse;

});

/* atender todos los verbos de HTTP*/
$app->any('/cualquiera/[{id}]', function ($request, $response, $args) {
    
    var_dump($request->getMethod());
    $id=$args['id'];
    $response->getBody()->write("cualquier verbo de ajax parametro: $id ");
    return $response;
});



/* atender algunos los verbos de HTTP*/
$app->map(['GET', 'POST'], '/mapeado', function ($request, $response, $args) {

      var_dump($request->getMethod());
     $response->getBody()->write("Solo POST y GET");
});


/* agrupacion de ruta*/
$app->group('/saludo', function () {

    $this->get('/{nombre}', function ($request, $response, $args) {
        $nombre=$args['nombre'];
        $response->getBody()->write("HOLA, Bienvenido <h1>$nombre</h1> a la apirest de 'CDs'");
    });

     $this->get('/', function ($request, $response, $args) {
        $response->getBody()->write("HOLA, Bienvenido a la apirest de 'CDs'... ingresá tu nombre");
    });
 
     $this->post('/', function ($request, $response, $args) {      
        $response->getBody()->write("HOLA, Bienvenido a la apirest por post");
    });
     
});


/* agrupacion de ruta y mapeado*/
$app->group('/usuario/{id:[0-9]+}', function () {

    $this->map(['POST', 'DELETE'], '', function ($request, $response, $args) {
        $response->getBody()->write("Borro el usuario por p");
    });

    $this->get('/nombre', function ($request, $response, $args) {
        $response->getBody()->write("Retorno el nombre del usuario del id ");
    });
});




/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->group('/persona', function () {   

$this->get('/', \persona::class . ':traerTodos');
$this->get('/{id}', \persona::class . ':traerUno');
$this->delete('/{id}', \personacd::class . ':BorrarUno');
$this->put('/', \persona::class . ':ModificarUno');
//se puede tener funciones definidas
/*SUBIDA DE ARCHIVO*/
$this->post('/', function (Request $request, Response $response) {
  
    
    $ArrayDeParametros = $request->getParsedBody();
    //var_dump($ArrayDeParametros);
    $titulo= $ArrayDeParametros['titulo'];
    $cantante= $ArrayDeParametros['cantante'];
    $año= $ArrayDeParametros['anio'];
    
    $micd = new persona();
    $micd->titulo=$titulo;
    $micd->cantante=$cantante;
    $micd->año=$año;
    $micd->InsertarElCdParametros();

    $archivos = $request->getUploadedFiles();
    $destino="./fotos/";
    //var_dump($archivos);
    //var_dump($archivos['foto']);

    $nombreAnterior=$archivos['foto']->getClientFilename();
    $extension= explode(".", $nombreAnterior)  ;
    //var_dump($nombreAnterior);
    $extension=array_reverse($extension);

    $archivos['foto']->moveTo($destino.$titulo.".".$extension[0]);
    $response->getBody()->write("cd");

    return $response;

});

     
});











$app->run();