/**ini adalah file utama
 * dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import express, { Request, Response }  from "express"
import routeBangunDatar from "./route/bangunDatar"
import routeBangunRuang from "./route/bangunRuang"



/** buat wadah untk inisiasi express*/
const app = express()

/**mendefinisikan PORT berjalannya server */
const PORT = 8000

/**allow to read JSON as request */
app.use(express.json())

/**proses pertama untuk handle request */
app.get(`/serena`, (request: Request, response: Response) => {
    /**ini adalah proses handle request dengan
     * url/address: http://localhost:8000/serena
     * method: GET
     */
    /**memberi response */
    return response.status(200).json({
        Message: `Akhsan Rajin Sholat dan Mengaji`
    })
})

/**read a request */
app.get(`/moklet`, (request: Request, response: Response) => {
    /**asumsikan data yang dikirim 
     * adalah nama dan umur
     */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let Message: string = ` My name is ${nama} and i'm ${umur} year old`
    return response.status(200).json(Message)
})

/**read data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response:Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let Message: string = `my name is ${nama} and my gender is ${gender}`
    return response.status(200).json(Message)
})

/**read a request from body */
app.post(`/moklet`, (request: Request, response:Response) => {
    /**asumsikan data yang dikirim adalah 
     * panjang dan lebar
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar


    let luasPersegiPanjang: number = panjang * lebar
    let Message = `Luas persegi panjang adalah ${luasPersegiPanjang}}`
    return response.status(200).json(Message)
})

/**read a request  */
app.get(`/celcius/:suhuAwal`, (request: Request, response: Response) => {
    let suhuAwal:any = request.params.suhuAwal

    let fahrenheit: number = 9/5 * suhuAwal + 32
    let reamur: number = 4/5 * suhuAwal
    let kelvin: number = suhuAwal + 273.15
    let Message = `reamur = ${reamur} fahrenheit = ${fahrenheit} kelvin = ${kelvin}`
    return response.status(200).json(Message)
})

/**read a request for count volume of long cube */
app.post(`balok`, (request: Request, response: Response) => {
    /**read panjang, lebar, tinggi */
    let panjang : number = Number (request.body.panjang)
    let lebar : number = Number (request.body.lebar)
    let tinggi : number = Number (request.body.tinggi)

    let volume : number = panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    })
})

/**register route */
app.use(routeBangunDatar)
app.use(routeBangunRuang)

/**running server */
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})