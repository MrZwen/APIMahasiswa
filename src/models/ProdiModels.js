const dbPool = require('../config/database')

const getAllProdi = () => {
    const SQLQuery = 'SELECT * FROM prodi'
    return dbPool.execute(SQLQuery)
}

const getProdiById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM prodi WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getProdiById:', error);
        throw error;
    }
}

const addProdi = (body) => {
    const { nama, id_jurusan } = body;
    const SQLQuery = `
        INSERT INTO prodi (nama, id_jurusan) 
        VALUES (?, ?)
    `;
    const values = [ nama, id_jurusan ];
    return dbPool.execute(SQLQuery, values);
}

const updateProdi = (body, id) => {
    const { nama, id_jurusan } = body;
    const SQLQuery = `
        UPDATE prodi 
        SET nama = ?, id_jurusan = ?
        WHERE id = ?
    `;
    const values = [ nama, id_jurusan, id ];
    return dbPool.execute(SQLQuery, values);
}

const getProdiByName = async(nama) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM prodi WHERE nama = ?`, [nama])
        return hasil
    } catch (error) {
        console.error('Error in getJurusanByName: ', error)
        throw error
    }
}

const deleteProdi = async(id) => {
    try {
        await dbPool.query('DELETE FROM prodi WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteProdi:', error);
        throw error;
    }
}


module.exports = {
    getAllProdi,
    getProdiById,
    addProdi,
    getProdiByName,
    updateProdi,
    deleteProdi
}