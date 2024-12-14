document.addEventListener("DOMContentLoaded", () => {
    const leftBar = document.getElementById("left-bar");
    const toggleButton = document.getElementById("toggle-bar");
  
    // Alternar la clase "active" al hacer clic en el botón
    toggleButton.addEventListener("click", () => {
      leftBar.classList.toggle("active");
    });
  });
  