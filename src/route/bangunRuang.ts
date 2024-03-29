import express from "express";
import { luasPermukaanBalok, luasPermukaanBola, luasPermukaanKubus, luasPermukaanTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang";
import { validateBola, validateKubus, validateTabung, validatebalok } from "../middleware/validateBangunRuang";
const app = express()

/**allow read a body */
app.use(express.json())

/** fungsi use() digunakan untuk menerapkan sebuah fungsi
 * pada object express. fungsi tsb akan otomatis dijalankan.
 */

app.post(`/tabung/volume`,validateTabung, volumeTabung)
app.post(`/tabung/luasPermukaan`, luasPermukaanTabung)

app.post(`/kubus/volume`,validateKubus, volumeKubus)
app.post(`/kubus/luasPermukaan`, luasPermukaanKubus)

app.post(`/balok/volume`,validatebalok, volumeBalok)
app.post(`/balok/luasPermukaan`, luasPermukaanBalok)

app.post(`/bola/volume`,validateBola, volumeBola)
app.post(`/bola/luasPermukaan`, luasPermukaanBola)


export default app