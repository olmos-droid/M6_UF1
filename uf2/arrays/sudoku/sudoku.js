const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const MAT_INICIAL =
    "[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]";
var matriu;
var posX;
var posY;

function start() {
    let posiblidades = [];
    draw();
    for (let y = 0; y < matriu.length; y++) {
        draw();
        for (let x = 0; x < matriu.length; x++) {
            if (matriu[y][x] == 0) {
                console.log("y: " + y, "x: " + x);
                posiblidades = checkNumberXY(x, y); // buscamos las posiblidades en esa posicion de la matriz
                console.log(posiblidades);
            }
        }
    }
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

function checkNumberXY() {
    console.log(posX,posY);
    let ejeX = []; // acomulacio de numeros que hi han en el eix x
    let ejeY = []; // acomulacio de numeros  que hi han en eñ eix y
    let filtroArray = new Set();
    let numFilaCol = [];

    for (let y = 0; y < matriu.length; y++) {
        //recorremos las posicion en el eje y (vertical)
        ejeY.push(matriu[y][posX]); //guardamos los NUMBERS encontrados sin repetir en el set z
    }
    for (let x = 0; x < matriu.length; x++) {
        //recorremos las posiciones en el eje x (horizontal)
        ejeX.push(matriu[posY][x]); //guardamos los NUMBERS encontrados sin repetir en el set z
    }

    numFilaCol = Array.from(new Set(ejeY.concat(ejeX)));

    filtroArray = NUMBERS.filter(function (num) {
        return !numFilaCol.includes(num);
    });
    return filtroArray;
}
function findNumbers(ejeX, ejeY) {
    filtroArray = new Set();
    numFilaCol = Array.from(new Set(ejeY.concat(ejeX)));
    filtroArray = NUMBERS.filter(function (num) {
        !numFilaCol.includes(num);
    });
    return filtroArray;
}

function noIncludes(arr) {
    filtroArray = NUMBERS.filter(function (num) {
        return !arr.includes(num);
    });
    return filtroArray;
}
