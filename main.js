let opcion;

do {
    opcion = parseInt(prompt("Ingrese una opción:\n1. Pesos argentinos a moneda extranjera\n2. Moneda extranjera a pesos argentinos\n3. Salir"));

    if(opcion === 1 || opcion === 2){
        convertidor();
    } else if(opcion !== 3) {
        alert("La opción ingresada no es correcta");
    }

} while (opcion !== 3);

function convertidor(){

    let moneda;

    do {
        moneda = parseInt(prompt("Ingrese una opcion:\n1. Dólar\n2. Euro\n3. Real\n4. Volver atrás"));

        if(moneda>=5 || moneda<=0){
            alert("La opcion ingresada no es correcta");
        } else if(moneda<=3 && moneda>=1){
            let cantidad=parseInt(prompt("Ingrese el valor a convertir"));
            switch(moneda){
                case 1:
                    calcular(cantidad, 843.24, moneda);
                    break;
                case 2:
                    calcular(cantidad, 928.3, moneda);
                    break;
                case 3:
                    calcular(cantidad, 171.89,moneda);
                    break;
            }
            moneda=4;
        
        }

    } while (moneda !== 4);

    
}

function calcular(monto, valorMoneda, moneda){
    let resultado;
    if(opcion===1){
         resultado= monto/valorMoneda;
         
         switch(moneda){
            case 1: alert(resultado.toFixed(2)+" dólares");
            break;
            case 2: alert(resultado.toFixed(2)+" euros");
            break;
            case 3: alert(resultado.toFixed(2)+" reales");
            break;
         }
    }
    else if(opcion===2){
        resultado = monto*valorMoneda;
        alert(resultado.toFixed(2)+" pesos argentinos");
    }
   
}
