const express = require('express')
const MahasiswaController = require('../controller/MahasiswaController')

const router = express.Router()

// Menampilkan semua data maghasiswa
router.get('/', MahasiswaController.getAllMahasiswa)
// Menampilkan mahasiswa sesuai dengan nim
router.get('/:nim', MahasiswaController.getMahasiswaByNim)
// Menambahkan data mahasiswa
router.post('/', MahasiswaController.addMahasiswa)
// Update data mahasiswa
router.put('/:nim', MahasiswaController.updateMahasiswa)
// Delete data mahasiswa
router.delete('/:nim', MahasiswaController.deleteMahasiswa)

module.exports = router