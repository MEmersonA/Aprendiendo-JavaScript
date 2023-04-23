
class Pelicula{

    constructor(id, titulo, director, año, origen, genero, clasificacion){

        this.id = id
        this.titulo = titulo
        this.director = director
        this.año = año
        this.origen = origen
        this.genero = genero
        this.clasificacion = clasificacion

    }

    setId(){

        let val = false

        while(val === false){

            this.id = prompt("ID de la película en IMBD")

            if(this.id.length === 9){

                val = true

                for (let index = 0; index < 1; index++) {
                    if(!isNaN(parseInt(this.id[index]))){
                        val = false
                        console.log("a")
                        break
                    }
                }

                for (let index = 2  ; index <= 9; index++) {
                    if(typeof parseInt(this.id[index]) !== "number"){
                        val = false
                        console.log("n")
                        break
                    }
                }

            }else{val = false}

        }

    }

    get getId(){

        return this.id

    }

    setTitulo(){

        let val = false

        while(val === false){

            this.titulo = prompt("Titulo")

            if(this.titulo.length <= 100){

                val = true

            }

        }

    }

    get getTitulo(){

        return this.titulo

    }

    setAño(){

        let val = false

        while(val === false){

            this.año = prompt("Año de estreno")

            if(!isNaN(this.año) && this.año.length === 4){
                val = true
            }

        }

    }

    get getAño(){

        return this.año

    }

    setDirector(){

        let val = false

        while(val === false){

            this.director = prompt("Director")

            if(this.director.length <= 50){

                val = true

            }

        }

    }

    get getDirector(){

        return this.director

    }

}

let a = "aa3456789"

console.log(isNaN(parseInt("1s2s")))

const django = new Pelicula()

console.log(django)

django.setId()
console.log(django.getId)

django.setTitulo()
console.log(django.getTitulo)

django.setAño()
console.log(django.getAño)

django.setDirector()
console.log(django.getDirector)
