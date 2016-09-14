var http = require("http");
var fs = require("fs");

var server = http.createServer(function (peticion, respuesta){		//Creo un servidor
   console.log("Servidor iniciado en " + this.address().port);		// Anuncio en que puerto es creado
   respuesta.writeHead(200, {"Content-Type": "text/html"});			  // Configuro lo que se muestra en pantalla 
   respuesta.write("<h1>Prueba de Servidor!<h1>");					      // Escribo texto en pantalla!
   var contents = readFileSync("./datos.json");						        // Guardo los datos desde el archivo json
   var jsonContent = JSON.parse(contents);							          // Parseo el archivo
   console.log("Nombre: ", jsonContent.Nombre);						        // Levanto el valor de Nombre
   console.log("Apellido: ", jsoncontent.Apellido);					      // Levanto el valor de Apellido
   console.log("Telefono: ", jsoncontent.Telefono);					      // Levanto el valor del Telefono
   console.log("Mail: ", jsoncontent.Mail);							          // Levanto el valor del Mail
   console.log("\n Saliendo del Servidor!")							          // Indico que termino 
   respuesta.end("Peticion terminada!");							            // Finalizo las tareas en el servidor
}).listen(8888);													                        // Indico el puerto para tomar peticiones
