/*
Esdeveniments del ratolí
Desenvolupa el codi per a utilitzar els esdeveniments click i dblclick en dos botons diferents.
Fes un programa en Javascript on donat un botó qualsevol quan es cliqui el botó del mig, de l’esquerra o la dreta mostri a l’usuari un missatge amb alguna de les propietats de l’esdeveniment. Mostra un altre missatge amb una propietat diferent quan es deixi anar el botó que prèviament ha premut.
Fes un programa en Javascript on donat un botó qualsevol el text del botó canviï a:
“S’ha clicat al botó” quan es cliqui, i quan es deixa de clicar torni al seu valor original. 
Fes un programa en Javascript on donat un botó qualsevol el text del botó canviï a:
El ratolí ha entrat quan el ratolí passi per sobre del botó, i
El ratolí ha marxat quan el ratolí surti del botó.
Esdeveniments del teclat
Fes un programa en JavaScript on donat un camp d’entrada, l’usuari ha d’escriure una tecla i seguidament mostri per consola quina tecla ha estat. 
Amplia l’anterior exercici per a cobrir les tecles ALT, CTRL, SHIFT i ESC.
Esdeveniments HTML
Fes un programa en JavaScript que al carregar la pàgina llanci un esdeveniment per a dir-te hola, i al tancar-la, tornar-la a carregar o canviar de pàgina, et digui adéu.
*/



function ex2(){
    const button = document.getElementById('btn1');
    button.addEventListener ('mouseup',event  => {alert('has desapretat el boto esquerra') });
}
function ex21() {
  const button = document.getElementById("btn2");
  button.addEventListener("click", (event) => {
  changeColor(button)
  });
}
function ex22() {
  const button = document.getElementById("btn3");
  button.addEventListener("click", (event) => {
    changeColor2(button);
  });
}

function changeColor2(btn) {
  btn.style.background = "blue";
}
function changeColor(btn) {
  btn.style.color = "blue";
}