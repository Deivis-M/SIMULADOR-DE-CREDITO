//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingreso, egresos) {
    let disponible = ingreso - egresos;
    if (disponible < 0) {
        disponible = 0;
    }
    return disponible;
}

function calcularCapacidadPago(valorDisponible){
    let calculo = (30/100)*valorDisponible;
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


function limpiarErrores() {
    mostrarEnSpam("spnErrorIngresos", "");
    mostrarEnSpam("spnErrorEgresos", "");
    mostrarEnSpam("spnErrorMonto", "");
    mostrarEnSpam("spnErrorPlazo", "");
    mostrarEnSpam("spnErrorTasa", "");
}

function validarIngresos() {
    let ingreso = recuperarFloat("txtIngresos");

    if (isNaN(ingreso)) {
        mostrarEnSpam("spnErrorIngresos", "Ingrese un valor.");
        return false;
    }

    if (ingreso <= 0) {
        mostrarEnSpam("spnErrorIngresos", "Debe ser mayor que 0.");
        return false;
    }

    if (ingreso > 100000) {
        mostrarEnSpam("spnErrorIngresos", "Máximo permitido: 100000.");
        return false;
    }

    return true;
}

function validarEgresos() {

    let ingreso = recuperarFloat("txtIngresos");
    let egreso = recuperarFloat("txtEgresos");

    if (isNaN(egreso)) {
        mostrarEnSpam("spnErrorEgresos", "Ingrese un valor.");
        return false;
    }

    if (egreso < 0) {
        mostrarEnSpam("spnErrorEgresos", "No puede ser negativo.");
        return false;
    }

    if (egreso > ingreso) {
        mostrarEnSpam("spnErrorEgresos", "No puede ser mayor que los ingresos.");
        return false;
    }

    return true;
}

function validarMonto() {

    let monto = recuperarInt("txtMonto");

    if (isNaN(monto)) {
        mostrarEnSpam("spnErrorMonto", "Ingrese un valor.");
        return false;
    }

    if (monto < 500) {
        mostrarEnSpam("spnErrorMonto", "Mínimo USD 500.");
        return false;
    }

    if (monto > 100000) {
        mostrarEnSpam("spnErrorMonto", "Máximo USD 100000.");
        return false;
    }

    return true;
}

function validarPlazo() {

    let plazo = recuperarInt("txtPlazo");

    if (isNaN(plazo)) {
        mostrarEnSpam("spnErrorPlazo", "Ingrese un valor.");
        return false;
    }

    if (plazo < 1 || plazo > 30) {
        mostrarEnSpam("spnErrorPlazo", "Debe estar entre 1 y 30 años.");
        return false;
    }

    return true;
}

function validarTasa() {

    let tasa = recuperarFloat("txtTasaInteres");

    if (isNaN(tasa)) {
        mostrarEnSpam("spnErrorTasa", "Ingrese un valor.");
        return false;
    }

    if (tasa <= 0 || tasa > 50) {
        mostrarEnSpam("spnErrorTasa", "Debe estar entre 0 y 50%.");
        return false;
    }

    return true;
}

function validarFormulario() {

    limpiarErrores();

    let valido = true;

    if (!validarIngresos()) {
        valido = false;
    }

    if (!validarEgresos()) {
        valido = false;
    }

    if (!validarMonto()) {
        valido = false;
    }

    if (!validarPlazo()) {
        valido = false;
    }

    if (!validarTasa()) {
        valido = false;
    }

    return valido;
}