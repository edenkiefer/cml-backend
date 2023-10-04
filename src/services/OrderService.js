import Order from '../models/Order.js'
import Product from '../models/Product.js'

class OrderService {
  async create(dto) {
    const { status, client, itens, subTotal, deliveryAddress } = dto

    const order = new Order({
      status, 
      client, 
      itens, 
      subTotal, 
      deliveryAddress
    })

    itens.forEach(async (item) => {
      const product = await Product.findOne({ _id: item._id })
      await Product.findByIdAndUpdate(item._id, {
        $set: {
          stockQuantity: product.stockQuantity - item.quantity
        }
      })
    })

    return await order.save()
  }

  async get() {
    const orders = await Order.find()

    return orders
  }

  async getFilteredOrders(filter) {
    const { status, initialTotal, finalTotal } = filter

    const newFilter = {}

    status ? newFilter.category = category : null 
    initialTotal ? newFilter.subTotal = { $gte: new Number(initialTotal) } : null
    finalTotal ? newFilter.subTotal = { ...newFilter.subTotal, $lte: new Number(finalTotal) } : null

    const orders = await Order.find({
      ...newFilter
    })

    return orders
  }

  async index(id) {
    const order = await Order.findOne({ _id: id })

    return order
  }

  async update(id, dto) {
    const { status, client, itens, subTotal, deliveryAddress } = dto

    await Order.findByIdAndUpdate(id, {
      $set: {
        status, 
        client, 
        itens, 
        subTotal, 
        deliveryAddress
      },
    })

    return await Order.findOne({ _id: id })
  }

  async delete(id) {
    await Order.findByIdAndDelete(id)
  }

}

export default OrderService
