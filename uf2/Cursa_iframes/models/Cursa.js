export class Cursa {
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
