<template>
  <div class="tesla">T E S L A</div>
  <div class="main" v-if="login">
    <div class="login">登录</div>
    <div class="email">账号</div>
    <input type="text" class="input" placeholder="请输入你的账号" v-model="account" />
    <div class="email">密码</div>
    <input type="password" class="input" placeholder="请输入密码" v-model="password" />
    <div class="next" @click="loginIn">下一步</div>
    <div class="concel">取消</div>
    <div class="forget">
      <div class="lostEmail">忘记电子邮箱？</div>|
      <div class="lostPassword">忘记密码？</div>
    </div>
    <div class="other">
      <div class="line"></div>
      <div class="anothor">或</div>
      <div class="line"></div>
    </div>
    <div class="createAccount" @click="createAccount">创建账户</div>
    <div class="botton">
      <a class="tesla" href="https://www.tesla.cn/about?redirect=no">Tesla © 2022</a>
      <a href="https://www.tesla.cn/legal/privacy?redirect=no" class="privacy">隐私与政策</a>
      <a href="https://www.tesla.cn/contact?redirect=no" class="context">联系我们</a>
    </div>
  </div>
  <div class="create" v-else>
    <div class="createAccount">创建账户</div>
    <div class="top">选择所在国家/地区</div>
    <el-select
      v-model="value"
      filterable
      allow-create
      default-first-option
      :reserve-keyword="false"
      placeholder="中国大陆"
      class="select"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <div class="top">名字</div>
    <input type="text" class="input" placeholder="请输入你的名字" />
    <div class="top">姓氏</div>
    <input type="text" class="input" placeholder="请输入你的姓氏" />
    <div class="top">电子邮箱</div>
    <input type="text" class="input" placeholder="请输入你的邮箱" />
    <div class="top">密码</div>
    <input type="password" class="input" placeholder="请输入密码" />
    <div class="check">
      <input type="checkbox" class="checkbox" />
      <div class="des">创建 Tesla 账户，即表示我了解并同意</div>
    </div>

    <div class="img-verify">
      <canvas width="340" height="80" ref="verify" @click="handleDraw">点击此处生成</canvas>
    </div>
    <div class="top">请输入图片中的字符</div>
    <input type="text" class="input" />
    <div class="newAccount">创建账户</div>
    <div class="concel">取消</div>
    <div class="other">
      <div class="line"></div>
      <div class="anothor">或</div>
      <div class="line"></div>
    </div>
    <div class="login" @click="loginAccount">登录</div>
    <div class="botton">
      <a class="tesla" href="https://www.tesla.cn/about?redirect=no">Tesla © 2022</a>
      <a href="https://www.tesla.cn/legal/privacy?redirect=no" class="privacy">隐私与政策</a>
      <a href="https://www.tesla.cn/contact?redirect=no" class="context">联系我们</a>
    </div>
  </div>
</template>

<script setup>
// 引入
import { ref, reactive, onMounted } from "vue";
import axios from "../api/index.js";

onMounted(() => {
  if (login === false) {
    // 开始生成验证码
    state.imgCode = draw();
  }
  //   console.log(login.value);
});

// 声明变量
let login = ref(true);
const value = ref("");
const options = [
  {
    value: "中国大陆",
    label: "中国大陆"
  },
  {
    value: "中国台湾",
    label: "中国台湾"
  },
  {
    value: "其他地区",
    label: "其他地区"
  }
];
const verify = ref(null); // 验证码
const state = reactive({
  pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  imgCode: ""
});
// 点击下一步
let account=ref('')
let password=ref('')
const loginIn = () => {
  if(account.value===''){
    window.alert('请输入账号')
  }
  if(account.value!='' && password.value===''){
    window.alert('请输入密码')
  }
};
// 声明函数
const createAccount = () => {
  login.value = !login.value;
  handleDraw();
  state.imgCode = draw();
};
const loginAccount = () => {
  login.value = !login.value;
};
// 生成随机数
const randomNum = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};
// 随机生成颜色
const randomColor = (min, max) => {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return `rgb(${r},${g},${b})`;
};
// 将随机生成的颜色与随机挑选的颜色合并
const draw = () => {
  const ctx = verify.value.getContext("2d"); // 创建2d的画布
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, 340, 90);
  let imgCode = "";
  for (let i = 0; i < 4; i++) {
    const text = state.pool[randomNum(0, 36)];
    imgCode += text;
    const fontSize = randomNum(20, 60);
    const deg = randomNum(-30, 30);
    ctx.font = fontSize + "px Simhei";
    ctx.textBaseline = "top";
    ctx.fillStyle = randomColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, 40, 20);
    ctx.restore();
  }

  return imgCode;
};
const handleDraw = () => {
  state.imgCode = draw();
};
</script>

<style lang="less" scoped>
.tesla {
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
}
.main {
  width: 330px;
  margin: 0 auto;
  .login {
    font-size: 30px;
    margin: 40px 0;
  }
  .email {
    color: #5c5d61;
    margin: 10px;
  }
  .input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #d0d1d2;
    background: #f5f5f5;
  }
  .next {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #3d69e1;
    margin: 20px 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concel {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #f5f5f5;
    margin: 20px 0 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .forget {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .lostEmail {
      margin: 0 5px;
      text-decoration: underline;
      font-size: 16px;
      font-weight: 300;
    }
    .lostPassword {
      margin: 0 5px;
      text-decoration: underline;
      font-size: 16px;
      font-weight: 300;
    }
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .line {
      width: 48%;
      border-bottom: 1px solid #e2e4e4;
    }
    .anothor {
      color: #5c5d61;
      margin: 10px;
    }
  }
  .createAccount {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
  }
  .botton {
    display: flex;
    a {
      margin: 5px;
    }
    .tesla {
      font-size: 12px;
    }
    .privacy {
      font-size: 12px;
    }
    .context {
      font-size: 12px;
    }
  }
}
.create {
  width: 330px;
  margin: 0 auto;
  .createAccount {
    font-size: 30px;
    margin: 40px 0 50px 0;
  }
  .select {
    width: 100%;
    height: 40px;
    border-radius: 15px;
  }
  .top {
    color: #5c5d61;
    margin: 10px;
  }
  el-select {
    width: 100%;
  }
  .input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #d0d1d2;
    background: #f5f5f5;
    margin-bottom: 25px;
  }
  .check {
    display: flex;
    margin: 20px 0;
  }
  .img-verify {
    margin: 30px 0;
    background: #5c5d61;
    border-radius: 8px;
    box-sizing: border-box;
    canvas {
      border-radius: 8px;
    }
  }
  .newAccount {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #3d69e1;
    margin: 20px 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .concel {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #f5f5f5;
    margin: 20px 0 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .other {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    .line {
      width: 48%;
      border-bottom: 1px solid #e2e4e4;
    }
    .anothor {
      color: #5c5d61;
      margin: 10px;
    }
  }
  .login {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 15px;
    box-sizing: border-box;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
  }
  .botton {
    display: flex;
    a {
      margin: 5px;
    }
    .tesla {
      font-size: 12px;
    }
    .privacy {
      font-size: 12px;
    }
    .context {
      font-size: 12px;
    }
  }
}
</style>