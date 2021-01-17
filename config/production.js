module.exports = {
    server :{
        port : process.env.PORT || 4000,
        domain: 'localhost',
    },

    db_mysql : {
        port: 3306,
        host: 'www.sisetru.com',
        user: '_grupoTais',
        pass: '0sfwqU=JGOw$',
        database: 'dev_db_farmedica',
    },

    jwt: {
        secret: 'BDPEK@',
        time: 3600
    },

    logger: ':method :url :status :res[content-length] - :response-time ms',


}