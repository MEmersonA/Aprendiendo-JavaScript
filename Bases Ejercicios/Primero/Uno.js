
console.log("Primer ejercicio:")

const contarCaracteres = function(cadena){

    if(typeof cadena === "string"){

        return cadena.length

    }else{

        try {

            cadena = cadena.toString()
            return cadena.length
            
        } catch (error) {

            console.log("El dato ingresado no puede ser leído como texto")
            
        }

    }

}

let a = 500
console.log(contarCaracteres(a))

console.log("Segundo ejercicio:")

const imprimirHasta = function(cadena, index){

    if(typeof cadena === "string"){

        cadena = cadena.slice(0,index);
        return cadena

    }else{

        try {

            cadena = cadena.toString()
            cadena = cadena.slice(0,index);
            return cadena
            
        } catch (error) {

            console.log("El dato ingresado no puede ser leído como texto")
            
        }

    }

}

let b =  "HolaMundo"
let i = 5;

console.log(imprimirHasta(b,i))

console.log("Tercer ejercicio:")

const separarCadena = function(cadena, caracter){

    let arr = []

    if(typeof cadena === "string"){

        arr = cadena.split(caracter)
        return arr

    }else{

        try {

            cadena = cadena.toString()
            arr = cadena.split(caracter)
            return arr
            
        } catch (error) {

            console.log("El dato ingresado no puede ser leído como texto")
            
        }

    }

}

let c = "Diablo/Mamañema/Mamaguebaso/Diosypatria/"
console.log(separarCadena(c,"/"))

console.log("Cuarto ejercicio")

const repetirCadena = function(cadena, rep){

    let cad = ""

    if(typeof cadena !== "string"){

        try {

            cadena = cadena.toString()
            
        } catch (error) {
            
            console.log("El dato ingresado no puede ser leído como texto")

        }

    }

    for (let index = 0; index < rep; index++) {
        
        cad += cadena;
        
    }

    console.log(cad)

}

let d = "Lol Equisde"
repetirCadena(d,5)
