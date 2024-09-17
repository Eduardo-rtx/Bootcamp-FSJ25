import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola desde MainTS</h1>
    <!--<p id="parrafo"></p></p>-->

    <form id="loginForm">
      <section>
        <label for="nombre">Nombre de usuario</label>
        <input type="text" id="username" name="username">
      </section>
      <br>
      <section>
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
      </section>
      <br>
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
`

//document.querySelector<HTMLElement>('#parrafo')!.innerText = 'Esto es texto desde el p';// con el ! le decimos a TS que estamos seguros de que no es null

const form = document.getElementById("loginForm") as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();
  const formData = new FormData(form);
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (username === "admin" && password === "admin") {
    alert('Usuario correcto');
  } else {
    alert('Usuario incorrecto');
  }
});