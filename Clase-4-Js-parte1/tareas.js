// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return array[array.length - 1];
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length;
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      array[i] = array[i] + 1;
    }
  }
  return array;

  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  let frase = palabras.join(" ");
  return frase;
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {
  return array.includes(elemento);

  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (Number.isInteger(numeros[i])) {
      suma += numeros[i];
    }
  }
  return suma;

  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    if (Number.isInteger(resultadosTest[i])) {
      suma += resultadosTest[i];
    }
  }
  let promedio = suma / resultadosTest.length;
  return promedio;

  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  let elmasgroso = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (Number.isInteger(numeros[i])) {
      if (numeros[i] > elmasgroso) {
        elmasgroso = numeros[i];
      }
    }
  }
  return elmasgroso;

  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function cuentoElementos(arreglo) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19) {
      contador++;
    }
  }
  return contador;

  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
}

function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }

  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí:
}

function empiezaConNueve(n) {
  let revision = n.toString();
  if (revision.charAt(0) === "9") {
    return true;
  } else {
    return false;
  }
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
}

function todosIguales(arreglo) {
  let iguales = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] === iguales) {
      return true;
    } else {
      return false;
    }
  }
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
}

function mesesDelAño(array) {
  let verif = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Marzo" ||
      array[i] === "Noviembre" ||
      array[i] === "Enero"
    ) {
      verif.push(array[i]);
    }
  }
  if (verif.length === 3) {
    return verif;
  } else {
    return "No se encontraron los meses pedidos";
  }

  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

function mayorACien(array) {
  let verif = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > "100") {
      verif.push(array[i]);
    }
  }
  return verif;
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
