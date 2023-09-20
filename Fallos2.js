// Más malas prácticas en JavaScript

// Declaración de variables con nombres confusos o incomprensibles
var a = "texto1";
var b = "texto2";

// Uso excesivo de variables globales
var globalVariable1 = 100;
var globalVariable2 = "global";

function funcionConVariablesGlobales() {
  globalVariable1 += 50; // Modifica una variable global
  var localVariable = 10; // Declaración innecesaria de una variable local
}

// Abuso de funciones anónimas y callbacks en lugar de usar funciones nombradas y claras
setTimeout(function() {
  // Código confuso dentro de una función anónima
}, 1000);

// Ignorar el uso de 'strict mode'
function strictModeOff() {
  nonStrictVariable = "Esto no debería funcionar en modo estricto";
}

// Concatenar cadenas de texto con el operador '+' en lugar de usar plantillas de cadena
var nombre = "Juan";
var apellido = "Perez";
var nombreCompleto = nombre + " " + apellido;

// Uso incorrecto de '=='
if (valor == "5") {
  // Esto puede llevar a errores de tipo
}

// No manejar los errores de manera adecuada
try {
  // Código que puede arrojar errores
} catch (e) {
  // No se registra ni se maneja el error
}

// No usar el operador '===' para comparaciones estrictas
if (1 == "1") {
  // Esto se evalúa como verdadero debido a la conversión de tipos automática
}

// No utilizar un sistema de control de versiones como Git
// Esto dificulta el seguimiento de cambios en el código y la colaboración en equipo

// No escribir pruebas unitarias o de integración
// Esto hace que sea difícil detectar y corregir errores a medida que se desarrolla el código

// Ignorar los comentarios, la documentación y las convenciones de estilo
// Dificulta la comprensión y el mantenimiento del código

// No utilizar herramientas de análisis estático de código como Codacy para identificar problemas automáticamente

