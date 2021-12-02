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
        super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe)
        this._dorsal = dorsal;
        this._federat = federat;
        this._rendiment = rendiment;
    }

    iniciarCursa() { }
    avançarDistancia() { }
    passarControl() { }

}

class Jutge extends Persona {
    constructor() {
        super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe)

    }
    sancionarCorredor() { }
    registrarRetirada() { }
}

class Voluntari extends Persona{
    constructor() {
        super(_nom, _cognom, _data_naixement, _dni, _tel, _sexe)

    }
}

class Cursa{
    constructor(horaInici){
        this._horaInici=horaInici;
    }
    
    inscriureCorredors(){}
    iniciarCursa(){}

}
class Categoria{
    constructor (nom,sexe,edat_min,edat_max, inscrits){
        this._nom = nom;
        this._sexe=sexe;
        this._edat_min=edat_min;
        this._edat_max=edat_max;
        this._inscrits=inscrits;
        
    }
    generarClassificació(){

    }
    generarAssegurances(){}

}
class 