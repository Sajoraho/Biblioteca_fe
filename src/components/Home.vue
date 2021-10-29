<template> 
 
    <div class="greetings"> 
        <p><h1>¡Bienvenido(a) a la biblioteca, <span> {{username}} </span>!</h1> <br>
        <h2> Este es un espacio de exposición y búsqueda de contenidos bibliográficos. Encontrarás material de prensa, ciencias y humanidades.<br></h2> </p>

        <div class="galeria">
            <img src="../assets/bagatela.jpg" width="250" height="350" border="10" />
            <img src="../assets/vitruvio.jpg" width="250" height="350" border="10" />
            <img src="../assets/mapa.jpg" width="400" height="350" border="10" /> <br>
        </div>
        
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
        padding: %; 
        height: 0%; 
        width: 100%; 
     
        display: flex; 
        flex-direction: colum; 
        justify-content: center; 
 
        font-weight: normal;
        font-family: "Georgia";
    } 
 .galeria {
 position: relative; 
        margin: 50px; 
        padding: 0%; 
        height: 0%; 
        width: 100%;
        display: flex; 
        flex-direction: olumn; 
        justify-content: center; 
        border: solid #28;

        font-weight: normal;
     

}
.greetings h1{ 
        margin: 50px;
        font-size: 40px; 
        color: #283747;
        font-weight: normal; 
    } 

.greetings h2{
    margin: 50px;
        font-weight: normal;
        font-size: 20px;

    }
 
.greetings h3{ 
        color: #283747; 
        font-size: 1px; 
        

    } 

.greetings button {
 color: #e5e7e9;
 background: #283747;
 background-color: rgba(0, 0, 0, 0.63);
 border: 1px solid #28;
 font-size: 15px;
 width: 20%;
font-family: "Georgia";
justify-content: center;
padding: 20;
}
.greetings button:hover {
 color: #283747;
 background: #e5e7e9;
 border: 1px solid #283747;
}
</style> 