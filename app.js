/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Dame un numero del 1 al 10";

function intentoDeUsuario() {
    alert('Click desde la funcion');
}*/
numeroSecreto = 0;
let intentos = 0;
//console.log(numeroSecreto);
//si el numero secreto se declara en la variable global si lo veria en consola pero
//ahora esta declarado el valor en un afuncion mas abajo, aqui no sirve ese console.log ya
let listaNumerosSorteados = [];
numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(intentos);
    if (numeroUsuario === numeroSecreto) {//=== tipos de datos iguales
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //no es necesario # la funcion ya sabe que es un id
    } else { //EL USUARIO NO ACERTO
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();

    //mensaje con intervalo de numeros
    condicionesIniciales();

    //generar numero aleatorio
    //inicializar el numero de intentos
    //esto en la funcion de condiciones

    //desahbilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
    let numerogenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numerogenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se han sorteado todes los numeros posibles');
    } else {
        //Si el numero se duplica en la lista, includes recorre la lista y verifica existencia
        if (listaNumerosSorteados.includes(numerogenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numerogenerado);
            return numerogenerado;
        }
        
    }
        
}

condicionesIniciales();


