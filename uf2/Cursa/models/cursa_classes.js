

class Persona {
	constructor(nom, cognom, data_naixement, dni, tel, sexe) {
		this._nom = nom;
		this._cognom = cognom;
		this._data_naixement = data_naixement;
		this._dni = dni;
		this._tel = tel;
		this._sexe = sexe;
	}
}

class Corredor extends Persona {
	constructor(_nom, _cognom, _data_naixement, _dni, _tel, _sexe, dorsal, federat,rendiment) {
		super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
		this._dorsal = dorsal;
		this._federat = federat;
		this._rendiment = getRandomRendiment();
	}
	
	iniciarCursa() { }
	avançarDistancia() { }
	passarControl() { }
}

class Jutge extends Persona {
	constructor(_nom, _cognom, _data_naixement, _dni, _tel, _sexe) {
		super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
	}
	sancionarCorredor() { }
	registrarRetirada() { }
}

class Voluntari extends Persona {
	constructor(_nom, _cognom, _data_naixement, _dni, _tel, _sexe) {
		super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
	}
}

// CONTROL DE CURSA

class Cursa {


	constructor(horaInici, categoria) {
		this._horaInici = horaInici;
		this._categoria = categoria;
	}

	inscriureCorredors(dorsales) {
		cursa._categoria._inscrits = new Set(dorsales);
	}
	iniciarCursa() { }
}
class Categoria {
	constructor(nom, sexe, edat_min, edat_max, inscrits) {
		this._nom = nom;
		this._sexe = sexe;
		this._edat_min = edat_min;
		this._edat_max = edat_max;
		this._inscrits = new Array(inscrits);
	}
	generarClassificació() {
		return this._categoria._inscrits.sort(); //cuidado que aqui 
	}
	generarAssegurances() {
		return
	}
}

//control de pas
class ControlParcial { }


function getRandomRendiment() {
	return Math.random() * (1.1 - 0.9);
}

// nconstroir direcdtament el array en format JSON
//array index = dorsal 
let cor1 = new Corredor("Josep", "Jorpez", new Date("1980/08/13"), "47714462L", "664134214", "M", 1, true);
let cor2 = new Corredor("Alfonso", "Alopez", new Date("1990/08/13"), "47714462L", "664134214", "M", 2, true);
let cor3 = new Corredor("Miriam", "Morpez", new Date("2000/08/13"), "47714462L", "664134214", "F", 3, true);
let cor4 = new Corredor("Vane", "Vopez", new Date("1980/08/13"), "47714462L", "664134214", "F", 4, true);
let cor5 = new Corredor("Zazu", "Zopez", new Date("1990/08/13"), "47714462L", "664134214", "NB", 5, true);
let cor6 = new Corredor("Ivan", "Iopez", new Date("2000/08/13"), "47714462L", "664134214", "M", 6, true);

let vol1 = new Voluntari("vol1_nom1", "cog_vol1", null, "123456789L", "615878799", "M");
let vol2 = new Voluntari("vol2_nom2", "cog_vol2", null, "223346789L", "625878799", "F");
let vol3 = new Voluntari("vol3_nom3", "cog_vol3", null, "323456789L", "63578799", "NB");
let vol4 = new Voluntari("vol4_nom4", "cog_vol4", null, "423456789L", "645878799", "M");


let jut1 = new Jutge("jut1_nom1", "cog_jut1", null, "1111L", "616666666", "M");
let jut2 = new Jutge("jut2_nom2", "cog_jut2", null, "2222L", "622222222", "F");
let jut3 = new Jutge("jut3_nom3", "cog_jut3", null, "3333Ñ", "634333333", "NB");

let cursa = new Cursa(new Date(), new Categoria("Categoria_1", "all", 10, 100));

console.log(cursa);

// cursa.inscriureCorredors([cor1._dorsal, cor2._dorsal, cor3._dorsal]);
cursa.inscriureCorredors([{"dorsal" : cor1._dorsal,"time": cursa._horaInici},{"dorsal" : cor2._dorsal,"time": cursa._horaInici},{"dorsal" : cor3._dorsal,"time": cursa._horaInici}]);

