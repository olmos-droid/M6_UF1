// Retorna un nombre sencer aleatori entre min (inclòs) i max (exclòs):   Math.floor(Math.random() * (max - min)) + min;
/*
Date
Calcula els milisegons que falten fins al dia del teu aniversari.

Demana una Data hora per teclat. Què passa si s’assigna amb el mètode setHours el valor 26? Què passa si s’assigna amb el mètode setMinutes el valor 65? Què passa si s’assigna com a dia de mes 35?

Demana la data de naixement a un usuari, i mostra l’edat en anys, mesos, dies, segons i milisegons.

Crea un programa que mostri per pantalla la data en format català. Per exemple: 11 de setembre de 1714.

Crea un programa que mostri per pantalla l’hora en format català. Per exemple: 01:45 tres quarts de dues // Calculem únicament els quarts

Crea un programa que mostri l’hora per pantalla en format digital i l’actualitzi cada segon.

Crea un programa on es demani a l’usuari una data, i calculi quants dies falten, o han passat respecte a la data actual.

Crea un comptador on es mostrin els anys, mesos, dies, hores i segons que falten fins a la inauguració dels pròxims Jocs Olímpics.

Crea un programa on es validi el format de la data introduïda a un formulari.

Crea un programa on es demanin dues dates i digui quina és la més gran.

Validar si una persona era major edat, en la data donada.
*/

function segonsCumple() {
    let now = Date.now();
    let birthday = new Date(2021, 12, 08);
    console.log("ARA: ", now);
    console.log("CUMPLE", birthday.getTime());

    let diff = birthday - now;
    console.log("falten :", diff, " milisegons");
}

function demanadata() {
    let date = new Date();
    let introData = prompt(
        "introdueix una data: (dd/mm/yyyy)",
        date.getTime(),
        date.getMonth(),
        date.getFullYear()
    );
    // fdate.getDate()+'/'+(date.getMonth()+1)+'/'+date.getYear());

    console.log("la data introduida es: ", date);
}

/*
Math
Fes un programa que demani dos números a l’usuari i retorni un valor aleatori enter comprès entre aquests dos números, ambdós inclosos
*/

function mathAmbdosInclos(min, max) {
    for (let index = 0; index < 100; index++) {
        console.log(parseInt(Math.random() * (max + 1 - min) + min));
    }
}

/*
Number
Fes un programa on es forci el resultat NaN i es mostri per pantalla.


Fes un programa on es forci el resultat -Infinity o Infinity i es mostri per pantalla.

Fes un programa per validar que no es un número

Valida la longitud del campo código postal
*/

function retornaNAN() {
    console.log(Math.sqrt(-1));
}
function retornaInfinit() {
    console.log(Number.MAX_VALUE * -2);
}

function validarNaN() {
  return console.log(parseInt(Math.sqrt(-1)));
}

function validarCodPostal(codPostal) {
  console.log(parseInt(codPostal));
    if(codPostal.length==5 && parseInt(codPostal)>0 && parseInt(codPostal)<57073){
      return console.log('es un codi postal');
    }
    return console.log('no es un codi postal');
}
