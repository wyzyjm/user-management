<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">用户管理系统</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/aboute">关于</router-link>
            </li>
            <li>
              <router-link to="/nav">导航</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/add">添加用户</router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navb"
};
</script>
<style>
</style>