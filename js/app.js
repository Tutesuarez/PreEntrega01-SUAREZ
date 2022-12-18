
// Declaracion de variables TP2
let elecccionDeMarca;
const listaPedido=[];
let resultado=[];
let precioXunidadElSeleccionado=0;
let comprobacion=false;
let pedido=0;
let cantidad=0;
let precio=0;
let marcas;

// Declaracion de variables Calculadora de descuentos TP1.
let descuentoInicial = 0;
let montoFinal = 0;
let porcentaje = 0;
let montoCompra = 0;
let tarjeta = 0;
const descuentoVisa = 0.9;
const descuentoMaster = 0.95;


// Matriz de cigarrillos de cigarrillos
const variedadCigarillos = [
    {marca: 'MARLBORO',precioXunidad: 500},
    {marca: 'RED POINT',precioXunidad: 290},
    {marca: 'LUKY STRIKE',precioXunidad: 510},
    {marca: 'CHESTERFIELD',precioXunidad: 460},
    {marca: 'PARLAMENT',precioXunidad: 600},
    {marca: 'MELBOURNE',precioXunidad: 230}
]

//Funciones constructoras, de busqueda, comprobacion.

function mensajeInicial(marcas){
    pedido=prompt('Digite el producto que deseé:\n\n' + marcas);
    pedido=pedido.toUpperCase();
    comprobadorDeMarcas(pedido);
}

function mensajeCantidadDeUnidades(pedido){
    do{
        cantidad=prompt("Cuantas unidades desea de: "+pedido);
        verificador=!isNaN(cantidad);
    }while(verificador!=true)    
    return cantidad;
}

function mensajeTipoDeProducto(marcas) {
    pedido=prompt('Desea agegar algun oto producto, digite la marca. \n\n'+marcas+'\n\n'+'Si no desea agregar otro producto digite ESC');
    pedido=pedido.toUpperCase();
    return pedido;
}

function cargarProducto(elecccionDeMarca,cantidad,precio){
    listaPedido.push(new carrito(elecccionDeMarca,cantidad,precio));
}

function multiplicadorDePrecio(precioXunidadElSeleccionado,cantidad){
    precio=precioXunidadElSeleccionado*cantidad;
    return precio;
}

class carrito{
    constructor(marca,cantidad,precio){
        this.marca=marca;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}

function comprobadorDeMarcas (pedido){
    comprobacion= variedadCigarillos.some((el)=>el.marca==pedido);
    return comprobacion;
}

function eliminarUltimoproducto(listaPedido,pedido){
    let quitar=prompt('Esta seguro que deseea agregar el siguiente producto: '+pedido+'\n'+'ingrese YES o NO');
    quitar=quitar.toLocaleUpperCase();
    if(quitar==='NO'){
        listaPedido.pop();
        console.table(listaPedido);
    }
}

//Funciones Calculadoa de descuento
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
        case "otra":
            montoFinal = descuentoInicial;
            break;
        default:
            alert(" Tarjeta no reconocida!!");
    }
    return montoFinal;
};

function mensaje(montoFinal, montoCompra) {
    alert('El monto a abonar es de: $' + montoFinal + '\n' + 'Monto inical: $' + montoCompra+'\n\n'+'GRACIAS POR SU COMPRA'); 
}


// PROGRAMA
alert('Bienvenido a la tienda de cigarrillos!! \n\nA partir de la compra de $4000 pesos obtendra interesantes descuentos, ademas abonando con VISA o MASTER obtendra un descuento adicional.');
marcas=variedadCigarillos.map((el)=>el.marca);   // Creo un array con solo las marcas de los elementos
mensajeInicial(marcas);
comprobadorDeMarcas(pedido);

do{
    if (comprobacion===false) {
    alert('No contengo esos cigarrillos, por favor verifique el producto ingrsado o ingrese otro producto.');
    mensajeInicial(marcas);
    }
}while (comprobacion!=true)

mensajeCantidadDeUnidades(pedido);

resultado=variedadCigarillos.find((el)=>el.marca===pedido);  // filtro el array en busqueda de mi del objeto seleccionado
precioXunidadElSeleccionado=resultado.precioXunidad; // rescato el precio original y se lo asigno a la variable precio.

multiplicadorDePrecio(precioXunidadElSeleccionado,cantidad);
elecccionDeMarca=resultado.marca;

console.log(precio);
cargarProducto(elecccionDeMarca,cantidad,precio);


do{
    mensajeTipoDeProducto(marcas);
    if (pedido==='ESC') {
        break;
    } else {
        comprobadorDeMarcas(pedido);

        do{
            if (comprobacion===false) {
                alert('No contengo esos cigarrillos, por favor verifique el producto ingrsado o ingrese otro producto.');
                mensajeTipoDeProducto(marcas);
            }
            comprobadorDeMarcas(pedido);
        }while (comprobacion!=true)

        mensajeCantidadDeUnidades(pedido);
        resultado=variedadCigarillos.find((el)=>el.marca===pedido); // selecciono el array que contiene lo q el usuario quiere
        precioXunidadElSeleccionado=resultado.precioXunidad;
        multiplicadorDePrecio(precioXunidadElSeleccionado,cantidad);
        console.log(precio);
        elecccionDeMarca=resultado.marca;
        cargarProducto(elecccionDeMarca,cantidad,precio); // cargo en el nuevo array el producto con a cantidad q quiere el cliente
        eliminarUltimoproducto(listaPedido,pedido);
    }
}while(pedido!= 'ESC')

const montoTotal=listaPedido.reduce((acc,el)=>acc+el.precio,0);
console.log('SubTotal: '+montoTotal);
console.table(listaPedido);
alert('Subtotal: $'+ montoTotal);

/*
COMIENZA CALCULADORA DE DESCUENTO
T.PRACTICO 01.
/////////////////////////////////
*/

montoCompra=montoTotal;

// Condicional segun el monto de compra:
    tarjeta = prompt('Con que tarjeta desea abonar?\nAlguna de ellas poseen descuentos adicionales. \n- Visa 10%\n- Master 5%\n- Otra: sin desc.\n Digite el nombre de su tarjeta: ');
    tarjeta = tarjeta.toLowerCase();

    if (!isNaN(montoCompra) && isNaN(tarjeta)) {
        if (montoCompra >= 6000) {
            porcentaje = 0.7;
            descuentoPorMonto(montoCompra, porcentaje);
            descuentoPorTarjeta(descuentoInicial, tarjeta);
        } else if (montoCompra >= 4000 && montoCompra < 6000) {
            porcentaje = 0.9;
            descuentoPorMonto(montoCompra, porcentaje);
            descuentoPorTarjeta(descuentoInicial, tarjeta);
        } else {
            descuentoInicial = montoCompra;
            descuentoPorTarjeta(descuentoInicial, tarjeta);
        }
    } else {
        alert('Por favor verifique los datos ingresados');
    }
    console.log('Compra incial: ' + montoCompra);
    console.log('El monto con descuento es: ' + montoFinal);
    mensaje(montoFinal, montoCompra);


