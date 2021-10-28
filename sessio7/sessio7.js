/*
algoritme:

agafa la cadena treure els espais del principi i del final
mirar: que tingui una majuscila , que minim tingui 8 digits, y que tingui algun simbol
*/

function checkPass(pass) {
  var regexp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*/./-/_])(?=.{8,})/;
  // var regexp = /^(?=.*[!@#$%^&*/./-/_])(?=.{8,})/;

  document.getElementById("textarea").value = pass;
  document.getElementById("textarea").value = regexp.test(pass);
}
function checkMail(email) {
  var regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  document.getElementById("textarea").value = email;
  document.getElementById("textarea").value = regexp.test(email);
}
function checkRepeat(cadena) {
  let contadorLLetres = 0;
  let novaCadena = "";
  let cadenaOriginal = false;
  let cadenaArray = cadena.split("");

  for (let i = 0; i < cadenaArray.length; i++) {
    let lletra = cadenaArray[i];

    if (lletra == cadenaArray[i + 1]) {
      cadenaOriginal = true;
      contadorLLetres++;
    } else {
      contadorLLetres++;
      novaCadena = novaCadena + lletra + contadorLLetres;
      contadorLLetres = 0;
    }
  }
  if (cadenaOriginal) {
    return (document.getElementById("textarea").value = novaCadena);
  }
  return (document.getElementById("textarea").value = cadena);
}

function nav() {
  document.getElementById("textarea").value = "";
  let navegador = "estas utilizant el navegador " + navigator.appName;
  let len = navigator.language;
  let salutacio = "";

  switch (len) {
    case "es":
      salutacio = "hola, como estas?";
      break;
    case "en":
      salutacio = "hello, how are u";
      break;
    case "ca":
      salutacio = "hola,com estas?";
      break;
    default:
      break;
  }
  return (document.getElementById("textarea").value =
    salutacio + "\n" + navegador + " \n");
}

function esrever(str) {
  if (str) {
    let reverse = str.split("").reverse().join("");
    return (document.getElementById("textarea").value = reverse);
  } else {
    return (document.getElementById("textarea").value =
      "introdueix dades al camp de text");
  }
}
function screen50() {
  let finestra = window.open("", "");

  self.focus();
  document.getElementById("textarea").value =
    "La finestra que al ser inferior del 50% salta una alerta";
  let h = window.outerHeight;
  let w = window.outerWidth;

  let maxH = screen.availHeight / 2;
  let minW = screen.availWidth / 2;

  if (h < maxH && w < minW) {
    alert("ventana mas pequeña que el 50%");
  }
}
function localS(str) {
  if (str) {
    localStorage.setItem("item", str);
  } else {
    return (document.getElementById("textarea").value =
      "introdueix dades al camp de text");
  }
}
