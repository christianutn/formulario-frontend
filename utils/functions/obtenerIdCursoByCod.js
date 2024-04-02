export const obtenerIdCursoByCod = async (codCurso) => {

    try {
        console.log("obtenerIdCursoByCod cod del curso: ", codCurso)
        const response = await fetch(`https://formulario-backend-c2v4.onrender.com/api/cursos?cod=${codCurso}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        });

        if(response.status === 200){
            const data = await response.json();
            return data[0]._id;
        } else {
            throw new Error('Error al obtener el id del curso - Not Found');
        }
    } catch (error) {
        throw new Error(error);
    }
}