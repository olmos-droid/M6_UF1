export class Corredor extends Persona {
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
