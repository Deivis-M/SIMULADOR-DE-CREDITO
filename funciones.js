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