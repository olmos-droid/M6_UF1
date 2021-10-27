function contarOcurrencias(cadena, ocu) {
  console.log("hola");
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    const element = cadena[i];
    if (element == ocu) {
      contador++;
    }
  }
  console.log(contador);
}
function agregarIndice(cadena) {
  let novaCadena = "";
  for (let i = 0; i < cadena.length; i++) {
    novaCadena = novaCadena + cadena[i] + i;
  }
  console.log(novaCadena);
}
function primeraCoincidencia(cadena, ocu) {
  console.log(cadena.indexOf(ocu));
}
function extraerSlice(cadena) {
  let novaCadena = cadena.slice(9);
  console.log(novaCadena);
}
function replace1(cadena, ocu, ocu1) {
  console.log(cadena.replace(ocu, ocu1));
}
function aMinusculas(cadena) {
  console.log(cadena.toLocaleLowerCase());
}
function concatStr(str1, str2) {
  let final = str1.concat(str2);
  console.log(final);
}
function cuentaStr(str1, str2) {
  let index = 0;
  let contador = 0;
  while (index >= 0) {
    index = str1.indexOf(str2);
    console.log(index);
    str1 = str1.slice(index + str2.length);
    console.log(str1);
    contador++;
  }
  console.log(contador - 1);
}
