var mysql = require('mysql');

var connMysql = function(){ 
    return  mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '9661',
            database : 'portal_noticias'
    });
}
module.exports = function(){
    console.log('Conexao com o MySql realizada!');
    return connMysql;
}

