<template>
  <Header />
  <div class="main">
    <div class="left">{{ accountStore.useAccount }}'s Tesla</div>
    <div class="right">
      <div class="box">主页</div>
      <div class="box">充电</div>
      <div class="box">设置</div>
      <div class="box" @click="logOut">退出登录</div>
    </div>
  </div>
  <div class="img"></div>
  <div class="botton">
    <div class="name">Model S</div>
    <div class="button">
      <el-row>
        <el-button type="primary" round class="class" @click="preserveCar">订购</el-button>
        <el-button round class="class">预约试驾</el-button>
      </el-row>
    </div>
  </div>

  <div class="page"></div>
</template>

<script setup>
import Header from "../components/Header.vue";
import useAccountStore from "../stores/account";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  // 登录页阻止回退
  sessionStorage.clear();
  history.pushState(null, null, document.URL);
  window.addEventListener(
    "popstate",
    function() {
      history.pushState(null, null, document.URL);
    },
    false
  );
  
});
const accountStore = useAccountStore();
const { useAccount, useLogOut } = storeToRefs(accountStore);
const router = useRouter();

const logOut = () => {
  router.push({
    path: "/account"
  });

  accountStore.useLogOut();
  ElMessage.success("已退出登录");
};

// 订车
const preserveCar = () => {};
</script>

<script>
// 组件路由守卫
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const accountStore = useAccountStore();
const { useAccount } = storeToRefs(accountStore);
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log(accountStore.useAccount);
    if (accountStore.useAccount !== "") {
      next();
    } else {
      router.push({
        path: "/teslaaccount"
      });
    }
  }
});
</script>
<style lang="less" scoped>
.main {
  margin: 15vh 15vw 0;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
  }
  .right {
    display: flex;
    font-size: 15px;
    .box {
      margin: 10px;
      font-weight: 300;
      cursor: pointer;
    }
  }
}
.img {
  width: 70vw;
  height: 50vh;
  margin: 5vh 15vw;
  background: url("https://www.tesla.cn/tesla_theme/assets/img/mytesla/v3/header-nocar-models.jpg?20170815");
  background-repeat: no-repeat;
  background-size: 80% 140%;
  background-position: 7vw -8vh;
}
.botton {
  margin: 0 15vw;
  .name {
    display: flex;
    justify-content: center;
    font-size: 40px;
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    .class {
      width: 200px;
      height: 40px;
    }
  }
}
</style>