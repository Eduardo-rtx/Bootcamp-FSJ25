console.log("Hola probando 123");


// ---- Operadores Matematicos

let suma = 2 + 2;
let resta = 4-2;
let division = 135/5;
let residuo = 10%2;

console.log("suma: ", suma);
console.log("resta: ", resta);
console.log("division: ", division);
console.log("residuo: ", residuo);

// CONCATENACION: UNIR 2 VALORES Y CUALQUIERA DE LOS DOS ES UN string
let sumaFalsa = 2 + 3 + "2";
console.log(sumaFalsa);


// ---- Operadores Logicos (Ejecutamos comparaciones)

let igualdad = 10 == "10";
console.log(igualdad);

// Igualdad Estricta === COMPARA EL VALOR DE LAS COSAS Y SU TIPO DE DATO

let igualdadEstricta = 10 === "10";
console.log(igualdadEstricta);

// Desigualdad

let desigualdad = 10 !=  "10";
console.log(desigualdad);

// Desigualdad Estricta !== COMPARA SI LOS VALORES Y EL TIPO DE DATO SON DIFERENTES

let desigualdadEstricta = 10 !== "10";
console.log(desigualdadEstricta);

// Para que el operador && de true, ambas comparaciones deben dar true

let operadorAND = 10 == "10" && 10 === "10";
console.log(operadorAND);


let operadorOR = 10 == "10" || 10 === "10";
console.log(operadorOR);


//************************ FUNCIONES ************************/

// Una funcion es una porcion de codigo que hace algo en concreto
// Ventaja -> SE VUELVE REUTILIZABLE

/*
function PALABRA RESERVADA NECESARIA PARA DECLARAR UNA FUNCION
nombreFunction ESTO ES REEMPLAZADO POR EL NOMBRE DE LA FUNCION
() SIRVEN PARA RECIBIR DATOS
{} DELIMITADORES DEL CODIGO DE LA FUNCION
*/
function nombreFunction() {
    console.log("Hola te saludo desde la funcion");    
}

//Llamar o ejecutamos la funcion:
nombreFunction();

// TIPOS DE FUNCION

// Tipo VOID -> Vacia
// Funciones que no retornan nada

function tipoVoid(){
    console.log("soy una funcion tipo VOID");
}

tipoVoid();

//Tipo Return -> Devuelven VALOR

function tipoReturn () {  
    console.log("Hey me estoy ejecutando, soy la funcion con Return");

    return "Soy una funcion tipo Return";
}

//tipoReturn(); 

let ejecucion1 = tipoVoid();
let ejecucion2 = tipoReturn();
console.log(ejecucion1);
console.log(ejecucion2);

//Funciones con parametros -> Funciones que trabajan con datos que vienen de fuera
//NotANumber NaN -> No es un numero lo que se intenta aplicar a un operador matematico
function sumar(num1,num2){
    return num1+num2;
}

let resultado = sumar(15,5);
console.log(resultado);


//Funcion flecha
//Declaracion
function funcionExpresada( ){ 

}

/*
CONSTANTE nombreFuncion asignamos parametros flecha llaves CODIGO A EJECUTAR
const       funcionFlecha  =        ()         =>   {      log()        }
*/
const funcionFlecha = (num1, num2) => {
    return num1-num2; 
}


//Callback -> RECIBE UNA FUNCION PARA PONERLA A FUNCIONAR
function funcionCallback(funcion){
    //Recibi una funcion por lo tanto la ejecuto
    funcion();
}

function funcionAuxiliar(){
    console.log("Estoy funcionando pero desde el callback");
}

funcionCallback(funcionAuxiliar);

//Callback con funcionFlecha ANONIMA
funcionCallback( () => { console.log("Te saludo desde la funcion flecha anonima jeje saludos");
});

funcionCallback(function () { console.log(
    "Holiwis desde la funcion anonima expresada");})

