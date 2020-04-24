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
                overviewOutput = overviewOutput.replace('{%HOMES%}', homesOutput);
                res.end(overviewOutput);
            });
        });
    } 
    
    else if (pathName == '/home' && id < homes.length) {
        res.writeHead(200, {'Content-type': 'text/html'});
        
        fs.readFile(`${__dirname}/single-home.html`, 'utf-8', (err, data) => {
            const home = homes[id];
            const output = replaceTemplate(data, home);
            res.end(output);
        });
    }

    else if (pathName == '/o-nama' || pathName == '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/o-nama.html`, 'utf-8', (err, data) => {
            res.end(data);    
        });
    }

    else if (pathName == '/kontakt' || pathName == '/') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/contact.html`, 'utf-8', (err, data) => {
            res.end(data);    
        });
    }
    
    //fotke
    else if ((/\.(jpg|jpeg|png|gif)$/).test(pathName)){
        fs.readFile(`${__dirname}/img${pathName}`, (ee, data) => {
            res.writeHead(200, {'Content-type': 'image/jpg'});
            res.end(data);
        });
    }

    //svg
    else if ((/\.(svg)/).test(pathName)){
        fs.readFile(`${__dirname}/img${pathName}`, (ee, data) => {
            res.writeHead(200, {'Content-type': 'image/svg+xml'});
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

    
    else if ((/\.(js)$/).test(pathName)){
        fs.readFile(`${__dirname}/js/index.js`, (ee, data) => {
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

function replaceTemplate (originalHTML, home) {
    let output = originalHTML.replace(/{%NAME%}/g, home.name);
    output = output.replace(/{%IMAGE%}/g, home.image);
    output = output.replace(/{%LOCATION%}/g, home.location);
    output = output.replace(/{%ROOMS%}/g, home.rooms);
    output = output.replace(/{%SIZE%}/g, home.size);
    output = output.replace(/{%PRICE%}/g, home.price);
    output = output.replace(/{%DESCRIPTION%}/g, home.description);
    output = output.replace(/{%ID%}/g, home.id);

    return output;
}
