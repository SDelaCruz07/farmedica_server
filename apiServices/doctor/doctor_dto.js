const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource == 1 ? "Peticion exitosa" : "Ya exite el registro"
});

const single = (resource) => ({
    id: resource.doc_id,
    nombre: resource.doc_nombre,
    apellido: resource.doc_apellido,
    carnet: resource.doc_carnet_cmp,
    imagen: resource.doc_imagen,
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