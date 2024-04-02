export const getInscripcionesByIdCurso = async (idCurso) => {


    try {
        console.log("getInscripcionesByIdCurso id del curso: ", idCurso)
        const response = await fetch(`https://formulario-backend-c2v4.onrender.com/api/inscripciones?idCurso=${idCurso}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        });

        if(response.status === 200){
            const data = await response.json();
            console.log("getInscripcionesByIdCurso DATA: ", data)
            return data;
        }else{
            throw new Error('Error al obtener las inscripciones By Referentes - Not Found');
        }
        
    } catch (error) {
        throw new Error(`Error al obtener las inscripciones By Referentes: ${error}`);
    }
}