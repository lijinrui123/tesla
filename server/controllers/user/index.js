const userInfo=require('../../modles/user')   // UserInfo 就是生成的user表
// 控制登录的逻辑
const post = async () => {

}
// 登录操作
const login = async (ctx, next) => {
    console.log(ctx.request.body);
    const { account, password } = ctx.request.body   // 从请求体里面获取账号密码，然后拿到这个区数据库匹配
    // 在 user 表中查找 account 是否存在
    const user=await userInfo.findOne({
        account:account
    })
    if(!user){
        ctx.status=200
        ctx.body={
            code:0, 
            msg:'用户名不存在'
        }
        return
    }else{
        // 匹配密码
        if(user.password!==password){   // 密码不匹配
            ctx.body={
                code:0,
                msg:'密码错误'
            }
            // console.log('密码错误');
        }else{
            ctx.body={
                code:1,
                msg:'登录成功',
                data:user   // 将账号密码返回给前端
            }
            // console.log('密码正确');
        }
    }
    console.log(user);
}

module.exports = {
    post,
    login
}