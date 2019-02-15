module.exports = function(app){ 
    
    app.get('/noticia', function(req, res){

        var connection = app.config.mysqlConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error,result){
            res.render("noticias/noticia", {noticia : result}); 
        });
    });
    
};