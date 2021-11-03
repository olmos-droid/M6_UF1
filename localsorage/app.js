//  guardar_localstorage();

// obtener_localstorage();
function obtener_localstorage() {
  if (localStorage.getItem("nombre")) {
    let nombre = localStorage.getItem("nombre");
    console.log(nombre);
  }
  if (localStorage.getItem("persona")) {
    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log(persona);
  }
}
function guardar_localstorage() {
  let persona = {
    nombre: "fernando",
    edad: 31,
    correo: "xyz@zyz.com",
    coord: {
      lat: 10,
      lng: -10,
    },
  };
  let nombre = "juan";

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("persona", JSON.stringify(persona));
}



