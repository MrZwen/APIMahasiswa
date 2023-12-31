const prodiModels = require('../models/ProdiModels')

const getAllProdi = async(req, res) => {
    try {
        const [data] = await prodiModels.getAllProdi()
        res.json({
            message: 'GET all prodi success!',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error!",
            serverMessage: error
        })
    }
}

const getProdiById = async(req, res) => {
    const id = req.params.id
    try {
        const prodi = await prodiModels.getProdiById(id)

        if (prodi.length > 0) {
            res.json({
                message: `Data Prodi Dengan ID:${id} Berhasil Diambil!`,
                data: prodi
            });
        } else {
            res.status(404).json({
                message: `Data Prodi Dengan ID:${id} tidak ditemukan, tolong masukkan data dengan benar!`,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server error!',
            serverMessage: error
        })
    }
}

const addProdi = async(req, res) => {
    const { body } = req
    if(!body.nama || !body.id_jurusan) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.'
        })
    }
    try {
    const prodiAda = await prodiModels.getProdiByName(body.nama)
    if(prodiAda.length > 0){
        return res.status(400).json({
            message: `Prodi dengan Nama: ${body.nama} sudah ada, silahkan masukkan nama prodi yang lain!`
        })
    }
    await prodiModels.addProdi(body)
    res.status(201).json({
        message : 'Tambah data prodi berhasil!',
        data : body
    })
   } catch (error) {
    res.status(500).json({
        message: "Server error!",
        serverMessage: error
    })
   }
}

const updateProdi = async(req, res) => {
    const {id} = req.params
    const {body} = req
    if(!body.nama || !body.id_jurusan) {
        return res.status(400).json({
            message : 'Data yang dikirim tidak lengkap atau tidak sesuai format.',
            data : null
        })
    }
    try {
        const prodiAda = await prodiModels.getProdiByName(body.nama, id)
        if(prodiAda.length > 0){
            res.status(404).json({
                message: `Prodi dengan nama ${body.nama} sudah ada, silakan pilih nama lain.`,
                data: null,
            })
        }
        await prodiModels.updateProdi(body, id)
        res.status(201).json({
            message : 'UPDATE prodi berhasil!',
            data : {
                nim: id,
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

const deleteProdi = async(req,res) => {
    const {id} = req.params
    try {
        const prodiAda = await prodiModels.getProdiById(id)
        if(prodiAda.length === 0){
            return res.status(404).json({
                message: `Data prodi dengan ID:${id} tidak ditemukan!`
            })
        } 
        await prodiModels.deleteProdi(id)
        res.json({
            message : "Deleted prodi success!",
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
    getAllProdi,
    getProdiById,
    addProdi,
    updateProdi,
    deleteProdi
}