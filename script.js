const boton = document.querySelector("#saludarBtn");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "¡Excelente! Tu JavaScript está funcionando.";
});
