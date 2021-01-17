const helpers = require('./utils/encrypt_password');
const conn = require('../../services/mysql/index');

module.exports = {
    async login({ username, password }) {
        return new Promise(function (resolve, reject) {
            conn.query('call sp_login_auth(?)', [username], async function (err, rows) {
                try {
                    if (rows[0][0]["_exists"] != 0) {
                    
                        const passwordDecrypt = await helpers.decrypt_password(password, rows[0][0]["usu_password"]);
                        
                        if (passwordDecrypt)
                            resolve(rows[0][0]);
                        else
                            resolve (-2)
                    }
                    else 
                        return resolve(0)
                    
                } catch (error) {
                    resolve(-1);
                }

            });
        });
    },

}