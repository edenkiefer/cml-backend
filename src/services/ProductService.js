import Product from '../models/Product.js'

class ProductService {
  async create(dto) {
    const { name, price, cashPrice, stockQuantity } = dto

    const product = new Product({
      name,
      price,
      cashPrice,
      stockQuantity
    })

    return await product.save()
  }

  async get() {
    const products = await Product.find()

    return products
  }

  async index(id) {
    const product = await Product.findOne({ _id: id })

    return product
  }

  async update(id, dto) {
    const { name, price, cashPrice, stockQuantity } = dto

    await Product.findByIdAndUpdate(id, {
      $set: {
        name,
        price,
        cashPrice,
        stockQuantity
      },
    })

    return await Product.findOne({ _id: id })
  }

  async delete(id) {
    await Product.findByIdAndDelete(id)
  }

}

export default ProductService
