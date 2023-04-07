const Koa = require('koa')
const bodyParser = require('koa-bodyparser')  // 为了让 koa 可以解析出来 post 请求传递的参数
const app = new Koa()
const mongoose = require('mongoose')   // 用来连接mongodb
// 消除严格模式
mongoose.set("strictQuery", true)

const config = require('./config.js')

mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('数据库连接成功');
    }
})

app.use(bodyParser())
const user_router = require('./routes/user/index/index.js')

app.use(user_router.routes()).use(user_router.allowedMethods())   // 让路由与koa联系起来
app.listen(config.port, () => {
    console.log('项目已启动');
})

// 用koa-router 给项目做分类