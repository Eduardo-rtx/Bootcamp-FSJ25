console.log("Hola desde la consola");

//Agarrar un elemento del DOM
let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

//propiedades mas utilizadas
console.log(elementoDOM.innerHTML);//innerHTML extrae todo el contenido de la etiqueta HTML
console.log(elementoDOM.innerText);//en cambio extrae solo el texto de la etiqueta HTML

elementoDOM.innerText = "Cambie el texto desde el DOM";//Cambiar el contenido de la etiqueta HTML
console.log(elementoDOM.innerText);
elementoDOM.innerHTML = "<span>Cambie el texto desde el JS</span>";//Cambiar el contenido de la etiqueta HTML
console.log(elementoDOM.innerHTML);

//Agarrar otro elemento del HTML
const contenido = document.querySelector('#content');//querySelector agarra el primer elemento que cumpla con la condicion

console.log(contenido);

//Cambiar el contenido de la etiqueta HTML(inyectar HTML)
contenido.innerHTML = "<h1>Titulo cambiado desde el JS</h1> <h2>Nuevo h2</h2> <h3></h3>";//el contenido se agrega dentro de la etiqueta HTML(<section id='content'>***AQUI***</section>)
console.log(contenido);

//agarramos el boton
const botonApretable = document.getElementById('btnMagia');

botonApretable.addEventListener('click',() => {
    alert("Hola desde el evento click");//alert es una ventana emergente y detiene la ejecucion del codigo
    console.log("Despues del alert");//despues de aceptar el alert se ejecuta el console.log
});//agregamos un evento al boton

/*
    Realiza una funcion que reciba un array NUMERICO y retorne un array completamente nuevo solamente con los numeros que sean
    multiplos de 3 y que la suma de todos sus numeros sea menor a 100.
*/
function filtrarMultiplosDe3(array){
    if (array.length <= 0) {return []};

    let resultado = [];
    let suma = 0;
    let i = 0;
    while(i < array.length){
        if(array[i] % 3 == 0){
            suma += array[i];

            if(suma < 100){ 
                resultado.push(array[i]);
            }else{
                return resultado;
            }
        }
        i++;
    }
}
let array = [99,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60];
console.log(filtrarMultiplosDe3(array));

function apretandoBoton(){
    let nombre = prompt("Cual es tu nombre?");
    let apellido = prompt("Cual es tu apellido?");

    alert(`Hola ${nombre} ${apellido}`);
}
function cambiandoInput(e){
    console.log(e);
    
    console.log(e.target.value);
}