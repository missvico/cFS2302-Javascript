const students = ["Alejandro", "Celeste", "Victoria", "Agustin", "Federico", "Fernando", "Axel"]

students[0] //devuelve Alejandro
students[1] //devuelve Celeste
students[5] //devuelve Fernando

const primerEstudiante = students[0]

students.push("Fabrizio")//suma a "Fabrizio" al final
students[6] //devuelve Fabrizio
students.pop() //devuelve Fabrizio -- saca al ultimo elemento de la lista

students.unshift("Fabrizio") //suma a "Fabrizio" al principio
students.shift() //saca al primer elemento de la lista

students[2] = "Maria" //puedo reasignarle valor a uno

students.length //devuelve el largo de nuestro arreglo --> en este caso 7

for(let i = 0; i < students.length; i++){
    console.log(students[i])
}