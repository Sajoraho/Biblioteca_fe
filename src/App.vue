<template>
 <div id="app" class="app">
   <div class="header">
     <h1>Biblioteca</h1>
     <nav>
       <button v-if="is_auth" v-on:click="loadHome">Inicio</button>
       <button v-if="is_auth" v-on:click="loadRegister"> Mi cuenta </button>
      <button v-if="is_auth" v-on:click="loadBook"> Ver catálogo </button>
       <button v-if="is_auth" v-on:click="logOut">Cerrar sesión</button>
       <button v-if="!is_auth" v-on:click="loadLogIn">Iniciar sesión</button>
       <button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
     </nav>
   </div>
   <div class="main-component">
     <router-view
       v-on:completedLogIn="completedLogIn"
       v-on:completedSignUp="completedSignUp"
       v-on:logOut="logOut"
     >
     </router-view>
   </div>
   <div class="footer">
     <h2>Michelle Páez - Santiago Rojas | Con el apoyo de: Misión TIC 2021 </h2>
   </div>
 </div>
</template>
 
<script>
export default {
 name: "App",
 data: function () {
   return {
     is_auth: false,
   };
 },
 components: {},
 methods: {
   verifyAuth: function () {
     this.is_auth = localStorage.getItem("isAuth") || false;
     if (this.is_auth == false) this.$router.push({ name: "logIn" });
     else this.$router.push({ name: "home" });
   },
   loadLogIn: function () {
     this.$router.push({ name: "logIn" });
   },
   loadSignUp: function () {
     this.$router.push({ name: "signUp" });
   },
   completedLogIn: function (data) {
     localStorage.setItem("isAuth", true);
     localStorage.setItem("username", data.username);
     localStorage.setItem("token_access", data.token_access);
     localStorage.setItem("token_refresh", data.token_refresh);
     alert("Autenticación Exitosa");
     this.verifyAuth();
   },
   completedSignUp: function (data) {
     alert("Registro Exitoso");
     this.completedLogIn(data);
   },
   loadHome: function () {
     this.$router.push({ name: "home" });
   },
   logOut: function () {
     localStorage.clear();
     alert("Sesión Cerrada");
     this.verifyAuth();
   },
   loadRegister: function () {
     this.$router.push({ name: "register" });
   },


    loadBook: function () {
      this.$router.push({ name: "book" });
    },  
 }, 
    created: function () {
   this.verifyAuth();
 },

};
</script>
<style>
body {
 margin: 0 0 0 0;
}
.header {
 margin: 0%;
 padding: 0;
 width: 100%;
 height: vh;
 min-height: 120px;
 background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/fondoapp.jpg);
  background-position: top;
  background-size: 20%;
 color: #e5e7e9;
 justify-content: space-between;
 align-items: center;
}
.header h1 {
 width: 20%;
 text-align: center;

font-family: "Georgia";
font-size: 45px;
}
.header nav {
 height: 0%;
 width: 40%;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 10px;
}
.header nav button {
 color: #e5e7e9;
 background: #283747;
 background-color: rgba(0, 0, 0, 0.63);
 border: 1px solid #28;
 font-size: 15px;
 width: 30%;
font-family: "Georgia";
justify-content: center;
padding: 20;
}
.header nav button:hover {
 color: #283747;
 background: #e5e7e9;
 border: 1px solid #283747;
}



.main-component {
 height: 70vh;
 margin: 0%;
 padding: 0%;
 background: #c0c0c0;
}
.footer {
 margin: 0;
 padding: 0;
 width: 100%;
 height: 0vh;
 min-height: 50px;
 background-color: #283747;
 color: #e5e7e9;
}
.footer h2 {
 width: 100%;
 height: 5vh;
  padding: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Georgia";
 font-weight: normal;
  font-size: 12px;
}
</style>
