<template>
    <div>
        登陆
        <div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value1:2
        }
    },
  created() {
    this.$http.get(this.$api.islogin).then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style scoped>

</style>