export class Categoria {
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