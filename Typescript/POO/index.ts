// Programacion Orientada a Objetos
// Clases, Objetos, Herencia, Metodos, Propiedades, Constructores, Interfaces, Modificadores de acceso, Getters y Setters
// Es una forma de programar intentando siempre describir o pensar las cosas como objetos de la vida real.

// Conceptos principales de POO -> Clases y Objetos
// Clases -> Es un molde que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad.
// Objetos -> Es lo qeu podemos crear a base del molde, es decir, es una variable que se crea a partir de una clase.

class Auto {
    //Propiedades -> Caracteristicas o atributos
    numChasis: number;
    motor: string;
    color: string;
    tipoCombustible: string;
    transmision: string;
    cantKilometraje: number;
    plazas: number;
    modelo: string;
    frenos: string;
    anioFabricacion: string;

    //Constructores -> Es un metodo especial que se ejecuta en el momento de instanciar un objeto de una clase
    constructor(numChasisParam: number, motor: string, color: string, tipoCombustible: string, transmision: string, cantKilometraje: number, plazas: number, modelo: string, frenos:string, anioFabricacion: string) {
        this.numChasis = numChasisParam;
        this.motor = motor;
        this.color = color;
        this.tipoCombustible = tipoCombustible;
        this.transmision = transmision;
        this.cantKilometraje = cantKilometraje;
        this.plazas = plazas;
        this.modelo = modelo;
        this.frenos = frenos;
        this.anioFabricacion = anioFabricacion;
    }

    //Metodos
    encender(): void {
        console.log("El auto esta encendido");
    }
    apagar(): void {
        console.log("El auto esta apagado");
    }
}

//instanciar objetos a traves de una clase -> crear un objeto

let auto1: Auto = new Auto(123456, "V8", "Rojo", "Gasolina", "Automatica", 0, 5, "Toyota", "ABS", "2021");

console.log(auto1);

//asignamos una propiedad al objeto
auto1.modelo = "Toyota2";
console.log(auto1);