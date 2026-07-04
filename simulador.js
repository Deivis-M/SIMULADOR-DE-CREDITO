//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular (){
    if(!validarFormulario()){
        return;
    }

    //Todo tu código continúa igual...
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
    let tasaInteresInt= recuperarFloat("txtTasaInteres")
    let interesGenerado=calcularInteresSimple(montoInt,tasaInteresInt,plazoAnioInt)
    let interesGeneradoRedondeado=interesGenerado.toFixed(2);
    mostrarEnSpam("spnInteresPagar",interesGeneradoRedondeado);
    let totalPrestamo = calcularTotalPagar(montoInt,interesGenerado)
    mostrarEnSpam("spnTotalPrestamo",totalPrestamo);
    let cuotaMensual = calcularCuotaMensual(totalPrestamo,plazoAnioInt);
    let cuotaMensualRedondeado=cuotaMensual.toFixed(2);
    mostrarEnSpam("spnCuotaMensual",cuotaMensualRedondeado);
    let estadoCredito = aprobarCredito(capacidadPago,cuotaMensual);
    if (estadoCredito==true){ mostrarEnSpam("spnEstadoCredito", "CREDITO APROBADO")}
    else if (estadoCredito==false){mostrarEnSpam("spnEstadoCredito", "CREDITO RECHAZADO")}
}