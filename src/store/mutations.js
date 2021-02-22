import { ADD_COUNTER, ADD_TO_CART } from './mutations-type'

export default {
  [ADD_COUNTER] (state, payLoad) {
    payLoad.count++
  },
  [ADD_TO_CART] (state, payLoad) {
    payLoad.count = 1
    payLoad.isShowCount = true
    payLoad.isSelect = false
    state.cartList.push(payLoad)
  }
}
