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
	constructor(dorsal, federat, rendiment) {
		super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);

		this._dorsal = dorsal;
		this._federat = federat;
		this._rendiment = rendiment;
	}
	saludar() {
		console.log("mi dorsal es ${this._dorsal}");
	}

	iniciarCursa() { }
	avançarDistancia() { }
	passarControl() { }
}

class Jutge extends Persona {
	constructor() {
		super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
	}
	sancionarCorredor() { }
	registrarRetirada() { }
}

class Voluntari extends Persona {
	constructor() {
		super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
	}
}

// CONTROL DE CURSA

class Cursa {
	constructor(horaInici) {
		this._horaInici = horaInici;
	}

	inscriureCorredors() { }
	iniciarCursa() { }
}
class Categoria {
	constructor(nom, sexe, edat_min, edat_max, inscrits) {
		this._nom = nom;
		this._sexe = sexe;
		this._edat_min = edat_min;
		this._edat_max = edat_max;
		this._inscrits = inscrits;
	}
	generarClassificació() { }
	generarAssegurances() { }
}

//control de pas
class ControlParcial { }

let corredor1 = new Corredor("1", true, 0.9);
let persona1 = new Corredor(
	"Josep",
	"Perez",
	08 / 12 / 80,
	"47714462L",
	"664134214",
	"home"
);
let persona2 = new Persona(
	"Josep",
	"Perez",
	08 / 12 / 80,
	"47714462L",
	"664134214",
	"home"
);
let persona3 = new Persona(
	"Josep",
	"Perez",
	08 / 12 / 80,
	"47714462L",
	"664134214",
	"home"
);
let persona4 = new Persona(
	"Josep",
	"Perez",
	08 / 12 / 80,
	"47714462L",
	"664134214",
	"home"
);
let persona5 = new Persona(
	"Josep",
	"Perez",
	08 / 12 / 80,
	"47714462L",
	"664134214",
	"home"
);
let persona6 = new Persona(
	"Josep",
	"Perez",
	08 / 12 / 80,
	"47714462L",
	"664134214",
	"home"
);

corredor1.saludar();

console.log("hola ");
