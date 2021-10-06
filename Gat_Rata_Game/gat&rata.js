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


//declaro les variable segons si son constant o no.
const taulerMax = 59; // tamany max del tauler
const taulerMin = 0;//tauler minim del tauler
const minDau = 1; //les cares minimes del dau
const maxDau = 6;//les cares maximes del dau
var posGat = 0; //la posicio inicial on comença el gat
var posRata = 29; //la posicio inicial on comença la rata
var joc = false; // booleana per saber si el joc acaba (qui ha guañat)


//aquesta funcio tira el dau oi li passa per parametre el jugador que tira el dau
function tirarDau(player) {
  let resul = Math.random() * (maxDau - minDau) + minDau;
  console.log("Dau tirat per", player, " = ", Number.parseInt(resul));
  return Number.parseInt(resul);
}
//funcio en la que tira el gat
function tiraGat() {
  let punts = tirarDau("gat");
  posGat = posGat + punts;
  if (posGat > taulerMax) {
    posGat = taulerMin + (posGat - taulerMax) - 1;
  }
  console.log("posicio del gat " + posGat);
  return true;
}
//funcio en la que tira la rata
function tiraRata() {
  let punts = tirarDau("rata");
  posRata = posRata - punts;
  if (posRata < taulerMin) {
    posRata = taulerMax + posRata;
  }
  console.log("posicio de la Rata ", posRata);
  return true;
}

//funcio de mirar que guanya se li pasa el jugador que a tirat el dau
function whoWin(player) {
  if (posRata == posGat) {
    player;
    joc = true;
    console.info(player, "Wins");
  }
}

//comença el joc amb un do -while fins que algu dels dos trepitja a l'altre
function start() {
  //posa el crono per mirar quan tarda la jugada
  console.time("comença el joc");
  do {
    if (!joc) {
      //tira el gat
      tiraGat();
      //comprovacio de si ha atrapat a la rata
      whoWin("gat");
    }
    if (!joc) {
      // tira la rata
      tiraRata();
      // mirem si la rata trepitja le gat
      whoWin("rata");
    }
  } while (!joc);
  //una vegada hi ha guanyador para el crono per mirar quanha durat la partida
  console.timeEnd("comença el joc");
}
