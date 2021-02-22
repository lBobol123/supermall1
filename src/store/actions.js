import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'

export default {
  addCart (context, payLoad) {
    return new Promise((resolve, reject) => {
      const oldProDuct = context.state.cartList.find(item => item.iid === payLoad.iid)
      if (oldProDuct) {
        context.commit(ADD_COUNTER, oldProDuct)
        resolve('成功加入购物车了')
      } else {
        context.commit(ADD_TO_CART, payLoad)
        resolve('成功加入购物车')
      }
    })
  }
}
