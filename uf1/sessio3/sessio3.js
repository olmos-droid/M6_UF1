/*Exercicis
Realiza un ejercicio en el que se le pida al usuario un valor numérico y mediante un bucle while haga una cuenta atrás mostrándola mediante una ventana.
Realiza el mismo ejercicio, pero con un bucle for.
Crear un programa que lea un número entero y a partir de él cree un cuadrado de asteriscos con ese tamaño.
Fes un programa que demani un número i calculo la seva taula de multiplicar*/

function countDows() {
  var valor = prompt("introduix num");
  var down = valor;
  for (let index = valor; index >= 0; index--) {
    console.log(down--);
  }
}

function countDowsWhile() {
  var valor = prompt("introduix num");

  while (valor >= 0) {
    console.log(valor--);
  }
}
function cuadrado() {
  var costat = prompt("mesura del cuadrad:");
  var h = "";
  for (let i = 0; i <= costat; i++) {
    console.log(h);
    h = "";
    for (let j = 0; j <= costat; j++) {
      h = h + " * ";
    }
  }
}

function taulaMulty() {
  const valor = parseInt(prompt("introduix num"));

  for (let i = 0; i < 10; i++) {
    console.log(i, "x", valor, "=", i * valor);
  }
}
