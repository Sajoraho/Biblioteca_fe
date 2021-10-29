<template> 
 
    <div class="add_book"> 
        <div class="container_add_book"> 
            <h2>Agregar libro</h2> 
 
            <form class="AddBook" > 
                <input type="text" v-model="book.title" placeholder="Título"> <br> 
                <input type="text" v-model="book.author" placeholder="Autor"> <br> 
                <input type="text" v-model="book.language" placeholder="Idioma"> <br> 
                <input type="date" v-model="book.year" placeholder="Año"> <br>
                <input type="text" v-model="book.publisher" placeholder="Editorial"> <br> 
                <input type="text" v-model="book.genre" placeholder="Género"> <br> 
                <input type="text" v-model="book.number" placeholder="Ejemplar"> <br> 
                
                <button type="submit">Agregar</button> 
            </form> 
        </div> 
 
    </div> 
 
</template>                
<script> 
import axios from 'axios'; 
 
export default { 
    name: "AddBook", 
 
    data: function(){ 
        return { 
            book: { 
                title: "", 
                author: "", 
                language: "", 
                year: "",
                publisher: "", 
                genre: "", 
                number: "", 
            } 
        } 
    }, 
 
    methods: {
        processAddBook: function(){ 
            axios.post( 
                "https://mision-tic-biblioteca.herokuapp.com/book/",  
                this.book,   
                {headers: {}} 
            ) 
                
                .catch((error) => { console.log(error); 
              alert("ERROR: Fallo en el registro."); 
 
                }); 
        }, 
    }, 
}; 
</script> 
<style> 
 
    .add_book{ 
        margin: 0; 
        padding: 0%; 
        height: 100%; 
        width: 100%; 
     
        display: flex; 
        justify-content: center; 
        align-items: center; 
    } 
 
    .container_add_book { 
        border: 2px solid  #008080; 
        border-radius: 4px; 
        width: 50%; 
        height: 92%; 
         
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
    } 
 
    .add_book h2{ 
        color: #a52a2a; 
 
    } 
 
    .add_book form{ 
        width: 70%; 
         
    } 
 
    .add_book input{ 
        height: 40px; 
        width: 100%; 
 
        box-sizing: border-box; 
        padding: 10px 20px; 
        margin: 5px 0; 
 
        border: 1px solid #283747; 
    } 
 
    .add_book button{ 
        width: 100%; 
        height: 40px; 
 
        color: #E5E7E9; 
        background: #283747; 
        border: 1px solid #E5E7E9; 
 
        border-radius: 5px; 
        padding: 10px 25px; 
        margin: 5px 0 25px 0; 
    } 
 
    .add_book button:hover{ 
        color: #E5E7E9; 
        background: crimson; 
        border: 1px solid #283747; 
    } 
 
</style> 