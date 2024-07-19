// REALIZAR UNA SOLICITUD AXIOS GET + TOKEN
import axios from 'axios'

export const getUser = async () => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.get('https://url.com', {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}
