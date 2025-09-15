// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = []; //Array vacío donde guardar los nombres

function agregarAmigos() {
  // Agrega el nombre recibido en el input al arreglo de amigos.
  // Retorna el arreglo.
  let input = document.getElementById('amigo');
  let nombreIngresado = input.value.trim();
  
  //Evaluar que el input no esté vacío
  if (nombreIngresado !== '') {
    nombreAmigo.push(nombreIngresado); // Agregar el nombre al array
    input.value = ''; // Limpiar el campo de entrada después de agregar
    crearFila(nombreIngresado); // Crear una nueva fila en la tabla
  }
}

// Función para crear una nueva fila en la tabla con el nombre ingresado
function crearFila(nombreIngresado) {
  let tableBody = document.getElementById('amigosTable').getElementsByTagName("tbody")[0]
  let nuevaFila = tableBody.insertRow();
  let celda1 = nuevaFila.insertCell(0);
  celda1.textContent = nombreIngresado;

  console.log(nombreIngresado);
}
// Función para mostrar un amigo secreto aleatorio
function mostrarAmigo() {
  const nombreAmigosize = nombreAmigo.length;
  const posicionNombre = Math.floor(Math.random() * nombreAmigosize);
  const amigoSecreto = nombreAmigo[posicionNombre];
  // Mostrar el resultado usando Toast
  Swal.fire({
  title: "Ronda terminada!",
  text: "Tu amigo secreto es: " + amigoSecreto,
  icon: "success",
});

}
// Eventos para los botones
document.getElementById('button-add-input').addEventListener('click', agregarAmigos)

document.getElementById('button-sorting').addEventListener('click', mostrarAmigo)
