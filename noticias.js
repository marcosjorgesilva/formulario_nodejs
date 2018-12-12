var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;
    
    if (categoria == '/tecnologia') {
        res.end("<html><body>Noticias de tecnologia!</body></html>");
    } else if (categoria == "/famosos") {
        res.end("<html><body>Notícias dos famosos!</body></html>");
    } else if (categoria == '/atuais') {
        res.end("<html><body>Notícias Ultima hora!</body></html>");
    } else {
        res.end("<html><body>Portal inicial!</body></html>");
    }

})
server.listen(3000);