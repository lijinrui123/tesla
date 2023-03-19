<template>
    <div class="header"><Header /></div>
  <div class="imgs">
    <div class="img1">
      <div class="header">
        <div class="name">Model 3</div>
      </div>
      <div class="bottom">
        <div class="animate__animated animate__slideInUp box1 box11">
          <div class="bigWords">3.3秒</div>
          <div class="smallWords">百公里加速*</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box12">
          <div class="bigWords">675 公里</div>
          <div class="smallWords">续航里程<br/>
CLTC 综合工况</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box13">
          <div class="bigWords">全轮驱动</div>
          <div class="smallWords">双电机</div>
        </div>
        <el-button class="pre-buy" color :dark="isDark" plain>立即订购</el-button>
      </div>
    </div>

    <div class="img2">
      <div class="left">
        <p class="p1">安全性</p>
        <p class="p2">设计以安全为主</p>
        <p class="p3">安全性是 Model 3 整体设计的重中之重。车身架构采用钢铝混合金属材质，保证各部位的支撑强度。在一次内部翻滚测试中，Model 3 在配置全景玻璃车顶的情况下，仍成功抵御了四倍于其自身质量的重压，大约相当于两只成年非洲象的重量。</p>
      </div>
      <div class="right">

      </div>
    </div>

    <div class="img3">
      <div class="bottom">
        <div class="animate__animated animate__slideInUp box1 box11">
          <div class="bigWords">3.3秒</div>
          <div class="smallWords">卓越的加速性能：百公里加速最快仅需 3.3 秒*</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box12">
          <div class="bigWords">261km/h</div>
          <div class="smallWords">通过操控性与空气动力的提升，最高时速可达 261 公里/小时<br/>
CLTC 综合工况</div>
        </div>
        <div class="box1 animate__animated animate__slideInUp box13">
          <div class="bigWords">全轮驱动</div>
          <div class="smallWords">双电机全轮驱动实现对牵引力和扭矩的全天候精准控制</div>
        </div>
      </div>
    </div>
  </div>

  <div class="threeD">
    123
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style lang="less" scoped>
.imgs{
    width: 100%;
    height: 100%;
  .img1 {
    width: 100%;
    height: 100%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/f4c8d0eb-c843-48c6-bc08-cf6cd321f9b1/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-ZeroG-CN");
    background-size: 100% 135%;
    background-position: 0px -130px;
    .header {
      text-align: center;
      padding-top: 140px;
      .name {
        color: #fff;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 500;
      }
    }
    .bottom {
      margin: 25% 300px 0 300px;
      color: #fff;
      display: flex;
      text-align: center;
      justify-content: space-between;

      .box1 {
        margin-right: 30px;
        .bigWords {
          font-size: 25px;
          margin-bottom: 13px;
        }
        .smallWords {
          font-size: 10px;
          line-height: 14px;
        }
      }
      .box11{
        --animate-delay: 0.9s;
      }
      .box12{
        --animate-delay: 0.5s;
      }
      .box13{
        --animate-delay: 1.0s;
      }
      .box14{
        --animate-delay: 1.5s;
      }
      .pre-buy {
        width: 20%;
        height: 6%;
        border: 2px solid #fff;
      }
    }
    .usa {
      font-size: 12px;
      color: #fff;
      text-align: center;
      margin-top: 40px;
    }
  }
  .img2{
    width: 100%;
    height: 100%;
    display: flex;
    .left{
       width: 30%;
       height: 100%;
       box-sizing: border-box;
       padding: 30px;
       .p1{
        font-size: 18px;
        font-weight: 100;
        margin-bottom: 10px;
       }
       .p2{
        font-size: 28px;
        margin-bottom: 30px;
       }
       .p3{
        font-weight: 300;
        line-height: 20px;
       }
    }
    .right{
      width: 70%;
      height: 100%;
      background: url("https://tesla-cdn.thron.cn/delivery/public/image/tesla/3c7146d4-07da-4c78-833a-c9352ab6fe5f/bvlatuR/std/2880x1800/Model-3-Safety-Hero-Desktop-CN?quality=auto-medium&format=auto");
      background-position: -30px -20px; 
      background-size: 110% 100%;
    }
  }
  .img3{
    width: 100%;
    height: 70%;
    background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/212c3982-7a7c-4816-9ee7-ae6f04357593/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-CN?quality=auto-medium&format=auto");
    background-size: 100% 170%; 
    background-position: 0 -150px;
    .bottom {
      margin: 25% 300px 0 300px;
      color: #fff;
      display: flex;
      text-align: center;
      justify-content: space-between;
      
      .box1 {
        margin-right: 30px;
        .bigWords {
          font-size: 25px;
          margin-bottom: 13px;
        }
        .smallWords {
          font-size: 10px;
          line-height: 14px;
        }
      }
      .box11{
        --animate-delay: 0.9s;
      }
      .box12{
        --animate-delay: 0.5s;
      }
      .box13{
        --animate-delay: 1.0s;
      }
      .box14{
        --animate-delay: 1.5s;
      }
      .pre-buy {
        width: 20%;
        height: 6%;
        border: 2px solid #fff;
      }
    }
  }
}
.threeD{
  width: 100%;
  height: 100%;
}
</style>