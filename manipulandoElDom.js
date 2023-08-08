

const firstP = document.getElementById("primer-parrafo")
firstP.style.color = "red"

const title = document.querySelector("h1")
const paragraphs = document.querySelectorAll("p") //obtengo todos los parrafos
const listElements = document.getElementsByClassName("list-element")

title.addEventListener("mouseover", function(event){
    if(event.target.style.backgroundColor !== "#da4033"){
        event.target.style.backgroundColor = "#da4033"
    }else{
        event.target.style.backgroundColor = "#aa4040"
    }
   
})

for(let i = 0; i<listElements.length; i++){
    listElements[i].addEventListener("click", (event)=>{
        event.target.classList.toggle("checked")
    })
}

const nameInput = document.getElementById("name-input")
const genderInput = document.getElementById("gender-input")
const mainButton = document.getElementById("main-button")

let nombre = ""
let genero = ""

nameInput.addEventListener("change", function(event){
    nombre = event.target.value
})

genderInput.addEventListener("change", function(event){
    genero = event.target.value
})

mainButton.addEventListener("click", function(event){
    welcomeUser(nombre, genero)
})

function welcomeUser(name, gender){
    if(gender === "F"){
        alert("Bienvenida "+name)
    }else if(gender === "M"){
        alert("Bienvenido "+name)
    }else{
        alert("Bienvenidx "+name)
    }
}




