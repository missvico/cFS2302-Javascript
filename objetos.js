const person = {
    name: "Victoria",
    age: 26,
    knowsJs: true,
    favColors: ["celeste", "verde"]
}

//DOT NOTATION: 
person.name 

//BRACKET NOTATION
person["name"]

//MODIFICAR UN VALOR
person.age = 27
person["knowsJs"] = false

//ADD VALUE
person.surname = "Di Liscia"
person["city"] = "Buenos Aires"

//los arreglos que estan en propiedades, se pueden tratar como los arreglos que estan guardados en variales
person.favColors[0] //"celeste"
person.favColors.push("pink") //le sumo un color

//A la bracket notation le puedo pasar variables para hacer busquedas dinamicas
const property = prompt("Ingresa la variable a buscar")
alert(person[property])

person[property] //devuelve "Victoria"
person.property //devuelve undefined