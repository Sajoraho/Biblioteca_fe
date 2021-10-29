<template> 
 
    <div class="information"> 
        <h1>Información de su cuenta</h1> 
        <h2>Nombre: <span>{{name}}</span></h2> 
        <h2>Apellido: <span>{{lastname}}</span></h2>
        <h2>Correo electrónico: <span>{{email}}</span></h2> 
        <h2>Institución: <span>{{institution}}</span></h2> 
        <h2>Dirección: <span>{{address}}</span></h2>
        <h2>Teléfono: <span>{{telephone}}</span></h2>
        <h2>Rol: <span>{{role}} </span></h2> 
    </div> 
</template> 
 
<script> 
import jwt_decode from "jwt-decode"; 
import axios from 'axios'; 
 
export default { 
    name: "Register", 
 
    data: function(){ 
        return { 
            name: "", 
            lastname: "",
            email: "", 
            institution: "", 
            address: "",
            telephone: "",
            role: "" 
        } 
    }, 
    methods: { 
        getData: async function () { 
 
            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) { 
                this.$emit('logOut'); 
                return; 
            } 
 
            await this.verifyToken(); 
            let token = localStorage.getItem("token_access"); 
            let userId = jwt_decode(token).user_id.toString(); 
             
            axios.get(`https://mision-tic-biblioteca.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}}) 
                .then((result) => { 
                    

                    this.name = result.data.name; 
                    this.lastname = result.data.lastname;
                    this.email = result.data.email; 
                    this.institution = result.data.register.institution; 
                    this.address = result.data.register.address;
                    this.telephone = result.data.register.telephone;
                    this.role = result.data.register.role;
                    console.log(result);
                    }) 
                    
                .catch((error) => { 
                    console.log(error);
                    this.$emit('logOut'); 
                }); 
        }, 
 
        verifyToken: function () { 
            return axios.post("https://mision-tic-biblioteca.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}) 
                .then((result) => { 
                    localStorage.setItem("token_access", result.data.access);        
                }) 
                .catch(() => { 
                    this.$emit('logOut'); 
                }); 
        } 
    }, 
 
    created: async function(){ 
        this.getData(); 
    }, 
} 
</script> 
 
<style> 
.information{ 
        margin: 0; 
        padding: 0%; 
        width: 100%; 
        height: 100%; 
        display: flex; 
        flex-direction: column; 
        justify-content: center;     
        align-items: center; 
    } 
.information h1{ 
        font-size: 30px; 
        color: #663399;
        font-weight: normal;
        font-family: "Georgia";
          
    } 
 
.information h2{ 
        font-size: 20px; 
        color: #283747;
        font-weight: normal;
        font-family: "Georgia";
    } 
 
.information span{ 
        color: #008b8b; 
        font-weight: normal;
        font-family: "Georgia";
        
    } 
</style> 