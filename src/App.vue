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
     <h2>Con el apoyo de: Misión TIC 2021</h2>
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
 padding: 20;
 width: 100%;
 height: vh;
 min-height: 100px;
 background-color: #283747;
 color: #e5e7e9;
 justify-content: space-between;
 align-items: center;
}
.header h1 {
 width: 20%;
 text-align: center;
font-family: "Georgia";
}
.header nav {
 height: 100%;
 width: 28%;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 50px;
}
.header nav button {
 color: #e5e7e9;
 background: #283747;
 border: 1px solid #283747;
 border-radius: px;
 padding: 0px px;
font-family: "Georgia";
}
.header nav button:hover {
 color: #283747;
 background: #e5e7e9;
 border: 1px solid #283747;
}
.main-component {
 height: 75vh;
 margin: 0%;
 padding: 0%;
 background: #c0c0c0;
}
.footer {
 margin: 0;
 padding: 0;
 width: 100%;
 height: 1vh;
 min-height: 100px;
 background-color: #6b8e23;
 color: #e5e7e9;
}
.footer h2 {
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: "Georgia";
 font-weight: normal;
  font-size: 15px;
}
</style>
