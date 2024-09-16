//Declaracion de variables en JS
let uniqueVariable = "";

//Declaracion de variables + tipo de dato en TS
let cadenaTexto:string = "Luis";
let numero:number = 123;
let booleano:boolean = true;

//Declaracion de arreglos o arrays
let arreglo:number[] = [1,2,3,4,5];//Ambas formas son equivalentes y eligen una u otra es una cuestión de preferencia o estilo de codificación. Forma 2: let arreglo:Array<number> = [1,2,3,4,5];
let arreglo2:Array<number> = [1,2,3,4,5];//Ambas formas son equivalentes y eligen una u otra es una cuestión de preferencia o estilo de codificación. Forma 1: let arreglo:number[] = [1,2,3,4,5];
let arregloCualquierTipoDato:any[] = [1,2,3,4,5,"Luis",true];//Es mejor evitar el uso de any, ya que se pierde la ventaja de tener un lenguaje fuertemente tipado.
let arregloStrings:string[] = ["Luis","Pedro","Juan"];

//Declaracion de tuplas
//Es un array con indices limitados y con su tipo de dato declarado previamente
//Una tupla es un arreglo de elementos que tienen un tipo de dato fijo y una cantidad fija de elementos. 
let datosUsuario:[number,string];
datosUsuario = [1,"Luis"];

//array numerico o string
let arrayNumOrString:number[]|string[] = ["13", "solo texto o solo nums"];//Solo puede ser un array de numeros o de strings
let arrayNumString:(number|string)[] = ["Hola", 1234, "ok"];//Puede ser un array de numeros y de strings

//Funciones en TS
function tipoVoid():void{
    console.log("Hola Mundo");
}

function sumar():number{
    return 2+2;
}

function sumarOConcatenar():number|string{
    return 3+3;
}

function saludar(nombre:string):string{
    //template string -> plantillas literales -> ingresar un datos de js en un string
    //"Hola como estas? "+nombre;
    return `Hola como estas? ${nombre}`;
}
//tsc main.ts -> compilar
console.log(saludar("Luis"));


