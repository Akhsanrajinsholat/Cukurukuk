import { error } from "console"
import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/**create validation schma */
let schema = Joi.object({
    panjang: Joi.number().required().min(1),
    lebar: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1)
})

/**create a validation function */
let validateCube = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schema.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaLingkaran = Joi.object({
    r: Joi.number().required().min(1),
})

/**create a validation function */
let validateLingkaran = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaLingkaran.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaPersegi = Joi.object({
    s: Joi.number().required().min(1),
})

/**create a validation function */
let validatePersegi = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaPersegi.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaPersegiPanjang = Joi.object({
    p: Joi.number().required().min(1),
    l: Joi.number().required().min(1),
})

/**create a validation function */
let validatePersegiPanjang = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaPersegiPanjang.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaSegitiga = Joi.object({
    a: Joi.number().required().min(1),
    t: Joi.number().required().min(1),
})

/**create a validation function */
let validateSegitiga = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaSegitiga.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

export { validateCube }
export { validateLingkaran }
export { validatePersegi }
export { validatePersegiPanjang }
export { validateSegitiga }