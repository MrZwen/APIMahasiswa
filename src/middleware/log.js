const logRequest = (req, res, next) => {
    const start = Date.now();
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Request to Path: ${req.path}`)
    console.log(`[${timestamp}] Request Type: ${req.method}`)
    next()

    res.on('finish', () => {
        const end = Date.now();
        const responseTime = end - start;
        console.log(`[${timestamp}] Response Time: ${responseTime}ms`);
    });
}

module.exports = logRequest