<template>
  <div class="datail container">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">{{user.name}}</h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone"></span>
        {{user.phone}}
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone"></span>
        {{user.email}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      user: ""
    };
  },
  methods: {
    getDate(id) {
      this.$http.get("http://localhost:3000/users/" + id).then(res => {
        this.user = res.data;
      });
    }
  },
  created() {
    this.getDate(this.$route.params.id);
  }
};
</script>
<style>
</style>