function parseando() {
    var matriu = JSON.parse(document.getElementById("matriu").value);
    // console.table(matriu);

    let m1 = matriu[0];
    let m2 = matriu[1];
    // console.table(m1);
    // console.table(m2);

    var newmatriu = new Array(m1.length);

    for (let x = 0; x < newmatriu.length; x++) {
        newmatriu[x] = new Array(m1[x].length);
    }
    console.table(newmatriu);

    // console.table(m1);
    // console.table(m2);

    for (let x = 0; x < m1.length; x++) {
        for (let y = 0; y < m2.length; y++) {
            newmatriu[x][y] = 0;
            for (let z = 0; z < m2.length; z++) {
                newmatriu[x][y] += m1[x][z] * m2[z][y];
            }
        }
    }
    console.table(newmatriu);
}

// [[[1,2,3],[4,5,6],[7,8,9]],[[9,8,7],[6,5,4],[3,2,1]]]
