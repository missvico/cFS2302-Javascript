
let age = prompt("Cual es tu edad?")

if(age < 16){
    alert("No podes ingresar")
    console.log("No podes ingresar")
}else if(age < 18){
    alert("Podes ingresar al club pero no al bar")
    console.log("Podes ingresar al club pero no al bar")
}else{
    alert("Podes ingresar al club y al bar")
    console.log("Podes ingresar al club y al bar")
}