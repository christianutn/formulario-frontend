export const crearNuevoTutor = async (cuil, nombre, apellido, correo, celular) => {
    try {
        const response = await fetch('https://formulario-backend-c2v4.onrender.com/api/tutores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                cuil: cuil,
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                cel: celular
            })
        });

        const data = await response.json();
        if (response.status === 201) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error(error);
    }
}