// Programacion Orientada a Objetos
// Clases, Objetos, Herencia, Metodos, Propiedades, Constructores, Interfaces, Modificadores de acceso, Getters y Setters
// Es una forma de programar intentando siempre describir o pensar las cosas como objetos de la vida real.
// Conceptos principales de POO -> Clases y Objetos
// Clases -> Es un molde que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad.
// Objetos -> Es lo qeu podemos crear a base del molde, es decir, es una variable que se crea a partir de una clase.
var Auto = /** @class */ (function () {
    //Constructores -> Es un metodo especial que se ejecuta en el momento de instanciar un objeto de una clase
    function Auto(numChasisParam, motor, color, tipoCombustible, transmision, cantKilometraje, plazas, modelo, anioFabricacion) {
        this.numChasis = numChasisParam;
        this.motor = motor;
        this.color = color;
        this.tipoCombustible = tipoCombustible;
        this.transmision = transmision;
        this.cantKilometraje = cantKilometraje;
        this.plazas = plazas;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
    }
    //Metodos
    Auto.prototype.encender = function () {
        console.log("El auto esta encendido");
    };
    Auto.prototype.apagar = function () {
        console.log("El auto esta apagado");
    };
    return Auto;
}());
//instanciar objetos a traves de una clase -> crear un objeto
var auto1 = new Auto(123456, "V8", "Rojo", "Gasolina", "Automatica", 0, 5, "Toyota", "2021");
console.log(auto1);
//asignamos una propiedad al objeto
auto1.modelo = "Toyota2";
console.log(auto1);
