module.exports.error404 = function (req, res, next) {
    res.status(404);

    res.send({
        status: "Error 404",
        descripcion: 'No solo estas equivocado eres estupido'
    });

    next();
}

module.exports.generalErrorHandler = function (err, req, res, next) {
    res.status(500);
    res.send({
        status: "Error",
        descripcion: err.toString()
    });
}