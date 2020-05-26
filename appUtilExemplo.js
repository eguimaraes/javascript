var config = require('./config');
var url = require('url');
var fs = require('fs');



function getUrl(req) { return url.parse(req.url, true); }

function getPathName(q) { return "." + q.pathname; }

function getFileName(req) {return getPathName(getUrl(req))}


function servePages(req, res) {
    var file = getFileName(req)

   file = (file === "./") ? config.paths.index.dir : file;
    
    var mime = {}

    switch (file) {
        case (file.indexOf(".css") > 0):
        mime = config.paths.css.mime;
            break;

        case (file.indexOf(".js") > 0):
            mime = config.paths.js.mime;
            break;

        case (file.indexOf("views") > 0):
            mime = config.paths.views.mime;
            break;

        case (file.indexOf("images") > 0 || file.indexOf(".jpg")):
            mime = config.paths.img.mime;
            break;

        case (file.indexOf(".html") > 0):
            mime = config.paths.index.mime;
            break;

        default:
            mime= { 'Content-Type': 'text/html' }
        break





    }



    

    fs.readFile(file, function (err, data) {
        console.log(file)

        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        else {
            res.writeHead(200, config.paths.index.mime);
            res.write(data);
            return res.end();
        }
    });
}


function configDirs(app) {

    


    for (let [key, value] of Object.entries(config.paths)) {

        app.use(express.static(value.dir))
        /*
        app.get(value.dir, function (req, res) {
            servePages(req, res)
            console.log(value.dir)

        })


        console.log(`${key}: ${value.dir}`);

*/
    }


 


}

module.exports = {

    getUrl: function (url) { getUrl(url) },
    servePages: function (req, res) { servePages(req, res) },
    configDirs: function (app) { configDirs(app) }

}
