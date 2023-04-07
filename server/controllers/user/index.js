// 控制登录的逻辑
const post = async () => {

}
// 登录操作
const login = async (ctx, next) => {
    console.log(ctx.request.body);
    const { account, password } = ctx.request.body   // 从请求体里面获取账号密码，然后拿到这个区数据库匹配
}

module.exports = {
    post,
    login
}