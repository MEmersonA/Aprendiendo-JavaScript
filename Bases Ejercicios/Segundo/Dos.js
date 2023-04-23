
console.log("Ejercicio 1")

const revertir = function(cadena){

    let cad = ""

    if(typeof cadena !== "string"){

        try {

            cadena = cadena.toString()
            
        } catch (error) {
            
            console.log("El dato ingresado no puede ser leído como texto")

        }

    }

    for (let index = 0; index < cadena.length; index++) {
        
        cad = cadena.charAt(index) + cad
        
    }

    return cad

}

console.log(revertir("Diablo mamañema"))

console.log("Ejercicio 2")

const contarRepetido = function(cadena, caracter){

    if(typeof cadena !== "string"){

        try {

            cadena = cadena.toString()
            
        } catch (error) {
            
            console.log("El dato ingresado no puede ser leído como texto")

        }

    }

    let i = 0
    let conteo = 0

    while(i !== -1){

        i= cadena.indexOf(caracter, i)

        if(i !== -1){

            i++
            conteo++

        }

    }

    return conteo

}

let e2 = "El pepe pepe el pepe ete sech el pepe el lol pepe"

console.log(contarRepetido(e2, "pepe"))

console.log("Ejercicio 3")

const esPalindromo = function(cadena){

    let cad = ""

    if(typeof cadena !== "string"){

        try {

            cadena = cadena.toString()
            
        } catch (error) {
            
            console.log("El dato ingresado no puede ser leído como texto")

        }

    }

    for (let index = 0; index < cadena.length; index++) {
        
        cad = cadena.charAt(index) + cad
        
    }

    if(cad.toLocaleLowerCase() === cadena.toLowerCase()){
        return true
    }else{return false}

}

let pal = "Salas"

console.log(esPalindromo(pal))

console.log("Ejercicio 4")

const separarPatron = function(cadena, patron){

    if(typeof cadena !== "string"){

        try {

            cadena = cadena.toString()
            
        } catch (error) {
            
            console.log("El dato ingresado no puede ser leído como texto")

        }

    }

    let arr = cadena.split(patron)
    let cad = ""

    for (let index = 0; index < arr.length; index++) {
        cad += arr[index];
        
    }

    return cad

}

console.log(separarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))
