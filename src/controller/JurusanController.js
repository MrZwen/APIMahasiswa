const jurusanModels = require('../models/JurusanModels')

const getAllJurusan = async(req, res) => {
    try {
        const [ data ] = await jurusanModels.getAllJurusan()
        res.json({
            message: 'GET all jurusan success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getJurusanById = async(req, res) => {
    const id = req.params.id
    try {
        const [ jurusan ] = await jurusanModels.getJurusanById(id)
        if (jurusan.length > 0) {
            res.json({
                message: `Data jurusan Dengan ID:${id} Berhasil Diambil!`,
                data: jurusan
            })
        } else {
            res.status(404).json({
                message: 'Jurusan tidak ditemukan, tolong masukkan data dengan benar!'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error
        })
    }
}

const addJurusan = async(req, res) => {
    const { body } = req
    if(!body.nama) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
    await jurusanModels.addJurusan(body)
    res.status(201).json({
        message : 'Tambah data jurusan berhasil!',
        data : body
    })
   } catch (error) {
    res.status(500).json({
        message: "Server error!",
        serverMessage: error
    })
   }
}

const updateJurusan = async(req, res) => {
    const { id } = req.params
    const { body } = req
    if(!body.nama) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.',
            data : null
        })
    }
    try {
        await jurusanModels.updateJurusan(body, id)
        res.status(201).json({
            message : 'UPDATE jurusan berhasil!',
            data : {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const deleteJurusan = async(req, res) => {
    const { id } = req.params
    try {
        await jurusanModels.deleteJurusan(id)
        res.json({
            message : "Deleted jurusan success!",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllJurusan,
    getJurusanById,
    addJurusan,
    updateJurusan,
    deleteJurusan
}