import ReveneusService from '../services/RevenuesService.js'

const reveneuService = new ReveneusService()

class ReveneusController {
  static async createReveneu(req, res) {
    try {
      const reveneu = await reveneuService.create(req.body)
      return res.status(201).send(reveneu)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async getReveneus(req, res) {
    try {
      const reveneus = await reveneuService.get()
      return res.status(200).send(reveneus)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async indexReveneu(req, res) {
    const { id } = req.params

    try {
      return res.send(await reveneuService.index(id))
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async updateReveneu(req, res) {
    const { id } = req.params

    try {
      const reveneu = await reveneuService.update(id, req.body)
      return res.status(200).send(reveneu)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async deleteReveneu(req, res) {
    const { id } = req.params
    try {
      await reveneuService.delete(id)
      return res.status(200).send({ msg: 'Entrada removida com sucesso' })
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }
}

export default ReveneusController
