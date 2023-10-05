import BaseError from './BaseError.js'

class ValidationError extends BaseError {
  constructor(error) {
    const errors = Object.values(error.errors)
      .map(erro => erro.message)

    super(errors, 400)
  }
}

export default ValidationError