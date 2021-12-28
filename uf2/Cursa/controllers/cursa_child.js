function updateMetres() {
  if (document.formChild.c_metres.value >= opener.cursa._categoria._metres) {
    console.log(Date.now());
  }
  let time_mms = 100;
  myTime = setTimeout("showMetres()", time_mms);
}
function showMetres() {
  document.formChild.c_metres.value =
    opener.cursa._categoria._inscrits[self.name]._rendiment *
    (Date.now() - opener.cursa._horaInici);
  if (document.formChild.c_metres.value < opener.cursa._categoria._metres) {
    updateMetres();
  }
}
document.formChild.c_name.value =
  opener.cursa._categoria._inscrits[self.name]._nom +
  "  " +
  opener.cursa._categoria._inscrits[self.name]._cognom;
document.formChild.c_document.value =
  opener.cursa._categoria._inscrits[self.name]._dni;
document.formChild.c_rendiment.value =
  opener.cursa._categoria._inscrits[self.name]._rendiment;
document.formChild.c_metres.value = "metres";
