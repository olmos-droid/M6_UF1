var arraytest= [1,7,3,89,3,8,34,8,35,90876,-5];
var arraytest2= ['pera','Mandarina','kiwi','banana', 'Plàtan','pera','Pera'];

function sortArray(){
    console.log("sensde ordenar: " + arraytest);
    arraytest.sort();
    console.log("ordenat:"+ arraytest );
}
function sortArray2(){
    console.log("sensde ordenar: " + arraytest2);
    arraytest2.sort((a,b)=> a.localeCompare(b));
    console.log("ordenat:"+ arraytest2);
}