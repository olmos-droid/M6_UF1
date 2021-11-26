const numeros = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const mat_inicial =
    "[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]";
var matriu;
var posX = 0;
var posY = 0;

function pinta_sudoku() {
    document.getElementById("matriu").value = mat_inicial;
    matriu = JSON.parse(mat_inicial);
    //peimera vegada que pinta
    document.getElementById("sudoku").innerHTML =
        "<table id='table' class=' table-bordered' > <tbody id='tbody'> </tbody></table>";
    for (let x = 0; x < matriu.length; x++) {
        document.getElementById("tbody").innerHTML +=
            "<tr id='" + x + "'></tr>";
        for (let y = 0; y < matriu[x].length; y++) {
            if (matriu[x][y] != 0) {
                document.getElementById(x).innerHTML +=
                    "<td> " + matriu[x][y] + " </td>";
            } else {
                matriu[x][y];
                document.getElementById(x).innerHTML += "<td> </td>";
            }
        }
    }
}

//     checkIt(matriu, 0,0, numeros);
// }
function checkNumberX(posX, posY) {
    for (let x = 0; x < matriu.length; x++) {
        console.log(matriu[x][0]);
    }
}
