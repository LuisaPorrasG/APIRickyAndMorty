let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
  if (pagina < 42) {
    pagina += 1;
    cargarPersonajes();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPersonajes();
  }
});

const cargarPersonajes = async () => {
  try {
    const respuesta = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pagina}`
    );
    console.log(respuesta);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let personajes = "";
      datos.results.forEach((personaje) => {
        personajes += `
					<div class="personaje">
                    <img class="poster" src="${personaje.image}">
						<h3 class="name">${personaje.name}</h3>
            <div class="especie">
            <h5  class="name">${personaje.species}</h5>
            <h6  class="gender" >${personaje.gender}</h6>
            
            </div>
                        
					</div>
				`;
      });

      document.getElementById("contenedor").innerHTML = personajes;
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPersonajes();
