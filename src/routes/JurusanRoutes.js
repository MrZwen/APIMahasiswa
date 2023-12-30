const express = require('express')
const JurusanController = require('../controller/JurusanController')

const router = express.Router()

// Menampilkan semua data maghasiswa
router.get('/', JurusanController.getAllJurusan)
// Menampilkan mahasiswa sesuai dengan nim
router.get('/:id', JurusanController.getJurusanById)
// Menambahkan data mahasiswa
router.post('/', JurusanController.addJurusan)
// Update data mahasiswa
router.put('/:id', JurusanController.updateJurusan)
// Delete data mahasiswa
router.delete('/:id', JurusanController.deleteJurusan)

module.exports = router