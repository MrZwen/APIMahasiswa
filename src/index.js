require('dotenv').config()
const PORT = process.env.PORT || 5000
const HOST = '0.0.0.0'

const express = require('express')
const mahasiswaRoutes = require('./routes/MahasiswaRoutes')
const prodiRoutes = require('./routes/ProdiRoutes')
const jurusanRoutes = require('./routes/JurusanRoutes')
const MiddlewareLog = require('./middleware/log')

const app = express()

app.use(MiddlewareLog)
app.use(express.json())

app.use('/mahasiswa', mahasiswaRoutes)
app.use('/prodi', prodiRoutes)
app.use('/jurusan', jurusanRoutes)

app.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada host ${HOST}`)
    console.log(`Server berhasil di jalankan,pada port ${PORT}!`)
});