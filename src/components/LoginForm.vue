<script>
export default {
  name: "LoginCard",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Lógica para manejar el inicio de sesión
      console.log("Correo:", this.email);
      console.log("Contraseña:", this.password);
      // Aquí puedes agregar la lógica para enviar los datos al servidor
    },
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row col-12">
      <div class="col-12 mt-5">
        <h2 class="text-center strokedText1">WELCOME TO YOUR SUPPORT APP</h2>
      </div>
      <div class="col-12">
        <h4 class="text-center strokedText2">
          YOU NEED TO LOGIN TO ACCESS THIS PAGE.
        </h4>
      </div>
    </div>

    <div
      class="d-flex loginCard justify-content-center align-items-center mt-5 me-4 ms-4"
    >
      <div
        class="card shadow-lg p-3 mb-5 bg-white rounded"
        style="width: 400px"
      >
        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            <div class="mt-5">
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                required
                placeholder="Email"
              />
            </div>
            <div class="mb-5 mt-5 pt-3">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                required
                placeholder="Password"
              />
            </div>
            <div class="row justify-content-center">
              <button type="submit" class="btn btn-success w-50 mt-3 mb-5">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background: linear-gradient(to right, #5eb5ad, #85dbbb) !important;
  height: 100vh !important;
  width: 100vw !important;
}

.strokedText1 {
  font-size: 4vw;
  color: white; /* Color del texto */
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.125), 1px -1px 0 rgba(0, 0, 0, 0.125),
    -1px 1px 0 rgba(0, 0, 0, 0.125), 1px 1px 0 rgba(0, 0, 0, 0.125); /* Crear un borde negro */
}

.strokedText2 {
  font-size: 2.5vw;
  color: white; /* Color del texto */
  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.125), 1px -1px 0 rgba(0, 0, 0, 0.125),
    -1px 1px 0 rgba(0, 0, 0, 0.125), 1px 1px 0 rgba(0, 0, 0, 0.125);
}

.loginCard {
  height: 50vh !important;
}
</style>
