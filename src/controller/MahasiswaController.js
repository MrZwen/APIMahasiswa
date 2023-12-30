const mahasiswaModel = require('../models/MahasiswaModels')

const getAllMahasiswa = async(req, res) => {
    try {
        const [data] = await mahasiswaModel.getAllMahasiswa()
        res.json({
            message: 'GET all mahasiswa success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getMahasiswaByNim = async (req, res) => {
    const nim = req.params.nim
    try {
        const [mahasiswa] = await mahasiswaModel.getMahasiswaByNim(nim)

        if (mahasiswa.length > 0) {
            res.json({
                message: "GET mahasiswa by NIM success!",
                data: mahasiswa
            })
        } else {
            res.status(404).json({
                message: 'Mahasiswa tidak ditemukan, tolong masukkan data dengan benar!'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error
        })
    }
}

const addMahasiswa = async (req, res) => {
   const { body } = req
   if(!body.nim || !body.nama || !body.email || !body.nomor_hp || !body.alamat || !body.jenis_kelamin || !body.id_prodi) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
   }
   try {
    await mahasiswaModel.addMahasiswa(body)
    res.status(201).json({
        message : 'Tambah data mahasiswa berhasil!',
        data : body
    })
   } catch (error) {
    res.status(500).json({
        message: "Server error!",
        serverMessage: error
    })
   }
}

const updateMahasiswa = async(req,res) => {
    const {nim} = req.params
    const {body} = req
    if(!body.nama || !body.email || !body.nomor_hp || !body.alamat || !body.jenis_kelamin || !body.id_prodi) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.',
            data : null
        })
    }
    try {
        await mahasiswaModel.updateMahasiswa(body, nim)
        res.status(201).json({
            message : 'UPDATE mahasiswa berhasil!',
            data : {
                nim: nim,
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

const deleteMahasiswa = async(req, res) => {
    const {nim} = req.params
    try {
        await mahasiswaModel.deleteMahasiswa(nim)
        res.json({
            message : "Deleted mahasiswa success!",
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
    getAllMahasiswa,
    getMahasiswaByNim,
    addMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}