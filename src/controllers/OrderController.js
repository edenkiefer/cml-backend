import OrderService from '../services/OrderService.js'
const orderService = new OrderService()

class OrderController {
  static async createOrder(req, res) {
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
      console.error(error)
      return res.status(400).send({ err: error })
      
    }
  }

  static async getOrders(req, res) {
    try {
      const orders = await orderService.get()

      return res.status(200).send(orders)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async getFilteredOrders(req, res) {
    const { status, initialTotal, finalTotal } = req.query

    try {
      const orders = await orderService.getFilteredOrders({
        status, 
        initialTotal, 
        finalTotal
      })

      return res.status(200).send(orders)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async indexOrder(req, res) {
    const { id } = req.params

    try {
      const order = await orderService.index(id)

      return res.status(200).send(order)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async updateOrder(req, res) {
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
      return res.status(400).send({ err: error })
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params
    try {
      await orderService.delete(id)

      return res.status(200).send({ msg: 'Pedido excluido com sucesso' })
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }
}

export default OrderController
