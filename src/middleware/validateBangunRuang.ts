import { error } from "console"
import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/**create validation schma */
let schemaTabung = Joi.object({
    r: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1)
})

/**create a validation function */
let validateTabung = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaTabung.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaKubus = Joi.object({
    s: Joi.number().required().min(1)
})

/**create a validation function */
let validateKubus = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaKubus.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaBalok = Joi.object({
    p: Joi.number().required().min(1),
    l: Joi.number().required().min(1),
    t: Joi.number().required().min(1),
})

/**create a validation function */
let validatebalok = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaBalok.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

/**create validation schma */
let schemaBola = Joi.object({
    r: Joi.number().required().min(1)
})

/**create a validation function */
let validateBola = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schemaBola.validate(request.body)
    if(error) {
        /**status 400 = bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

export { validateTabung }
export { validateKubus }
export { validatebalok }
export { validateBola }