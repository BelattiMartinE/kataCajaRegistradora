const piso = Math.floor
const techo = Math.ceil


const resultado = document.getElementById("resultado");
resultado.innerHTML="Hola Mundo"
const titulo = document.getElementById ("titulo");
titulo.innerHTML = "Calculadora de billetes"

function log(result){
    resultado.innerText += result+"\n"
}

function calcular(){

    const dinero = parseInt(document.getElementById("dinero").value, 10);
    
    const MaxBilletesDe100 = parseInt(document.getElementById("maxBilletesDe100").value, 10);
    const MaxBilletesDe50 = parseInt(document.getElementById("maxBilletesDe50").value, 10);
    const MaxBilletesDe20 = parseInt(document.getElementById("maxBilletesDe20").value, 10);
    const MaxBilletesDe10 = parseInt(document.getElementById("maxBilletesDe10").value, 10);

    resultado.innerText = " "

    let restito = dinero;

let disponible = MaxBilletesDe100*100 + MaxBilletesDe50*50 + MaxBilletesDe20*20 + MaxBilletesDe10*10;
log("Tengo que pagar " + dinero + " y tengo disponible " + disponible);

if (disponible<dinero){
    log("No me alcanza");
}
else {
    log("Me alcanza porque tengo " + disponible);
    let de100 = dinero/100;
    de100 = piso(de100)
    if (de100>MaxBilletesDe100){
        de100 = MaxBilletesDe100;
    }
    log("Voy a pagar " + de100 + " billetes de 100");

    restito = dinero - de100*100;

    let de50 = restito/50;
    de50 = piso(de50);

    if (de50>MaxBilletesDe50) {
        de50 = MaxBilletesDe50;
    }
    log("Voy a pagar " + de50 + " billetes de 50");

    restito = restito - de50*50;

    

    let de20 = restito/20;
    de20 = piso(de20);
    if (de20>MaxBilletesDe20) {
        de20 = MaxBilletesDe20;
    }
    log("Voy a pagar " + de20 + " billetes de 20");

    restito = restito - de20*20;

    

    let de10 = restito/10;
    de10 = techo(de10);
    if (de10>MaxBilletesDe10) {
        de10 = MaxBilletesDe10;
    }
    log("Voy a pagar " + de10 + " billetes de 10");

    restito = restito - de10*10;

    

    if (restito == 0){
        log("Gracias vuelvas prontos")
        }
    else{
        let vuelto = -restito
        log("Me tienen que dar de vuelto " + vuelto + " pe");
    }

}
}