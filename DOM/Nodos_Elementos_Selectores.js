
console.log("Hola")

console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("Nombre"))
console.log(document.getElementById("menu"))

console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)

document.querySelectorAll("a").forEach((el) => console.log(el))

console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[3])
console.log(document.querySelectorAll("#menu li"))

