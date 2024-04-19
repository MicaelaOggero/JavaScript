const monedasDisponibles = [
    { id:1, moneda: "dólares"},
    { id:2, moneda: "euros"},
    { id:3, moneda: "reales"},
    { id:4, moneda: "yuanes"},
    { id:5, moneda: "pesos argentinos"},
    { id:6, moneda: "pesos mexicanos"}
]; 

const tasasDeConversion = {
    "dólares": {
        "dólares": 1,
        "euros": 0.86,
        "reales": 5.2,
        "yuanes": 6.49,
        "pesos argentinos": 869.76,
        "pesos mexicanos": 17.20
    },
    "euros": {
        "dólares": 1.16,
        "euros": 1,
        "reales": 6.05,
        "yuanes": 7.56,
        "pesos argentinos": 927.08,
        "pesos mexicanos": 18.34
    },
    "reales": {
        "dólares": 0.19,
        "euros": 0.17,
        "reales": 1,
        "yuanes": 1.25,
        "pesos argentinos": 165.93,
        "pesos mexicanos": 3.27
    },
    "yuanes": {
        "dólares": 0.15,
        "euros": 0.13,
        "reales": 0.8,
        "yuanes": 1,
        "pesos argentinos": 120.16,
        "pesos mexicanos":2.37
    },
    "pesos argentinos": {
        "dólares": 0.0012,
        "euros": 0.0011,
        "reales": 0.0060,
        "yuanes": 0.0083,
        "pesos argentinos": 1,
        "pesos mexicanos": 0.020
    },
    "pesos mexicanos": {
        "dólares": 0.058,
        "euros": 0.054,
        "reales": 0.31,
        "yuanes": 0.42,
        "pesos argentinos": 50.57,
        "pesos mexicanos": 1
    }
};

function main() {
    let monedaOrigen;
    do {
        monedaOrigen = seleccionarMoneda("Ingrese la moneda a convertir:", true);

        if (monedaOrigen !== monedasDisponibles.length+1) {
            let cantidad = validarCantidad();
            
            let monedaDestino = seleccionarMoneda("Ingrese a qué moneda quiere convertirla:", false);

            if (monedaDestino !== monedasDisponibles.length+1) {
                convertir(monedaOrigen, monedaDestino, cantidad);
            }
        }
    } while (monedaOrigen !== monedasDisponibles.length+1);
}

function seleccionarMoneda(mensaje, opcionMenu) {
    let opcion;
    do {
        const opcionesMoneda = monedasDisponibles.map(elemento => `${elemento.id}. ${elemento.moneda}`).join('\n');
        
        if(opcionMenu){
            
            opcion = parseInt(prompt(`${mensaje}\n${opcionesMoneda}\n${monedasDisponibles.length+1}. Salir`));   
        }else{
            opcion = parseInt(prompt(`${mensaje}\n${opcionesMoneda}\n${monedasDisponibles.length+1}. Volver atrás`));  
        }

        if (opcion > monedasDisponibles.length+1 || opcion <= 0) {
            alert("La opción ingresada no existe");
        }
    } while (opcion > monedasDisponibles.length+1 || opcion <= 0);
    
    return opcion;
}

function validarCantidad() {
    let cantidad;
    do {
        cantidad = parseFloat(prompt("Ingrese la cantidad a convertir"));
        if (cantidad <= 0) {
            alert("Ingrese una cantidad positiva mayor a 0");
        }
    } while (cantidad <= 0);
    
    return cantidad;
}

function convertir(monedaOrigen, monedaDestino, cantidad) {
    let monedaSeleccionadaOrigen = monedasDisponibles.find( elemento => elemento.id === monedaOrigen);
    let monedaSeleccionadaDestino = monedasDisponibles.find( elemento => elemento.id === monedaDestino);

    const tasa = tasasDeConversion[monedaSeleccionadaOrigen.moneda][monedaSeleccionadaDestino.moneda];
    
    if (!tasa) {
        alert("No se encontró una tasa de conversión entre las monedas seleccionadas");
        return;
    }
    const resultado = cantidad * tasa;
    alert(`${cantidad} ${monedaSeleccionadaOrigen.moneda} son ${resultado.toFixed(2)} ${monedaSeleccionadaDestino.moneda}`);
}

// Inicio
main();
