//4 Pilares de la POO
//1. Herencia -> Permite que una clase herede los metodos y propiedades de otra clase.
//2. Polimorfismo -> Capacidad de una clase de comportarse como otra clase.
//3. Encapsulamiento -> Proteger los datos de la clase, no permitir que se modifiquen desde fuera de la clase.
//4. Abstraccion -> Ocultar los detalles de implementacion y solo mostrar los detalles que sean necesarios.
//Encapsulamiento = Limitamos el acceso a los datos de la clase a traves de los modificadores de acceso.
//Abstraccion = Nos da herramientas para interactuar con lo que este limitado de una clase.
/*Modificadores de acceso ->
- public -> Acceso desde cualquier lugar, por defecto es publico.
- private -> Acceso solo desde la misma clase.
- protected -> Acceso desde la misma clase y clases hijas.
*/
//recomendacion: usar una clase por archivo
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("La persona esta respirando");
    };
    //Getters y Setters -> Metodos que nos permiten obtener y establecer valores de las propiedades de una clase.
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    return Person;
}());
var personita = new Person("Luis", 25, "05252525-5");
personita.setAge(26);
console.log(personita);
