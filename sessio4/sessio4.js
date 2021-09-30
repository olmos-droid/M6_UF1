/*xercicis
Exercici 1
Escribir un programa donde el usuario elija entre lo siguiente:
Pulse 1 si desea cenar Costilla
Pulse 2 si desea cenar Pescado
Y luego se le pregunte también si desea o no postre
Usar las funciones: prompt y confirm para pedir los datos
 Si eligió cenar Costilla->pago 23 €
 Si eligió cenar Pescado->pago 15 €
 Si tomo postre->el postre valió 3 €
Calcular el valor total de la cena dependiendo de las opciones que elija por teclado el usuario, incluyendo una propina del 6%.
*/

function ex1() {
  var menu = prompt("Escull que vols supar \\n1-Costelles \\n2-Peix\\n");
  var preu = 0;

  switch (menu) {
    case '1':
      preu = preu + 23;
      console.log("valor preu: ", preu);
      break;
    case '2':
      preu = preu + 12;
      console.log("valor preu: ", preu);
      break;
    default:
      break;
  }
  var postre = confirm("vols postre");
  if (postre) {
    console.log("valor de postre:", postre);
    preu = preu + 3;
  }

  preu = preu * 1.06;
  console.log('preu total:' ,preu);
}
/*
Exercici 2
Es tracta de fer un programa en JavaScript que mostri per consola l’evolució d’un joc anomenat “El ratolí i el gat”. Aquest joc, disposa d’una pista circular amb 60 caselles que van de la casella 0 a la 59. El ratolí comença a la casella 29 i el gat comença a la 0. El ratolí i el gat tiren alternativament un dau. Comença tirant un dau de sis cares el ratolí. El ratolí avança tantes caselles com indica el dau. El gat retrocedeix el número de caselles que indica el dau multiplicades per dos. El joc s’acaba quan el gat agafa al ratolí (guanya el gat) o quan el ratolí agafa al gat (guanya el ratolí). Agafar significa que ambdós són a la mateixa casella.

A més, cal mostrar per consola l'evolució del joc, exemple
Ratolí: He tret un 4. Vaig a la casella 33.
Gat: He tret un 1. Vaig a la casella 58.
…
Ratolí: He tret un 1. Vaig a la casella 40.
Gat: He tret un 6. Vaig a la casela 40.
Gat: He guanyat!

Cal que m'entregueu en paper: 

- L'algorisme i la implementació del càlcul de posició del ratolí.
- L'algorisme i la implementació del càlcul de posició del gat.
- L'algorisme i la implementació de finalització del joc.

 OJO, fem servir l'ojecte Math.random() per la tirada del dau. Aquestes funcions les veurem en la propera sessió.

Exercici 3
Fes un programa que demani una frase per pantalla i la retorni per consola. A més, també l’ha de retornar al revès, tant a nivell de lletra com de paraula. 

per paraula: “Hola em dic” -> “dic em Hola”

per lletra: “Hola em dic” -> “cid me aloH”
*/
function reverse22() {
  let str = "hola"
  
  let reverse = str.split("").reverse().join("");
  console.log(reverse);
  
}
function reverseString() {
  let str="hola que tal"
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  console.log(newString);
}
function reverseString() {
  let str= 'hola'
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
