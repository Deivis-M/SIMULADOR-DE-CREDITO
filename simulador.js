//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular (){
    let ingresoFloat = recuperarFloat("txtIngresos")
    let egresoFlaat = recuperarFloat("txtEgresos")
    let valorDisponible = calcularDisponible(ingresoFloat,egresoFlaat);
    let valorDisponibleRedondeado=valorDisponible.toFixed(2);
    mostrarEnSpam("spnDisponible",valorDisponibleRedondeado);
    let capacidadPago=calcularCapacidadPago(valorDisponible);
    let CapacidadPagoRedondeada=capacidadPago.toFixed(2);
    mostrarEnSpam("spnCapacidadPago",CapacidadPagoRedondeada);
    let montoInt=recuperarInt("txtMonto")
    let plazoAnioInt=recuperarInt("txtPlazo")
    let tasaInteresInt= recuperarInt("txtTasaInteres")
    let interesGenerado=calcularInteresSimple(montoInt,plazoAnioInt,tasaInteresInt)
    let interesGeneradoRedondeado=interesGenerado.toFixed(2);
    mostrarEnSpam("spnInteresPagar",interesGeneradoRedondeado);
    let totalPrestamo = calcularTotalPagar(montoInt,interesGenerado)
    mostrarEnSpam("spnTotalPrestamo",totalPrestamo);


}