var app = require('./config/sever')

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000,function(){
    console.log("Servidor ativo!");
});