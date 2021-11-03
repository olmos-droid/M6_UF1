function ofp(x, y) {
    window.open(
        "",
        "_blank",
        "width=200, height=100,top=" + y + ",left=" + x + ""
    );

    self.focus();
}
function oft(x, y, m) {
    window.open(
        "",
        "_blank",
        "width=200, height=100,top=" + y + ",left=" + x + ""
    );
    self.focus();
    setInterval(function () {
        self.close;
    }, m);
}
function ofu(strURL) {
    window.open(
        strURL,
        "_blank",
        "width=200, height=100,top=" + y + ",left=" + x + ""
    );
}
function ebo(x, op, y) {
    const min = 0;
    let resul;
    let num1 = Math.floor(Math.random() * (y - min + 1) + min);
    let num2 = Math.floor(Math.random() * (y - min + 1) + min);
    console.log(x, op, y);
    let cont = 0;

    var inicio = new Date();
    for (let i = 0; i < x; i++) {
        cont++;
        switch (op) {
            case "SUM":
                resul = num1 + num2;
                break;
            case "MUL":
                resul = num1 * num2;
                break;
            case "DIV":
                resul = num1 / num2;
                break;
            case "PW":
                resul = Math.pow(x, y);
                break;
            default:
                break;
        }
    }

    var fin = new Date();
    var transcurso = fin.getTime() - inicio.getTime(); // tiempo en milisegundos
    return transcurso+ "ms";
    
}
function DSM(numDies) {}

function check(text) {
    let noutext = text.split(/[:;|]+/);
    let mostra = "Separacio dels elements\n";

    console.log(noutext);

    noutext.forEach((element) => {
        mostra += element + "\n";
    });
    noutext.forEach((element) => {
        if (element.startsWith("OFP")) {
            mostra += "detectat OFP\n";
            element = element.replace(/[OFP]/g, "");
            mostra += "sense lletres: " + element + "\n";
            element = element.replace(/[\(\)]/g, "");
            mostra += "sense parentesis: " + element + "\n";
            let att = element.split(",");
            (mostra += "coordenada x:"), att[0] + "\n";
            (mostra += "coordenada y:"), att[1] + "\n";
            ofp(att[0], att[1]);
        }
        if (element.startsWith("OFT")) {
            element = element.replace(/[OFT]/g, "");
            mostra += "sense lletres: " + element + "\n";
            element = element.replace(/[\(\)]/g, "");
            mostra += "sense parentesis: " + element + "\n";
            let att = element.split(",");
            oft(att[0], att[1], att[2]);
        }
        if (element.startsWith("OFU")) {
            element = element.replace(/[OFU]/g, "");
            mostra += "sense lletres: " + element + "\n";
            element = element.replace(/[\(\)]/g, "");
            mostra += "sense parentesis: " + element + "\n";
            ofu(element);
        }
        if (element.startsWith("EBO")) {
            element = element.replace(/[EBO]/g, "");
            mostra += "sense lletres: " + element + "\n";
            element = element.replace(/[\(\)]/g, "");
            mostra += "sense parentesis: " + element + "\n";
            let att = element.split(",");
            console.log(att);
            mostra+= ebo(att[0], att[1], att[2]);

            
        }
        if (element.startsWith("DSM")) {
            mostra += "detectat OFT\n";
        }
    });

    document.getElementById("textarea").value = mostra;
}
