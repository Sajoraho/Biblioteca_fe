<template>
  <div class="bookd">

      Nombre: {{item.name}}
       
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import axios from "axios";
export default {
  name: "bookDetails",
  data: function () {
    return {
      item: []
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
      let that = this
      axios
        .get(`https://mision-tic-biblioteca.herokuapp.com/book/${this.$route.params.id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          that.item = result.data;
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
  },
  created: async function () {
    this.getData();
  },
};
</script>
<style>
.bookd {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bookd h1 {
  font-size: 60px;
  color: #0f1316;
}
.bookd h2 {
  font-size: 40px;
  color: #283747;
}
.bookd span {
  color: crimson;
  font-weight: bold;
}
</style>