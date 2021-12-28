function updateDateTime() {
  let time_mms = 1000;
  myTime = setTimeout("showDate()", time_mms);
}
function showDate() {
  document.formChild.c_datetime.value =
    opener.document.formParent.p_datetime.value;
}
document.formChild.c_name.value =
  opener.cursa._categoria._inscrits[self.name]._nom +
  "  " +
  opener.cursa._categoria._inscrits[self.name]._cognom;
document.formChild.c_document.value =
  opener.cursa._categoria._inscrits[self.name]._dni;
document.formChild.c_rendiment.value =
  opener.cursa._categoria._inscrits[self.name]._rendiment;
