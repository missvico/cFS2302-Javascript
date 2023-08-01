const uno = 1
const dos = 2
const cuatro = 4

//MAYOR
cuatro > dos //devuelve true
dos < cuatro //devuelve false

//MENOR
cuatro < dos //devuelve true
dos > cuatro //devuelve false

//MAYOR o IGUAL
cuatro >= dos //devuelve true
cuatro >= 4 // true
uno >= dos //false

//MENOR o IGUAL
cuatro <= dos //devuelve false
cuatro <= 4 // true
uno <= dos //true


//IGUALDAD ABSTRACTA --> Hace conversion de tipo
cuatro == "4" //devuelve true, porque hace conversion de tipo
cuatro == 4 //devuelve true
cuatro == 2 //devuelve false


//IGUALDAD ESTRICTA
cuatro === "4" //Devuelve false, porque no hace conversion de tipo
cuatro === 4 //Devuelve true
cuatro === 2 //devuelve false


//DESIGUALDAD ABSTRACTA
cuatro != "4" //devuelve false, porque hace conversion
cuatro != 4 //devuelve false
cuatro != 2 //devuelve true


//DESIGUALDAD ESTRICTA
cuatro !== "4"  //devuelve true, porque no hace conversion
cuatro !== 4 //devuelve false
cuatro !== 2 //devuelve true