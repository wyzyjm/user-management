<template>
  <div class="container">
    <!-- 提示框 绑定数据 -->
    <Aleart v-if="alert" :msg="alert"></Aleart>
    <h1 class="page-header">用户管理</h1>
    <!-- 搜索 -->
    <input type="text" class="form-control" v-model="keyWords" />
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>用户</th>
            <th>电话</th>
            <th>邮箱</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for=" item in serchUser(users,keyWords)" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.email}}</td>
            <td>
              <div class="btn-group btn-group-sm">
                <router-link class="btn btn-success" :to="'/detail/'+item.id">详情</router-link>
                <router-link class="btn btn-info" :to="'/edit/'+item.id">编辑</router-link>
                <button class="btn btn-danger" @click="deleteUser(item.id)">删除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Aleart from "@/components/Alert";
export default {
  name: "custmers",

  data() {
    return {
      users: [],
      alert: "",
      keyWords: ""
    };
  },
  methods: {
    getUser() {
      // 使用箭头函数 因为有this指向的问题
      this.$http.get("http://localhost:3000/users").then(res => {
        this.users = res.data;
      });
    },
    deleteUser(id) {
      this.$http.delete("http://localhost:3000/users/" + id).then(res => {
        this.alert = "成功删除ID为" + id + "的用户";
      });
    },
    serchUser(users, value) {
      return users.filter(function(ele) {
        return ele.name.match(value);
      });
    }
  },
  // 创建完成时调用
  created() {
    if (this.$route.query.dioInfo) {
      this.alert = this.$route.query.dioInfo;
    }
    this.getUser();
  },
  // 更新的时候也调用一下
  updated() {
    this.getUser();
  },
  components: {
    Aleart
  }
};
</script>
<style>
</style>