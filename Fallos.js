// Malas prácticas en JavaScript

// Declaración de variables globales sin 'var', 'let' o 'const'
miVariableGlobal = 10;

function miFuncion() {
  // Uso de variables sin declaración
  variableNoDeclarada = 20;

  // Declaración de una función dentro de un bucle
  for (i = 0; i < 5; i++) {
    function funcionDentroDelBucle() {
      console.log("Esto es una mala práctica");
    }
    funcionDentroDelBucle();
  }

  // Uso excesivo de sentencias 'if-else' anidadas
  if (condicion1) {
    // Código
  } else {
    if (condicion2) {
      // Código
    } else {
      // Código
    }
  }

  // No manejo de excepciones
  try {
    // Código que puede arrojar errores
  } catch (error) {
    // No se hace nada con el error
  }

  // Uso de 'eval'
  eval("console.log('No se debe usar eval')");

  // Código duplicado
  console.log("Este es un mensaje duplicado");
  console.log("Este es un mensaje duplicado");

  // Falta de comentarios y documentación
  function funcionSinComentarios() {
    // Código sin comentarios explicativos
  }

  // Uso de nombres de variables poco descriptivos
  var x = 100; // ¿Qué representa 'x'?

  // No seguir una convención de nomenclatura
  function miFuncion_MalaNomenclatura() {
    // Código
  }

  // Falta de semicolon al final de las declaraciones
  var variable1 = "Hola"
  var variable2 = "Mundo"

  // Código no optimizado y poco eficiente
  for (i = 0; i < 1000; i++) {
    // Operaciones costosas
  }
}
