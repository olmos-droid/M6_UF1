/*
algoritme:

agafa la cadena treure els espais del principi i del final
mirar: que tingui una majuscila , que minim tingui 8 digits, y que tingui algun simbol
*/

function checkPass(pass) {
    var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    console.log(pass);
    console.log(regexp.test(pass));
}
