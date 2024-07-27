<!-- Navbar.vue -->
<template>
  <nav class="navbar bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand gradient-text" href="#" data-text="QueryHub"
        >QueryHub</a
      >
      <img class="user-icon" src="/src/assets/UserIcon.svg" />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #000000 !important; /* Cambia el color de fondo si es necesario */
  display: flex; /* Para alinear los elementos horizontalmente */
  justify-content: space-between; /* Espaciado entre los elementos */
  align-items: center; /* Centra los elementos verticalmente */
}

.navbar-brand {
  /* Asegúrate de que esta clase no tenga estilos que puedan sobrescribir .gradient-text */
}

.gradient-text {
  position: relative; /* Necesario para posicionar el pseudo-elemento */
  font-size: 4vw; /* Tamaño del texto basado en el ancho del viewport */
  font-weight: bold; /* Cambia el peso del texto si es necesario */
  background: linear-gradient(
    to right,
    #baffc5,
    #5eb5ad
  ); /* Define el degradado */
  -webkit-background-clip: text; /* Asegura que el degradado se aplique al texto en navegadores basados en WebKit */
  background-clip: text; /* Aplica el recorte del fondo al texto */
  color: transparent; /* Hace que el color del texto sea transparente para mostrar el degradado */
}

.gradient-text::before {
  content: attr(data-text); /* Copia el contenido del texto */
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #000,
    1px 1px 0 #ffffff; /* Crear un borde negro */
}

.user-icon {
  height: 3vw; /* Ajusta el tamaño del icono según sea necesario */
  min-height: 30px !important;
  margin-left: auto; /* Empuja el icono a la derecha */
  cursor: pointer;
}

.user-icon:hover {
  color: red !important;
  border: 1px solid #e5ffe9;
}
</style>
