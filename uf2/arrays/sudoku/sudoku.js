const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const MAT_INICIAL =("[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]");
// const MAT_INICIAL = "[[0,1,7,0,4,5,0,0,0], [0,9,4,0,2,0,8,5,1], [0,6,0,8,0,0,0,7,3], [1,2,0,0,0,0,6,8,0], [5,0,9,1,6,2,0,0,4], [0,4,0,0,0,8,0,1,9], [0,0,2,9,1,3,0,0,0], [0,0,1,6,8,0,0,0,2], [0,0,0,2,0,0,0,9,0]]";

// No funcionan
// const MAT_INICIAL ="[[0,0,0,7,0,6,3,9,0], [7,0,0,4,0,0,0,8,2], [0,5,0,0,0,3,0,0,0], [0,4,5,0,0,0,0,6,3], [0,0,0,8,0,0,2,0,0], [3,0,2,0,0,4,0,0,0], [0,6,0,0,9,8,0,0,0], [5,8,7,0,2,1,4,3,0], [9,0,3,0,4,7,6,1,8]]";

// Funcionan
// const MAT_INICIAL = ("[[0, 0, 3, 2, 0, 0, 0, 1, 0], [0, 1, 0, 0, 6, 9, 0, 7, 5], [0, 9, 6, 0, 7, 5, 3, 0, 2], [0, 6, 0, 0, 5, 0, 0, 0, 8], [0, 8, 0, 0, 3, 6, 2, 4, 9], [0, 7, 0, 9, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 7, 0, 9, 0],[0, 0, 0, 0, 0, 0, 5, 2, 7],[8, 2, 7, 0, 9, 0, 1, 6, 3],]");
// const MAT_INICIAL = "[[0, 1, 7, 0, 4, 5, 0, 0, 0],[0, 9, 4, 0, 2, 0, 8, 5, 1],[0, 6, 0, 8, 0, 0, 0, 7, 3],[1, 2, 0, 0, 0, 0, 6, 8, 0],[5, 0, 9, 1, 6, 2, 0, 0, 4],[0, 4, 0, 0, 0, 8, 0, 1, 9],[0, 0, 2, 9, 1, 3, 0, 0, 0],[0, 0, 1, 6, 8, 0, 0, 0, 2],[0, 0, 0, 2, 0, 0, 0, 9, 0]]";
const MAT_INICIAL = "[[0,0,0,0,0,0,1,0,0],[0,8,1,0,9,3,0,4,5],[4,0,0,0,5,0,0,3,2],[9,0,0,5,0,4,0,7,8],[0,5,8,3,0,0,0,0,9],[0,0,0,8,2,0,0,0,0],[5,0,0,2,7,0,0,8,4],[6,0,4,1,3,8,2,0,7],[8,0,2,9,0,0,6,0,0]]";
// const MAT_INICIAL = "[[1,3,2,0,8,0,0,7,4],[0,0,8,7,3,0,2,0,0],[7,6,4,0,0,0,8,0,0],[4,2,0,5,0,0,0,1,9],[0,0,5,3,0,0,7,0,0],[6,0,0,1,0,0,0,5,2],[0,0,6,4,7,3,0,0,0],[0,4,9,0,0,1,0,0,0],[8,0,1,0,2,0,0,0,3]]";
// const MAT_INICIAL = "[[2,0,9,0,6,0,0,3,8],[0,0,4,5,0,8,1,0,0],[6,0,5,0,0,0,4,0,9],[0,5,0,3,4,0,0,2,0],[0,0,0,0,0,1,0,0,0],[4,7,0,0,0,6,8,9,1],[0,0,0,4,2,0,9,1,3],[0,4,2,9,1,0,6,0,0],[0,9,7,0,0,0,2,0,4]]";
var matriu = [[]];

function start() {
    
    document.getElementById("matriu").value = MAT_INICIAL;
    matriu = JSON.parse(MAT_INICIAL);
    console.table(matriu);
    draw();

}
function oneShoot() {
    draw();
    let trobat = false;
    let numEjes = new Set(); // acomulacio de numeros  que hi han en els eixos
   
        for (let x = 0; x < matriu.length; x++) {
            if (!trobat) {
                for (let y = 0; y < matriu.length; y++) {
                    if (!trobat) {
                        if (matriu[x][y] == 0) { // miramos si en el sudoku simple podemmos insertar numero
                            let headX = x - (x % 3);
                            let headY = y - (y % 3);

                            for (let i = headX; i < headX + 3; i++) { // miramos cuantas posiblidades hay segun sudoku simple 3x3
                                for (let j = headY; j < headY + 3; j++) {
                                    numEjes.add(matriu[i][j]);
                                }
                            }

                            for (let z = 0; z < matriu.length; z++) { //miramos la cuantas posiblidades hay segun la columna
                                //numeros columnes
                                if (matriu[x][z] != 0) {
                                    numEjes.add(matriu[x][z]);
                                }
                            }
                            for (let z = 0; z < matriu.length; z++) {
                                // comproba numero de files
                                if (matriu[z][y] != 0) {
                                    numEjes.add(matriu[z][y]);
                                }
                            }

                            filtroArray = NUMBERS.filter(function (num) { // mira mos cuantos numeros faltan
                                return !numEjes.has(num);
                            });


                            if (filtroArray.length == 1) { //si solo cabe un numero lo insertamos 
                                
                                matriu[x][y] = filtroArray[0];
                                document.getElementById("" + x + "" + y + "").classList.replace("btn-outline-secondary", "btn-outline-primary");// cambiamos de color la casilla/s que hemos cambiado
                                document.getElementById("" + x + "" + y + "").innerText = matriu[x][y]; // insertamos el numero dentro la casilla
                                numEjes = new Set(); // reiniciamos el Set para no acomular valores
                                trobat = true;
                            } else {
                                numEjes = new Set();
                                trobat = false;
                            }
                        }
                    }

                }
            }
        }
 
    return trobat;
}
function resol() {
    let end = false;
    var delayInMilliseconds = 0; //1 second

    do {

        end = oneShoot();

    } while (end);


}

// style='margin-right:25px'
function draw() {
    document.getElementById("sudoku").innerHTML =
        "<br> <table id='table' class='' > <tbody id='tbody'> </tbody></table>";
    for (let x = 0; x < matriu.length; x++) {
        document.getElementById("tbody").innerHTML += "<tr id=" + x + "></tr>";
        for (let y = 0; y < matriu.length; y++) {
            if (matriu[x][y] != 0) {
                document.getElementById(x).innerHTML +=
                    "<td > <button class='btn btn-outline-secondary ' id='" +
                    x +
                    y +
                    "' >" +
                    matriu[x][y] +""+
                    "</button></td>";
            } else {
                document.getElementById(x).innerHTML +=
                    "<td > <button class='btn btn-outline-secondary'  id='" +
                    x +
                    y +
                    "'> &nbsp;&nbsp;&nbsp; </button></td>";
            }
            if (y == 2 || y == 5) {
                document.getElementById("" + x + "" + y + "").style.marginRight = "25px";
            }
            if (x == 2 || x == 5) {
                document.getElementById("" + x + "" + y + "").style.marginBottom = "25px";
            }


        }
    }
}
