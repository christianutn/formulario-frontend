export const getAutorizadorByApellido = async (apellido) => {
    try {
        const response = await fetch(`https://formulario-backend-c2v4.onrender.com/api/autorizadores?apellido=${apellido}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        });

        const data = await response.json();
        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error(error);
    }
}