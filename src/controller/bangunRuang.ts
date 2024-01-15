import {Request,Response} from "express";

const volumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = phi * r * r * t
        return response.status(200).json({
            status: true,
            r,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}
const luasPermukaanTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const luasPermukaan = 2 * phi * r * (r+t)
        return response.status(200).json({
            status: true,
            r,
            luasPermukaan
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}

const volumeKubus = (request: Request, response: Response) => {
    try {
        
        const s: number = Number(request.body.s)
        const volume = s * s * s
        return response.status(200).json({
            status: true,
            s,
            volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}

const luasPermukaanKubus = (request: Request, response: Response) => {
    try {
        
        const s: number = Number(request.body.s)
        const luasPermukaan = 6 * s^2
        return response.status(200).json({
            status: true,
            s,
            luasPermukaan
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}

const volumeBalok = (request: Request, response: Response) => {
    try {
        
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const volume = p * l * t
        return response.status(200).json({
            status: true,
            volume
            
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}
const luasPermukaanBalok = (request: Request, response: Response) => {
    try {
        
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)
        const volume = 2 * (p * l + p * t + l * t)
        return response.status(200).json({
            status: true,
            luasPermukaanBalok
            
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}

const volumeBola = (request: Request, response: Response) => {
    try {
        
        const phi = Math.PI
        const r: number = Number(request.body.r)
        
        const volume = (4/3) * phi * r^3
        return response.status(200).json({
            status: true,
            r,
            volume
            
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}
const luasPermukaanBola = (request: Request, response: Response) => {
    try {
        
        const phi = Math.PI
        const r: number = Number(request.body.r)
        
        const volume = 4 * phi * r^2
        return response.status(200).json({
            status: true,
            r,
            luasPermukaanBola
            
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error
        })

    }
}


export {volumeTabung}
export {luasPermukaanTabung}
export {volumeKubus}
export {luasPermukaanKubus}
export {volumeBalok}
export {luasPermukaanBalok}
export {volumeBola}
export {luasPermukaanBola}