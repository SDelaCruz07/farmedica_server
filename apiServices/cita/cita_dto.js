const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource == 1 ? "Peticion exitosa" : "Ya exite el registro"
});

const single = (resource) => ({
    codigo: resource.cit_id,
    fecha: resource.hor_fecha,
    hora_inicio: resource.hor_hora_ini,
    hora_fin: resource.hor_hora_fin,
    area_nombre: resource.are_nombre,
    area_imagen: resource.are_imagen,
    doctor_nombre: resource.doc_nombre,
    doctor_apellido: resource.doc_apellido,
    doctor_carnet: resource.doc_carnet_cmp,
    doctor_imagen: resource.doc_imagen,
    estado: resource.cit_estado,
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