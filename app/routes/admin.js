module.exports = function (application) {
    application.get('/addnoticia', function (req, res) {
        res.render("admin/form_add_noticia")
    });
    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body;

        var connection = application.config.mysqlConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
    });

};