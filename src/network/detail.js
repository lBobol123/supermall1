import { request } from './request'

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getComment () {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.oldPrice = itemInfo.oldPrice
    this.newPrice = itemInfo.price
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
  }
}
export class Shop {
  constructor (shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParams {
  constructor (itemParams) {
    this.set = itemParams.info.set
    this.tables = itemParams.rule.tables[0]
  }
}
