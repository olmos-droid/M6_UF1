var arraytest = [1, 7, 3, 89, 3, 8, 34, 8, 35, 90876, -5];
var arraytest2 = [
    "pera",
    "Mandarina",
    "kiwi",
    "banana",
    "Plàtan",
    "pera",
    "Pera",
];

function sortArray() {
    console.log("sensde ordenar: " + arraytest);
    arraytest.sort(function(a,b){return b-a});
    console.log("ordenat:" + arraytest);
}
function sortArray2() {
    console.log("sensde ordenar: " + arraytest2);
    arraytest2.sort((a, b) => a.localeCompare(b));
    console.log("ordenat:" + arraytest2);
}

// Amb el mètode “sort” i “slice” fes un programa que mostri els tres números més grans emmagatzemats a un array.
function tres() {
    arraytestSort = arraytest.sort();
    console.log(arraytestSort);
    console.log(arraytestSort.slice(-3));
}

// Amb el mètode “splice”, fes un programa en Javascript que tingui implementada la següent funció:
// Entrada: dos arrays, un amb valors numèric i un amb valors alfabètics
// Sortida: retorna un array amb els tres valors numèrics més grans i els tres elements alfabètics més baixos.
// Exemple: // Array numèric: [1,5,8,999,43,-1]
// Array alfabètic: [“Java”,”hola”,”zebra”,”il·lusió”,”Al·lèrgic”,”cap-i-cua”]
// Sortida: [8,43,999,”Il·lusió”,”Java”,”zebra”]

arraynum = [1, 534, 7, 8, 3, 34, 32];
arraylletres = ["gdfegdf", "aaa", "bbb", "ftgkji", "zds", "ttttt"];

arraynum.sort(function(a,b){
    return b-a; 
})

arraaynum.splice();
