// Calculada de descuentos segun monto de la compra.

// Declaracion de variables globales.
let descuentoInicial = 0;
let montoFinal = 0;
let porcentaje = 0;
let montoCompra =0;
let tarjeta=0;
const descuentoVisa = 0.9;
const descuentoMaster = 0.95;



// Fuciones
const descuentoPorMonto = (montoCompra, porcentaje) => {
    descuentoInicial = montoCompra * porcentaje;
    return descuentoInicial;
};


const descuentoPorTarjeta = (descuentoInicial, tarjeta) => {
    switch (tarjeta) {
        case "visa":
            montoFinal = descuentoInicial * descuentoVisa;
            break;
        case "master":
            montoFinal = descuentoInicial * descuentoMaster;
            break;
        case "otra": montoFinal = descuentoInicial;
            break;
        default:
            alert(" Tarjeta no reconocida!!");
    }
    return montoFinal;
};

function mensaje(montoFinal, montoCompra) {
    alert("El monto a abonar es de: " + montoFinal +
        "Su inicial fue de: " + montoCompra);
}


// Condicional segun el monto de compra:
do {

    montoCompra = prompt("Ingrese el monto total de su compra: ");
    tarjeta = prompt("Con que tarjeta desea abonar, alguna de ellas poseen descuentos adicionales.(visa 10%, master 5% u otra: sin desc.) Digite el nombre de su tarjeta: "
);
    if (!isNaN(montoCompra) && isNaN(tarjeta)) {
        if (montoCompra >= 60000) {
            porcentaje = 0.7;
            descuentoPorMonto(montoCompra, porcentaje);
            descuentoPorTarjeta(descuentoInicial, tarjeta);
        } else if (montoCompra >= 10000 && montoCompra < 60000) {
            porcentaje = 0.9;
            descuentoPorMonto(montoCompra, porcentaje);
            descuentoPorTarjeta(descuentoInicial, tarjeta);
        } else {
            descuentoInicial = montoCompra;
            descuentoPorTarjeta(descuentoInicial, tarjeta);
        }
    } else {
        alert("Por favor Chequee los datos ingresados");
    }
    
    mensaje(montoFinal, montoCompra);
    salida =prompt("Si desea realizar otra operacioningrese ingrese un valor distinto de 0, si desea salir ingrese 0");

    if (salida===0) {
        montoCompra=0;
        montoFinal=0;
    }

} while (salida!=0);