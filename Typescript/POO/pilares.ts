//4 Pilares de la POO

//1. Herencia -> Permite que una clase herede los metodos y propiedades de otra clase.
//2. Polimorfismo -> Capacidad de una clase de comportarse como otra clase.

//3. Encapsulamiento -> Proteger los datos de la clase, no permitir que se modifiquen desde fuera de la clase.
//4. Abstraccion -> Ocultar los detalles de implementacion y solo mostrar los detalles que sean necesarios.


//Encapsulamiento = Limitamos el acceso a los datos de la clase a traves de los modificadores de acceso.
//Abstraccion = Nos da herramientas para interactuar con lo que este limitado de una clase.
//Herencia = Capacidad de una clase de heredar los metodos y propiedades de otra clase.
//Polimorfismo = Cuando el mismo metodo cambiar su comportamiento en una clase hija.

/*Modificadores de acceso -> 
- public -> Acceso desde cualquier lugar, por defecto es publico.
- private -> Acceso solo desde la misma clase.
- protected -> Acceso desde la misma clase y clases hijas.
*/
//recomendacion: usar una clase por archivo
class Person{
    private name:string;
    private age:number;
    private dui:string;

    constructor(nameParam:string, ageParam:number, duiParam:string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    respirar():void{
        console.log("La persona esta respirando");
    }

    //Getters y Setters -> Metodos que nos permiten obtener y establecer valores de las propiedades de una clase.
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
    getDui():string{
        return this.dui;
    }
    setAge(ageParam:number):void{
        this.age = ageParam;
    }
}

let personita = new Person("Luis", 25, "05252525-5");
personita.setAge(26);
console.log(personita);

class Developer extends Person {
    private experience: number;
    private techSkills: string[];
    private softSkills: string[];
    private gitUser: string;
    private area: string;
    private projects: string[];

    constructor(nameParam: string, ageParam: number, duiParam: string, experienceParam: number, techSkillsParam: string[], softSkillsParam: string[], gitUserParam: string, areaParam: string, projectsParam: string[]) {
        super(nameParam, ageParam, duiParam);
        this.experience = experienceParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.projects = projectsParam;
    }
    
    getArea(): string {
        return this.area;
    }
    respirar(): void {//Polimorfismo - usamos el mismo metodo de la clase padre pero con un comportamiento diferente
        console.log("El desarrollador esta respirando");
    }
}

let developer = new Developer("Juan", 30, "12345678-9", 3, ["Javascript", "HTML", "CSS"], ["Comunicacion Efectiva", "Trabajo en equipo"], "JuanDev", "Frontend", ["Proyecto1", "Proyecto2"]);
developer.getArea();

personita.respirar();
developer.respirar();