import OrderService from '../services/OrderService.js'
const orderService = new OrderService()

class OrderController {
  static async createOrder(req, res, next) {
    const { status, client, itens, subTotal, deliveryAddress } = req.body

    try {
      const order = await orderService.create({
        status, 
        client, 
        itens, 
        subTotal, 
        deliveryAddress
      })

      return res.status(201).send(order)
    } catch (error) {
      next(error);
    }
  }

  static async getOrders(req, res, next) {
    try {
      const orders = await orderService.get()

      return res.status(200).send(orders)
    } catch (error) {
      next(error)
    }
  }

  static async getFilteredOrders(req, res, next) {
    const { status, initialTotal, finalTotal } = req.query

    try {
      const orders = await orderService.getFilteredOrders({
        status, 
        initialTotal, 
        finalTotal
      })

      return res.status(200).send(orders)
    } catch (error) {
      next(error)
    }
  }

  static async indexOrder(req, res, next) {
    const { id } = req.params

    try {
      const order = await orderService.index(id)

      return res.status(200).send(order)
    } catch (error) {
      next(error)
    }
  }

  static async updateOrder(req, res, next) {
    const { id } = req.params
    const { status, client, itens, subTotal, deliveryAddress } = req.body

    try {
      const order = await orderService.update(id, {
        status, 
        client, 
        itens, 
        subTotal, 
        deliveryAddress
      })

      return res.status(200).send(order)
    } catch (error) {
      next(error)
    }
  }

  static async deleteOrder(req, res, next) {
    const { id } = req.params
    try {
      await orderService.delete(id)

      return res.status(200).send({ msg: 'Pedido excluido com sucesso' })
    } catch (error) {
      next(error)
    }
  }
}

export default OrderController
