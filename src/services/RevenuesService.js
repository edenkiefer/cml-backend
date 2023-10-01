import Reveneus from '../models/Revenues.js'

class ReveneusService {
  async create(dto) {
    const { date, value, origin, paymentMethod, description } = dto

    const reveneu = new Reveneus({
      origin,
      paymentMethod,
      description,
      transaction: {
        date,
        value,
        type: 'E',
      },
    })
    const newReveneu = await reveneu.save()

    return newReveneu
  }

  async get() {
    const reveneus = await Reveneus.find()

    return reveneus
  }

  async index(id) {
    const reveneu = await Reveneus.findOne({ _id: id })
    return reveneu
  }

  async update(id, dto) {
    const { date, value, origin, paymentMethod, description } = dto

    await Reveneus.findByIdAndUpdate(id, {
      $set: {
        origin,
        paymentMethod,
        description,
        transaction: {
          date,
          value,
          type: 'E',
        },
      },
    })

    return await Reveneus.findOne({ _id: id })
  }

  async delete(id) {
    await Reveneus.findByIdAndDelete(id)
  }
}

export default ReveneusService
