const dbPool = require('../config/database')

const getAllJurusan = () => {
    const SQLQuery = 'SELECT * FROM jurusan'
    return dbPool.execute(SQLQuery)
}

const getJurusanById = async(id) => {
    try {
        const result = await dbPool.query('SELECT * FROM jurusan WHERE id = ?', [id]);
        return result[0];
    } catch (error) {
        console.error('Error in getJurusanById:', error);
        throw error;
    }
}

const addJurusan = (body) => {
    const { nama } = body;
    const SQLQuery = `
        INSERT INTO jurusan (nama) 
        VALUES (?)
    `;
    const values = [ nama ];
    return dbPool.execute(SQLQuery, values);
}

const updateJurusan = (body, id) => {
    const { nama } = body;
    const SQLQuery = `
        UPDATE jurusan 
        SET nama = ? WHERE id = ?
    `;
    const values =  [nama, id ];
    return dbPool.execute(SQLQuery, values);
}

const getJurusanByName = async(nama) => {
    try {
        const [ hasil ] = await dbPool.query(`SELECT * FROM jurusan WHERE nama = ?`, [nama])
        return hasil
    } catch (error) {
        console.error('Error in getJurusanByName: ', error)
        throw error
    }
}

const deleteJurusan = async(id) => {
    try {
        await dbPool.query('DELETE FROM jurusan WHERE id = ?', [id]);
    } catch (error) {
        console.error('Error in deleteJurusan:', error);
        throw error;
    }
    // const SQLQuery = `DELETE FROM jurusan WHERE id = ${id} `
    // return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllJurusan,
    getJurusanById,
    addJurusan,
    getJurusanByName,
    updateJurusan,
    deleteJurusan
}