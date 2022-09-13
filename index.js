class Acertijo {
    constructor (consigna, resolucion) {
        this.consigna = consigna
        this.resolucion = resolucion
    }
}

saludo()

function saludo() {

    let nombre = prompt("Hola! queremos darte la bienvenida a esta nueva aventura. Por favor, escribe tu nombre.")

    if (nombre=="" || nombre==null) {
        alert("Ups! Parece que no ha completado su nombre")
        saludo()
    }
    else {
        let bienvenida = prompt("Al fin " + nombre + " te hemos encontrado! te estabamos buscando. Sabes a lo que nos enfrentamos si, o no?")
        let resultado = primerAcertijo(bienvenida)

        while (resultado === false) {
            alert ("Parece que no son las palabras correctas")
            resultado = primerAcertijo (bienvenida)        }

        let resultadoDos = segundoAcertijo()

        while (resultadoDos === false) {
            alert ("Vuelve a intentarlo!")
            resultadoDos = segundoAcertijo()
        }
        alert("Excelente. Si quieres salvarte, deberás demostrar tu valentía ¿Estás preparado? Continuará")
    
            
        }            
    }

function primerAcertijo(bienvenida) {
    
    let textoUno = "Eeee.. es algo dificil de explicar, agarra papel y lapiz y toma nota. Mientras tanto no tenemos mucho tiempo"

    let textoDos = "Excelente! Pues es muy dificil de explicar sino.  Mientras tanto no tenemos mucho tiempo, agarra papel y lapiz. ¡Vamos!"

    if (bienvenida=="no") {
        alert(textoUno)
    }
    else if (bienvenida=="si") {
        alert (textoDos)
    }
    else {
        alert("Lo siento! no entiendo tu respuesta")
    }

    let consignaUno = "Necesito que decifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra E. 'Hola, vivimos en el exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor, y ayer vimos las primeras estrellas'"

    let resolucionUno = ["exterior", "escrito", "estrellas"]

    const acertijoUno = new Acertijo (consignaUno, resolucionUno)

    alert(acertijoUno.consigna)
    return tresPalabras(acertijoUno.resolucion) 
}

function tresPalabras(respuestaUno) {
    
    let resolucionUsuario = ["","",""]
    for (let i=0 ; i<3 ; i++) {
            resolucionUsuario[i] = prompt ("ingrese palabra nº" + (i+1))
    }

    console.log(resolucionUsuario)
    return ValidacionTresPalabras(resolucionUsuario, respuestaUno)
        
}

//cada elemento del array resolucionUsuario debe ser igual que los elementos de resolucionUno sin importar su orden
function ValidacionTresPalabras (resolucionUsuario, resolucionUno) {

    let flag = false

    for (let palabra of resolucionUsuario) {
        if (resolucionUno.includes(palabra)) {
            flag = true
        }
        else {
            return false
        }
    }
    return flag
}


function segundoAcertijo() {
    let consignaDos = "Exterior, escrito, estrellas... ¿Qué nos querrán decir? Ah! Todavía no te he contado... Se viene algo muy grande y debemos estar listos. ¡Espera! '7548L932U97268Z' esto dice al final. Ves algunas letras?"

    let respuestaDos = "LUZ"

    const acertijoDos = new Acertijo (consignaDos, respuestaDos)

    let respuestaUsuario = prompt (acertijoDos.consigna)
    
    return validacionDos(respuestaUsuario)
}

function validacionDos (respuesta){
    if (respuesta.toUpperCase()==="LUZ") {
return true    }

return false
}