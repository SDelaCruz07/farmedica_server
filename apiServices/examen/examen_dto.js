const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource == 1 ? "Peticion exitosa" : "Ya exite el registro"
});

const requisito = (resource) => ({
    id: resource.req_id,
    descripcion: resource.req_descripcion
});

const single = (resource) => ({
    id: resource.id,
    nombre: resource.nombre,
    descripcion: resource.descripcion,
    imagen: resource.imagen,
    precio: resource.precio,
    requisito: resource.requisito.map((resource) => requisito(resource)),
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