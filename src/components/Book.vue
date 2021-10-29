<template>
  <div class="informationbook">
    <table>
        <thead>
          <th>Id</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Idioma</th>
          <th>Año</th>
          <th>Editorial</th>
          <th>Género</th>
          <th>Ejemplar</th>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.author}}</td>
            <td>{{item.language}}</td>
            <td>{{item.year}}</td>
            <td>{{item.publisher}}</td>
            <td>{{item.genre}}</td>
            <td>{{item.number}}</td>
            <td><button v-on:click="bookEditar(item.id)">Editar</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "book",
  data: function () {
    return {
      items: []
    };
  },
  methods: {
    getData: async function () {
      if (
        localStorage.getItem("token_access") === null ||
        localStorage.getItem("token_refresh") === null
      ) {
        this.$emit("logOut");
        return;
      }
      await this.verifyToken();
      let token = localStorage.getItem("token_access");
      let userId = jwt_decode(token).user_id.toString();
      let that = this;
      axios
        .get(`https://mision-tic-biblioteca.herokuapp.com/book/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          that.items = result.data;
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    verifyToken: function () {
      return axios
        .post(
          "https://mision-tic-biblioteca.herokuapp.com/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    bookEditar: function(id){ 
      this.$router.push({ name: "bookDetails" , params: { id } });
    }
  },
  created: async function () {
    this.getData();
  },
};
</script>
<style>
.informationbook {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    font-weight: normal;
}
.informationbook h1 {
  font-size: 60px;
  color: #0f1316;
    font-weight: normal;
}
.informationbook h2 {
  font-size: 40px;
  color: #283747;
    font-weight: normal;
}
.informationbook span {
  color: crimson;
  font-weight: normal;
}
</style>