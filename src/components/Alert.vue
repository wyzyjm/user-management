<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{msg}}
  </div>
</template>
<script>
export default {
  name: "alert",
  // 接受组件间传参数
  props:["msg"]
};
</script>
<style>
</style>