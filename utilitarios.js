function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor
}

function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function recuperarInt(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorInt = parseInt(valorTexto);
    return valorInt;
}

function mostrarEnSpam(idSpan,valor){
    let componente=document.getElementById(idSpan)
    componente.textContent=valor;   
}