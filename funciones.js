//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingreso, egresos) {
    let disponible = ingreso - egresos;
    if (disponible < 0) {
        disponible = 0;
    }
    return disponible;
}

function calcularCapacidadPago(valorDisponible){
    let calculo = (50/100)*valorDisponible;
    return calculo
}

function calcularInteresSimple (monto,tasa,plazo){
    let calculo=plazo*monto*(tasa/100)
    return calculo
}

function calcularTotalPagar (monto,interes){
    let calculo= monto+interes+100
    return calculo
}

function calcularCuotaMensual(total,plazoAnios){
    let meses = plazoAnios*12
    let calculo = total/meses
    return calculo
}

function aprobarCredito(capacidadPago,cuotaMensual){
    if (capacidadPago>cuotaMensual){
        return true
    }
    else{
        return false
    }
}