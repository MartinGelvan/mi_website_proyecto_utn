var pool = require('./bd');
var md5 = require('md5'); // el md5 encriptaba

async function getUserAndPassword(user, password){
    try{
        
        var query = "select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query,[user,md5(password)]);
        return rows[0];

    }catch (error){
        console.log(error)
    }
}

module.exports = { getUserAndPassword }

//try - catch: ayudar con el manejo de error