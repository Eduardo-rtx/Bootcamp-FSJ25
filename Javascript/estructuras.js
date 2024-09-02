//Estructuras de control -> condicionales

// IF

let condicion = true;

if(!condicion){
    console.log("ESTE CODIGO SE EJECUTAEN CASO FALSE");
}else{
    console.log("ESTE CODIGO SE EJECUTA EN CASO TRUE");
    
}

// Operador Ternario -> REEMPLAZO DE SINTAXIS PARA EL IF ELSE
//  CONDICION ? CODIGO TRUE : CODIGO FALSE

let varible = 10 < 10 ? console.log("Afirmativo") : console.log("Negativo"); 
console.log(varible);

// PARA QUE NO DEVUELVA UNDEFINED: 
let varible1 = 10 < 10 ? "Afirmativo" : "Negativo"; 
console.log(varible1);


// IF ELSE If
let variableAux = 7;
if(variableAux > 10){
    console.log("Afirmativo");    
} else if(variableAux > 5){
    console.log("Si es mayor");
}else{
    console.log("No cumplio las espectativas");    
}

if(variableAux > 10 && variableAux > 5){
    console.log("Esta es la respuesta true");
}else{
    console.log("Esta es la respuesta false");
    
}