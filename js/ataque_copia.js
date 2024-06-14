const ocultarSecciones1 = document.getElementById('seccion-muestra-seleccion')
const ocultarSecciones2 = document.getElementById('select-ataque')
const ocultarSecciones3 = document.getElementById('seccion-ataques')
const ocultarSecciones4 = document.getElementById('reiniciar')
const ocultarSecciones5 = document.getElementById('game-over')
const imagenSelect_goku = document.getElementById('goku-select')
const imagenSelect_bills = document.getElementById('bills-select')
const imagenSelect_freezer = document.getElementById('freezer-select')
const imagenSelect_krillin = document.getElementById('krillin-select')
const imagenSelect_picolo = document.getElementById('picolo-select')
const imagenSelect_vegueta = document.getElementById('vegueta-select')
const btnguerreroJugador = document.getElementById('btn-batalla')
const labelGoku = document.getElementById('label-goku')
const labelbills = document.getElementById('label-bills')
const labelfreezer = document.getElementById('label-freezer')
const labelkrillin = document.getElementById('label-krillin')
const labelpicolo = document.getElementById('label-picolo')
const labelvegueta = document.getElementById('label-vegueta')
const botonFuego = document.getElementById('btn-fuego')
const botonAgua = document.getElementById('btn-agua')
const botonTierra = document.getElementById('btn-tierra')
const botonReiniciar = document.getElementById('btn-reiniciar')

const inputgoku = document.getElementById('goku');
const eligeGuerreroGoku = document.getElementById('eligiendo-guerrero')
const inputbills = document.getElementById('bills');
const eligeGuerreroBills = document.getElementById('eligiendo-guerrero')
const inputfreezer = document.getElementById('freezer');
const eligeGuerreroFreezer = document.getElementById('eligiendo-guerrero')
const inputkrillin = document.getElementById('krillin');
const eligeGuerreroKrillin = document.getElementById('eligiendo-guerrero')
const inputpicolo = document.getElementById('picolo');
const eligeGuerreroPicolo = document.getElementById('eligiendo-guerrero')
const inputvegueta = document.getElementById('vegueta');
const eligeGuerreroVegueta = document.getElementById('eligiendo-guerrero')
const spanguerreroJugador = document.getElementById('guerrero-jugador');

const guerreroElegido = document.getElementById('guerrero-elegido')

const alertaGuerrero = document.getElementById('eligiendo-guerrero')

const ocultarSeleccionGuerrero = document.getElementById('select-guerrero')

const ocultarBotonBatalla = document.getElementById('btn-batalla')

const spanguerreroEnemigo = document.getElementById('guerrero-enemigo')
const enemigoElegido = document.getElementById('enemigo-elegido')

const spanAtaqueJugador = document.getElementById('ataque-jugador')
const spanAtaqueEnemigo = document.getElementById('ataque-enemigo')

const sectionMensajesJugador = document.getElementById('ataque-jugador')
const sectionMensajesEnemigo = document.getElementById('ataque-enemigo')
const spanResultadoAtaque = document.getElementById('resultado-combate')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const spanFinalizarJuego = document.getElementById('fin-juego')

let ataqueJugador;
let ataqueEnemigo;
let resultadoAtaque;
let vidasJugador = 3;
let vidasEnemigo = 3;
const rutaImagenGoku = "./img/goku.png"
const rutaImagenBills = "./img/bills.png"
const rutaImagenFreezer = "./img/freezer.png"
const rutaImagenKrillin = "./img/krillin.png"
const rutaImagenPicolo = "./img/picoro.png"
const rutaImagenVegueta = "./img/vegueta.png"


