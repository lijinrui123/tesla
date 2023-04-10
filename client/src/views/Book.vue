<template>
  <div class="header">
    <Header />
  </div>
  <div class="box">
    <div class="left">
      <el-carousel :interval="5000" arrow="always" class="change" height="70vh">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img class="pics" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="right">
      <div class="name">Model S</div>
      <div class="data">预计交付日期：第二季度</div>
      <div class="num">
        <div class="box1">续航里程</div>
        <div class="box1">最高时速</div>
        <div class="box1">百公里加速</div>
      </div>
      <div class="des" v-if="isActive">
        <div class="box2">{{ models.routes }}</div>
        <div class="box2">{{ models.speed }}</div>
        <div class="box2">{{ models.acc }}</div>
      </div>
      <div class="des" v-else>
        <div class="box2">{{ modelsplaid.routes }}</div>
        <div class="box2">{{ modelsplaid.speed }}</div>
        <div class="box2">{{ modelsplaid.acc }}</div>
      </div>
      <div class="models">
        <div class="title">双电机全轮驱动</div>
        <div :class="{money:true,border:isActive}" @click="changeColor(1)">
          <div class="left">Model S</div>
          <div class="right">￥789,900</div>
        </div>
        <div class="title">三电机全轮驱动</div>
        <div :class="{money:true,border:!isActive}" @click="changeColor(2)">
          <div class="left">Model S Plaid版</div>
          <div class="right">￥1009,900</div>
        </div>
      </div>

      <div class="more">查看详情</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Header from "../components/Header.vue";

const imgs = [
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=SIDE&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=REAR34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$WS92,$IBC00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&",
  "https://static-assets.tesla.cn/configurator/compositor?context=design_studio_2&options=$MTS14,$PBSB,$IBC00,$ST0Y&view=INTERIOR&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&"
];

let show = ref(true);
const models = reactive({
  routes: "715公里",
  speed: "250公里/时",
  acc: "3.2 S"
});
const modelsplaid = reactive({
  routes: "767公里",
  speed: "322公里/时",
  acc: "2.1 S"
});
let isActive = ref(true);

const changeColor = value => {
  if (value === 1) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
  console.log(isActive);
};
</script>

<style lang="less" scoped>
.header {
  width: 100vw;
  height: 10vh;
}
.box {
  width: 100%;
  height: 80vh;
  display: flex;
  // background: #000;
  .left {
    flex: 8;
    position: relative;
    .change {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 55vw;
      height: 70vh;
    }
  }
  .right {
    flex: 3;
    margin-right: 5vw;
    .name {
      margin-top: 5vh;
      font-size: 45px;
    }
    .num {
      margin-top: 3vh;
      display: flex;
      .box1 {
        flex: 1;
        font-size: 20px;
      }
    }
    .data {
      margin-top: 3vh;
    }
    .des {
      margin-top: 3vh;
      display: flex;

      .box2 {
        flex: 1;
      }
    }
    .models {
      // margin-top: 8vh;
      .title {
        margin: 15px 0;
      }
      .money {
        margin: 3vh 0;
        display: flex;
        border: 1px solid #000;
        padding: 20px;
        border-radius: 5px;
      }
      .border {
        border: 4px solid #3e6ae1;
      }
    }
    .more {
      margin: auto;
      width: 200px;
      height: 45px;
      background: #f4f4f4;
      text-align: center;
      // font-size: 16px;
      line-height: 50px;
      border-radius: 10px;
      margin-top: 10vh;
    }
  }
}
.el-carousel__item {
  .pics {
    width: 100%;
    height: 100%;
    background-size: 100% 130%;
  }
}
</style>