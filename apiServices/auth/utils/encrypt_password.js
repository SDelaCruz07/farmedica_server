const bcryptj = require('bcryptjs');

module.exports ={
    async encrypt_password (password){
        const salt = await bcryptj.genSaltSync(10);
        const passwordEncript = await bcryptj.hashSync(password,salt);
        return passwordEncript;
    },

    async decrypt_password(password, passwordEncrypt){
        return await bcryptj.compareSync(password,passwordEncrypt);
    }
};