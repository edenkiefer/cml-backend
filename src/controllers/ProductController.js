import ProductService from '../services/ProductService.js'
const productService = new ProductService()

class ProductController {
  static async createProduct(req, res, next) {
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
      next(error)
    }
  }

  static async getProducts(req, res, next) {
    try {
      const products = await productService.get()

      return res.status(200).send(products)
    } catch (error) {
      next(error)
    }
  }

  static async indexProduct(req, res, next) {
    const { id } = req.params

    try {
      const product = await productService.index(id)

      return res.status(200).send(product)
    } catch (error) {
      next(error)
    }
  }

  static async updateProduct(req, res, next) {
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
      next(error)
    }
  }

  static async deleteProduct(req, res, next) {
    const { id } = req.params
    try {
      await productService.delete(id)

      return res.status(200).send({ msg: 'Produto excluido com sucesso' })
    } catch (error) {
      next(error)
    }
  }
}

export default ProductController
