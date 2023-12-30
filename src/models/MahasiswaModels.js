const dbPool = require('../config/database')

const getAllMahasiswa = () => {
    const SQLQuery = 'SELECT * FROM mahasiswa'
    return dbPool.execute(SQLQuery)
}

const getMahasiswaByNim = (nim) => {
    const SQLQuery = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    return dbPool.execute(SQLQuery)
}

const addMahasiswa = (body) => {
    const {nim, nama, email, nomor_hp, alamat, jenis_kelamin, id_prodi } = body;
    const SQLQuery = `
        INSERT INTO mahasiswa (nim, nama, email, nomor_hp, alamat, jenis_kelamin, id_prodi) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [nim, nama, email, nomor_hp, alamat, jenis_kelamin, id_prodi];
    return dbPool.execute(SQLQuery, values);
};

const updateMahasiswa = (body, nim) => {
    const { nama, email, nomor_hp, alamat, jenis_kelamin, id_prodi } = body;
    const SQLQuery = `
        UPDATE mahasiswa 
        SET nama = ?, email = ?, nomor_hp = ?, alamat = ?, jenis_kelamin = ?, id_prodi = ?
        WHERE nim = ?
    `;
    const values = [nama, email, nomor_hp, alamat, jenis_kelamin, id_prodi, nim];
    return dbPool.execute(SQLQuery, values);
};

const deleteMahasiswa = (nim) => {
    const SQLQuery = `DELETE FROM mahasiswa WHERE nim = ${nim} `
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByNim,
    addMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}