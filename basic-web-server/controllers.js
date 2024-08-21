const { DATA } = require("./DATA");

const notFoundHandler = (req, res) => {
    errorHandler(res, 404, 'Resource not found');
};

const homePageHandler = (req, res) => {
    res.write(`
        <h1 style="color:red;">Hello World!</h1>
        <p>Welcome to Node.js</p>
    `);
    res.end();
}

const getProductsHandler = (req, res) => {
    const response = {
        message: 'Users fetched successfully',
        info: DATA
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
};

const errorHandler = (res, statusCode, message) => {
    const response = { error: message };
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
};

module.exports = {
    notFoundHandler,
    getProductsHandler,
    homePageHandler
}