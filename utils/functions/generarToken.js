//Función que recibe como parámetro un objeto data = {cuil, password} y devuelve un token

export const generarToken = async (data) => {
    try {


        const response = await fetch('https://formulario-backend-c2v4.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

       
        
        const dataResponse = await response.json()
        
        return dataResponse.token
    
        
    } catch (error) {
        throw new Error(`Error al generar el token: ${error}`)
    }
}