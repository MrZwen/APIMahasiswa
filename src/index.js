require('dotenv').config();
const http = require('http');
const PORT = 5000;
const HOST = '0.0.0.0';
const express = require('express');
const mahasiswaRoutes = require('./routes/MahasiswaRoutes');
const prodiRoutes = require('./routes/ProdiRoutes');
const jurusanRoutes = require('./routes/JurusanRoutes');
const MiddlewareLog = require('./middleware/log');

const app = express();

app.use(MiddlewareLog);
app.use(express.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/prodi', prodiRoutes);
app.use('/jurusan', jurusanRoutes);

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada host ${HOST}`);
    console.log(`Server berhasil dijalankan, pada port ${PORT}!`);
});
