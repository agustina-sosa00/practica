import axios from 'axios'

export const getProjects = async (token) => {
    try {
        const res = await axios.get('http://localhost:3000', {
            headers: {
                Authorization: `Baraer: ${token}` //me confundi en la palabra 'Bearer'
            }
        })
        return res.data
    } catch (error) {
         console.log(error)
    }
}

// ejemplo:

// import axios from 'axios';

// const fetchData = async () => {
//   const token = 'tu_token_aqui';
//   const url = 'https://api.ejemplo.com/data';

//   try {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     console.log('Datos recibidos:', response.data);
//   } catch (error) {
//     console.error('Error al realizar la solicitud:', error);
//   }
// };

// fetchData();
