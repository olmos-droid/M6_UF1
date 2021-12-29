import {Categoria,ControlParcial,Corredor,Cursa,Jutge,Voluntari} from "../models";

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
  cursa = new Cursa(null, new Categoria("Categoria_2", "all", 10, 100, 5000)); //creem una cursa TODO literals
  console.log("cursa inicialitzada");
}
