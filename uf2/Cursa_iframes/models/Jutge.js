export class Jutge extends Persona {
  constructor(_nom, _cognom, _data_naixement, _dni, _tel, _sexe) {
    super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe);
  }
  sancionarCorredor() {}
  registrarRetirada() {}
}
