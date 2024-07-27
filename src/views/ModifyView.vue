<template>
  <div>
    <Navbar></Navbar>
    <ModifyForm></ModifyForm>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/NavBar.vue"; // Asegúrate de que la ruta sea correcta
import ModifyForm from "@/components/ModifyForm.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
body {
  background: linear-gradient(to right, #5eb5ad, #85dbbb) !important;
  height: 100vh !important;
  width: 100vw !important;
}
</style>
