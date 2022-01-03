const literals = [
  {
    nom: "Vane",
    cognom: "Vopez",
    data_naixement: "1980/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "F",
    edad: 50,
    federat: true,
    tipus: "r",
  },
  {
    nom: "Maria",
    cognom: "Opez",
    data_naixement: "2000/08/13",
    document: "15987452E",
    tel: "664134214",
    sexe: "F",
    edad: 101,
    federat: true,
    tipus: "r",
  },

  {
    nom: "Miriam",
    cognom: "Morpez",
    data_naixement: "18/12/2000",
    document: "85245695L",
    tel: "664134214",
    sexe: "F",
    edad: 7,
    federat: "false",
    tipus: "r",
  },
  {
    nom: "Ivan",
    cognom: "Iopez",
    data_naixement: "2000/08/13",
    document: "98741528G",
    tel: "664134214",
    sexe: "M",
    edad: 50,
    federat: true,
    tipus: "r",
  },

  {
    nom: "Jorge",
    cognom: "Popez",
    data_naixement: "2000/08/13",
    document: "98871528G",
    tel: "664134214",
    sexe: "M",
    edad: 101,
    federat: true,
    tipus: "r",
  },

  {
    nom: "Alfonso",
    cognom: "Alopez",
    data_naixement: "1990/08/13",
    document: "47714462L",
    tel: "664134214",
    sexe: "M",
    edad: 7,
    federat: "false",
    tipus: "r",
  },
  {
    nom: "ITrans",
    cognom: "Topez",
    data_naixement: "2000/08/13",
    document: "11199885Y",
    document: "664134214",
    sexe: "NB",
    edad: 101,
    federat: true,
    tipus: "r",
  },

  {
    nom: "Josep",
    cognom: "Paz",
    data_naixement: "18/12/1980",
    document: "47885265",
    tel: "606547896",
    sexe: "NB",
    edad: 7,
    federat: "true",
    tipus: "r",
  },

  {
    nom: "Zazu",
    cognom: "Zopez",
    data_naixement: "1990/08/13",
    document: "4685236E",
    tel: "664134214",
    sexe: "NB",
    edad: 50,
    federat: true,
    tipus: "r",
  },

  {
    nom: "Voluntari 1",
    cognom: "Cog_vol1",
    data_naixement: "29/10,2005",
    document: "789654486f",
    tel: "475895544",
    sexe: "M",
    edad: 33,
    tipus: "v",
  },

  {
    nom: "Jut1_nom1",
    cognom: "Cog_jut1",
    data_naixement: "30/06/1990",
    document: "99333111J",
    tel: "614466666",
    sexe: "M",
    edad: 56,
    tipus: "j",
  },
  {
    nom: "Jut2_nom2",
    cognom: "Cog_jut2",
    data_naixement: "30/06/1985",
    document: "85225963H",
    tel: "616666236",
    sexe: "M",
    edad: 33,
    tipus: "j",
  },

  {
    nom: "Jut3_nom3",
    cognom: "Cog_jut3",
    data_naixement: "30/06/1980",
    document: "12456789Y",
    tel: "689556666",
    sexe: "M",
    edad: 100,
    tipus: "j",
  },

  {
    nom: "Jut4_nom4",
    cognom: "Cog_jut4",
    data_naixement: "30/06/2002",
    document: "77951423KU",
    tel: "789963255",
    sexe: "NB",
    edad: 60,
    tipus: "j",
  },

  {
    nom: "Vol3_nom3",
    cognom: "Cog_vol3",
    data_naixement: "01/01/2018",
    document: "78555969R",
    tel: "63578799",
    sexe: "NB",
    tipus: "v",
  },
  {
    nom: "Vol2_nom2",
    cognom: "Cog_vol2",
    data_naixement: "14/12/1999",
    document: "74215683G",
    tel: "625878799",
    sexe: "F",
    tipus: "v",
  },
  {
    nom: "Vol4_nom4",
    cognom: "Cog_vol4",
    data_naixement: "15/04/89",
    document: "423456789L",
    tel: "645878799",
    sexe: "M",
    edad: 50,
    tipus: "v",
  },
  {
    nom: "Jut2_nom2",
    cognom: "Cog_jut2",
    data_naixement: "30/06/2002",
    document: "2222333L",
    tel: "622222222",
    sexe: "F",
    edad: 50,
    tipus: "j",
  },
];

class Persona {
  constructor(nom, cognom, data_naixement, document, tel, sexe, edad) {
    this._nom = nom;
    this._cognom = cognom;
    this._data_naixement = data_naixement;
    this._document = document;
    this._tel = tel;
    this._sexe = sexe;
    this._edad = edad;
  }
}

class Corredor extends Persona {
  constructor(
    _nom,
    _cognom,
    _data_naixement,
    _document,
    _tel,
    _sexe,
    _edad,
    federat,
    dorsal,
    rendiment
  ) {
    super(_nom, _cognom, _data_naixement, _document, _tel, _sexe, _edad);
    this._federat = federat;
    this._dorsal = dorsal;
    this._rendiment = rendiment;
    this._isRunning = false;
    this._horaInici = null;
    this._horaFinal = null;
  }

  iniciarCursa() {}
  avançarDistancia() {}
  passarControl() {}
}

class Jutge extends Persona {
  constructor(_nom, _cognom, _data_naixement, _document, _tel, _sexe) {
    super(_nom, _cognom, _data_naixement, _document, _tel, _sexe);
  }
  sancionarCorredor() {}
  registrarRetirada() {}
}

class Voluntari extends Persona {
  constructor(_nom, _cognom, _data_naixement, _document, _tel, _sexe) {
    super(_nom, _cognom, _data_naixement, _document, _tel, _sexe);
  }
}

