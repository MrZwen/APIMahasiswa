const dbPool = require('../config/database')

const getAllJurusan = () => {
    const SQLQuery = 'SELECT * FROM jurusan'
    return dbPool.execute(SQLQuery)
}

const getJurusanById = (id) => {
    const SQLQuery = `SELECT * FROM jurusan WHERE id = ${id}`
    return dbPool.execute(SQLQuery)
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

const deleteJurusan = (id) => {
    const SQLQuery = `DELETE FROM jurusan WHERE id = ${id} `
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllJurusan,
    getJurusanById,
    addJurusan,
    updateJurusan,
    deleteJurusan
}