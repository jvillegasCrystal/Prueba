// Ejemplo de código con errores graves

// Error de escritura en la declaración de la función
funtion funcionConError() {
  // Código con errores de sintaxis
  var x = 10;
  console.log(x);
}

// Acceso a una variable no declarada
function accesoVariableNoDeclarada() {
  console.log(variableNoExistente);
}

// Uso incorrecto de comillas en una cadena
var cadenaConError = "Esta es una cadena mal formada';

// Intento de modificar una constante
const valorConst = 100;
valorConst = 200;

// Uso incorrecto de una función que no existe
funcionQueNoExiste();

// Declaración incorrecta de un objeto
var objetoConError = { clave1: "valor1", clave2: "valor2",};

// Error en la asignación de una propiedad de un objeto
var objeto = {};
objeto.clave1 = "valor1";
objeto.clave2 = "valor2";
objeto.clave3 = "valor3";

// Uso incorrecto de la estructura de control switch
var numero = 3;
switch (numero) {
  case 1:
    console.log("Número 1");
  case 2:
    console.log("Número 2");
  case 3:
    console.log("Número 3");
  default:
    console.log("Default");
}

// Uso incorrecto de operadores lógicos
var resultado = true && false || true;

// Error en la gestión de excepciones
try {
  // Código que arroja un error
  throw new Error("Este es un error grave");
} catch (error) {
  // Manejo incorrecto del error
  console.log("Se produjo un error, pero se ignora");
}

// Falta de gestión de errores en una promesa
fetch("https://example.com/api/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return response.json();
  })
  .then((data) => {
    // Código que no maneja posibles errores en la respuesta
    console.log(data);
  });

