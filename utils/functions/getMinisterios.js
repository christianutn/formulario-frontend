

export const getMinisterios = async () => {
    try {
        const response = await fetch('https://formulario-backend-c2v4.onrender.com/api/ministerios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('No se encontraron ministerios');
        }
    } catch (error) {
        throw new Error(error);
    }
}