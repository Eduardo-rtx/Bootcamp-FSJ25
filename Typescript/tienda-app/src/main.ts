import './style.css'
import { Producto } from './clases/Producto';
import { v4 as uuidv4 } from 'uuid';//npm install --save-dev @types/uuid or npm install uuid

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola desde MainTS</h1>
    <!--<p id="parrafo"></p></p>-->

    <form id="formProducto">
      <section>
        <label>Nombre Producto</label>
        <input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre del producto">
      </section>
      <br>
      <section>
        <label>Precio</label>
        <input type="text" id="precio" name="precio" placeholder="Ingrese el precio">
      </section>
      <br>
      <section>
        <label>Descripcion</label>
        <input type="text" id="descripcion" name="descripcion" placeholder="Ingrese la descripcion">
      </section>
      <br>
      <section>
        <label>Cantidad</label>
        <input type="text" id="cantidad" name="cantidad" placeholder="Ingrese la cantidad">
      </section>
      <br>
      <button type="submit">Agregar Producto</button>
    </form>
  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = 'Esto es texto desde el p';// con el ! le decimos a TS que estamos seguros de que no es null

const form = document.getElementById("formProducto") as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  console.log('Formulario enviado');

  //const id = Math.floor(Math.random() * 10000);//el * 1000 es para que el numero sea de 3 digitos
  //const id = Date.now();//obtenemos la fecha en milisegundos
  const id = uuidv4(); // Generar un UUID
  //seleccionamos los elementos a controlar y retiramos su valor
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value);//parseFloat convierte el string a numero
  const descripcion = (document.getElementById('descripcion') as HTMLInputElement).value;
  const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value);//parseInt convierte el string a numero

  /*
  console.log('Nombre del Producto: ', nombre);
  console.log('Precio del Producto: ', precio);
  console.log('Descripcion del Producto: ', descripcion);
  console.log('Cantidad del Producto: ', cantidad);
  console.log('ID del Producto: ', id);*/

  //creamos el objeto Producto
  const producto = new Producto(id, nombre, precio, descripcion, cantidad);
  console.log(producto);

  localStorage.setItem('productos', JSON.stringify(producto));
});