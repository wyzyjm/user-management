<template>
  <div class="add container">
    <Alert v-if="alert" :msg="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <form @submit="editUser">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="user.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="user.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="user.email" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="user.education" />
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="school" v-model="user.school" />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profile" v-model="user.profile" />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea
            name
            id="input"
            class="form-control"
            rows="3"
            placeholder="个人简介"
            v-model="user.intro"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>
<script>
import Alert from "@/components/Alert";
export default {
  name: "add",
  data() {
    return {
      user: {},
      alert: ""
    };
  },
  components: {
    Alert
  },
  methods: {
    getUser(id) {
      this.$http.get("http://localhost:3000/users/" + id).then(res => {
        console.log(res.data);
        this.user = res.data;
      });
    },
    editUser(e) {
      e.preventDefault();
      if (!this.user.name || !this.user.phone || !this.user.email) {
        this.alert = "请添加相关信息!";
      } else {
        let editUsers = {
          name: this.user.name,
          phone: this.user.phone,
          email: this.user.email,
          education: this.user.education,
          school: this.user.school,
          profile: this.user.profile,
          intro: this.user.intro
        };
        this.$http
          .patch(
            "http://localhost:3000/users/" + this.$route.params.id,
            editUsers
          )
          .then(res => {
            // 页面跳转
            this.$router.push({
              path: "/nav",
              query: { dioInfo: "更新成功!" }
            });
          });
      }
    }
  },
  created() {
    this.getUser(this.$route.params.id);
  }
};
</script>
<style>
</style>