const VERSION = "1.0.1"





const titulo = document.getElementById("titulo");
titulo.innerHTML = "Smart RegBox "+VERSION



const resultado = document.getElementById("resultado");
const dineroElement = document.getElementById("dinero");
const max100Elements = document.getElementById("maxBilletesDe100");
const max50Elements = document.getElementById("maxBilletesDe50")
const max20Elements = document.getElementById("maxBilletesDe20")
const max10Elements = document.getElementById("maxBilletesDe10")

dineroElement.placeholder = "monto a pagar"
dineroElement.innerText = "0"
max100Elements.placeholder = "billetes de 100 disponibles";
max50Elements.placeholder = "billetes de 50 disponibles";
max20Elements.placeholder = "billetes de 20 disponibles";
max10Elements.placeholder = "billetes de 10 disponibles";
resultado.innerHTML = ""




function calculate() {

    const dinero = parseInt(dineroElement.value, 10);

    const MaxBilletesDe100 = parseInt(max100Elements.value, 10);
    const MaxBilletesDe50 =  parseInt(max50Elements.value, 10);
    const MaxBilletesDe20 =  parseInt(max20Elements.value, 10);
    const MaxBilletesDe10 =  parseInt(max10Elements.value, 10);

    resultado.innerText = " "
    
    logs = ""

    log = x => logs += x + "\n";

    logResult(MaxBilletesDe100, MaxBilletesDe50, MaxBilletesDe20, MaxBilletesDe10, dinero, log);

    resultado.innerText = logs;

}

function logResult(MaxBilletesDe100, MaxBilletesDe50, MaxBilletesDe20, MaxBilletesDe10, dinero, log) {
    
    const piso = Math.floor    
    const techo = Math.ceil


    let restito = dinero;
    let disponible = MaxBilletesDe100 * 100 + MaxBilletesDe50 * 50 + MaxBilletesDe20 * 20 + MaxBilletesDe10 * 10;


    log("Tengo que pagar " + dinero + " y tengo disponible " + disponible);

    if (disponible < dinero) {
        log("No me alcanza");
    }
    else {

        log("Me alcanza porque tengo " + disponible);
        let de100 = dinero / 100;
        de100 = piso(de100);
        if (de100 > MaxBilletesDe100) {
            de100 = MaxBilletesDe100;
        }
        log("Voy a pagar " + de100 + " billetes de 100");

        restito = dinero - de100 * 100;

        let de50 = restito / 50;
        de50 = piso(de50);

        if (de50 > MaxBilletesDe50) {
            de50 = MaxBilletesDe50;
        }
        log("Voy a pagar " + de50 + " billetes de 50");

        restito = restito - de50 * 50;



        let de20 = restito / 20;
        de20 = piso(de20);
        if (de20 > MaxBilletesDe20) {
            de20 = MaxBilletesDe20;
        }
        log("Voy a pagar " + de20 + " billetes de 20");

        restito = restito - de20 * 20;



        let de10 = restito / 10;
        de10 = techo(de10);
        if (de10 > MaxBilletesDe10) {
            de10 = MaxBilletesDe10;
        }
        log("Voy a pagar " + de10 + " billetes de 10");

        restito = restito - de10 * 10;



        if (restito == 0) {
            log("Gracias vuelvas prontos");
        }
        else {            
            log("Me tienen que dar de vuelto " + -restito + " pe");
        }

    }
    return restito;
}
