const respuesta = (resource) => ({
    status: resource == -1 ? "Error" : resource[0]["_exists"] == 0 ? "Advertencia" : "Exito",
    message: resource == -1 ? "Oh no! ocurrio un error en la peticion" : resource[0]["_exists_id"] == 0 ? "ID cita no existe" : "Peticion exitosa"
});

const requisito = (resource) => ({
    id: resource.medi_id,
    nombre: resource.medi_nombre,
    descripcion: resource.medi_descripcion,
    imagen: resource.medi_imagen,
    dosis: resource.det_dosis,
    frecuencia: resource.det_frecuencia
});

const single = (resource) => ({
    id: resource.id,
    numero: resource.numero,
    doctor_nombre: resource.doctor_nombre,
    doctor_apellido: resource.doctor_apellido,
    medicamentos: resource.medicamento.map((resource) => requisito(resource)),
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