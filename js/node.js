const fs = require ('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/js/data.json`, 'utf-8');
const homes = JSON.parse(json);

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;
    
    if (pathName == '/index' || pathName == '/') {

        res.writeHead(200, {'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/index.html`, 'utf-8', (err, data) => {
            let overviewOutput = data;
            fs.readFile(`${__dirname}/template-home.html`, 'utf-8', (err, data) => {
               const homesOutput = homes.map(el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', homesOutput);
                res.end(overviewOutput);
            });
        });
    } 
    
    else if (pathName == '/home' && id < homes.length) {
        res.writeHead(200, {'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/single.html`, 'utf-8', (err, data) => {
            const home = homes[id];
            const output = replaceTemplate(data, home);
            res.end(output);
        });
    }

    /* else if (pathName == '/test' || pathName == '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/overview.html`, 'utf-8', (err, data) => {
            res.end(data);    
        });
    } */ 
    
    //fotke
    else if ((/\.(jpg|jpeg|png|gif)$/).test(pathName)){
        fs.readFile(`${__dirname}/img${pathName}`, (ee, data) => {
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.end(data);
        });
    }

    //css
    else if ((/\.(css)$/).test(pathName)){
        fs.readFile(`${__dirname}/css/style.css`, (ee, data) => {
            res.writeHead(200, {'Content-type': 'text/css'});
            res.end(data);
        });
    }

    //js
    else if ((/\.(js)$/).test(pathName)){
        fs.readFile(`${__dirname}/index.js`, (ee, data) => {
            res.writeHead(200, {'Content-type': 'text/javascript'});
            res.end(data);
        });
    }

    else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('Ups! URL ne postoji.');
    }
});

server.listen(1337, '127.0.0.1', () => {
    
});

function replaceTemplate (originalHTML, laptop) {
    let output = originalHTML.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);

    return output;
}
