function updateDateTime() {
  let time_mms = 1000;
  myTime = setTimeout("showDate()", time_mms);
}
function showDate() {
  let x = new Date();

  // document.getElementById("datetime").innerHTML =
  //   "inici cursa: " +
  //   x.getHours() +
  //   ":" +
  //   x.getMinutes() +
  //   ":" +
  //   x.getSeconds();
  document.formChild.c_datetime.value =
    "inici cursa: " +
    x.getHours() +
    ":" +
    x.getMinutes() +
    ":" +
    x.getSeconds();
  updateDateTime();
}
document.formChild.c_name.value =
  opener.cursa._categoria._inscrits[self.name]._nom +
  "  " +
  opener.cursa._categoria._inscrits[self.name]._cognom;
document.formChild.c_document.value =
  opener.cursa._categoria._inscrits[self.name]._dni;
document.formChild.c_rendiment.value=opener.cursa._categoria._inscrits[self.name]._rendiment;