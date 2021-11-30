const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const MAT_INICIAL =
    "[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]";
var matriu = [[]];

function start() {
    document.getElementById("matriu").value = MAT_INICIAL;
    matriu = JSON.parse(MAT_INICIAL);
    console.table(matriu);
    draw();
}
function resol() {
    var cont = 0;
    var posX = 0;
    var posY = 0;
    var numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos

    do {
        cont=0;
        for (let x = 0; x < matriu.length; x++) {
            for (let y = 0; y < matriu.length; y++) {
                cont++
                if (matriu[x][y] == 0) {
                    for (let z = 0; z < matriu.length; z++) {
                        if (matriu[x][z] != 0) {
                            numEjes.add(matriu[x][z]);
                        }
                    }
                    for (let z = 0; z < matriu.length; z++) {
                        if (matriu[z][y] != 0) {
                            numEjes.add(matriu[z][y]);
                        }
                    }
                    filtroArray = NUMBERS.filter(function (num) {
                        return !numEjes.has(num);
                    });
                    console.log("filtro ", filtroArray);

                    if (filtroArray.length == 1) {
                        matriu[x][y] = filtroArray[0];
                        console.log("Trobat a la pos: y: " + y + " x: " + x);
                        draw();
                        cont = 0;
                        numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos
                    } else {
                        numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos
                    }
                }
            }
        }
    } while (cont < 82);
}

function oneShoot() {
    numEjes = []; // acomulacio de numeros  que hi han en els eixos
    let filtroArray = new Set();

    if (matriu[posY][posX] == 0) {
        for (let y = 0; y < matriu.length; y++) {
            if (matriu[y][posX] != 0) {
                numEjes.push(matriu[y][posX]);
            }
        }
        for (let x = 0; x < matriu.length; x++) {
            if (matriu[posY][x] != 0) {
                numEjes.push(matriu[posY][x]);
            }
        }
        filtroArray = NUMBERS.filter(function (num) {
            return !numEjes.includes(num);
        });

        console.log(
            "les posiblitats son: " +
                filtroArray +
                " lenght=" +
                filtroArray.length
        );
        console.log("y x = ", posY, posX);

        if (filtroArray.length == 1) {
            matriu[posY][posX] = filtroArray[0];
            console.table(matriu);
            draw();
        }
        if (posX == 8) {
            posX = 0;
            posY++;
        } else {
            posX++;
        }
    } else {
        if (posX == 8) {
            posX = 0;
            posY++;
        } else {
            posX++;
        }
    }

    return filtroArray;
}

function draw() {
    document.getElementById("sudoku").innerHTML =
        "<br> <table id='table' class='' > <tbody id='tbody'> </tbody></table>";
    for (let x = 0; x < matriu.length; x++) {
        document.getElementById("tbody").innerHTML += "<tr id=" + x + "></tr>";
        for (let y = 0; y < matriu.length; y++) {
            if (matriu[x][y] != 0) {
                document.getElementById(x).innerHTML +=
                    "<td > <button class='btn btn-outline-dark' id='" +
                    x +
                    y +
                    "' >" +
                    matriu[x][y] +
                    "</button></td>";
            } else {
                document.getElementById(x).innerHTML +=
                    "<td > <button class='btn btn-outline-dark'  id='" +
                    y +
                    x +
                    "'></button></td>";
            }
        }
    }
}
