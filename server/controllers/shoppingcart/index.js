const shoppingcart_mod = require('../../modles/shoppingCart')  // 获取购物表

const addData = async (ctx, next) => {
    console.log(ctx.request.body);
    const { account, car, methods } = ctx.request.body
    // 在数据库里面查找该账号的购物信息
    if (methods === 'add') {
        const result = await shoppingcart_mod.findOne({
            account: account
        })
        ctx.status = 200
        // console.log(result);
        if (result) {
            shoppingcart_mod.updateOne(
                { _id: result._id },  // 在该表中查找 _id 为 某个账号 id 的数据
                {
                    $set: {      // 修改数据
                        commodity: {
                            "Model3": car.Model3,
                            "ModelX": car.ModelX,
                            "ModelY": car.ModelY,
                            "ModelS": car.ModelS,
                            "Cybertruct": car.Cybertruct,
                            "Powerwall": car.Powerwall,
                        }
                    }
                }
            )
        }

    }else{

    }
}


module.exports = {
    addData
}
