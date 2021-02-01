const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource == 1 ? "Peticion exitosa" : "Ya exite el registro"
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
    single,
    multiple,
}