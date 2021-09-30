// Es tracta de fer un programa en JavaScript que mostri per consola l’evolució d’un joc anomenat “El ratolí i el gat”. Aquest joc, disposa d’una pista circular amb 60 caselles que van de la casella 0 a la 59. El ratolí comença a la casella 29 i el gat comença a la 0. El ratolí i el gat tiren alternativament un dau. Comença tirant un dau de sis cares el ratolí. El ratolí avança tantes caselles com indica el dau. El gat retrocedeix el número de caselles que indica el dau multiplicades per dos. El joc s’acaba quan el gat agafa al ratolí (guanya el gat) o quan el ratolí agafa al gat (guanya el ratolí). Agafar significa que ambdós són a la mateixa casella.

// A més, cal mostrar per consola l'evolució del joc, exemple
// Ratolí: He tret un 4. Vaig a la casella 33.
// Gat: He tret un 1. Vaig a la casella 58.
// …
// Ratolí: He tret un 1. Vaig a la casella 40.
// Gat: He tret un 6. Vaig a la casella 40.
// Gat: He guanyat!

// Cal que documenteu

// - L'algorisme i la implementació del càlcul de posició del ratolí.
// - L'algorisme i la implementació del càlcul de posició del gat.
// - L'algorisme i la implementació de finalització del joc.

//  Compte! fem servir l'ojecte Math.random() per la tirada del dau. Aquestes funcions les veurem en la propera sessió.

const taulerMax = 59;
const taulerMin = 0;
const minDau = 1;
const maxDau = 6;
var posGat = 0;
var posRata = 29;
var joc = false;

function tirarDau(player) {
  let resul = Math.random() * (maxDau - minDau) + minDau;
  console.log("Dau tirat per", player, " = ", Number.parseInt(resul));
  return Number.parseInt(resul);
}
function tiraGat() {
  let punts = tirarDau("gat");
  posGat = posGat + punts;
  if (posGat > taulerMax) {
    posGat = taulerMin + (posGat - taulerMax) - 1;
    if (posRata == posGat) {
      console.log("Gat Wins");
      joc = true;
    }
  }
  console.log("posicio del gat " + posGat);
  return true;
}
function tiraRata() {
  let punts = tirarDau("rata");
  posRata = posRata - punts;
  if (posRata < taulerMin) {
    posRata = taulerMax + posRata;
  }

  console.log("posicio de la Rata ", posRata);
  return true;
}
function whoWin(player) {
  if (posRata == posGat) {
    player;
    joc = true;
   º  
    console.info(player, "Wins");
  }
}
function start() {
  console.time("comença el joc");
  do {
    if (!joc) {
      tiraGat();
      whoWin("gat");
    }
    if (!joc) {
      tiraRata();
      whoWin("rata");
    }
  } while (!joc);
  console.timeEnd("comença el joc");
}
