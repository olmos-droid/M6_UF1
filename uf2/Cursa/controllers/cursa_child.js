const metresTotals = opener.cursa._categoria._metres;
const corredorActual = opener.cursa._categoria._aptes[self.name];
corredorActual._horaInici = opener.cursa._horaInici;
const time_mms = 10;
let metres;
let myTime;

function updateMetres() {
  myTime = setTimeout("showMetres()", time_mms);
}
function showMetres() {
  if (corredorActual._isRunning) {
    metres =
      corredorActual._rendiment *
      ((Date.now() - opener.cursa._horaInici) / 1000);
    corredorActual.num_metres = metres;

    document.formChild.c_metres.value =
      Number.parseFloat(metres).toPrecision(5);

    if (document.formChild.c_metres.value < metresTotals) {
      updateMetres();
    }
  }
  checkPoint(metres, opener.cursa._categoria._metres);
}
document.getElementById("title").innerHTML =
  corredorActual._dorsal +
  " " +
  corredorActual._nom +
  " " +
  corredorActual._cognom;
document.formChild.c_name.value =
  corredorActual._nom + "  " + corredorActual._cognom;
document.formChild.c_document.value = corredorActual._document;
document.formChild.c_rendiment.value = Number.parseFloat(
  corredorActual._rendiment
).toPrecision(2);
document.formChild.c_horaInici.value = new Date(corredorActual._horaInici);

function checkPoint(metresActual, metresTotalCursa) {
  if (metresActual >= metresTotalCursa) {
    corredorActual._isRunning = false;
    document.formChild.c_metres2.value = metres;
    corredorActual._horaFinal = Date.now();
    document.formChild.c_horaFinal.value = new Date(corredorActual._horaFinal);

    clearTimeout(myTime);
  }
}
function afegirDorsalClasificacio() {}
