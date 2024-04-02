export const getTiposDeCapacitacion = async () => {
    try {
        const response = await fetch('https://formulario-backend-c2v4.onrender.com/api/tiposDeCapacitacion', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        });

        if(response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error al obtener los tipos de capacitación - Not Found');
        }
    } catch (error) {
        throw new Error(error);
    }
}