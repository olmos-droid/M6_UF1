

class Animal{
    constructor(codi, nom,especie, dataNaixement, esperançaDeVida) {
        this._codi = codi;
        this._nom = nom;
        this._especie = especie;
        this._dataNaixement = dataNaixement;
        this._esperançaDeVida = esperançaDeVida;
        this._dataDarreraRevisio;
    this._veterinariResponsabe = 'Pujol'
    this._diesEntreRevisions =90;
        
    }
    dataDarreraRevisio=undefined;
    veterinariResponsabe = 'Pujol'
    diesEntreRevisions =90;
    

    // Retorna un text amb el nom Codi, Nom,Espècie, DataNaixement Data revisió i veterinari responsable.
	// Calcular data revisió en base als dies i la darrera revisió
	// Si està 'undefined' la posem per d'aquí a 10 dies.
	// Si ha passat la data la posem per d'aquí 3 dies
    dataProperaRevisi(){
        if (this._dataDarreraRevisio==undefined){
            this._dataDarreraRevisio=10;
        }else{
            if(this._dataDarreraRevisio>90){
                this._dataDarreraRevisio = 3;
            }
        }

        
        return `${_codi},${_nom},${_especie},${this._dataNaixement},${_dataDarreraRevisio},${this._veterinariResponsabe}`
    }


}



class AnimalDomestic extends Animal{
    constructor(xip,cuidadorExtern){
    super(codi, nom,especie, dataNaixement, esperançaDeVida);
    this._xip=xip;
    this._cuidadorExtern=cuidadorExtern;
    }
    diesEntreRevisions=180;

    dataPerProperaRevisio(){

        // if
    }
}

class AnimalSalvatge extends Animal{
    constructor(zooDeReferencia){
    super(codi, nom,especie, dataNaixement, esperançaDeVida);
    this._zooDeReferencia=zooDeReferencia;
    }

    dataProperaRevisió();
}

class Zoo{
    constructor(nomZoo, adreça){
        this._nomZoo = nomZoo;
        this._adreça= adreça;
    }
    coleccioAnimals = [];

    registrarAnimals(animals){
        for (let index = 0; index < animals.length; index++) {
            const animal = animals[index];
            if(animal.type=="d" ){
                delete animal.type
                this.coleccioAnimals.push(new AnimalDomestic(animal))
            }
            if(animal.type=="s" ){
                delete animal.type
                this.coleccioAnimals.push(new AnimalSalvatge(animal))
            }
            
        }
     
        
    }
    DataProperaRevisió(){
        let llistat =[]
        for (let index = 0; index < this.coleccioAnimals.length; index++) {
            
             if (this.coleccioAnimals.dataDarreraRevisio !=undefined) {
                 llistat.push(coleccioAnimals[index])
             }
            
        }
    }

}

let zoo = new Zoo ("zoobarcelona","pitagoras 6");
zoo.registrarAnimals(animals);

let cadena =    
[
    {
        "type":"d",
        "_codi":'cod1',
        "_nom":"andreu",
        "_especie":"gos",
        "_dataNaixement":"23/08/90",
        "_esperançaDeVida":2,
        "_dataDarreraRevisio":"23/01/2000",
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":20,
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":5,
        "dataDarreraRevisio":"25/02/96",
        "diesEntreRevisions":5,
        "_xip":"xxx1",
        "_cuidadorExtern":"olivia"

    },
    {
        "type":"d",
        "_codi":'cod2',
        "_nom":"andreu",
        "_especie":"gos",
        "_dataNaixement":"23/08/90",
        "_esperançaDeVida":2,
        "_dataDarreraRevisio":"23/01/2000",
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":20,
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":5,
        "dataDarreraRevisio":"25/02/96",
        "diesEntreRevisions":5,
        "_xip":"xxx2",
        "_cuidadorExtern":"pep"

    },
    {
        "type":"d",
        "_codi":'cod3',
        "_nom":"andreu",
        "_especie":"gos",
        "_dataNaixement":"23/08/90",
        "_esperançaDeVida":2,
        "_dataDarreraRevisio":"23/01/2000",
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":20,
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":5,
        "dataDarreraRevisio":"25/02/96",
        "diesEntreRevisions":5,
        "_cuidadorExtern":"alvaro"

    },
   
    {
        "type":"s",
        "_codi":'cod4',
        "_nom":"andreu",
        "_especie":"gos",
        "_dataNaixement":"23/08/90",
        "_esperançaDeVida":2,
        "_dataDarreraRevisio":"23/01/2000",
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":20,
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":5,
        "dataDarreraRevisio":"25/02/96",
        "diesEntreRevisions":5,
        "zooDeReferencia":"zoo barcelona"
    },
    {
        "type":"s",
        "_codi":'cod5',
        "_nom":"andreu",
        "_especie":"gos",
        "_dataNaixement":"23/08/90",
        "_esperançaDeVida":2,
        "_dataDarreraRevisio":"23/01/2000",
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":20,
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":5,
        "dataDarreraRevisio":"25/02/96",
        "diesEntreRevisions":5,
        "zooDeReferencia":"zoo barcelona"

    },
    {
        "type":"s",
        "_codi":'cod6',
        "_nom":"andreu",
        "_especie":"gos",
        "_dataNaixement":"23/08/90",
        "_esperançaDeVida":2,
        "_dataDarreraRevisio":"23/01/2000",
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":20,
        "_veterinariResponsabe":"josep",
        "_diesEntreRevisions":5,
        "dataDarreraRevisio":"25/02/96",
        "diesEntreRevisions":5,
        "zooDeReferencia":"zoo barcelona"

    },

];
let animals = JSON.parse(cadena);

