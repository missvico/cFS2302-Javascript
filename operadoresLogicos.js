//VALORES FALSEY

Boolean(0)
Boolean("")
Boolean(undefined)
Boolean(null)
Boolean(false)

const zero = 0
const emptystring = ""
const nullData = null
const firstName = "Juan"
const age = 2
const conditionTrue = 3 > 2

// OPERADOR OR ||

const or1 = zero || firstName || emptystring

//1. Boolean(0) --> devuelve false
//2. Como es false pasa al siguiente termino
//3. Boolean("Juan") --> devuelve true
//4. Devuelve "Juan" y deja de leer la cadena

const or2 = zero || nullData || emptystring

//1. Boolean(0) --> devuelve false
//2. Como es false pasa al siguiente termino
//3. Boolean(null) --> devuelve false
//4. Como es false pasa al siguiente termino
//5. Boolean("") --> devuelve false
//6. Como es false y no hay mas datos a la derecha, devuelve ""

const or3 = emptystring || nullData || zero //en este caso devuelve 0 por ser el ultimo


//OPERADOR AND

const and1 = zero && firstName && emptystring

//1. Boolean(0) -> es false
//2.  Como es false, va a devolver ese valor 0

const and2 = firstName && nullData && conditionTrue

//1. Boolean("Juan") -> es true
//2. Como es true, va a pasar al siguiente valor
//3. Boolean(null) --> es false
//4. Como es false, va a devolver ese valor y dejar de leer la cadena 

const and3 = firstName && conditionTrue && age

//1. Boolean("Juan") -> es true
//2. Como es true, va a pasar al siguiente valor
//3. Boolean(true) -> es true
//4. Como es true, va a pasar al siguiente valor
//5. Boolean(2) -> es true
//6. Como es true, y  es el ultimo dato de la cadena, devuelve 2

//NOT --> devuelve el booleano contrario

!firstName //devuelve false
!zero //devuelve true