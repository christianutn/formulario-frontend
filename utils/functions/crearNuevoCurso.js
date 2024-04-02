export const crearNuevoCurso = async (nombreCurso, idMinisterio, idAutorizador, idArea) => {

    try {
        const response = await fetch('https://formulario-backend-c2v4.onrender.com/api/cursos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                nombre: nombreCurso,
                cod: nombreCurso,
                ministerio: idMinisterio,
                autorizador: idAutorizador,
                area: idArea
            })
        });
        const data = await response.json();
        if(response.status === 201){
            return data;
        }else{
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error(error);
    }
}