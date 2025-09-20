// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = []; //Array vacío donde guardar los nombres

function agregarAmigos() {
  // Agrega el nombre recibido en el input al arreglo de amigos.
  // Retorna el arreglo.
  let input = document.getElementById('amigo');
  let nombreIngresado = input.value.trim();

  console.log(nombreIngresado);

  //Evaluar que el input no esté vacío y solo contenga letras y espacios
  // Expresión regular para validar solo letras y espacios (mínimo 3 caracteres)
  const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóú\s]{3,}$/;
  if (nombreIngresado === '' || !soloLetrasRegex.test(nombreIngresado)) {
    Swal.fire({
      title: "Texto no valido",
      text: "Por favor ingresa un nombre, sin números ni caracteres especiales.",
      icon: "error"
      },
    )};
    
    return; // Salir de la función si el input está vacío o no es válido
  }
  nombreAmigo.push(nombreIngresado); // Agregar el nombre al array
  input.value = ''; // Limpiar el campo de entrada después de agregar
  crearFila(nombreIngresado); // Crear una nueva fila en la tabla

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
  // Mostrar el resultado usando Sweetalert
  Swal.fire({
    title: "Ronda terminada!",
    text: "Tu amigo secreto es: " + amigoSecreto,
    imageUrl: "/assets/Imagen-texto-amigoSecreto.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Imagen de felicitacion",

    customClass: {
      title: 'swal-titulo',
      htmlContainer: 'swal-texto'
    },
  });

}
// Eventos para los botones
document.getElementById('button-add-input').addEventListener('click', agregarAmigos)

document.getElementById('button-sorting').addEventListener('click', mostrarAmigo)
