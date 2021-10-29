<template> 
 
    <div class="greetings"> 
        <p><h1>¡Bienvenido(a) a la biblioteca <span> {{username}} </span>!</h1> <br>
        <h2> Este es un espacio de exposición y búsqueda de contenidos bibliográficos<br></h2> </p>
        <button v-on:click="loadRegister"> Ver mi cuenta </button>
        <button v-on:click="loadBook"> Ver catálogo de libros </button>

    </div> 
 
</template> 
 
<script> 
import jwt_decode from "jwt-decode";
import axios from "axios";
export default { 
    name: "Home", 
    data: function(){ 
        return { 
            username: localStorage.getItem('username') || "none" 
        }; 
    }, 

    methods: {

        
        loadRegister: function () {
            this.$router.push({ name: "register" });
            }, 

        loadBook: function () {
            this.$router.push({ name: "book" });
            }, 
    },
};

</script> 
<style> 
    .greetings{ 
        margin: 0; 
        padding: 0%; 
        height: 100%; 
        width: 100%; 
     
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        font-weight: normal;
        font-family: "Georgia";
    } 
 
    .greetings h1{ 
        font-size: 40px; 
        color: #008b8b;
        font-weight: normal; 
    } 

    .greetings h2{
        font-weight: normal;
    }
 
    .greetings span{ 
        color: #008b8b; 
        font-weight: normal; 
    } 
</style> 