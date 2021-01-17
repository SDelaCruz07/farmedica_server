module.exports = {
    server :{
        port : 3000,
        domain: 'localhost',
    },

    db_mysql : {
        port: 3306,
        host: 'localhost',
        user: 'root',
        pass: '',
        database: 'dev_db_farmedica',
    },

    jwt: {
        secret: 'BDPEK@',
        time: 3600
    },

    logger: 'dev',


}