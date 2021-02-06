const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource[0]["_exists"] == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource[0]["_exists_horario"] == 0 ? "Id horario no existe" : resource[0]["_exists_usu"] == 0 ? "Id usuario no existe" : resource[0]["_exists_cita"] > 1 ? "Horario reservado" : "Peticion exitosa"
});

const respuesta_update = (resource) => ({
    status: resource == -1 ? "Error" : resource[0]["_exists"] == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource[0]["_exists_id"] == 0 ? "Id cita no existe" : resource[0]["_estado_cita"] != 4 ? "La cita no se puede postergar" : "Peticion exitosa"
});

const respuesta_estado = (resource) => ({
    status: resource == -1 ? "Error" : resource[0]["_exists"] == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource[0]["_exists_id"] == 0 ? "Id cita no existe" : "Peticion exitosa"
});

const single = (resource) => ({
    codigo: resource.citx_id,
    fecha: resource.horx_fecha,
    cola: resource.horx_cola,
    turno: resource.horx_turno,
    examen: resource.exa_nombre,
    precio: resource.exa_precio,
    area_id: resource.are_id,
    area_nombre: resource.are_nombre,
    area_descripcion: resource.are_descripcion,
    estado: resource.citx_estado,
});

const multiple = (resources) => ({
    status: resources == -1 ? "Error" : "Exito",
    data: resources.map((resource) => single(resource)),
});

module.exports = {
    respuesta,
    respuesta_update,
    respuesta_estado,
    single,
    multiple,
}