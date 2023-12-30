const express = require('express')
const ProdiController = require('../controller/ProdiController')

const router = express.Router()

// Menampilkan semua data maghasiswa
router.get('/', ProdiController.getAllProdi)
// Menampilkan mahasiswa sesuai dengan nim
router.get('/:id', ProdiController.getProdiById)
// Menambahkan data mahasiswa
router.post('/', ProdiController.addProdi)
// Update data mahasiswa
router.put('/:id', ProdiController.updateProdi)
// Delete data mahasiswa
router.delete('/:id', ProdiController.deleteProdi)

module.exports = router