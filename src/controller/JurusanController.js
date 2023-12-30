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
        const jurusan = await jurusanModels.getJurusanById(id);

        if (jurusan.length > 0) {
            res.json({
                message: `Data jurusan Dengan ID:${id} Berhasil Diambil!`,
                data: jurusan,
            });
        } else {
            res.status(404).json({
                message: `Data jurusan Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error.message || 'Internal server error.',
        });
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
    const jurusanAda = await jurusanModels.getJurusanByName(body.nama)
    if(jurusanAda.length > 0){
        return res.status(400).json({
            message: `Jurusan dengan Nama: ${body.nama} sudah ada, silahkan masukkan nama jurusan yang lain!`
        })
    }
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
            message : `UPDATE jurusan dengan ID:${id} berhasil!`,
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
        const jurusanAda = await jurusanModels.getJurusanById(id)
        if(jurusanAda.length === 0){
            return res.status(404).json({
                message: `Data jurusan dengan ID:${id} tidak ditemukan!`
            })
        } 
        await jurusanModels.deleteJurusan(id)
        res.json({
            message : `Deleted jurusan dengan ID:${id} success!`,
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