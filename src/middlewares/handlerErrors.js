import mongoose from 'mongoose';
import ValidationError from '../errors/ValidationError.js';
import BaseError from '../errors/BaseError.js';

function handlerErrors (error, req, res, next) {
  if (error instanceof mongoose.Error.CastError)
    return new BaseError(
      'Um ou mais campos estão sendo informados de forma incorreta',
      400
    ).sendResponse(res)

  if (error instanceof mongoose.Error.ValidationError) 
    return new ValidationError(error).sendResponse(res)
  
  return new BaseError().sendResponse(res)
}

export default handlerErrors