//CURSA

class Cursa {
  constructor(horaInici, categoria) {
    this._horaInici = horaInici;
    this._categoria = categoria;
    this._corredors = new Array();
    this._voluntaris = new Array();
    this._jutges = new Array();
  }

  getRandomRendiment() {
    return Math.random() * (4.3 - 3.3) + 3.3;
  }
  inscriureCorredors(literals) {
    let dorsal = 0;

    for (let literal of literals) {
      if (literal.tipus == "v") {
        this._voluntaris.push(
          new Voluntari(
            literal.nom,
            literal.cognom,
            literal.data_naixement,
            literal.document,
            literal.tel,
            literal.sexe
          )
        );
      }
      if (literal.tipus == "j") {
        this._jutges.push(
          new Jutge(
            literal.nom,
            literal.cognom,
            literal.data_naixement,
            literal.document,
            literal.tel,
            literal.sexe
          )
        );
      }

      if (literal.tipus == "r") {
        this._corredors.push(
          new Corredor(
            literal.nom,
            literal.cognom,
            literal.data_naixement,
            literal.document,
            literal.tel,
            literal.sexe,
            literal.edad,
            false,
            dorsal,
            this.getRandomRendiment()
          )
        );
        console.log(
          cursa._corredors[dorsal]._dorsal +
            " " +
            cursa._corredors[dorsal]._nom +
            " " +
            cursa._corredors[dorsal]._cognom +
            " " +
            cursa._corredors[dorsal]._rendiment
        );
        dorsal++;
      }
    }
    this.afegirParticipant();
  }
  afegirParticipant() {
    console.log("Corredors aptes:");
    this._corredors.forEach((corredor) => {
      if (
        this._categoria._sexe != "ALL" &&
        this._categoria._edat_min != 0 &&
        this._categoria._edat_max != 0
      ) {
        if (
          corredor._sexe == this._categoria._sexe &&
          corredor._edad > this._categoria._edat_min &&
          corredor._edad < this._categoria._edat_max
        ) {
          this._categoria._aptes.push(corredor);
          console.log("corredor apte:");
          console.log(corredor);
        }
      } else {
        this._categoria._aptes.push(corredor);

        console.log(
          corredor._dorsal + "\t" + corredor._nom + "\t" + corredor._cognom
        );
      }
    });
  }
  openWindowbyDorsal(corredor) {
    var newWin = window.open("runnerView.html", corredor._dorsal);
  }
  iniciarCursa() {
    let categoria = this.categoria;
    let aptes = new Array();

    this._categoria._aptes.forEach((corredor) => {
      corredor._isRunning = true;
      corredor.num_metres = 0;
      this.openWindowbyDorsal(corredor);
    });
  }
}

class Categoria {
  constructor(nom, sexe, edat_min, edat_max, metres) {
    this._nom = nom;
    this._sexe = sexe;
    this._edat_min = edat_min;
    this._edat_max = edat_max;
    this._metres = metres;
    this._aptes = new Array();
  }
  generarClassificacio() {
    let categoriaNom = (document.getElementById("categoriaNom").innerText =
      this._nom);
    let clas = this._aptes.slice(); //copio el array de la manera mes eficient que hi ha
    clas.sort((corredorA, corredorB) =>
      corredorA._horaFinal > corredorB._horaFinal ? 1 : -1
    ); //ordenem per _hora final
    //generar el html de la clasificacio

    let tbody = document.getElementById("tbodyClassificacio");
    let posCorredor = 0;
    clas.forEach((corredor) => {
      posCorredor++;
      let tr = document.createElement("tr");
      let thscoperow = document.createElement("th");
      let thscoperowtext = document.createTextNode(posCorredor);
      thscoperow.setAttribute("scope", "row");
      thscoperow.appendChild(thscoperowtext);
      tr.appendChild(thscoperow);
      let td = document.createElement("td");
      let td_text = document.createTextNode(corredor._cognom);
      td.appendChild(td_text);
      tr.appendChild(td);
      tbody.appendChild(tr);
      td = document.createElement("td");
      td_text = document.createTextNode(corredor._nom);
      td.appendChild(td_text);
      tr.appendChild(td);
      tbody.appendChild(tr);
      td = document.createElement("td");
      td_text = document.createTextNode(corredor._dorsal);
      td.appendChild(td_text);
      tr.appendChild(td);
      tbody.appendChild(tr);
      let diff =corredor._horaFinal - corredor._horaInici;
      corredor.diff=diff;
      td = document.createElement("td");
      td_text = document.createTextNode(diff);
      td.appendChild(td_text);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });

    // let p = document.getElementById("llistaClassificacio");
    // let ul = document.createElement("ul");
    // p.appendChild(ul);
    // clas.forEach((corredor) => {
    //   let li = document.createElement("li");
    //   let li_text = document.createTextNode(
    //     corredor._dorsal + " " + corredor._nom + " " + corredor._cognom
    //   );
    //   li.appendChild(li_text);
    //   ul.appendChild(li);
    // });
    return clas;
  }
  generarAssegurances() {
    return;
  }
}

//control de pas
class ControlParcial {}
function init(params) {
  let nomCategoria = "Categoria_2";
  let sexo = ["M", "F", "NB", "ALL"]; //fer les clasificacion de sexe
  let edadMinima = 0; //fer les clasificacion per edad
  let edadMaxima = 0;
  let distancia = 50;
  let categoria = new Categoria(
    nomCategoria,
    "M",
    edadMinima,
    edadMaxima,
    distancia
  );
  cursa = new Cursa(Date.now(), categoria);
  console.log("cursa : ");
  console.log(cursa);
}
