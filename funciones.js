//saludar("Victoria")
// saludarExpresion("VictoriaExp") --> va a dar un error, no la puedo llamar antes de declararla porque es una expresion de funcion
//saludarArrow("Juan") --> idem arriba, es una expresion de funcion

function saludar(name){
    alert("Bienvenido "+ name )
}

function double(number){
    return number*2
}
const result = double(5) //puedo guardar lo que retorna una funcion en una variable

const saludarExpresion = function(name){
    alert("Bienvenido "+ name )
}

const saludarArrow = (name) =>{
    alert("Bienvenido "+name)
}

const doubleArrow = number => number*2 
//cuando es un solo argumento se puede escribir sin parentesis
//cuando es solo una linea puedo no escribir ni el return ni las llaves

// const userName = prompt("Cual es tu nombre?")
// const userGender = prompt("Cual es tu genero?")
// welcomeUser(userName, userGender)

//CALLBACK FUNCTIONS
function welcomeUser(name, gender){
    if(gender === "F"){
        alert("Bienvenida "+name)
    }else if(gender === "M"){
        alert("Bienvenido "+name)
    }else{
        alert("Bienvenidx "+name)
    }
}

function registerUser(name, gender){
    alert("Gracias "+ name + " ya registramos tus datos")
}

function despedir(name, gender){
    alert("Hasta luego "+ name)
}
function processUser(callback){
    const userName = prompt("Cual es tu nombre?")
    const userGender = prompt("Cual es tu genero?")

    callback(userName, userGender)
}

const arrayExample = ["Celeste", "Fabrizio", "Victoria", "Juan", "Alex"]

function countChar (array){
    const resultObject = {}
    
    for(let i = 0; i<array.length; i++){
        const word = array[i]
        const wordLength = array[i].length
    
        resultObject[word] = wordLength
    }
    return resultObject
}

