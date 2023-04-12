const shoppingcart_mod = require('../../modles/shoppingCart')  // 获取购物表

const addData = async (ctx, next) => {
    // console.log(ctx.request.body);
    const { account, car } = ctx.request.body

    // 在数据库里面查找该账号的购物信息
    const result = await shoppingcart_mod.findOne({
        account: account
    })
    console.log(result);
    ctx.status = 200

    // console.log(car.Model3);
    if (result) {
        console.log(account);
        console.log(car.ModelS);
        result.update(
            // { '_id': result._id },
            // {
            //     $set: {
            //         'commodity': {
            //             'ModelS': car.ModelS,
            //             'ModelY': car.ModelY,
            //             'Model3': car.Model3,
            //             'ModelX': car.ModelX,
            //             'Cybertruck': car.Cybertruck,
            //             'Powerwall': car.Powerwall
            //         }
            //     }
            // }
            { _id: result._id },
            {
                $set: {
                    commodity: {
                        ModelS: car.ModelS,
                        ModelY: car.ModelY,
                        Model3: car.Model3,
                        ModelX: car.ModelX,
                        Cybertruck: car.Cybertruck,
                        Powerwall: car.Powerwall
                    }
                }
            }
        )
    }
    const result1 = await shoppingcart_mod.findOne({
        account: account
    })
    console.log(result1);
}


module.exports = {
    addData
}