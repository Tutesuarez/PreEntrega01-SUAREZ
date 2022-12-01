// Calculada de descuentos segun monto de la compra.

// Declaracion de variables globales.
let descuentoInicial = 0;
let montoFinal =0;
let porcentaje = 0; 
const descuentoVisa = 0.9;
const descuentoMaster = 0.95;


// Consultamos al usuario cantidad de articulos y el monto total.
let montoCompra = prompt("Ingrese el monto total de su compra: ");
let tarjeta = prompt("Con que tarjeta desea abonar, alguna de ellas poseen descuentos adicionales.(visa 10%, master 5% u otra: sin desc.) Digite el nombre de su tarjeta: "
);

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
        case "otra": descuentoInicial=descuentoInicial;
            break;   
        default:
           alert(" Tarjeta no reconocida!!");
    }
    return montoFinal;
};

function mensaje(montoFinal,montoCompra) {
    alert("El monto a abonar es de: " + montoFinal +
        "Su inicial fue de: "+ montoCompra);
}


// Condicional segun el monto de compra:

if (!isNaN(montoCompra) && isNaN(tarjeta)) {
    if (montoCompra >= 60000) {
        porcentaje = 0.7;
        descuentoPorMonto(montoCompra, porcentaje);
        descuentoPorTarjeta(descuentoInicial,tarjeta);
    } else if (montoCompra >= 10000 && montoCompra < 60000) {
        porcentaje = 0.9;
        descuentoPorMonto(montoCompra, porcentaje);
        descuentoPorTarjeta(descuentoInicial,tarjeta);
    } else {
        descuentoInicial=montoCompra;
        descuentoPorTarjeta(descuentoInicial,tarjeta);
    }
  }else{
    alert("Por favor Chequee los datos ingresados");
  }



    





/*
if (montoCompra >= 60000) {
    porcentaje = 0.7;
    descuentoPorMonto(montoCompra, porcentaje);
    descuentoPorTarjeta(descuentoInicial,tarjeta);
} else if (montoCompra >= 10000 && montoCompra < 60000) {
    porcentaje = 0.9;
    descuentoPorMonto(montoCompra, porcentaje);
    descuentoPorTarjeta(descuentoInicial,tarjeta);
} else {
    descuentoInicial=montoCompra;
    descuentoPorTarjeta(descuentoInicial,tarjeta);
}*/

mensaje(montoFinal,montoCompra);

