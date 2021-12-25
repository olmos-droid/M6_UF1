var owindow = null; // global

function openWindow() {
  owindow = newWin = window.open(
    "child.html",
    "finestra1",
   
  );
  // owindow.opener.document.form_parent.p_text.value = owindow.name;
}
function closeThis(finestra) {
  self.close();
}

function parent_say(){
owindow.document.form_child.c_name.value="hola";
}
