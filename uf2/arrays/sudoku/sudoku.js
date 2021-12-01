const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const MAT_INICIAL =
    "[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]";
// const MAT_INICIAL ="[[0,1,7,0,4,5,0,0,0], [0,9,4,0,2,0,8,5,1], [0,6,0,8,0,0,0,7,3], [1,2,0,0,0,0,6,8,0], [5,0,9,1,6,2,0,0,4], [0,4,0,0,0,8,0,1,9], [0,0,2,9,1,3,0,0,0], [0,0,1,6,8,0,0,0,2], [0,0,0,2,0,0,0,9,0]]";
var matriu = [[]];

function start() {
    document.getElementById("matriu").value = MAT_INICIAL;
    matriu = JSON.parse(MAT_INICIAL);
    console.table(matriu);
    draw();
}
function resol() {
    var numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos

    var cont = 0;
    for (let x = 0; x < matriu.length; x++) {
        for (let y = 0; y < matriu.length; y++) {
            console.log("contador: " + cont++);
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
                // console.log("filtro ", filtroArray);

                let primer_cua = x - (x % 3);
                let primer_cua2 = y - (y % 3);

                numEjes = new Set();

                for (let i = primer_cua; i < primer_cua + 3; i++) {
                    for (let j = primer_cua2; j < primer_cua2 + 3; j++) {
                        numEjes.add;
                    }
                }

                if (filtroArray.length == 1) {
                    matriu[x][y] = filtroArray[0];
                    draw();
                    numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos
                } else {
                    numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos
                }
            }
        }
    }
}

function draw() {
    document.getElementById("sudoku").innerHTML =
        "<br> <table id='table' class='' > <tbody id='tbody'> </tbody></table>";
    for (let x = 0; x < matriu.length; x++) {
        document.getElementById("tbody").innerHTML += "<tr id=" + x + "></tr>";
        for (let y = 0; y < matriu.length; y++) {
            if (matriu[x][y] != 0) {
                document.getElementById(x).innerHTML +=
                    "<td > <button class='btn btn-primary' id='" +
                    x +
                    y +
                    "' >" +
                    matriu[x][y] +
                    "</button></td>";
            } else {
                document.getElementById(x).innerHTML +=
                    "<td > <button style='display:none' class='btn btn-secondary'  id='" +
                    y +
                    x +
                    "'></button></td>";
            }
        }
    }
    console.log("array dibujado");
}
