const metresTotals = opener.cursa._categoria._metres;
const corredorActual = opener.cursa._categoria._inscrits[self.name];
corredorActual._horaInici = opener.cursa._horaInici;

function updateMetres() {
  if (document.formChild.c_metres.value >= opener.cursa._categoria._metres) {
    console.log(Date.now());
  }
  let time_mms = 20;
  myTime = setTimeout("showMetres()", time_mms);
}
function showMetres() {
  const metres =
    corredorActual._rendiment * (Date.now() - opener.cursa._horaInici);
  document.formChild.c_metres.value = Number.parseFloat(metres).toPrecision(5);
  checkPoint(metres, opener.cursa._categoria._metres);

  if (document.formChild.c_metres.value < metresTotals) {
    updateMetres();
  }
}

document.formChild.c_name.value =
  corredorActual._nom + "  " + corredorActual._cognom;
document.formChild.c_document.value = corredorActual._dni;
let rend = corredorActual._rendiment;
document.formChild.c_rendiment.value = Number.parseFloat(rend).toPrecision(2);
document.formChild.c_horaInici.value = new Date(corredorActual._horaInici);


function checkPoint(metresActual, metresTotalCursa) {
  if (metresActual >= metresTotalCursa) {
    corredorActual._horaFinal= Date.now();
document.formChild.c_horaFinal.value = new Date(corredorActual._horaFinal);
corredorActual._isRunning = true;
    // alert(corredorActual._nom + " ja ha aribat");
  }
}
function afegirDorsalClasificacio() {}
