let amigos = []
let contador = 0;

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value
    if (amigoNuevo == '') {
        alert('Por favor, ingrese un nombre válido')
        return;
    }
    amigos.push(amigoNuevo)
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML += '<li>' + amigos[contador] + '</li>';
    limpiarAmigo();
    contador++;
}

function sortearAmigo() {
    limpiarLista();
    let indice = indiceAleatorio(amigos.length);
    let amigoSorteado = amigos[indice];
    let resultado = document.getElementById('resultado');
    console.log(indice);
    resultado.innerHTML = 'El amigo secreto sorteado es: ' + amigoSorteado;
}

function limpiarAmigo() {
    document.getElementById('amigo').value = ''
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = ''
}

function indiceAleatorio(amigos) {
    return Math.floor(Math.random() * amigos);
}