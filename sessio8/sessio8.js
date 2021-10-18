// Exercicis Navigator
// Fes un programa que saludi a l’usuari en l’idioma predefinit del navegador i li informi del sistema operatiu i navegador utilitzats.

// Amplia l’anterior programa indicant si la combinació de sistema operatiu i navegador està suportada, o no.

// Exercicis Screen
// Fes un programa que quan detecti que la mida de la finestra és menor al 50% de la mida total disponible per a finestres, salti un missatge.
// Exercicis History
// Implementa la funcionalitats dels botons endarrera, endavant i recarrega.
// Exercicis Location
// Fes un programa que en apretar un botó carregui una nova pàgina web -la que vulguis- al mateix document conservant l’historial.

// Modifica l’anterior codi per a que no conservi l’historial.

//ejercici que obri una finezstra i quan canvii de minut es tanqui

function openCloseMinute() {
    let date = new Date(Date.now());
    let minutStart = date.getMinutes();
    let minutEnd = minutStart + 1;

    console.log(minutStart);
    console.log(minutEnd);

    var window1 = new Window();
    // setTimeout(function () {
    //     notification.close();
    // }, 1000);

    // while (minutStart!=minutEnd){
    //     date = Date.now();
    //     minutStart = date.getMinutes();
    // }
    // close();

    // alert('encara no a pasat un minut');
}
