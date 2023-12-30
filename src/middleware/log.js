const logRequest = (req, res, next) => {
    console.log('Request ke Path', req.path)
    console.log('Request Type:', req.method)
    next()
}

module.exports = logRequest