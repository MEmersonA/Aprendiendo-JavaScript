
const aleatorio = function(){

    let r = 0

    while( r < 501 || r > 600 ){

        r = Math.random()*1000

    }

    return r

}

console.log(aleatorio())
