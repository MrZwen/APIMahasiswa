const dbPool = require('../config/database')

const getAllProdi = () => {
    const SQLQuery = 'SELECT * FROM prodi'
    return dbPool.execute(SQLQuery)
}

const getProdiById = (id) => {
    const SQLQuery = `SELECT * FROM prodi WHERE id = ${id}`
    return dbPool.execute(SQLQuery)
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

const deleteProdi = (id) => {
    const SQLQuery = `DELETE FROM prodi WHERE id = ${id} `
    return dbPool.execute(SQLQuery)
}


module.exports = {
    getAllProdi,
    getProdiById,
    addProdi,
    updateProdi,
    deleteProdi
}