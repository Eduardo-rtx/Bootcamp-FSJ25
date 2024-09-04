// Estructuras repetitivas o bucles

// WHILE -> MIENTRAS
// While(condicion de corte) {codigo a ejecutar}
let numero = 1;

while(numero < 10 && numero > 2){
    console.log(numero);
    numero++;
}

// DO WHILE -> HACER MIENTRAS
let numero1 = 2;
do{
    console.log(numero1);
    numero1++;
}while(numero1 < 10 && numero1 >= 2);

// FOR -> PARA
//for(inicializacion; condicion de corte; incremento o decremento) {codigo a ejecutar}
for(let numero = 1; numero < 10; numero++){
    console.log(numero);
}

// FASE 1 = INICIALIZACION + CONDICION DE CORTE + EJECUCION CODIGO + INCREMENTO/DECREMENTO
//FASE 2 = CONDICION DE CORTE + EJECUCION CODIGO + INCREMENTO/DECREMENTO


//ESTRUCTURA DE DATOS COMPLEJA
// ESTRUCTURA DE DATOS SIMPLE let varaible1 = "Hola";
//ARRAY

let estudiantesFSJ25 = ["Juan","Pedro","Maria","Jose","Luis","Ana","Carlos","Fernando","Sofia","Lucia", 25.4, true]; //permite almacenar cualquier tipo de dato
console.log(variableCompleja);
console.log(estudiantesFSJ25);

//METODOS DE LOS ARRAYS
//PUSH -> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
let variableCompleja = [];
variableCompleja.push("Dato1");
variableCompleja.push("Dato2");
variableCompleja.push("Dato3");
variableCompleja.push("Dato4");
variableCompleja.push("Dato5");
variableCompleja.push("Dato6");
console.log(variableCompleja);

//POP -> ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
let datoEliminado = variableCompleja.pop();
console.log(variableCompleja);
console.log(datoEliminado);

//UNSHIFT -> AGREGA UN ELEMENTO AL INICIO DEL ARRAY
variableCompleja.unshift("DatoAddedInFirstPosition");
console.log(variableCompleja);

//SHIFT -> ELIMINA EL PRIMER ELEMENTO DEL ARRAY
variableCompleja.shift();
console.log(variableCompleja);

//SPLICE -> AGREGA O ELIMINA ELEMENTOS DE UN ARRAY
//splice(posicion, cantidad de elementos a eliminar, elementos a agregar)
variableCompleja.splice(2, 1, "DataAddedInPosition2"); //Elimina 2 elementos a partir de la posicion 2 y agrega un elemento en la posicion 2 
console.log(variableCompleja);

// SLICE -> CREA UN NUEVO ARRAY A PARTIR DE UN ARRAY EXISTENTE
//slice(posicion de inicio, posicion de fin)
let nuevoArray = variableCompleja.slice(2, 5);
console.log(nuevoArray); 

// CONCAT -> CONCATENA DOS ARRAYS
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let array3 = array1.concat(array2);
console.log(array3);

// Propiedades de los Arrays
// LENGTH -> DEVUELVE LA CANTIDAD DE ELEMENTOS DE UN ARRAY

console.log("---- LENGTH ----");
let largo = variableCompleja.length;
console.log(largo);