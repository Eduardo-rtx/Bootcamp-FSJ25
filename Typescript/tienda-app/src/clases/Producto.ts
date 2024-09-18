/*
interface Producto{//la interfaz es un contrato que se debe cumplir, en este caso, los productos deben tener estos atributos.
    precio: number;
    descripcion: string;
    cantidad: number;
    //las interfaces pueden tener metodos, pero no es recomendable, y no pueden tener cuerpo(osea, no se puede implementar el metodo)
    //calcularTotal(): number;
}
let producto: Producto = {
    precio: 100,
    descripcion: 'Producto 1',
    cantidad: 2
}
console.log(producto);
*/

export class Producto{//la clase es un molde para crear objetos, en este caso, los productos
    private id: string;
    private nombre: string;
    private precio: number;
    private descripcion: string;
    private cantidad: number;
    //constructor
    constructor(idParam: string,nombreParam: string,precioParam: number, descripcionParam: string, cantidadParam: number){
        this.id = idParam;
        this.nombre = nombreParam;
        this.precio = precioParam;
        this.descripcion = descripcionParam;
        this.cantidad = cantidadParam;        
    }
    //metodo
    calcularTotal(): number{
        return this.precio * this.cantidad;
    }
}