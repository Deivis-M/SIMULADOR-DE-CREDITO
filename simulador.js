//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular (){
    let ingresoFloat = recuperarFloat("txtIngresos")
    let egresoFlaat = recuperarFloat("txtEgresos")
    let valorDisponible = calcularDisponible(ingresoFloat,egresoFlaat)
    let valorDisponibleRedondeado=valorDisponible.toFixed(2);
    mostrarEnSpam("spnDisponible",valorDisponibleRedondeado)
}