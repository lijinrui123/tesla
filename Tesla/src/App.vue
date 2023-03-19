<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";

// onMounted(() => {
//   //初始化自适应  ----在刚显示的时候就开始适配一次
//   handleScreenAuto();
//   //绑定自适应函数   ---防止浏览器栏变化后不再适配
//   window.onresize = () => handleScreenAuto();
// });

// const handleScreenAuto = () => {
//   const designDraftWidth = 1920; //设计稿的宽度
//   const designDraftHeight = 960; //设计稿的高度
//   //根据屏幕的变化适配的比例
//   const scale =
//     document.documentElement.clientWidth /
//       document.documentElement.clientHeight <
//     designDraftWidth / designDraftHeight
//       ? document.documentElement.clientWidth / designDraftWidth
//       : document.documentElement.clientHeight / designDraftHeight;
//   //缩放比例
//   document.querySelector(
//     "#screen"
//   ).style.transform = `scale(${scale}) translate(-50%)`;
// };
</script>

<template>
  <!-- <div class="screen-wrapper">
    <div class="screen" id="screen">
    
    </div>
  </div> -->
  <RouterView />
</template>

<style scoped>
/* .screen-root {
  height: 100%;
  width: 100%;
  .screen {
    display: inline-block;
    width: 1920;
    height: 960;
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
  }
} */
</style>
