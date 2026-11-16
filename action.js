const tablero = document.getElementById('container');
document.getElementById("teclado").addEventListener("click", (e) => {
  const boton = e.target.closest("button");
  if (!boton) return;
  const tecla = boton.dataset.tecla;
  console.log(tecla); // aquí llamas a tu lógica: añadir letra, borrar, enviar...
});