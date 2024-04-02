export const crearNuevoMinisterio = async (nuevoMinisterio) => {
    try {
        const response = await fetch('https://formulario-backend-c2v4.onrender.com/api/ministerios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify(nuevoMinisterio)
        });
        
        if (response.status === 201) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('El nombre de ministerio ya existe');
        }
    } catch (error) {
        throw new Error(error);
    }
}