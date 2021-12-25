const literals = [
  {
    nom: "Alfonso",
    cognom: "Alopez",
    data_naixement: "1990/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "M",
    federat: "false",
    tipus: "runner",
  },
  {
    nom: "jut2_nom2",
    cognom: "cog_jut2",
    data_naixement: "30/06/2002",
    dni: "2222333L",
    tel: "622222222",
    sexe: "F",
    tipus: "jutge",
  },
  {
    nom: "vol4_nom4",
    cognom: "cog_vol4",
    data_naixement: "15/04/89",
    dni: "423456789L",
    tel: "645878799",
    sexe: "M",
    tipus: "runner",
  },
  // {
  //   nom: "josep",
  //   cognom: "Paz",
  //   data_naixement: "18/12/1980",
  //   document: "456789123P",
  //   tel: "606547896",
  //   sexe: "NB",
  //   federat: "true",
  //   tipus: "runner",
  // },
  {
    nom: "voluntari 1",
    cognom: "cogvol1",
    data_naixement: "29/10,2005",
    dni: "789654486f",
    tel: "475895544",
    sexe: "M",
    tipus: "runner",
  },

  {
    nom: "Miriam",
    cognom: "Morpez",
    data_naixement: "18/12/2000",
    document: "47714462L",
    tel: "664134214",
    sexe: "F",
    federat: "false",
    tipus: "runner",
  },
  {
    nom: "jut1_nom1",
    cognom: "cog_jut1",
    data_naixement: "30/06/2002",
    dni: "148932123U",
    tel: "616666666",
    sexe: "M",
    tipus: "jutge",
  },
  {
    nom: "jut1_nom1",
    cognom: "cog_jut1",
    data_naixement: "30/06/2002",
    dni: "148932123U",
    tel: "616666666",
    sexe: "M",
    tipus: "voluntari",
  },

  {
    nom: "jut1_nom1",
    cognom: "cog_jut1",
    data_naixement: "30/06/2002",
    dni: "148932123U",
    tel: "616666666",
    sexe: "M",
    tipus: "jutge",
  },

  {
    nom: "jut3_nom3",
    cognom: "cog_jut3",
    data_naixement: "30/06/2002",
    dni: "148932123U",
    tel: "789963255",
    sexe: "NB",
    tipus: "jutge",
  },

  {
    nom: "Vane",
    cognom: "Vopez",
    data_naixement: "1980/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "F",
    federat: true,
    tipus: "runner",
  },
  {
    nom: "Zazu",
    cognom: "Zopez",
    data_naixement: "1990/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "NB",
    federat: true,
    tipus: "runner",
  },
  // {
  //   nom: "Ivan",
  //   cognom: "Iopez",
  //   data_naixement: "2000/08/13",
  //   document: "47714462L",
  //   tel: "664134214",
  //   sexe: "M",
  //   federat: true,
  //   tipus: "runner",
  // },
  {
    nom: "vol3_nom3",
    cognom: "cog_vol3",
    data_naixement: "01/01/2018",
    dni: "323456789L",
    tel: "63578799",
    sexe: "NB",
    tipus: "voluntari",
  },
  {
    nom: "vol2_nom2",
    cognom: "cog_vol2",
    data_naixement: "14/12/1999",
    dni: "223346789L",
    tel: "625878799",
    sexe: "F",
    tipus: "voluntari",
  },
];
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
  constructor(
    nom,
    cognom,
    data_naixement,
    dni,
    tel,
    sexe,
    federat,
    dorsal,
    rendiment
  ) {
    super(nom, cognom, data_naixement, dni, tel, sexe);
    this._federat = federat;
    this._dorsal = dorsal;
    this._rendiment = rendiment;
  }

  iniciarCursa() {}
  avançarDistancia() {}
  passarControl() {}
}

class Jutge extends Persona {
  constructor(_nom, _cognom, _data_naixement, _dni, _tel, _sexe) {
    super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
  }
  sancionarCorredor() {}
  registrarRetirada() {}
}

class Voluntari extends Persona {
  constructor(_nom, _cognom, _data_naixement, _dni, _tel, _sexe) {
    super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
  }
}

//HORA
function updateDateTime() {
  let time_mms = 1000;
  myTime = setTimeout("showDate()", time_mms);
}
function showDate() {
  var x = new Date();
  document.getElementById("datetime").innerHTML = x;
  updateDateTime();
}
//CURSA

class Cursa {
  constructor(horaInici, categoria) {
    this._horaInici = horaInici;
    this._categoria = categoria;
    this._categoria._inscrits = new Array();
    this._categoria._voluntaris = new Array();
    this._categoria._jutges = new Array();
  }

  getRandomRendiment() {
    return Math.random() * (1.1 - 0.9);
  }
  inscriureCorredors(literals) {
    let dorsal = 0;
    let dateDate = new Date();

    for (let literal of literals) {
      if (literal.tipus == "runner") {
        cursa._categoria._inscrits.push(
          new Corredor(
            literal._nom,
            literal._cognom,
            literal._data_naixement,
            literal._dni,
            literal._tel,
            literal._sexe,
            true,
            dorsal,
            this.getRandomRendiment
          )
        );
      }
    }
  }
  altaCursa(){
    
  }

  iniciarCursa() {}
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
    return this._categoria._inscrits.sort(); //cuidado que aqui hay que ordenar por horade arribada
  }
  generarAssegurances() {
    return;
  }
}

//control de pas
class ControlParcial {}
function showDate() {
  var x = new Date();
  document.getElementById("datetime").innerHTML = x;
}
function startGame() {
  let cursa = new Cursa(new Date(), new Categoria("Categoria_1", "all", 10, 100)); //creem una cursa TODO literals
  cursa.inscriureCorredors(literals);
  
}
