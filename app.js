// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = []; //Array vacío donde guardar los nombres

function agregarAmigos() {
  // Agrega el nombre recibido en el input al arreglo de amigos.
  // Retorna el arreglo.
  let input = document.getElementById('amigo');
  let nombreIngresado = input.value.trim();
  
  if (nombreIngresado !== '') {
    nombreAmigo.push(nombreIngresado);
    input.value = ''; // Limpiar el campo de entrada después de agregar
    crearFila(nombreIngresado);
  }
}

function crearFila(nombreIngresado) {
  let tableBody = document.getElementById('amigosTable').getElementsByTagName("tbody")[0]
  let nuevaFila = tableBody.insertRow();
  let celda1 = nuevaFila.insertCell(0);
  celda1.textContent = nombreIngresado;

  console.log(nombreIngresado);
}
function mostrarAmigo() {
  const nombreAmigosize = nombreAmigo.length;
  const posicionNombre = Math.floor(Math.random() * nombreAmigosize);
  alert(`Tu amigo secreto es: ${nombreAmigo[posicionNombre]}`);


}
document.getElementById('button-add-input').addEventListener('click', agregarAmigos)

document.getElementById('button-sorting').addEventListener('click', mostrarAmigo)