const dbPool = require('../config/database')

const getAllMahasiswa = () => {
    const SQLQuery = 'SELECT * FROM mahasiswa'
    return dbPool.execute(SQLQuery)
}

const getMahasiswaByNim = async (nim) => {
    try {
        const SQLQuery = `SELECT * FROM mahasiswa WHERE nim = ?`
        const [ mahasiswa ] = await dbPool.execute(SQLQuery, [nim])
        return mahasiswa
    } catch (error) {
        console.error('Error in getMahasiswaByNim:', error)
        throw error
    }
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

const deleteMahasiswa = async(nim) => {
    try {
        await dbPool.query('DELETE FROM mahasiswa WHERE nim = ?', [nim]);
    } catch (error) {
        console.error('Error in deleteJurusan:', error);
        throw error;
    }
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByNim,
    addMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}