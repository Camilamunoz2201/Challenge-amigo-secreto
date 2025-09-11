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
  }
  
}

