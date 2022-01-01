const literals = [
  {
    nom: "Alfonso",
    cognom: "Alopez",
    data_naixement: "1990/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "M",
    federat: "false",
    tipus: "r",
  },
  {
    nom: "Jut2_nom2",
    cognom: "Cog_jut2",
    data_naixement: "30/06/2002",
    dni: "2222333L",
    tel: "622222222",
    sexe: "F",
    tipus: "j",
  },
  {
    nom: "Vol4_nom4",
    cognom: "Cog_vol4",
    data_naixement: "15/04/89",
    dni: "423456789L",
    tel: "645878799",
    sexe: "M",
    tipus: "v",
  },
  {
    nom: "Josep",
    cognom: "Paz",
    data_naixement: "18/12/1980",
    document: "47885265",
    tel: "606547896",
    sexe: "NB",
    federat: "true",
    tipus: "r",
  },
  {
    nom: "Voluntari 1",
    cognom: "Cog_vol1",
    data_naixement: "29/10,2005",
    dni: "789654486f",
    tel: "475895544",
    sexe: "M",
    tipus: "v",
  },

  {
    nom: "Miriam",
    cognom: "Morpez",
    data_naixement: "18/12/2000",
    document: "85245695L",
    tel: "664134214",
    sexe: "F",
    federat: "false",
    tipus: "r",
  },
  {
    nom: "Jut1_nom1",
    cognom: "Cog_jut1",
    data_naixement: "30/06/2002",
    dni: "45678777U",
    tel: "616666666",
    sexe: "M",
    tipus: "j",
  },
  {
    nom: "Jut1_nom1",
    cognom: "Cog_jut1",
    data_naixement: "30/06/2002",
    dni: "14893212U",
    tel: "616666666",
    sexe: "M",
    tipus: "j",
  },

  {
    nom: "Jut1_nom1",
    cognom: "Cog_jut1",
    data_naixement: "30/06/2002",
    dni: "14932123U",
    tel: "616666666",
    sexe: "M",
    tipus: "j",
  },

  {
    nom: "Jut3_nom3",
    cognom: "Cog_jut3",
    data_naixement: "30/06/2002",
    dni: "14893123U",
    tel: "789963255",
    sexe: "NB",
    tipus: "j",
  },

  {
    nom: "Vane",
    cognom: "Vopez",
    data_naixement: "1980/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "F",
    federat: true,
    tipus: "r",
  },
  {
    nom: "Zazu",
    cognom: "Zopez",
    data_naixement: "1990/08/13",
    document: "4685236E",
    tel: "664134214",
    sexe: "NB",
    federat: true,
    tipus: "r",
  },
  {
    nom: "Ivan",
    cognom: "Iopez",
    data_naixement: "2000/08/13",
    document: "98741528G",
    tel: "664134214",
    sexe: "M",
    federat: true,
    tipus: "r",
  },
  {
    nom: "Vol3_nom3",
    cognom: "Cog_vol3",
    data_naixement: "01/01/2018",
    dni: "78555969R",
    tel: "63578799",
    sexe: "NB",
    tipus: "v",
  },
  {
    nom: "Vol2_nom2",
    cognom: "Cog_vol2",
    data_naixement: "14/12/1999",
    dni: "74215683G",
    tel: "625878799",
    sexe: "F",
    tipus: "v",
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
    document,
    tel,
    sexe,
    federat,
    dorsal,
    rendiment
  ) {
    super(nom, cognom, data_naixement, document, tel, sexe);
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
      if (literal.tipus == "v") {
        cursa._categoria._voluntaris.push(
          new Voluntari(
            literal.nom,
            literal.cognom,
            literal.data_naixement,
            literal.document,
            literal.tel,
            literal.sexe
          )
        );
        console.log(
          "voluntari : " + literal.nom + " " + literal.cognom + " afegit"
        );
      }
      if (literal.tipus == "j") {
        cursa._categoria._jutges.push(
          new Jutge(
            literal.nom,
            literal.cognom,
            literal.data_naixement,
            literal.document,
            literal.tel,
            literal.sexe
          )
        );
        console.log(
          "jutge : " + literal.nom + " " + literal.cognom + " afegit"
        );
      }

      if (literal.tipus == "r") {
        cursa._categoria._inscrits.push(
          new Corredor(
            literal.nom,
            literal.cognom,
            literal.data_naixement,
            literal.document,
            literal.tel,
            literal.sexe,
            true,
            dorsal,
            this.getRandomRendiment()
          )
        );
        console.log(
          "corredor : " + literal.nom + " " + literal.cognom + " afegit"
        );

        dorsal++;
      }
    }
  }
  openWindowbyDorsal(element) {
    var newWin = window.open("runnerView.html", element._dorsal);
  }
  iniciarCursa() {
    cursa._horaInici = Date.now();

    showDate();
    for (let x = 0; x < this._categoria._inscrits.length; x++) {
      const element = this._categoria._inscrits[x];
      var newWindow = this.openWindowbyDorsal(element);
    }
  }
}

class Categoria {
  constructor(nom, sexe, edat_min, edat_max, metres, inscrits) {
    this._nom = nom;
    this._sexe = sexe;
    this._edat_min = edat_min;
    this._edat_max = edat_max;
    this._metres = metres;
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

function updateDateTime() {
  let time_mms = 500;
  myTime = setTimeout("showDate()", time_mms);
}
function showDate() {
  let x = new Date();

  document.formParent.p_datetime.value =
    x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
  updateDateTime();
}

function init(params) {
  cursa = new Cursa(null, new Categoria("Categoria_2", "all", 10, 100, 500)); //creem una cursa TODO literals
  console.log("cursa inicialitzada");
}
