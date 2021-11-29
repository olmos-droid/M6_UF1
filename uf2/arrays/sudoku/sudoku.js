const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const MAT_INICIAL =
    "[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]";
var matriu = [[]];
var posX;
var posY;

function start() {
    let cont =0
    document.getElementById("matriu").value = MAT_INICIAL;
    matriu = JSON.parse(MAT_INICIAL);
    console.table(matriu);
    document.getElementById("sudoku").innerHTML =
        "<table id='table' class=' table-bordered' > <tbody id='tbody'> </tbody></table>";
    for (let y = 0; y < matriu.length; y++) {
        document.getElementById("tbody").innerHTML +=
            "<tr id=" + y + "></tr>";
        for (let x = 0; x < matriu[y].length; x++) {
            if (matriu[y][x] != 0) {
                document.getElementById(y).innerHTML +=
                    "<td id='"+y+x+"'> " + matriu[y][x] + " </td>";
            } else {
                matriu[y][x];
                document.getElementById(y).innerHTML += "<td id='"+y+x+"'></td>";
            }
        }
    }
    for (let x = 0; x < matriu.length; x++) {
        for (let y = 0; y < matriu.length; y++) {
            if (matriu[x][y]==0){
               cont++;
               
            }

        }
    }
}

/*function start() {
    let posiblidades = [];
    draw();
    for (let y = 0; y < matriu.length; y++) {
        for (let x = 0; x < matriu.length; x++) {
            if (matriu[y][x] == '0') {
                console.log("pos yx -----------: ", y, x);
                posiblidades = checkNumberXY(y, x); // buscamos las posiblidades en esa posicion de la matriz
                console.log('posiblidades.length',posiblidades.length);
                console.log('valor matriu : #',matriu[y][x])
            }
        }
    }
    console.log("movida");
}
function draw() {
    document.getElementById("matriu").value = MAT_INICIAL;
    matriu = JSON.parse(MAT_INICIAL);
    //peimera vegada que pinta
    document.getElementById("sudoku").innerHTML =
        "<table id='table' class=' table-bordered' > <tbody id='tbody'> </tbody></table>";
    for (let y = 0; y < matriu.length; y++) {
        document.getElementById("tbody").innerHTML +=
            "<tr id='" + y + "'></tr>";
        for (let x = 0; x < matriu[y].length; x++) {
            if (matriu[y][x] != 0) {
                document.getElementById(y).innerHTML +=
                    "<td style='color:blue'> " + matriu[y][x] + " </td>";
            } else {
                matriu[y][x];
                document.getElementById(y).innerHTML += "<td></td>";
            }
        }
    }
    console.table(matriu); //matriu inicial
}

function checkNumberXY(py, px) {
    var numEjes = []; // acomulacio de numeros  que hi han en els eixos
    let filtroArray = new Set();

    for (let y = 0; y < matriu.length; y++) {

        numEjes.push(matriu[y][px]); //guardamos los NUMBERS encontrados sin repetir en el set z
    }
    for (let x = 0; x < matriu.length; x++) {

        numEjes.push(matriu[py][x]); //guardamos los NUMBERS encontrados sin repetir en el set z
    }

    filtroArray = NUMBERS.filter(function (num) {
        return !numEjes.includes(num);
    });
    console.log(filtroArray, "este es el Set de numeros que podrian ir ");
    return filtroArray;
}*/
