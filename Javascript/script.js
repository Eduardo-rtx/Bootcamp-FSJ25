//Imprimir todas las posiciones de un array numerico
function recorrerArray(array){
    if(array.length == 0){
        return array;

    }

    //Code goes here
    for(let numero = 0; numero < array.length; numero++){//si agrego un igual al menor que, me va a imprimir un valor mas pero no va a existir(numero <= array.length)
        console.log(array[numero]);
    }
}

let arrayNumerico = [1,2,3,4,5];
recorrerArray(arrayNumerico);

//Recorrer un array y devolver un array con los elementos pares

function numParesArray(array){
    let i = 0;
    let arrayAux = [];//Donde se van a guardar los numeros pares

    if(array.length == 0){//validar si el array tiene datos, si esta vacio, devolver el array vacio.
        return array;
    }
    while(i < array.length){
        if(array[i] % 2 == 0){
            //console.log(array[i]);
            arrayAux.push(array[i]);
        }        
        i++;
    }
    return arrayAux;
}
let arrayNumerico1 = [1,2,3,4,5,6,7,8,9,10];
console.log(numParesArray(arrayNumerico1));