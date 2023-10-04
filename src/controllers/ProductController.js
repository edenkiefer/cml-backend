import ProductService from '../services/ProductService.js'
const productService = new ProductService()

class ProductController {
  static async createProduct(req, res) {
    const { name, price, cashPrice, stockQuantity } = req.body

    try {
      const product = await productService.create({
        name, 
        price, 
        cashPrice, 
        stockQuantity
      })

      return res.status(201).send(product)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async getProducts(req, res) {
    try {
      const products = await productService.get()

      return res.status(200).send(products)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async indexProduct(req, res) {
    const { id } = req.params

    try {
      const product = await productService.index(id)

      return res.status(200).send(product)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params
    const { name, price, cashPrice, stockQuantity } = req.body
    try {
      const product = await productService.update(id, {
        name, 
        price, 
        cashPrice, 
        stockQuantity
      })

      return res.status(200).send(product)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params
    try {
      await productService.delete(id)

      return res.status(200).send({ msg: 'Produto excluido com sucesso' })
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }
}

export default ProductController
