var http = require('http');
var url = require('url');
const { homePageHandler, notFoundHandler, getProductsHandler } = require('./controllers');

const PORT = 8080;


const server = http.createServer(function (req, res) {
    const parsedURL = url.parse(req.url, true); // // `true` makes query an object
    const path = parsedURL.pathname;
    const method = req.method.toUpperCase();

    const querryParams = parsedURL.query; // http://localhost:8080/home?name=Pratikshya&age=19
    console.log(querryParams); // { name: 'Pratikshya', age: '19' }


    console.log(path, method);


    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }


    if (path === "/") {
        homePageHandler(req, res);
    } else if (path === "/products") {
        getProductsHandler(req, res);
    } else {
        notFoundHandler(req, res);
    }

})



server.listen(PORT, function () {
    console.log(`Node server started at ${PORT}`);

});

