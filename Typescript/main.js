//Declaracion de variables en JS
var uniqueVariable = "";
//Declaracion de variables + tipo de dato en TS
var cadenaTexto = "Luis";
var numero = 123;
var booleano = true;
//Declaracion de arreglos o arrays
var arreglo = [1, 2, 3, 4, 5]; //Ambas formas son equivalentes y eligen una u otra es una cuestión de preferencia o estilo de codificación. Forma 2: let arreglo:Array<number> = [1,2,3,4,5];
var arreglo2 = [1, 2, 3, 4, 5]; //Ambas formas son equivalentes y eligen una u otra es una cuestión de preferencia o estilo de codificación. Forma 1: let arreglo:number[] = [1,2,3,4,5];
var arregloCualquierTipoDato = [1, 2, 3, 4, 5, "Luis", true]; //Es mejor evitar el uso de any, ya que se pierde la ventaja de tener un lenguaje fuertemente tipado.
var arregloStrings = ["Luis", "Pedro", "Juan"];
//Declaracion de tuplas
//Es un array con indices limitados y con su tipo de dato declarado previamente
//Una tupla es un arreglo de elementos que tienen un tipo de dato fijo y una cantidad fija de elementos. 
var datosUsuario;
datosUsuario = [1, "Luis"];
//array numerico o string
var arrayNumOrString = ["13", "solo texto o solo nums"]; //Solo puede ser un array de numeros o de strings
var arrayNumString = ["Hola", 1234, "ok"]; //Puede ser un array de numeros y de strings
//Funciones en TS
function tipoVoid() {
    console.log("Hola Mundo");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 3 + 3;
}
function saludar(nombre) {
    //template string -> plantillas literales -> ingresar un datos de js en un string
    //"Hola como estas? "+nombre;
    return "Hola como estas? ".concat(nombre);
}
console.log(saludar("Luis"));