class Guerrero {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let guerreros = []
let goku = new Guerrero('Goku','./img/goku.png',5)
let bills = new Guerrero('Bills','./img/bills.png',5)
let freezer = new Guerrero('Freezer','./img/freezer.png',5)
let krillin = new Guerrero('Krillin','./img/krillin.png',5)
let picolo = new Guerrero('Picollo','./img/picoro.png',5)
let vegueta = new Guerrero('Vegueta','./img/vegueta.png',5)

guerreros.push(goku,bills,freezer,picolo)

console.log(guerreros)





function iniciarJuego() {
    ocultarSecciones1.style.display = "none"
    ocultarSecciones2.style.display = "none"
    ocultarSecciones3.style.display = "none"
    ocultarSecciones4.style.display = "none"
    ocultarSecciones5.style.display = "none"
    //hacer que las imagenes funcionen al click
    imagenSelect_goku.addEventListener('click', seleccionaImagen_goku)
    imagenSelect_bills.addEventListener('click', seleccionaImagen_bills)
    imagenSelect_freezer.addEventListener('click', seleccionaImagen_freezer)
    imagenSelect_krillin.addEventListener('click', seleccionaImagen_krillin)
    imagenSelect_picolo.addEventListener('click', seleccionaImagen_picolo)
    imagenSelect_vegueta.addEventListener('click', seleccionaImagen_vegueta)
    btnguerreroJugador.addEventListener('click', seleccionarguerreroJugador)
    //hacer que los label funcionen al click
    labelGoku.addEventListener('click', seleccionaImagen_goku)
    labelbills.addEventListener('click', seleccionaImagen_bills)
    labelfreezer.addEventListener('click', seleccionaImagen_freezer)
    labelkrillin.addEventListener('click', seleccionaImagen_krillin)
    labelpicolo.addEventListener('click', seleccionaImagen_picolo)
    labelvegueta.addEventListener('click', seleccionaImagen_vegueta)
    //hacer que los botones funcionen
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionaImagen_goku() {
    inputgoku.checked = true
    eligeGuerreroGoku.innerHTML = "Elegiste a GOKU"
}
function seleccionaImagen_bills() {
    eligeGuerreroBills.innerHTML = "Elegiste a Bills"
    inputbills.checked = true
}
function seleccionaImagen_freezer() {
    eligeGuerreroFreezer.innerHTML = "Elegiste a Freezer"
    inputfreezer.checked = true
}
function seleccionaImagen_krillin() {
    eligeGuerreroKrillin.innerHTML = "Elegiste a Krillin"
    inputkrillin.checked = true
}
function seleccionaImagen_picolo() {
    eligeGuerreroPicolo.innerHTML = "Elegiste a Picolo"
    inputpicolo.checked = true
}
function seleccionaImagen_vegueta() {
    eligeGuerreroVegueta.innerHTML = "Elegiste a Vegueta"
    inputvegueta.checked = true
}
function seleccionarguerreroJugador() {
    if (inputgoku.checked) {
        spanguerreroJugador.innerHTML = "Goku"
        guerreroElegido.src = rutaImagenGoku
        ocultarSeccionesInicial()
    }
    else if (inputbills.checked) {
        spanguerreroJugador.innerHTML = "Bills"
        guerreroElegido.src = rutaImagenBills

        ocultarSeccionesInicial()
    }
    else if (inputfreezer.checked) {
        spanguerreroJugador.innerHTML = "Freezer"
        guerreroElegido.src = rutaImagenFreezer
        ocultarSeccionesInicial()
    }
    else if (inputkrillin.checked) {
        spanguerreroJugador.innerHTML = "Krillin"
        guerreroElegido.src = rutaImagenKrillin
        ocultarSeccionesInicial()
    }
    else if (inputpicolo.checked) {
        spanguerreroJugador.innerHTML = "Piccolo"
        guerreroElegido.src = rutaImagenPicolo
        ocultarSeccionesInicial()
    }
    else if (inputvegueta.checked) {
        spanguerreroJugador.innerHTML = "Vegueta"
        guerreroElegido.src = rutaImagenVegueta
        ocultarSeccionesInicial()
    }
    else {

        alertaGuerrero.innerHTML = 'Debes elegir un guerrero'
    }

}
function ocultarSeccionesInicial() {
    seleccionarguerreroEnemigo()
    defineVidas()
 ocultarSecciones1.style.display = 'flex'
 ocultarSecciones2.style.display = 'flex'
 ocultarSecciones5.style.display = "none"
 ocultarSeleccionGuerrero.style.display = "none"
 ocultarBotonBatalla.style.display = "none"
}
function seleccionarguerreroEnemigo() {
    let guerreroAleatorio = aleatorio(1, 6)

    if (guerreroAleatorio == 1) {
        spanguerreroEnemigo.innerHTML = "Goku"
        enemigoElegido.src = rutaImagenGoku
    }
    else if (guerreroAleatorio == 2) {
        spanguerreroEnemigo.innerHTML = "Bills"
        enemigoElegido.src = rutaImagenBills
    }
    else if (guerreroAleatorio == 3) {
        spanguerreroEnemigo.innerHTML = "Freezer"
        enemigoElegido.src = rutaImagenFreezer
    }
    else if (guerreroAleatorio == 4) {
        spanguerreroEnemigo.innerHTML = "Krillin"
        enemigoElegido.src = rutaImagenKrillin
    }
    else if (guerreroAleatorio == 5) {
        spanguerreroEnemigo.innerHTML = "Picolo"
        enemigoElegido.src = rutaImagenPicolo
    }
    else if (guerreroAleatorio == 6) {
        spanguerreroEnemigo.innerHTML = "Vegueta"
        enemigoElegido.src = rutaImageenemigo
    }
}
function ataqueFuego() {
    ataqueJugador = "Kame Hame 🔥"
    spanAtaqueJugador = ataqueJugador
    seleccionarAtaqueEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Haikyuken 💧"
    seleccionarAtaqueEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Genki Dama 🌎"
    seleccionarAtaqueEnemigo()
}
function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Kame Hame 🔥"
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Haikyuken 💧"
    }
    else {
        ataqueEnemigo = "Genki Dama 🌎"
    }
    resultadoFinal()
    ocultarSecciones3.style.display = "flex"
}
function crearMensajeAtaqueJugador() {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ataqueJugador
    sectionMensajesJugador.appendChild(parrafo)
}
function crearMensajeAtaqueEnemigo(resultado) {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ataqueEnemigo
    sectionMensajesEnemigo.appendChild(parrafo)
}
function resultadoFinal() {

    if (ataqueJugador == ataqueEnemigo) {
        // alert("Hay un empate")
        resultadoAtaque = "Hay Un Empate"
        crearMensajeAtaqueJugador()
        crearMensajeAtaqueEnemigo()
        defineVidas()

    } else if ((ataqueJugador == 'Kame Hame 🔥' && ataqueEnemigo == 'Genki Dama 🌎') || (ataqueJugador == 'Haikyuken 💧' && ataqueEnemigo == 'Kame Hame 🔥') || (ataqueJugador == 'Genki Dama 🌎' && ataqueEnemigo == 'Haikyuken 💧')) {
        resultadoAtaque = "Ganaste"
        vidasEnemigo--
        crearMensajeAtaqueJugador()
        crearMensajeAtaqueEnemigo()
        defineVidas()
    }
    else {
        resultadoAtaque = "Perdiste"
        vidasJugador--
        crearMensajeAtaqueJugador()
        crearMensajeAtaqueEnemigo()
        defineVidas()
    }

    spanResultadoAtaque.innerHTML = resultadoAtaque
    revisarVidas()
}
function defineVidas() {
    if ((vidasJugador > 0 && vidasEnemigo > 0)) {
        spanVidasJugador.innerHTML = vidasJugador
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else if (vidasJugador == 0 || vidasEnemigo == 0) {
        spanVidasJugador.innerHTML = vidasJugador
        spanVidasEnemigo.innerHTML = vidasEnemigo
        spanFinalizarJuego.innerHTML = resultadoAtaque
        ocultarSecciones5.style.display = 'flex'
    }
}
function revisarVidas() {
    if (vidasEnemigo == 0) {
        document.getElementById("btn-fuego").disabled = true;
        document.getElementById("btn-agua").disabled = true;
        document.getElementById("btn-tierra").disabled = true;
        ocultarSecciones4.style.display = "flex"

    } else if (vidasJugador == 0) {
        document.getElementById("btn-fuego").disabled = true;
        document.getElementById("btn-agua").disabled = true;
        document.getElementById("btn-tierra").disabled = true;
        ocultarSecciones4.style.display = "flex"
    }

}
function reiniciarJuego() {
    location.reload();
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)



