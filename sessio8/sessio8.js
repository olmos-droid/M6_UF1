// Exercicis Navigator
// Fes un programa que saludi a l’usuari en l’idioma predefinit del navegador i li informi del sistema operatiu i navegador utilitzats.

// Amplia l’anterior programa indicant si la combinació de sistema operatiu i navegador està suportada, o no.

// Exercicis Screen
// Fes un programa que quan detecti que la mida de la finestra és menor al 50% de la mida total disponible per a finestres, salti un missatge.
// Exercicis History
// Implementa la funcionalitats dels botons endarrera, endavant i recarrega.
// Exercicis Location
// Fes un programa que en apretar un botó carregui una nova pàgina web -la que vulguis- al mateix document conservant l’historial.

// Modifica l’anterior codi per a que no conservi l’historial.

//ejercici que obri una finezstra i quan canvii de minut es tanqui

function openCloseMinute() {
    let date = new Date(Date.now());
    let minutStart = date.getMinutes();
    let minutEnd = minutStart + 1;

    console.log(minutStart);
    console.log(minutEnd);

    var window1 = new Window();
    // setTimeout(function () {
    //     notification.close();
    // }, 1000);

    // while (minutStart!=minutEnd){
    //     date = Date.now();
    //     minutStart = date.getMinutes();
    // }
    // close();

    // alert('encara no a pasat un minut');
}
function nav() {
    console.log("estas utilizant el navegador " + navigator.appName);
    let len = navigator.language;

    switch (len) {
        case "es":
            console.log("hola, como estas?");
            break;
        case "en":
            console.log("hello, how are u");
            break;
        case "ca":
            console.log("hola,com estas?");
            break;
        default:
            break;
    }
    console.log("El teu sistema operatiu es el " + navigator.platform);
    let navegadors = navigator.userAgent;
    /*
  console.log(`Els navegadors utilizats son : ${navegadors}`);
  console.log(`appName: ${window.navigator.appName}`);
  console.log(`appVersion: ${navigator.appVersion}`);
  console.log(`cookieEnabled: ${navigator.cookieEnabled}`);
  console.log(`language: ${navigator.language}`);
  console.log(`onLine: ${navigator.onLine}`);
  console.log(`platform: ${navigator.platform}`);
  console.log(`product: ${navigator.product}`);
  console.log(`userAgent: ${navigator.userAgent}`);
  */
}
function screenEx(params) {
    let h = window.outerHeight;
    let w = window.outerWidth;

    let maxH = screen.availHeight / 2;
    console.log(maxH);
    let maxW = screen.availWidth / 2;
    console.log(maxW);

    document.getElementById("alto").innerHTML = h;
    document.getElementById("ancho").innerHTML = w;

    if ((h < maxH) && (w < maxW)) {
        alert("ventana mas pequeña que el 50%");
    }
}
function reload(){
   ;
}


