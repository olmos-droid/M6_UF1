/*
algoritme:

agafa la cadena treure els espais del principi i del final
mirar: que tingui una majuscila , que minim tingui 8 digits, y que tingui algun simbol
*/

function checkPass(pass) {
    // var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    var regexp = /^(?=.*[!@#$%^&*/./-/_])(?=.{8,})/;

    console.log(pass);
    console.log(regexp.test(pass));
}
function checkMail(email) {
    var regexp =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email);
    console.log(regexp.test(email));
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
        return console.log(novaCadena);
    }
    return console.log(cadena);
}
